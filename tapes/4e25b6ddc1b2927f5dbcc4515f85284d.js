var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjZjNmI5YWI0LTE2YjEtNWNmMC1iZGM4LWI2NzI4YmM3YTUwNCIsImlhdCI6MTU5NDczODc4NywidGVuYW50IjoiZGlrdSJ9.pE0DFuVgWBOKlfXuIoKeSfTv9crEA98GpVjMrRMvJDQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 14 Jul 2020 15:00:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/courses.. : 202 7806us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/courses.. : 200 76086us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
