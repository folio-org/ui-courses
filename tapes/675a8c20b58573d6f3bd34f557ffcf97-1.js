var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d") sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7231us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 64369us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwASIFCRjS0AAA==", "base64"));
  res.end();

  return __filename;
};
