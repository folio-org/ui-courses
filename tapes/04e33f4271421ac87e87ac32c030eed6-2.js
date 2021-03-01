var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 32263us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwAJQ1hkpSMAAA==", "base64"));
  res.end();

  return __filename;
};
