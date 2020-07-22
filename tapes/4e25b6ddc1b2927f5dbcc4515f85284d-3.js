var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/reserves/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc/6601c6ca-e252-484f-b39b-90e222225326/7212ba6a-8dcf-45a1-be9a-ffaa847c4423/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 10999us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 92335us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
