var path = require("path");

/**
 * GET /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves.. : 202 7125us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves.. : 200 51831us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
