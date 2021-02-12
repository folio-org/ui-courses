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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 19323us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwDac1m9H0IAAA==", "base64"));
  res.end();

  return __filename;
};
