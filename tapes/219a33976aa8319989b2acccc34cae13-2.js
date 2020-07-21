var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Tue, 21 Jul 2020 16:07:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/coursetypes.. : 202 6550us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/coursetypes.. : 200 1628us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTPU/DMBBAd36FlZUeXGI7dToiFhaQUDfE4I+ziNTaUeIOqOp/x0lbkIAKVPBwks/3Tucne3vBWGHjph9o+drRULAFe2LbnM351o3bwkusOZECUyoLAisDBm0DpUHfcKfkHE0x2yNBr2mCHsKqDXRMOxps33apjWE6vY+sDdBRP8TAbFx3MVBIx+o1Je100mPpfpRxyJ50Inebw9SiwgoB51CVS+QLLheyvlKNuMS8Do0ytenc76kJ2uW4m31SgFwiVfMSnDMKhCMPutYKNLdeeCyN8e6Eguu7wPYXPSXjJqYXFqdipoP7zszwZzUNqjPUvFOn1TSlFCiUAV43WU1FFrS0Gqy3ZDwKwkZ8UfOjk/xADkb+73XkSc9RcKQ+FLDnsUORYtKrR7Kxd9O/4Re7NwAAAP//AwDXj7wITwMAAA==", "base64"));
  res.end();

  return __filename;
};
