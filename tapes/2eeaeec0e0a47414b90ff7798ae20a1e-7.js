var path = require("path");

/**
 * GET /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves.. : 200 13408us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
