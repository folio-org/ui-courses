// From https://github.com/flickr/incoming-message-hash/blob/master/index.js
// Modified to omit headers from the request's digest
//
// Copyright 2019 SmugMug, Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

// eslint-disable-next-line import/no-extraneous-dependencies
const crypto = require('crypto'); // The 'crypto' module is built into Node
const url = require('url');

function sort(obj) {
  const ret = {};
  Object.keys(obj).sort().forEach(key => { ret[key] = obj[key]; });
  return ret;
}

module.exports = {
  sync: (req, body, algorithm, encoding) => {
    const parts = url.parse(req.url, true);
    const hash = crypto.createHash(algorithm || 'md5');

    hash.update(req.httpVersion);
    hash.update(req.method);
    hash.update(parts.pathname);
    hash.update(JSON.stringify(sort(parts.query)));
    // hash.update(JSON.stringify(sort(req.headers)));
    hash.update(JSON.stringify(sort(req.trailers)));
    hash.write(body);

    return hash.digest(encoding || 'hex');
  }
};
