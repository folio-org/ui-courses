var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/coursetypes.. : 200 2944us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTQUvlMBDH736K0Os67qRJ2qa3FS9eXBA9yR6SzIQtvJeUth5E3nfftk8RV4vs6iWQyf83DD8mjydCFCHfDyPfPPQ8FqIVd+Jxrs71jpZrYaXRqBsPqrIN6JIDOBMchBjYR9SMVhenRyS5Pa/QZRI9D2NOzy/EYxi6furm0hL4sduJLsHr0J4nR25yS+I4xDLewG5iupiPlSyxlIAKUN6gbA22xpxhVX9DbBGfOs3YfU9bmKxbU7VYnpVYbWDnD7cjD5dHA1H7QFQhOKs1GGUN2KACKFe7hqjWgbhYGxzm83D6l8BosFLMDXjZBNBYevAYLEiP0SpqTI3+jcCfadcl3rJ3lV/kiZD3fU6cps9rrPU/aHwH25aAyiCXtQQiP28RcQRXuQacClFHlN5H2pDw/cNlOs/Tb5HXsHCJ3nMzfoEc+39y7Bs54tfSopjy5HbXHPJA689TJ4c/AAAA//8DAMJemp6RAwAA", "base64"));
  res.end();

  return __filename;
};
