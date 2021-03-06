var path = require("path");

/**
 * POST /coursereserves/departments
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 106
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
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

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/departments : 202 13582us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/departments : 201 3649us");
  res.setHeader("location", "f4cebc0f-778b-4e79-b530-93c4f19355f7");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPsW7DMAxE93yF4LVlQVmSFXlzEKDonn6ALFKpgcQ2bGUwgvx7FadB5ywEeHePB143QhQdFaIWRdSB24ARrN22oNk6aI1CcCroKJ0yJtri/Q70/swr0jSN+OThNByXh0M8h6kbUzf0a+Dww2JOF1rEEEXKy3jyPadH+MzJk0/+nrxmIUthYp+Y9nmsfImlBFSA8iBtbapaVh8lVm+INeJ65R/aLd8zT1/PZ9pAVCF4pzUY5Qy4oAIob/2WyOpA/OQvI71e+ge9Xprx2+b2CwAA//8DAIjQ+4B5AQAA", "base64"));
  res.end();

  return __filename;
};
