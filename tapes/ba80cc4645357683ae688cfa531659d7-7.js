var path = require("path");

/**
 * GET /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves.. : 202 13444us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves.. : 200 66985us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
