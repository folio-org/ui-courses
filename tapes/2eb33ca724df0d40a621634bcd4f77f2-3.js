var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/courses?nreserves=0&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 14782us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
