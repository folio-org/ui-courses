var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjJlNjMxOWI5LTFmZWEtNTQxZC05MWYwLWQxN2MwODdlZGJkNSIsImlhdCI6MTU5Mzc0Mzk4MCwidGVuYW50IjoiZGlrdSJ9.5_DoxBQWjfNC8vC1SXXnZ5ezBn1Ko65ahXmdG7XdneE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 02:39:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/coursereserves/courses.. : 202 226091us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.169:9157/coursereserves/courses.. : 200 1375801us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwAal2Hlhz0AAA==", "base64"));
  res.end();

  return __filename;
};
