var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 7507us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 107733us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwB08TbT9UEAAA==", "base64"));
  res.end();

  return __filename;
};
