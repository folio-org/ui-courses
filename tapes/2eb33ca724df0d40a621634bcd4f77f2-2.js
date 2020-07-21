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

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses.. : 202 13417us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses.. : 200 79951us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwArxE5+bUEAAA==", "base64"));
  res.end();

  return __filename;
};
