var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
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

  res.setHeader("date", "Fri, 24 Jul 2020 21:17:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes.. : 202 6372us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes.. : 200 3388us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTUvEMBBA7/6K0KuOTtqkX0fxshcF0ZN4mCQTLLhJabsHkf3vpl0XQV0V2RwGMpk3DI/J64kQmY2bYeS7l57HTLTiQbymbMp3br5mjdQKVW2gKJsaVM4WSFsC6y0bj4qxUdnZDgm05gVaBdHzMMawf3E82qHrpy6l5oLrKGJ47gILG9d9DBymfemaJ3I00Vy3G2UecmCa2F2lsPA55ghYQa7usGgVtrI6r2Vzium8N0rUpneHKFm2um4lnpdV9T11+XI/8rDaWXBUNKiVh8oqBl0Sg6HCgi9Ro5XElFO2NNimuD37JNFrLAvmGoysLSjMDRi0DUiDvilcrSs0XyTeLIJ+MNgF2Fk+pkSUf5f4lTqsAAuNnFcSnDNpjxx7oJJqSBa98iiN8e6Agotf1+kyTk/7haLgvjMzHmG/8v+o2VMfasTj3CGb4kTPt2zj4JafV5xs3wAAAP//AwAWmETrkQMAAA==", "base64"));
  res.end();

  return __filename;
};
