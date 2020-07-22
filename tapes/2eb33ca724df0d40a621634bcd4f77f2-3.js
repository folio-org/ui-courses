var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:43 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 6868us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 78525us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwDoloo03DcAAA==", "base64"));
  res.end();

  return __filename;
};
