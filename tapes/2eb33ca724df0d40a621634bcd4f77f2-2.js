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

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 13236us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 90078us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
