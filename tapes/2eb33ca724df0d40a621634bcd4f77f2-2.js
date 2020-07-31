var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 6874us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 101338us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwAzytFM9UEAAA==", "base64"));
  res.end();

  return __filename;
};
