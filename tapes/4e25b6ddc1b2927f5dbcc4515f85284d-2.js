var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 9262us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 94764us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwA3C1j49UEAAA==", "base64"));
  res.end();

  return __filename;
};
