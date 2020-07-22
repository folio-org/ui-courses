var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 24099us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 102135us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
