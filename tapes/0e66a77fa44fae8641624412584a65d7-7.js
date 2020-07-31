var path = require("path");

/**
 * GET /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves.. : 202 11561us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves.. : 200 74354us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
