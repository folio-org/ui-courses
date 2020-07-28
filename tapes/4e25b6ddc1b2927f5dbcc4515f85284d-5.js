var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:54:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7619us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 86983us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
