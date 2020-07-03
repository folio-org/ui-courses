# ui-courses

Copyright (C) 2019 The Open Library Foundation

This software is distributed under the terms of the Apache License,
Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Introduction

The Course Reserves UI Module, or `ui-courses`, is a Stripes UI module used for maintaining information about courses, and associated course reserves with them. (A "Stripes UI module" is an NPM module that adheres to certain conventions that allow it to function within the [Stripes UI framework](https://github.com/folio-org/stripes/blob/master/README.md) that is part of FOLIO.)

## Testing invocation

This module's package file provides multiple `scripts` entries related to testing:

* `test-folio-snapshot` -- Run the tests against the UI at folio-snapshot.aws.indexdata.com
* `start` -- Start the Stripes server for this module on port 3001, running against the folio-snapshot service
* `test-running-service` -- Run the tests against a UI already running on port 3001, which you are expected to have started yourself (perhaps with `yarn start`)
* `test-new-ui` -- Run the tests against a UI built freshly for the occasion
* `test` -- Run the tests against a freshly-built UI that uses a set of yakbak tapes as its FOLIO service
* `regenerate` -- Run the tests against the folio-snapshot service, regenerating the yakbak tapes as a side-effect

This means that, provided that a suitable set of tapes has been checked in, `yarn test` is a unit-test which depends only on the UI itself, not on the FOLIO back-end.

XXX Further documentation will follow on how all this is put together.

## Additional information

* [The corresponding server-side module](https://github.com/folio-org/mod-courses).
* Other [UI modules](https://dev.folio.org/source-code/#client-side).
* See project [UICR](https://issues.folio.org/browse/UICR) at the [FOLIO issue tracker](https://dev.folio.org/guidelines/issue-tracker).
* Other FOLIO Developer documentation is at [dev.folio.org](https://dev.folio.org/)
