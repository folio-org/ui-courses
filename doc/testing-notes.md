# Notes on automated UI tests

<!-- md2toc -l 2 testing-notes.md -->
* [Overview](#overview)
    * [Introduction](#introduction)
    * [Existing approaches](#existing-approaches)
    * [Mocking via recording and playback](#mocking-via-recording-and-playback)
* [Software inventory](#software-inventory)
* [Configuration, invocation, coding](#configuration-invocation-coding)
    * [Nightmare testing with the Stripes CLI](#nightmare-testing-with-the-stripes-cli)
    * [Invoking the Stripes CLI](#invoking-the-stripes-cli)
    * [Configuring the Stripes CLI](#configuring-the-stripes-cli)
    * [Writing tests for the Stripes CLI](#writing-tests-for-the-stripes-cli)
        * [The testing context](#the-testing-context)
    * [ESLint configuration for test scripts](#eslint-configuration-for-test-scripts)



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

The appeal of BigTest has been that because of its mocking facilities, it's possible to use it to build unit tests: that is, tests that run only the UI, and do not depend on a reliable and predictable FOLIO back-end server. The otherwise more appealing approach in FOLIO UI testing has been to use [Nightmare](https://github.com/segmentio/nightmare): it is simpler to use, widely deployed and well supported and documented, but has only been used in FOLIO for integration tests of a UI app together with its back end.


### Mocking via recording and playback

For Course Reserves, we plan to build on the experience of testing [mod-graphql](https://github.com/folio-org/mod-graphql) using [Flickr’s YakBak library](https://github.com/flickr/yakbak). This useful tool provides an HTTP proxy that can capture the back-end responses to given front-end requests, then later play back the "tapes" it has recorded in response to subseqent requests.

In this way, the same tests can be used for both unit tests and integration tests:

1. Run the tests against a real back-end, recording tapes.
2. Run the tests against tapes, providing a test that the front-end has not broken.
3. Re-run the tests against the real back-end, providing a test that the still-correct front-end has not had its functioning impaired by changes on the back-end.
4. Re-record the tapes as and when necessary -- i.e. when a legitimate back-end change has occurred.

This approach should avoid the error-prone time-sink of building mocks for the back end, as well as relying on a relatively small number of well established and supported packages.



## Software inventory

We can now enumerate the software packages that are involved in the testing system:

* [The Stripes CLI](https://github.com/folio-org/stripes-cli) to provide the running UI app to test against (see [below](#nightmare-testing-with-the-stripes-cli))
* [Mocha](https://mochajs.org/) to run the tests
* [Chai](https://www.chaijs.com/) to provide the assertions that tests make
* [Nightmare](http://www.nightmarejs.org/) (or an alternative) to drive the web browser
* [YakBak](https://github.com/flickr/yakbak) to record and replay tapes of back-end responses

**Note.** Alternatives to Nightmare

Nightmare is considered a little long in the tooth in some circles. But the good thing with the approach described above is that we can substitute any browser automation library we wish without needing to re-architect the tests.

Possible alternatives include [cypress.io](https://www.cypress.io/) and [webdriver.io](https://webdriver.io/).

Of these, Cypress is offputting because it aims to be more all-in-one, proving a test-running framework in place of Mocha. Integrating it with the Stripes CLI (see below) would probably involve significant work.

Webdriver looks more appealing: [the code example](https://github.com/webdriverio/webdriverio/blob/master/examples/devtools/intercept.js) does not include test-running, but shows only how to drive a browser. But it does not offer obvious advantages over Nightmare, either.

In conclusion, the wisest course seems to be to stick with the automation library we have been using, Nightmare: we know it works for our use-case, and there is shared experience and expertise within the FOLIO community.



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





# UPDATE

After discussing with Mark Deutsch:

Perhaps the answer is:
* `stripes serve`
* Jest running tests (in place of mocha and chai)
* Jest snapshots for element-content tests
* Yakbak for perfect mocks

