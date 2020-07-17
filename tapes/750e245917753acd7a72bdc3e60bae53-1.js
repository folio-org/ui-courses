var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
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
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses.. : 202 6643us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses.. : 200 66389us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
