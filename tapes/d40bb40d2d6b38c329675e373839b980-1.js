var path = require("path");

/**
 * PUT /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/instructors/83c29661-e112-48fc-bd8c-550b9731cfcb
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 366
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: text/plain
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/574e947b-5cdd-4876-b477-45ff145a5959/83c29661-e112-48fc-bd8c-550b9731cfcb/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:58 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "PUT mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/instructors/83c29661-e112-48fc-bd8c-550b9731cfcb : 202 7137us, PUT mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/instructors/83c29661-e112-48fc-bd8c-550b9731cfcb : 204 8731us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
