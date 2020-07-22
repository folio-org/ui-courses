var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 6788us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 76018us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
