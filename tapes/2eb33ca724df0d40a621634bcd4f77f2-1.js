var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:48:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7298us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 89370us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
