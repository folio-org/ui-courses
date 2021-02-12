var path = require("path");

/**
 * POST /coursereserves/coursetypes
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 98
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
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/coursetypes : 202 12494us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/coursetypes : 201 3462us");
  res.setHeader("location", "4b7c913b-eabb-48dc-96c2-adae0d337a9f");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPsY6DMBBE+3yFRZvbaG1DNqbjcs31lw+wvYuERAABV0RR/v0MXJQ6zRYz82a0951SWcOZKlWWB4pO2wDiQ4D8xBHcMRrw7AXZWvKuzj4WoPNXWZGqqtS5b/voZ+HNY5ni2Axz03dbpG1V08Eg45SUNXKVOXXOfvHvSUhSHGWp+EpnpQwaDWhAmx9NZZGXmg7GuT1iibi2vKDP22WS8Xt7gsiS6IKBMByh4ALBW1tDnRMHp2ujIz3534HfH/2H3h9N+GP3+AMAAP//AwCgkTulcQEAAA==", "base64"));
  res.end();

  return __filename;
};
