var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/reserves/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 11129us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 134498us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
