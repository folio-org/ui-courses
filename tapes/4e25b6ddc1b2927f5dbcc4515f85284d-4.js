var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 16664us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 77863us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
