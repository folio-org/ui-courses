var path = require("path");

/**
 * GET /coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 202 6852us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 200 12868us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRWTW/bRhC951cQujZr7xeXu77ZSYEaTdwCUU5FDrO7Q5stRQoryogR+L93KFImLdupXOtACJx9M/Pezgd/vMuyRRUX2Vm2kGCFzEExCV4zjTkwyINiPtgoIvCyiGHxvgc0sMId5BxSvIX0T+YTYqya68EecRNSte6qttkdW95gFiBhBk3MyuFk1pZZt/XbuorYdNDhZo9dQ+pW9O5ySEvkxlgtAstFQKajDgyAO8YRpPCcO67hEPqH/xtD18N/kGGieLSvOclfyelN9iVU2IQxy2c4Xjah3u6IXWNbt9d377M1dmn3d8d7DTVg23S7N3svK+wgQgdTqvQyJCQ94kd6DBfDJWe8YFIsuTpT+VluTizXv3D6jY4ItV3H41E70D0973fKhXabNvip2nREYK97sBg9eAY+96RVbhgoZxj3QdsQUYEadX+EflH6Y90RJOE1OUuQxlTS+YXgYm/F7x2mBurR+P2RsW4D9HcyGssQjQ4omHEuZ9qWnFnNkVlXliCltap4Aj1kMHF4hbd5AX2Gqsk+VZ4I3U3m0MbB/PvX0w8fTj9enn6ejNXmPHTV7e5Al7Y4GRpSudvOKFICyHnom1VYpr12zCMXjBtlIwcNIS9mUWG13m5GqJGhLIwvWAhAfKJSzElRMIyllsQTrLYTtB4YjNg8FtZyhSwA131YSgABmQxGeSc1JeMn7DpVK8J+wXRbBfyzrZqdwAsFmttcRqZdSY9YSgaidMygNFqAQSfKyctmBr+Mm97DX0f6yL4NJT/eNVXQal8irhBSOs0kVwXTuiyY5cZQ3xhAl/MgTVjMYD8pj+M9zctjmaqm6u6yvmFnXDsaOwfNTJ7NdAKbw2anUPvWHhMeWnN5t8aRrRO55tp6poyjapEY+iEPLJQBfck1cqcXT8Avc36Fvznny4amY9rQ7HywHQ7UqzZrm7pqaHW0q3Xb0Fh/zK1vhbQNXZuG9MZ6eJIh1YagUmBCK0M14iKj+ixZKKKQVqE13D2T4W9VXfcr6wJrGgzTAQ/poXOFVDqfd/QbpuiL6+BnC0EuuTzT9iy3J1bkjxfChLu4+0qdMybkLajS0nywWNAe1BYpNU5bXuVeYoxOFmbu48W18h+xR9zrY48u7oe7zr79r035kJw6Mbk52JRvluUIUZ6L+zZJDrf11XblMQ2fYQ8bkEZk6Dvo6uELrcb1zWB6quAR+ukTpR59abxVvSO0exrzLcrdv7v/FwAA//8DAIXKzA3mCgAA", "base64"));
  res.end();

  return __filename;
};
