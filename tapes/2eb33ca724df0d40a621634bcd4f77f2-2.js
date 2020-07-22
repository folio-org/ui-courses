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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 7544us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 87781us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwDXLNPobUEAAA==", "base64"));
  res.end();

  return __filename;
};
