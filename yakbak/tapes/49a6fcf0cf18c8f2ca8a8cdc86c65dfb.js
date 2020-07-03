var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjJlNjMxOWI5LTFmZWEtNTQxZC05MWYwLWQxN2MwODdlZGJkNSIsImlhdCI6MTU5Mzc0Mzk4MCwidGVuYW50IjoiZGlrdSJ9.5_DoxBQWjfNC8vC1SXXnZ5ezBn1Ko65ahXmdG7XdneE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 02:39:46 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/coursereserves/terms.. : 202 945583us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.169:9157/coursereserves/terms.. : 200 64081us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSUy27bMBBF9/kKwdt6jBk+RS2LomgX3QTOpkUXQ5FCBPhRyOrCCPzvHfmBFHLsxIkgECAvL2d4OOTTXVFM+twtN5OiKn4VT9KXkTYN3QmzDZyaBkJWEYzXCUoZgKiiRReNt6wm04Nlxcu8N31rF9xtC4UKT9qm567/wv1hwqAAElA46XmVRqoGMid1mXtO3PMgH/KTwbrL4hjbPKCao650qNDMQmk/oXzHhcT19096u2tv2km7m464NMGTUsGAQu3BmMZDic6BIsc5WKyVq8+4zLt21favg5FV3WUwEgQ/CMbO0PibwfznugymTpSjzwmUl32Y6BjCgCj5hthqS42LZ2B+tPUj58WSN8LmuSjGbCgAIZB+mc2gKsn442zsu9jYV9nYoIiisHFWkjUxWAg6ozQu+0Cl8Viesfm6Xl+rlSD3aI6mQpR/JvF/XqwcIinPOdoX5t7KilyFZaXdzCk1YnV0fd4+bHL3/bBxlZ2mEOWAmsxgDSUI1CAk8jWWUi0x2TfRvhL36Lo97vN5Fb+n+8dw3fPiPtfrLu3fRHO3+wcAAP//", "base64"));
  res.write(new Buffer("AwAzKAW0JQUAAA==", "base64"));
  res.end();

  return __filename;
};
