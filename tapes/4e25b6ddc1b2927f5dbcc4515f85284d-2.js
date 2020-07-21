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
 * referer: http://localhost:3001/cr/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses.. : 202 6118us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses.. : 200 81477us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
