var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:16:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/processingstatuses.. : 202 12087us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/processingstatuses.. : 200 2646us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTy2rDMBBF9/0K4W0zRbKe9rJ001Wgj1XpYiyNg8G1gy0HSsm/V0kamjakhFAtBNLVHTRHVx9XjGXLofc0jk23eIwYp5HGjJXshX0kMclN2CwzV9W5Q28AvQ+gtNXg6hpBGu00r0g4LbLZztLhG21ND+SxbSnshUCjH5plbPruh86wC2zqcIVNi1VL+/NvFDFgxM3h3XXSph8II4W7NG2L5DznwC3k6onLUvFS2Bsr7TVP46tQck3LcL5ra1qneT37hQFdyJX1DshhDQqFAVcJC7wwyjojSUp1hGHesX4INJzCMN+IFGasmiLr+sjeKbJ/hKHFJTD2rtMwRHp6LIoAvFIGlKskFChzUFzzWnBZoDnOxH3HfOqi7RcpcX8Eg5pVCsYhkS/b9J2ny5EYfj4SYUrtSiVuCn4C5O3780jD/Y5KQFlwrWqwXhFogwQVSg+1SVi8QMIcD6Cy1021LPapudR2Csr2/8mr9ScAAAD//wMA7vS4q54DAAA=", "base64"));
  res.end();

  return __filename;
};
