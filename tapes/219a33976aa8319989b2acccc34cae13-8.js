var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
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
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/coursetypes.. : 202 33277us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/coursetypes.. : 200 2584us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTPWvDMBCG9/wK4bVRe7IkW/YYumRpoaRT6aCPEzUkkrGdIYT898pOAqVNaGmr4UCne4/Tw3v7GSGZjduux9WuxT4jNXkh+5RN+caN18xLKDiiooYpSwXkhhqwFWUGfMWdkiWYbH6UBL3BSfQY1k3Ac9phb7umHZoYpteHSJpAW+z6GIiNmzYGDMO5eoODdnrQY+lxlHHIDvWA7j6FqUUOOVAoaa5WwGsuay5uhSxvIJ1To6Tatu7nqkl0SPEw/4QAuATMS0adM4oKh57qQiuqufXCAzPGuysI7paBHD96DcYiDm8kTsVEB3eJTP93NIX6DZqz6jqaikkBQhnKiyqhydFSLa2m1ls0HgRCJb6g+ZZJMsiJyD+6o5Q/R8BYLVnN8+SO6rJqsXvusVseKSA3yhalpMaWQKVJ3lDA06IYb7R24IyuPkAkr2O3bIiDXj+hjZ2bNo/PDu8AAAD//wMAHruF6JEDAAA=", "base64"));
  res.end();

  return __filename;
};
