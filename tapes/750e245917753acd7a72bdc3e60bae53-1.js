var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
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

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 21196us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
