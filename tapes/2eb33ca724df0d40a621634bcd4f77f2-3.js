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
 * referer: http://localhost:3001/cr/courses?nreserves=0&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 7122us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 84645us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
