var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 6641us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 74492us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
