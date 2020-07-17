var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAxNCwidGVuYW50IjoiZGlrdSJ9.pYJZcQSjLyze0JsznKIdSEhBxrVih9tUNehad7VLNF8
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses.. : 202 6712us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses.. : 200 75313us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
