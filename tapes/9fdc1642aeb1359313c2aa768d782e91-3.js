var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/processingstatuses.. : 202 28971us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/processingstatuses.. : 200 2399us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTUvEMBCG7/6K0Ks7Mmk+mvYoXjwJfpzEwzSZSqG2S5sKy7L/3eyui4uLiuIlkLw8Q+ZhZn0mRLYcB8/T1PbPd5HiPPGUiUo8inUKU9yG7TUjF3JdeAfsqAFN0oKrZQFYWl04q1gpnS32SE8vvINuejGMgcdDEHjyY7uM7dDv823IYSHqOYp+iGLFUdArtR3VHR+oF44UKNIW2X8qPfqRKXK4SseuVI65BFSA8h5lZbAy5gKNPEesEN8rJWxehl9gO2qTzs3ikw5XN7kjb4G8D6BNYcA1DYGyxhmsWTojT3Tcsqeu4/CVjkMuqA9i7v9ThP2bCPujCJn6pbIMgLW2oF2toCSVg0aDjURVkj0Vcd0Ln/rohuc0dd/Y4PY12Tgejnds/pD4dyla/0KKLCrtqtxe6AK/wC5XDxOP13svja59CBaBSq3BqNJA6ZUHRUVapVBoH/hIq3jaVsvikNpLjaet2W2hOtu8AQAA//8DACQ1LVikAwAA", "base64"));
  res.end();

  return __filename;
};
