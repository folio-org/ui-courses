# Testing Stripes modules with Cypress and Yakbak

Mike Taylor, Index Data. &lt;mike@indexdata.com&gt;

6 July 2020.

<!-- md2toc -l 2 testing-with-cypress.md -->
* [Introduction](#introduction)
* [Components of a testing regimen](#components-of-a-testing-regimen)
    * [The components](#the-components)
        * [Cypress to run tests against the UI](#cypress-to-run-tests-against-the-ui)
        * [Stripes CLI to provide the UI](#stripes-cli-to-provide-the-ui)
        * [FOLIO backend](#folio-backend)
        * [Yakbak proxy](#yakbak-proxy)
    * [Scenarios](#scenarios)
        * [Overview](#overview)
        * [Scenario 1. Testing against snapshot UI](#scenario-1-testing-against-snapshot-ui)
        * [Scenario 2. Local UI against snapshot backend](#scenario-2-local-ui-against-snapshot-backend)
        * [Scenario 3. Regenerating mocked backend](#scenario-3-regenerating-mocked-backend)
        * [Scenario 4. Local UI against mocked backend](#scenario-4-local-ui-against-mocked-backend)
* [Setting up Cypress](#setting-up-cypress)
    * [Initialization and pruning](#initialization-and-pruning)
    * [ESLint configuration](#eslint-configuration)
    * [Jenkins integration](#jenkins-integration)
    * [Measuring code coverage](#measuring-code-coverage)
* [A standard Cypress-for-Stripes library](#a-standard-cypress-for-stripes-library)
* [Further reading](#further-reading)




## Introduction

In summer of 2020, as it became apparent that automated UI tests would be required for [FOLIO](https://www.folio.org/)'s [Course Reserves module](https://github.com/folio-org/ui-courses), there was an opportunity to reassess how we go about testing in the world of Stripes (FOLIO's UI toolkit).

Previously, testing had taken two separate tracks: the use of [NightmareJS](http://www.nightmarejs.org/) to automate end-to-end testing for integration tests; and of [BigTest](https://bigtestjs.io/), including its mocking facilities, to create unit tests that do not require a FOLIO backend to be available. So UI modules have Nightmare-based integration tests, some have BigTest-based unit-tests and some have both. Both NightmareJS and BigTest are rather elderly, and not well supported. Almost all UI modules' tests are flaky, due largely to deficiencies in the Nightmare and BigTest libraries that they are based on. As a result, UI test maintenance is a major resource sink in the FOLIO project.

We investigated alternative approaches, documenting the issues and outcomes in [_Notes on automated UI tests_](testing-notes.md). The present document can be considered a sequel to that one, and lays out in more detail how we implement the chosen alternative approach.

The new approach used in testing Course Reserves is:
* [Cypress](https://www.cypress.io/) for browser automation to drive tests, including the [Mocha testing framework](https://mochajs.org/) and [Chai assertion library](https://www.chaijs.com/) that it provides.
* [Yakbak](https://github.com/flickr/yakbak) to record "tapes" of interactions with the backend and play them back.

Using YakBak in this way makes it possible write a single set of tests in Cypress. The tests can exercise the whole FOLIO stack in integration testing, writing Yakbak tapes as a side-effect; and they can exercise the frontend alone in unit testing, reading Yakbak tapes to mock the backend.

(There are other and lower levels of unit-testing that might also be desirable, such and verifying that individual React components render their data in the expected way. The present document does not address this level of testing.)




## Components of a testing regimen

First we will consider the four primary components of the testing system; then we will analyse the different ways of plugging them together.



### The components


#### Cypress to run tests against the UI

[Cypress](https://www.cypress.io/) is a much more modern and all-embracing browser automation framework than Nightmare. It comes with test-running (via Mocha) and assertion evaluation (via Chai) baked in. Crucially, it runs the JavaScript of the tests from _within_ the browser. This has several valuable consequences:
* The testing dashboard is shown in a sidebar on the browser.
![Cypress in action](cypress-in-action.png)
* Tests can be paused while running and single-stepped.
* After they have run, you can "time travel" to see the browser's state at different points in the process by navigating through the list of tests in the sidebar.
* Tests have the option of usin state from within the browser: for example, logging out of FOLIO by directly invoking `localforage.removeItem('okapiSess')`.

Running Cypress tests also leaves behind useful artifacts: a video of the browser throughout the run, and screenshots of the various fail states.


#### Stripes CLI to provide the UI

Cypress can run directly against a hosted FOLIO UI such as [FOLIO snapshot](https://folio-snapshot.aws.indexdata.com/) (see Scenario 1 below) but most of the time its value is in running against a local frontend built from the current source-code of the module being tested.

Stripes bundles are built by [the Stripes CLI](https://github.com/folio-org/stripes-cli/). It can build an app or set of apps into a bundle of static files to be served by any HTTP server, or it can build the bundle in memory and serve it itself. The latter mode is most useful in development as it can respond quickly to changes in the source code.

The Stripes CLI has built-in support for tests based on NightmareJS or BigTest, but not for other frameworks including Cypress. It turns out that this does not matter too much: it's possible simply to launch the CLI in build-and-serve mode, and run tests against it. The facilities that it provides to Nightmare tests -- access to a config structure and some helper functions -- would be nice to have in Cypress, but are not indispensible.


#### FOLIO backend

A FOLIO backend is a big, heavy unit, containing an [Okapi](https://github.com/folio-org/okapi) fronting a set of at least a dozen modules, often many more. Running a FOLIO backend is a laborious inconvenience for a frontend developer. This can be ameliorated by using a "FOLIO-in-a-box" virtual machine [provisioned by Vagrant](https://github.com/folio-org/folio-ansible), but the resulting VM is memory-hungry and best avoided where possible.

As a result, UI testing is often most conveniently performed against one of the public FOLIO nodes. There are several of these including
[Fameflower-Dev](https://folio-fameflower.dev.folio.org/),
[Snapshot](https://folio-snapshot.aws.indexdata.com/)
and
[Snapshot-Stable](https://folio-snapshot-stable.aws.indexdata.com/). Since Snapshot is the most frequently updated of these (and therefore most likely to have fully up-to-date back-end modules), we will refer to it throughout this document, but any FOLIO backend can be used.


#### Yakbak proxy

While the Yakbak library provides all the facilities we need to record and play back tapes in place of a real FOLIO backend, it can be awkward to integrate. Typically, the tests themselves are wired to know about Yakbak, to start and configure a Yakbak server, and to direct their requests to it rather than to the real backend. This introduces additional complexity to the tests and spreads responsiblity in an error-prone way.

Instead, we created [`yakbak-proxy`](https://github.com/folio-org/yakbak-proxy), a simple standalone program that proxies HTTP requests to a nominated real server, while recording and/or playing back tapes. The [the usage documentation](for details), but most importantly the proxy may be run in `--norecord` mode, in which case it will _never_ call out to the real backend but only serve responses from tapes that it has previously made, returning 404 for any requests whose responses have not already been recorded.



### Scenarios


#### Overview

xxx snapshot ui

xxx local ui

xxx snapshot backend

xxx mocked backend

![Diagrams of four testing scenarios](testing-scenarios.svg)


#### Scenario 1. Testing against snapshot UI


#### Scenario 2. Local UI against snapshot backend


#### Scenario 3. Regenerating mocked backend


#### Scenario 4. Local UI against mocked backend




## Setting up Cypress



### Initialization and pruning



### ESLint configuration



### Jenkins integration

XXX See https://jenkins-aws.indexdata.com/job/folio-org/job/ui-courses/job/folio-2674-cypress-artifacts/7/

XXX And https://jenkins-aws.indexdata.com/job/folio-org/job/ui-courses/job/folio-2674-cypress-artifacts/



### Measuring code coverage




## A standard Cypress-for-Stripes library

XXX




## Further reading

XXX best practices

XXX videos

XXX example tests




