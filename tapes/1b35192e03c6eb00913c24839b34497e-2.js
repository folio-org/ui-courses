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

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/processingstatuses.. : 200 3051us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTWvcMBCG7/kVwtfuBH1L9jH0klOgH6fSw0gabw2OvdhySwj73yt7uy009SFtLwLpnfdleDTzfMNYdZrGSPPcDcf3GfMy01yxhn1iz0UscpfWayWMN1jXCXjQFrQPCmpUEjQ3vBVc1WhFdbhYBnykzXQ/sIgZ+/FY0q9qojlO3Sl347AV3VERr3ULJTZ1xy+ZDeO3q+ORMqair+WXrspjnAgzpbfl2GIklwK4BCE/cNVI3kh367h/w3nD+Y+kYltOac8mXGN0o/WtdWrHdvf0cabp/oLEOeVImASOBwsmGQ6oVAutdinUopUiumoLOJfzfPiNKPoktYseyGMLGoUFH4QDXlvtvFWklH5B9GFg45Ro2oP5sIqUDiwsK8LMnigz/Ipdj6GnfwcqXgP0D7Z9HD600mO0gDEm0MYZ8G2LoGyZPB5IePNywN5RxL6ntIfjqjMcEluG/whC6r8C8dP2CwT7vEZUeSwLUPot37stoLo5fwcAAP//AwBcZn/6nwMAAA==", "base64"));
  res.end();

  return __filename;
};
