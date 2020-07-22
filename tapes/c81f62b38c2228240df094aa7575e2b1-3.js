var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/departments.. : 202 12498us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/departments.. : 200 2688us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSsU4DMQyG9z6FdSsNyqVpe9cZBgYWYEMMbuz2It0l0dUdUNV3J00pSLBUkMGK/+Szok85TAAq4oSjDBxkV8EKXuGQ05x7OrVVvXFtXRurHBlUdoOsWmSrrJ4tGmp02xiqpmck4MAFekTpeEDxbnc5I9650SfxMZQrD8H1e/JhC+soHaT9yICBAFPqPRNkuvuCBxYkFDyR5+fl0I2MwnSXS5lotNFKL5UxL3q2smZl7e1ytrzReX0OytQ+0fVUgY65Hqc/tcwXi8bWTs1rx8qSdQpRt0ozmnqtdast/tJyn0V38Ow8B8dXmNly7OP2fQqJZSzboihhjxyDlOT/iub6L4ou1LcieDtNqCQK9k/s4kjlQ5nJ8QMAAP//AwC05eBNaAIAAA==", "base64"));
  res.end();

  return __filename;
};
