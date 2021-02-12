var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/coursetypes.. : 202 12711us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/coursetypes.. : 200 3098us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTO0/lMBBGe36FlXYZdvyKk5RoGxqQVlChLfwYayNx7SgJBUL3v6+TyxUSS3gIGksezxmNjj4/njBW+Xw/TnT9MNBUsY7dssdSLfU+LNeq5VqhahzIum1ACfJgtbfgoycXURG2qjo9IMnuaIUuEhtonHI6vgSa/NgPc19KS8NlZjnd9YmYz7shJ0rzsXVHsw12tkvfYZVlyZHsTOFXOVZeoOCAAri4RtkJ7IQ5Mwp/IHaIT5MKdj+ELYybTtSdbM9Q1xvY+cPNROPFwYMx0hDXAQy6GnTQCFbKCFGZ4FoeBfemWgfsy7k/faExaqwlUQOONx4UCgcOfQvcYWxlaHQZ+5/Gq1XRGw77BAfP36qx/YTGV7BtCSg1kjAcQnAlS4Ei2No2RaSPKiJ3LoYNCT/fjdR5nv8eQ2VTeM3N9HU5m2H5IPYsh/1ZRlRznu3db/J5DOv/kyf7fwAAAP//AwCSKYzOlwMAAA==", "base64"));
  res.end();

  return __filename;
};
