var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 8305us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 83389us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
