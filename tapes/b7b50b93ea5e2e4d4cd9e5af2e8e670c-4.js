var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:54:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses.. : 202 6876us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses.. : 200 83776us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
