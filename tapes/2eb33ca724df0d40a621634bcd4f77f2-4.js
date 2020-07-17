var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses.. : 202 6634us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses.. : 200 81859us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwBkfsrPbUEAAA==", "base64"));
  res.end();

  return __filename;
};
