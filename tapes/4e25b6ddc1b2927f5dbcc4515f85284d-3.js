var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/reserves/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/0b285e71-198c-4c4c-a93d-2c3a30aec74e/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 20092us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
