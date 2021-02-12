var path = require("path");

/**
 * POST /coursereserves/departments
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 106
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:36 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/departments : 202 28947us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/departments : 201 3555us");
  res.setHeader("location", "eed5b0d1-1ce5-4685-af2c-8301236c1f5c");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPsW7DMAxE93yF4LVlQUqWlXpzUaDonn6ALFKpgcQ2bGUwgvx7FbtF5ywEeHePB153ShUdF6pWhQjbFpmAglgoq70FH3WAvUHSpgoUbSie70Dvz7IiTdOoDxlOw3HZHJY5TN2YuqFfA4dvUXO68KKGqFJexpPvJW3hsyTPPvl78pqFLIVJfBJ+z2PlNWoC1ED6QK62ZW2qF2fsE2KNuF75h96Wr1mmz+0Z54wTsgwO2wosWwRvTIRYOm5fKWoK7o+/jPx46S/0eGnGb7vbDwAAAP//AwD6MWg0eQEAAA==", "base64"));
  res.end();

  return __filename;
};
