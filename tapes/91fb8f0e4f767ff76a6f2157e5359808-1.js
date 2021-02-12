var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId=="1fc91124-cd2a-4fae-9ae4-40368d80982d") sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 13088us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
