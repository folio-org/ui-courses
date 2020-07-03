#!/usr/bin/env node

/* eslint-disable no-console */

// Derived from five-line sample proxy-server in YakBak docs at
// https://github.com/flickr/yakbak#with-nodes-http-module

const path = require('path');
const commandLineArgs = require('command-line-args');
const http = require('http');
const yakbak = require('yakbak');
// const hash = require('./hash-simplified');

const optionDefinitions = [
  { name: 'verbose', alias: 'v', type: Boolean, defaultValue: false },
  { name: 'norecord', alias: 'n', type: Boolean, defaultValue: false },
  { name: 'port', alias: 'p', type: Number, defaultValue: 3002 },
  { name: 'tapes', alias: 't', type: String, defaultValue: 'tapes' },
  { name: 'server', alias: 's', type: String, defaultValue: 'https://folio-snapshot-okapi.aws.indexdata.com', defaultOption: true },
];

let options;
try {
  options = commandLineArgs(optionDefinitions);
} catch (e) {
  console.error(
    `Could not parse command line: ${e}
Usage: ${process.argv[1]} [options] <serverUrl>
        -v|--verbose            Log parameters before starting server
        -n|--norecord           Fail requests that have no tape [default: false]
        -p|--port <num>         Listen on port <num> [default: 3002]
        -t|--tapes <dir>        Write tapes to <dir> [default: tapes]`
  );
  process.exit(1);
}

if (options.verbose) {
  console.log(`listening on port ${options.port}, proxying to ${options.server}`);
}

http.createServer(yakbak(options.server, {
  // Yakbak can't find its own tapes if this is not an absolute path
  dirname: path.resolve(options.tapes),
  noRecord: options.norecord,
  // If needed, modified local copy of standard hash-function which omits headers
  // hash: hash.sync,
})).listen(options.port);
