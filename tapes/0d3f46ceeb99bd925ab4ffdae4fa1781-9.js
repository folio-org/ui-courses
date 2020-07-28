var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:43 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/coursetypes.. : 202 7135us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/coursetypes.. : 200 3603us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUT2+cMBDF7/kUFtfG28F/wHDbpJdcWilKT1UPY3usIrEYATlE0X73GnY3q2aTNN22HCwxzHs2v3nweMFY5uL9MNLdQ09jxmr2jT2maqo3fr7NvMkxJ+u597LgqgqSV2ADt6F0xiM6rGx2uZN0uKFFtF6v2XVso8OJ/OGpp9ENTT81sds1tS1rOt7TMKbKvmlDE3qccO7YHWQ+4kCz0ae0LEoBAjiUXJi7PK91USu5ElJ8gHTtjY6qq4evIw03u7chaY0rSs2tK4Fri4YbkJZbGyyiB2+xOjrc9/6MffeqP993MdimdXv5bAhVrhUoY7ksKsOVIMdRO+QuOLIBFEGlToZw07Ff2T4fwOfIYtc2HTEXN33sqJvOHQPIWupaqpUq9cs43oAIKyHU/4cYNBSSyHCbG8cViKQEV/HcQqikN7qE0yR/WQC9QfApwf8Soi7fD/FU9ToCkBpIlHn6mG3KkafAsUgYUbqgAuSJpH8FwcffxukqTj8OgcLOv0Rm/Hs0hTkHzUF1RMO+zw7ZFCdsb8nFwS+/P3Wx/QkAAP//AwCwe7lCFgUAAA==", "base64"));
  res.end();

  return __filename;
};
