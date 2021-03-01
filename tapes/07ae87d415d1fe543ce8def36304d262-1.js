var path = require("path");

/**
 * POST /coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/instructors
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 132
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/instructors : 201 10110us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTPO27DMAwG4D2nELwmLChLtiRvSbsU6NgegBKpNoPTwo+hCHL3ynGKzFk4kPh+kueNUtU8yvDKlepUZRoXvNYCxoUMNmEAH+sIhIQ+BZvFYLVb0Il6uZI9Uz/u1PPXcBwnUvt1nL7nYZS30jqePm/hkV0mZy1gNAZszgQ+tQ5QIlNsU0soq+5lIqaJFnYujSVwEJqEX0q5htVYa0ADqN+16xrXoXtCH7aIHa4n3tHh9+P+YrYxMbcIFMopjQkNhGQSGHLkmZ1NLP9+/uHHl97Q40sLv2wufwAAAP//AwAEcrUBkwEAAA==", "base64"));
  res.end();

  return __filename;
};
