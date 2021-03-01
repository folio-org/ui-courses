var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
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
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 24753us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
