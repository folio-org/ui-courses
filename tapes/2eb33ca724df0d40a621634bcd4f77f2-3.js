var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses?nreserves=0&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 12799us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
