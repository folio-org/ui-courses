var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
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

  res.setHeader("date", "Tue, 21 Jul 2020 16:07:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 6812us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 79155us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
