var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
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
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 26731us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
