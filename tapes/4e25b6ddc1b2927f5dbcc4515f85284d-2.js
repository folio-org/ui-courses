var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:07:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 6979us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 82200us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
