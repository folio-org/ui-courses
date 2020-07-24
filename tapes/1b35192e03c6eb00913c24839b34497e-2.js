var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/processingstatuses.. : 202 6358us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/processingstatuses.. : 200 3519us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTT2vcMBDF7/kUwtfuBP2X7GPoJadAm55KDmNpvDU49mLLLSHsd4/srQlks1CS6iCQ3rzH8NPo+Yqx4jAOgaap7fffE6Z5oqlgFfvJnrOY5TYux0IYb7AsI/BaW9C+VlCikqC54Y3gqkQrit3J0uMjrabbngVM2A37nL6pkaYwtofUDv1adENZ3Opmimxs978S64c/m+OREsasL+WnrvJlGAkTxa95W2Mklxy4A6nvuao0r4S7dpZ/4Xn9Dcqu+RAvuaSohK+kvJalfd918/RjovH2BCSiKrnRDbigCYxFghpVgMZmIkEgocRiDTjm/bh7wxN9lNoFD+SxAY3Cgq+FA15a7bxVpJQ+43nXs2GMNF5CebeIFHesnheAiT1RYvgb2w7rjj6P04h/x3nuugzD1430GCxgCBG0cQZ80yAom6eO1yS8OR+ubxSw6yhegrHpDPvI5v4/YlDuIxg21ysG9rAkFGnIo5+7zU+7fj11dXwBAAD//wMAWy2vSZkDAAA=", "base64"));
  res.end();

  return __filename;
};
