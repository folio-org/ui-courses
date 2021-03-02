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

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/copyrightstatuses.. : 200 3068us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyVPW/bMBCG9/4KwmtzASWSIunNcTt0CYKmnYoOx69YiCwaFB3ACPLfS9lNAiRRkRhGFwIS7z3ynvvg/SdCZjZudqm9WeXrjHk7+GFG5uQXuS97Zbd14+eMoVTUhAAmqAa4aixooWsIQgpmBRph6ezsIOlx7feixWJBvnaDv2t9Il1rfT/4RyPnB5vaTW5jf7C1ub3z3Y6YLtrbtr8heeXJJsWb5IeBxEAGu4odpmHVbh6drH1GhxlHD4f7jvEkj9m7L2XZe65pXQFlQKsflZyLZs7kuazqz5TO6eOdn2UXu5+DT98OUQdurHMNBdScg2BagLbMQqGByjnJrfPPHrYbd8zBf2UfP3jv4KGsD2cvskW5qCsmKSjVeOCV84DBeBACldHBS1Xj62x1HdnXwUAKcp/uvJtK1hXmFHuyxh3pYyZjBRHMBLvu2MzQai7oXIhzSuUEoH9wZedasv/BFYVWzlqomQzAiz0oXhxpLC2ggnYc1SuuyyW52E2RXI5ISuGTZVyvYz8UjDm1ZjsavGyZI5nyc62m4LxTNk0EKyUabgMooxhw7goMKxQYqVmoHHNS8LeJwOXyKCh97MGW/z7ZFrsTMRrrbqox3ymbZmSU8YbTAHrsQe5EqRprGqCuamgjua7RTDKC68UpMA0rTGUIdO2tP11Z6eqosnqSTSMLplFBaAOa04KMNwhKM1cW2mhXCaMoe4XsamtKaMTFNbb9FLTLSJ4evNPMrDGij8ysN2TPIMjv0cUsx4zdd29jcvvnuPn08AcAAP//AwAeShBsrAcAAA==", "base64"));
  res.end();

  return __filename;
};
