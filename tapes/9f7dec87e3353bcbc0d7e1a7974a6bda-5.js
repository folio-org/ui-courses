var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/copyrightstatuses.. : 200 7432us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTU/cMBCG7/wKK9cyyI7txM4NtpdeECrtqeph7HFK1HysEi/SCu1/r5MtFBUiFbqXkWzP+2rm0XgezhjL/LDdj82Pu3gbMe6mMGWsYt/YQ3pLrw3Nx4wrnQtZcjCmCKAEBcDaBdAajbN1KE2O2flR0mMXFtFl27LFeWJjmMJ4H+gxh8Lkx2Ybm6FfUm8wjkPPOtyzfohsrolhZNi2j4ouRCSMOKcfa5trHwPGQB9TWGxyngvgErj4wkWleaX1BeflB84rzn87JdluS2syUVa6qKS8sKVckV3tv6ZmPh3B1Mp5ooIDWqVAS6vBeulBYomGqFSeQrYYHFI8nP/NFbU15D3ksqxBpXwwKhlZ9IlsbUmhecF1s2FX+zWSmxlJcx/YZui6oZ8Sxjg2bjcnsLbxoZ/CfzJVF9aswflH2ToRFEYXytdgnJGgFCUYXhtwpZW1IEmlVq8TgevNu6D0Qw8+3YfRN9ieiNE8d/nbGT2XrTNyxgWneA12/oOKdJoa7wrgJApelMrm6FYZwe3lKTBNdzimJdA2P8PpxsqKd43Vk2wdWe0KU2vrwCqekKkCwVhJKfDCktDOcPkC2c3OpdYYDR02/Rq064E9rdDT7Ky5o7fsrFdkf0Cw77NFFoeI7efgh5GWBa/PDr8AAAD//wMAhQHc1f4FAAA=", "base64"));
  res.end();

  return __filename;
};
