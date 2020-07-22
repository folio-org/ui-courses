var path = require("path");

/**
 * GET /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves.. : 202 8351us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves.. : 200 48140us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
