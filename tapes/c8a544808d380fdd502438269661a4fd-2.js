var path = require("path");

/**
 * GET /loan-types?limit=500
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
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/loan-types.. : 202 40670us, GET mod-inventory-storage-19.5.0-SNAPSHOT.541 http://10.36.1.217:9133/loan-types.. : 200 2865us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTTWrDMBCF9zmF8LaZoj/bkrftCdLuShdjaRQCjh0Up1BC7t5x0jbQUEqTzaAZ6b3Hh6T9TIiiG7Af3ze0LUQjXsSeZzxdxaktNFlHtTKg6mTABl6hTw60cbZsW60k2mJ+kvS4pqNoQRhX/VLkYVh/ba5pxIgjTgdOETwMmXCk+MjllCa1AmlAqmepGusbbe7LWt9J2Uj56cSy3Sb+Q3ZUHbge5j/gUMWgAhmIZZXARofQWu+4jVVtQwjMeAH3RB0FTr8dzJVXgX3Lfgcj1xqlsALDNwTWJA2oKw8xeqNkaHWUdAH2MOzylkSmLeU3fg038/nr+PzffLr1NlRGQQrowTrPfLWRbEVUap8S6fqSD3sRVjnsuin+VrpK2mvozrIznXidLIpxGLFbUBhyPH5FOzt8AAAA//8=", "base64"));
  res.write(new Buffer("AwC97/dToAMAAA==", "base64"));
  res.end();

  return __filename;
};
