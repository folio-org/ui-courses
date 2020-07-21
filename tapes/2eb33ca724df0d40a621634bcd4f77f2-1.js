var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses.. : 202 9965us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses.. : 200 74867us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwAB0NM43DcAAA==", "base64"));
  res.end();

  return __filename;
};
