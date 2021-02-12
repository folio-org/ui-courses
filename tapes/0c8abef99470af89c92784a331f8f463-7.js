var path = require("path");

/**
 * GET /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves.. : 200 14500us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwBCO2IfXBkAAA==", "base64"));
  res.end();

  return __filename;
};
