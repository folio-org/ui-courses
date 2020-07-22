var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves.. : 202 12462us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves.. : 200 54175us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
