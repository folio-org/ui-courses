var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/instructors/98521e26-1436-499d-b92f-c7d1283e8609
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
 * referer: http://localhost:3001/cr/instructors/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc/98521e26-1436-499d-b92f-c7d1283e8609/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/instructors/98521e26-1436-499d-b92f-c7d1283e8609 : 202 6799us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/instructors/98521e26-1436-499d-b92f-c7d1283e8609 : 200 1451us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSOvW7DMAyE9zyF4bVlIVGSTXkMOrRAx/YBKJEJDDhxYTtDEeTd658UncOBwx2+u7vuiqJspSyaoowU0CpWYL2rwMcokCIeINdikZxSZWL5vABnPumKvLVdx4MWe+26Pm9m4iH3svkWnQ+bnPvLMOpHO07t+fi+NdpMKokTcAoJvIQK2MUKTMqesqhjxxt90omFJ16w6ywsgYPypPI6vzUMDRowNSB+Gmw8NYFeyIYnM98a8s/sf75GHe4jErE7kLFAWmcInnSeYxwkFxKqSMS6+uMv3/Jw5515vHPGb7vbLwAAAP//AwAlnFWjogEAAA==", "base64"));
  res.end();

  return __filename;
};
