var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:51:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courses.. : 202 37697us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 163339us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwCm+PMGRDgAAA==", "base64"));
  res.end();

  return __filename;
};
