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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 17878us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwDtTkFHY0IAAA==", "base64"));
  res.end();

  return __filename;
};
