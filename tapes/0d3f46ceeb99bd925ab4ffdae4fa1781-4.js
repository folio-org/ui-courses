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

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:18 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/coursetypes.. : 200 3263us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUPW/bMBCG9/wKQmtzzvFLFLU57ZKlBYp0Kjrw44gKkEVBUoYg8H+vZDsxmtRp6wZdCPB070vquRd8uGCsCPluGOn2vqexYDX7yh7m6lxv4rItlDfBcumBnPegqhjAlkGAi44wSmmcTcXlXtK5De1E6/Wavc9tDm6i+Pg10hiGpp+a3O2b2pY1HfQ0jHPl0LShaXae3NKxv8hyxYEWow/zslMKFBxQABe33NRa1dyshLXvEGvEg9NRdn3/ZaThZv87xkhDXEcw6EvQUSM4KRMkZaK3PAkezNHhro/nHHyQ/f3BO4PtvG4vn43Bcq1QVR5kaStQggI4HRyEFMgnVIRWvRjDTcd+pvt8BB8zy13bdMRC3vS5o246dxAoa4G1MCuj8ASPVzDiqlTiP2BMGktJVIHnVQCFwoPHYIF7TFbGSs+2LzB+2iF6heFTit8U46lY/aHsNASUGkkYDjH6OUuRErjSVTPIkFRC7n2KJyBc/TZS13n6/hgq18VfsRn/HY4uz4LzJDvCYd8Wi2LKk2s/U8hD3D2D6mL7AwAA//8DADl6CcoeBQAA", "base64"));
  res.end();

  return __filename;
};
