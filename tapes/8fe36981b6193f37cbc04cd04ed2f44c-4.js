var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
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
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/terms.. : 200 2678us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTPU/DMBCG9/6KKCs9dHd27DgzAwsL6oYYLrEjIjUtSs2Aqv53nFSloqVCtIsl3+vHH4/t7SzL8hiGfpNnVfaSbVM/VTo/dvPWWWJ2GhiVBa1bCyUaA0xGgiuwYdPk8z2ykj5M0GLoVl38zBgZD+EmyhAfJO5HjAlgmtUc8rDyJ2la5JvuQxQvUcZ4v8FUbIaQiB8YATIQL1BVjBXb+0KXd4gVHmZK2Me7/wc2UbvU7uYnakQKJ75twQWuQVvloUwFqLku0NTaFsJnah67pQx/myEgd9mMAtI3mzGorjFzxC6baTyF2gYPbNMd69oIuPH5eNuSFKqg1tRnZp665k3CspdNsnM8/akdckAIpH63M6YMaG+3Q9fZoXM72et8+mLrKMvn0KwHP/00Ndt9AQAA//8DALHkND97AwAA", "base64"));
  res.end();

  return __filename;
};
