var path = require("path");

/**
 * DELETE /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: text/plain
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:23 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "DELETE mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326 : 202 11363us, DELETE mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326 : 204 79814us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
