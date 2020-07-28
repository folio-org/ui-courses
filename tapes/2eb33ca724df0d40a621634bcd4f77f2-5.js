var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 6981us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 91919us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
