var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
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
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 7041us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 93559us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
