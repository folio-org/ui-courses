var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/reserves/66cec8e4-9ae6-4729-8119-3f341e0e67c3/410287b8-02ab-4b31-90e5-a09f8e073db3/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 6995us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 84461us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
