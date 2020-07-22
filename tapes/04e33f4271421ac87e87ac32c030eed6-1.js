var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
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
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 6893us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 64161us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
