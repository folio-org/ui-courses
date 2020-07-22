var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 6908us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 65374us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
