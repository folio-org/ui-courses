var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
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

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 311038us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwAmDcSbiDgAAA==", "base64"));
  res.end();

  return __filename;
};
