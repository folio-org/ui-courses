var path = require("path");

/**
 * PUT /coursereserves/courselistings/80939663-9486-4382-a5f0-a28a5580d0c9/instructors/24466d82-c255-4d50-aa1a-ad37c5aecf56
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 366
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: text/plain
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/80939663-9486-4382-a5f0-a28a5580d0c9/c4b4bfd1-04fc-48b9-a682-a63dbd384c03/24466d82-c255-4d50-aa1a-ad37c5aecf56/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Tue, 21 Jul 2020 16:08:07 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "PUT mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/80939663-9486-4382-a5f0-a28a5580d0c9/instructors/24466d82-c255-4d50-aa1a-ad37c5aecf56 : 202 6930us, PUT mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/80939663-9486-4382-a5f0-a28a5580d0c9/instructors/24466d82-c255-4d50-aa1a-ad37c5aecf56 : 204 7555us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
