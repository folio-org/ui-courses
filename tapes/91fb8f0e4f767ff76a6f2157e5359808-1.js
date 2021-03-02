var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId=="1fc91124-cd2a-4fae-9ae4-40368d80982d") sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 12776us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
