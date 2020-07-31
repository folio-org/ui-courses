var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 7087us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 83610us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwDFdvIcSSMAAA==", "base64"));
  res.end();

  return __filename;
};
