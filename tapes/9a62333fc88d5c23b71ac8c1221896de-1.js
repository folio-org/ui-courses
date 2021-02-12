var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/departments.. : 202 12781us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/departments.. : 200 3061us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/wK5LUhOjD+HKt2yNClH1PV4cydE0v+QDYZoij/vcRpVKltpFZdTnDwPqAHDgshImKHo++491MkSvEqDqEb+g2dppFK0jQ3yspEWZaGjJWIUEhg1KoCKMBgtDxHeux4Dt0H4lY82YZ7y9NlmXiyY+N8M/TzrnVv2x01/UZseGiHzX4pHPtxHgrsSThskYfez50LpWOPhB5PiPNVQ9OOjJ7pLpQZrUErCVoq/QxxqaHU2SrNkxuAEuCDFGI7R9diKit1WiZqBXF6JXa7f5l4XJ89ZVmcsUpIZlClMqEEJMZxLWuTUVWoWiubRTPgGOpx+VVzbQultJGWNEpTI8sC2UgTjs8phyLX9E3zA/otd+gb+wvH1RCexO1GntWic23DJEJ6O/1fbfEXtT/EPsWItxMi8oPH9pHtMNL8LfXi+A4AAP//AwDrnNuYrgIAAA==", "base64"));
  res.end();

  return __filename;
};
