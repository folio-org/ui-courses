# Notes on automated UI tests

<!-- md2toc -l 2 testing-notes.md -->
* [Overview](#overview)
    * [Introduction](#introduction)
    * [Existing approaches](#existing-approaches)
    * [Mocking via recording and playback](#mocking-via-recording-and-playback)
* [Software inventory](#software-inventory)
    * [Options](#options)
        * [Stripes server](#stripes-server)
        * [Test runner](#test-runner)
        * [Assertion library](#assertion-library)
        * [Browser automation](#browser-automation)
            * [Nightmare](#nightmare)
            * [Karma](#karma)
            * [Cypress](#cypress)
            * [WebDriver](#webdriver)
            * [Puppeteer](#puppeteer)
            * [Working with the Stripes CLI](#working-with-the-stripes-cli)
            * [Conclusion](#conclusion)
        * [Mocking proxy](#mocking-proxy)
    * [Conclusion](#conclusion)
* [Configuration, invocation, coding](#configuration-invocation-coding)
    * [Nightmare testing with the Stripes CLI](#nightmare-testing-with-the-stripes-cli)
    * [Invoking the Stripes CLI](#invoking-the-stripes-cli)
    * [Configuring the Stripes CLI](#configuring-the-stripes-cli)
    * [Writing tests for the Stripes CLI](#writing-tests-for-the-stripes-cli)
        * [The testing context](#the-testing-context)
    * [ESLint configuration for test scripts](#eslint-configuration-for-test-scripts)
* [Open issues](#open-issues)
    * [Testing against an already-running Stripes front end](#testing-against-an-already-running-stripes-front-end)
    * [Coverage testing](#coverage-testing)
* [Acknowledgements](#acknowledgements)



## Overview


### Introduction

UI apps that are part of the FOLIO core are required to provide automated UI tests, driving a web browser to use the app and verifying that the various interactions result in the expected outcomes.

There are (at least) two dashboards that summarise the state of such tests across the FOLIO apps:
[one based on SonarCloud](https://sonarcloud.io/organizations/folio-org/projects)
and
[one on the FOLIO wiki](https://wiki.folio.org/pages/viewpage.action?spaceKey=DQA&title=FOLIO+Quality+Dashboard).
In the present work, the goal is to get the Course Reserves app onto these dashboards; but rather than doing this blindly, we are taking to opportunity to re-evaulate the various ways of running UI tests.


### Existing approaches

Various approaches have been taken to automated UI testing of Stripes apps. There has been a heavy investment in tests based on [Frontside's BigTest framework](https://bigtestjs.io/). But enthusiasm for this approach has waned, especially since Frontside left the FOLIO project. BigTest is perceived as over-ambitious and opinionated (it includes among other things facilities for building mocks), poorly documented (the software is on version 2.x, but the website only offers documentation for the v1.x API) and possibly unmaintained ([all eleven GitHub projects](https://github.com/bigtestjs) have been archived).

The appeal of BigTest has been that because of its mocking facilities, it's possible to use it to build unit tests: that is, tests that run only the UI, and do not depend on a reliable and predictable FOLIO back-end server. The otherwise more straightforward approach in FOLIO UI testing has been to use the [Nightmare](https://github.com/segmentio/nightmare) browser automation kit: it is simpler to use, widely deployed and well documented, but has only been used in FOLIO for integration tests of a UI app together with its back end.

In testing Course Reserves, we would like two kinds of test: unit tests, which exercise only the code in CR app itself; and integration tests, which exercise the whole stack including the Course Reserves back-end module.


### Mocking via recording and playback

For Course Reserves, we plan to build on the experience of testing [mod-graphql](https://github.com/folio-org/mod-graphql) using [Flickr’s YakBak library](https://github.com/flickr/yakbak). This useful tool provides an HTTP proxy that can capture the back-end responses to given front-end requests, then later play back the "tapes" it has recorded in response to subseqent requests.

In this way, the same tests can be used for both unit tests and integration tests:

1. Run the tests against a real back-end, recording tapes.

The some time later:

2. Run the tests against tapes, providing a test that the front-end has not broken.
3. Re-run the tests against the real back-end, providing a test that the still-correct front-end has not had its functioning impaired by changes on the back-end.

And as necessary:

4. Re-record the tapes when a legitimate back-end change has occurred or the tests have been expanded to make additional back-end calls.

This approach should avoid the error-prone time-sink of building mocks for the back end, as well as relying on a relatively small number of well established and supported packages.



## Software inventory

### Options

We can now enumerate the components that are involved in the testing system:

* A Stripes server, to provide the running UI app to test against
* A test runner, to run the tests and interpret exceptions
* An assertion library, to provide the assertions that tests make
* A browser automation library to drive a web browser interacting with the app
* A mocking proxy to record and play back the tapes of back-end interactions

Unfortunately, there are multiple options for several of these roles, with competing advantages and disadvantages; and in several cases, software packages aim to fulfil more than one of these roles. So choosing optimally is difficult. In the following subsections, we consider the candidates for each role.

#### Stripes server

There is only one realistic option for providing the Stripes front-end, and that is of course the usual [The Stripes CLI](https://github.com/folio-org/stripes-cli). There are still choices to be made here, though. The Stripes CLI includes code for integrating with the Karma and Nightmare browser automation libraries, which increases the convenience of these two ahead of other candidates. Workarounds are possible, and will be discussed [below](#browser-automation).

#### Test runner

Until fairly recently, [Mocha](https://mochajs.org/) has been the undisputed king of test-runners in the JavaScript world. It is used ubiquitously in the tests of other FOLIO UI modules, has no obvious flaws, and is used by the Stripes CLI's `stripes test` facility.

Recently, though, [Jest](https://jestjs.io/) has become a strong contender. It provides some useful facilities, including [snapshots](https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest) which are a useful short-cut for checking that a rendered UI element remains unchanged since the snapshot was taken.

Using Jest would yield real benefits, but at the cost of forgoing the Stripes CLI's support. Also, the Stripes community has accumlated a body of experence with Mocha which may be a useful resource: there is no similar experience with Jest.

It seems possible that the Stripes community as a whole may migrate towards Jest in time, but this is probably not the moment to make the leap as Course Reserves is a relatively insulated project. We certainly don't have the resources to add Jest integration to the Stripes CLI at this point.

#### Assertion library

[Chai](https://www.chaijs.com/) is the clear leader in this field; but Jest provides its own assertion facilities, so if we were to use that, it would make sense to avoid fighting against it by using Chai for assertions.

#### Browser automation

HERE BE DRAGONS! There are at least five candidates for this role, which we will consider in turn.

##### Nightmare

[Nightmare](https://github.com/segmentio/nightmare) is the default choice for browser automation, simply due to its wide use in FOLIO UI testing and the body of experience that has built up around it -- see for example [the *Writing Robust Tests* section of *Nightmare for FOLIO UI*](https://github.com/folio-org/stripes-testing/blob/master/doc/nightmare.md#writing-robust-tests).

However, Nightmare has drawbacks:
* It is old. The codebase seems to have been more or less abandoned: there have been no commits since April 2019, though no announcement has been made.
* It is cumbersome in some respects, as indicated by the hints in the *Nightmare for FOLIO UI* document, with an awkward distinction between Node scope and browser scope and many pitfalls to avoid.
* It uses [Electron](https://www.electronjs.org/) under the hood, which is sometimes considered rather niche -- though it is based on Chromium, which is the engine under Chrome, the only browser officially supported by FOLIO, so this may not be a real problem.

##### Karma

[Karma](https://karma-runner.github.io/) is in some respects more ambitious: it can control [many different browsers](https://karma-runner.github.io/latest/config/browsers.html) including Chrome, Firefox, Safari and Internet Explorer; but as [shown](https://medium.com/@jazcodes/getting-started-with-karma-and-mocha-for-automated-browser-tests-5ebb6cd02edf) in [tutorials](https://github.com/jazanne/karma-mocha-example/blob/master/test/test.js), it does not provide high-level facilities for driving those browsers as Nightmare does. Instead, the programmer is left to mess with the DOM in the usual way: I suspect part of the motivation for BigTest was to provide a higher-level API to the DOM for use in scripts intended to run under Karma.

It is under active development, and is supported by the Stripes CLI -- though that support was added mostly to enable the use of BigTest and _may_ not be fully general.

Using Karma alone will not give us everything we need: we will also need a library that the test scripts can use to actually drive the browser. Such libraries must exist, but that is an area for more research. One option would be to use BigTest, but only those parts of it that provide higher-level DOM APIs.

##### Cypress

[cypress.io](https://www.cypress.io/) is a more modern browser automation system that probably has better long-term prospects than Nightmare. It's offputting in aiming to be more all-in-one, providing its own test-running framework and assertion library. However, since these are Mocha and Chai, that doesn't make much difference in practice.

Unlike Karma, Cypress provides its own high-level tools for interaction with the browser, e.g. `cy.visit('https://example.cypress.io')`. It also seems to have more [approachable](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html) [documentation](https://docs.cypress.io/guides/references/best-practices.html) than Karma. And it offers some potentially game-changing facilities such as [time-travel](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Time-travel). It supports Chrome and Firefox, as well as the built-in Electron.

Cypress does not have support in the Stripes CLI: see [below](#working-with-the-stripes-cli)

##### WebDriver

[webdriver.io](https://webdriver.io/) is another more recent offering in this space. [The code example](https://github.com/webdriverio/webdriverio/blob/master/examples/devtools/intercept.js) does not include test-running, but shows only how to drive a browser, which makes it a more obvious drop-in replacement for Nightmare; but the syntax looks a little clumsier than that of Cypress, and [it is only downloaded about a third as much](https://npmcompare.com/compare/cypress,webdriver).

WebDriver does not have support in the Stripes CLI: see [below](#working-with-the-stripes-cli)

##### Puppeteer

[Puppeteer](https://github.com/puppeteer/puppeteer) is Google's own automation framework for its Chrome browser, though it also has experimental support for Firefox. We have had good experience in using it to develop [Malaga](https://github.com/indexdata/malaga), but it's not yet clear how suitable it is for automating tests.

Puppeteer does not have support in the Stripes CLI: see [below](#working-with-the-stripes-cli)

##### Working with the Stripes CLI

Unlike Nightmare and Karma, the other three candidate web automation tools (Cypress, WebDriver and Pupperteer) are not directly supported by the Stripes CLI. This means that using one of these would entail some additional work:

* *Starting the service*. When the Stripes CLI runs tests using `stripes test nightmare` or `stripes test karma`, it builds and serves its own up-to-date copy of the UI that the tests are to run against. We would need to do this manually.
* *Access to configuration*. The testing-context object that the Stripes CLI passes into each test provides configuration information such as XXX
* *Helpers*. XXX

##### Conclusion

The wisest course may be to stick with the automation library we have been using, Nightmare: we know it works for our use-case, and there is shared experience and expertise within the FOLIO community.

#### Mocking proxy

[YakBak](https://github.com/flickr/yakbak) has worked well for us in mod-graphql. But Jason has found [PollyJS](https://netflix.github.io/pollyjs/), which is a more fully functioned, widely used, well supported and frequently released alternative.

As things stand, there is no obvious reason to move from something that we know works for us to something that that we think might be better. Our needs in this area are not sophisticated.


### Conclusion

**XXX This will likely need to be changed**

We favour the following combination of software packages:

* [The Stripes CLI](https://github.com/folio-org/stripes-cli) to provide the running UI app to test against (see [below](#nightmare-testing-with-the-stripes-cli))
* [Mocha](https://mochajs.org/) to run the tests
* [Chai](https://www.chaijs.com/) to provide the assertions that tests make
* [Nightmare](http://www.nightmarejs.org/) (or an alternative) to drive the web browser
* [YakBak](https://github.com/flickr/yakbak) to record and replay tapes of back-end responses



## Configuration, invocation, coding


### Nightmare testing with the Stripes CLI

Nightmare is its own piece of software which can be included in Mocha tests just like any other library. That's fine when you just want to write tests against a known-good web-site. But for Stripes module testing, you want the Nightmare tests to run against a dynamically generated site using the current version of your UI code.

There is a lot of plumbing to handle here, but the Stripes CLI provides `stripes test nightmare`. This will build the module and serve it ready for the Nightmare-driven browser to load it, run it, and execute tests against it; and of course it will actually run the tests.

(The Stripes CLI also has facilities to run Karma-based tests, but we are not using those for Course Reserves.)


### Invoking the Stripes CLI

For Nightmare tests, the Stripes CLI is invoked as:

	yarn stripes test nightmare --port 3001 --run 01-pwd,02-ui

(Typically, the `test` target specified in the package file will run this.)

`--port 3001` is just to avoid the irritating problem of the tests refusing to run if another Stripes service is already running on the same machine on the default port 3000.

The argument to `--run` is a comma-separated list of the names of test scripts to be run. (These may also be separated by slashes, but this is poor style as slashes are typically used to separate path components.) Note that the named scripts are expected to be in the directory `test/ui-testing`, and to have a `'.js` extension -- so in this example, `test/ui-testing/01-pwd.js` and `test/ui-testing/02-ui.js`.


### Configuring the Stripes CLI

Various aspects of the Stripes CLI's functioning can be configured, but the most important for our purposes is nominating the FOLIO back-end to be contacted. This can be specified by a `.stripesclirc.js` file in the module directory or in any parent directory:

	module.exports = {
	  okapi: 'https://folio-snapshot-okapi.aws.indexdata.com',
	  tenant: 'diku',
	};

Because this is a JavaScript program rather than pure JSON, it can make run-time choices about the configuration it returns -- for example, by consulting `process.env.NODE_ENV`.


### Writing tests for the Stripes CLI

Because the Stripes CLI's test-running code ends up by invoking Mocha, its standard keywords are made globally available: `describe`, `it`, `before`, `after`, etc.

However, you will need to manually include whatever assertion library you want to use -- typically chai, but it need not be. You are at liberty to use simple  `assert`, or indeed manually `throw Error()` if you prefer.

The API for tests is different when run under the Stripes CLI than when run under regular Mocha. Instead of simply running tests (using `describe`, `it` and assertions), a Stripes CLI test script must instead export a function called `test`, which is passed a UI testing context. So instead of just:

	describe('arithmetic', function () {
	  it('2 + 2 = 4', function () {
	    assert.equal(2 + 2, 4);
	  });
	});

It's:

	module.exports.test = (uiTestCtx) => {
	  describe('arithmetic', function () {
	    it('2 + 2 = 4', function () {
	      assert.equal(2 + 2, 4);
	    });
	  });
	};

#### The testing context

The testing context object passed into the functions has three members:

* `meta` is an object containing informaton about the testing process -- presently just `testVersion`, a string identifying the software being tested and its version number.
* `config` is an object containing configuration information including `test_timeout`, a `nightmare` configuration object, the `url` of the running UI, etc. See [the code that generates this](https://github.com/folio-org/stripes-testing/blob/master/folio-ui.config.js) for some more details.
* `helpers` is a set of functions that can be invoked within the tests: `login`, `logout`, `openApp`, etc. See [the code that generates this](https://github.com/folio-org/stripes-testing/blob/master/helpers.js) for some more details.

For more detail, see [the slightly out-of-date documentation](https://github.com/folio-org/stripes-testing/blob/master/doc/nightmare.md#the-test-context-object).


### ESLint configuration for test scripts

You may find that the standard ESLint rules are not always applicable
to tests. You can tweak the rules only for test scripts by making a separate `test/ui-testing/.eslintrc`:

	{
	  "globals": {
	    "describe": "readonly",
	    "it": "readonly",
	    "before": "readonly",
	    "after": "readonly",
	    "Nightmare": "readonly"
	  },
	  "rules": {
	    "func-names": "off"
	  }
	}

This example notifies ESLint of the variables injected into global scope by the Stripes CLI testing framework, and turns off the (usually helpful) rule that all functions must be given names.



## Open issues


### Testing against an already-running Stripes front end

The Stripes CLI can either build and serve the front end (the usual mode during development) or build it into static files, which can then be served by nginx or any other web server (which is how we do this in production). The `stripes test` commands seem to do the former. Is there a way to build a static bundle and serve it from elsewhere, then use `stripes test` to execute tests against that service?

Zak says:

> If you’re using nightmare, you can point it to a running instance with `--url http://some.remote.url` or `--local` (which is the same as `--url http://localhost:3000`). If you don’t include either `--url` or `--local`, I believe it’ll try to spin up a bundle and serve it for you.


### Coverage testing

XXX How can we generate coverage analysis for Stripes code running in the browser? Check how other projects do this.



## Acknowledgements

This document is in part the result of extensive discussions with
[@zburke](https://github.com/zburke),
[@doytch](https://github.com/doytch)
and
[@skomorokh](https://github.com/skomorokh).
Although the conclusions I have reached are likely unpalatable to all of them (no two people agree on this stuff), I thank them profundly.




