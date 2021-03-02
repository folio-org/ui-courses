var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(copiedItem.title="seman*" or copiedItem.barcode="seman*" or copiedItem.callNumber="seman*") sortby name
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
 * referer: http://localhost:3001/cr/reserves?query=seman&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:43 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/reserves.. : 200 13020us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWy3LbNhTd5ysw2taQ8CIBeOc6SeNJnHhSp5tOFnhc2GwpUgNScTyZ/HuvREqi4sRTd9PpTLngSATuua+Dc/HlGSGzDB3kT9DNyCn5nXzBT/ixipu/M85lSKqMVGhpqCqEp94mTT24aLk3McpidjKYhHadO3hTdX3V3FwM9oFJH7yT1JWOUSUKTr3kJWWl5N4LKJPgO/uqh+VoxhmLnPlERWIlVQ5tPfCCMm8LL6JNFuTB7aqCeIHGG9MhfPzsXQ5thC2cZfiM+3EJt67a7PL9mza4vmqb0WuBudqiTDTwmKjCAKjBRDH3pLkIwenwGMo7/weEfhrEoY5Pgkazxi2H0M+aBj5PV/ZJvf6wOD9fPL9YnE2Xq+4s9NWn7ZY+r2G61GBn+vUkYcUAGAuOuoJjd72yWGbGN90xkTnlQqGPfLvlat2NxqUISZdeU4y+oCpKSa3gmkJMSgTgzigzNa4rv6nWrtZRG8Mk0OCY2rjGIMABFaGU3gqFAfmp9SpXS7T+FZlaBbhqq2Zb6Zl0iplCRKpswldMgjqeLC1BlIq7EixPU5xuAnARR87/PRTycYT5uufACvLSNdD03zAphVgqrAEtrcXamMSowWJTY1NyQhgjNZ/9GOUxJj0JesqkS1c15M3QhMcJdfk/of4tQmE96/Hgkw6QFX0VyB14sgkX8oEzoW36XPl13+Yj4f5WPfq2qdr1CfklVzdtrrrjzu8xru9XsGsDMBuVjtQWIDB046hBsaZJa+0NpDIa/gjKNXweCvmDPW8xtok34a3CDnGagrNIZ4uF0pJR7CQUAjkNws32Zfpukr+5hrxyeQk1NCfkZXbNn//pLMnHgzKsfV0NmvCgydu17hZJsT3dF9fkCif5UYNXtQtDjc7d0ucq3sAJuXRdNyfTbdH18C5dHfuaBcGYmm7L7UjNq73n74QcXF2/XS/9GNf164KzYm6M4QWZk7PCkA0ueXlNLl+cPX9xYPQ6V1uL275fnS4Wd3d387oN85v20wKjilVe9G1YQKhWTHOzQBTNBFPCzm/7ZX3AgWaNJ+WQx9RDPcTkfA2kTWTTMJTdjrRNfdDEra65JuyaV/gkNQPUWRQmpIoN1AhQtOCaOS8cc9I+NH6VR8HefGD7R4jD1tu2jnhV2ukfyJRKjqrnrdtQUgXUjGBpDNyUOqKIcDtUfNSL6RXENVO6gTKguaRcJ0lVwF/OJkOFNKrAaxdHKZ79COPh8NmNnifATs/ne7wrYpokt+3yOP4l9A7J546chQzIx/gcX4NXJnCASMr4NdenhTgtyjmW8SfGTqeXutHs5/sPqMi7Max8iLFkGKbCfkkcmDbIQKXTDq+uWgUcfQd6rOI/cTyaPd3xUIpn++Mz69ve1e8htHmYI/zZ178AAAD//wMA3tqwu6ELAAA=", "base64"));
  res.end();

  return __filename;
};
