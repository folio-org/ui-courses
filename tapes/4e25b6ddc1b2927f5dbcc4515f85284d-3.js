var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/reserves/79702b52-0d7e-48ea-b7ef-a4e74289f000/c62e7511-dbe4-44e5-8592-9777d409ed42/de1875ec-0821-452f-9e5e-2425e21c8de2/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 23802us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwCWCH3TY0IAAA==", "base64"));
  res.end();

  return __filename;
};
