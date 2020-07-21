var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
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

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses.. : 202 6170us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses.. : 200 63971us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
