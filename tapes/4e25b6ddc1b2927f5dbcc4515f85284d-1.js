var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses.. : 202 6149us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses.. : 200 74091us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwB/8Qoi3DcAAA==", "base64"));
  res.end();

  return __filename;
};
