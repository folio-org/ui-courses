var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/processingstatuses.. : 200 3264us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS2vcMBRG9/kVwtvMDVcvS/ayZJNVoI9V6eJKug4Gxx5sORDC/PdqPJ2GNplFHxuB9PlcxPGnlyshqv08RV6Wfnz4lCmvCy+VaMVX8VLCEvfpuK2k9ZaaJgEGU4PxQUNDWoFBi51E3VAtq90JGemRN+huFJEyDdNDmX5OEy9x7ve5n8bto48cuX/iJMKaxThl8cz5jK2cztgjZ0rl9MicrlYO48yUOd2WZZulUElABVJ9Rt0qbJW7ceivEVvEH5MKtu7TJUy6wrRobryyF7APz18Wnu9OXpzTjqVN4DDUYJNFIK076IxLoZGdktFV24BDWQ+737SST8q46IE9dWBI1uCDdIBNbZyvNWtt3mi9H8U0J54vGb0/hpx2vxilJ+oHCgP/u1D5J0LfwS7r8KFTnmINFGMCY50F33UEui71w8DS27ctKwWiYXhtyjsF23JBYxLr+B9FKPNXIn5iryLEt+OIKk+l9uW+5fdur1BfHb4DAAD//wMAO8+zHqQDAAA=", "base64"));
  res.end();

  return __filename;
};
