var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:39:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/coursetypes.. : 202 8700us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/coursetypes.. : 200 6100us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTy07sMAyG9zxF1O3B4Nw6aXcHnQ0bkBCsEItcHJ1KM0nVlgVC8+6kHRCCYQRosrAU5/8t+5PzfMJY5fPjMNLtU09jxVp2z55LtuS7MF+rhmuFyjiQdWNACfJgtbfgoycXURE2qjrdWZLd0GK6TKynYczp7SXQ6Ieun7qSmgV/12vWJfgo2tBkg53srNg1Mbc3kJ0o/CthcQoUCLgCyW9RtlK3Sp9pIf9gOa+FiuuxD4dcXLSyaYU5E2i+dl083Y00XO7md/PwNdkyutGgGyXBoObgaqWEjVrVDVZLgW2J29NP+KLGWhIZcNx4UCgcOPQNcIexkcHoFbo9fNdp3SU6xO4qv6NjPm/6nChNx0NE/nOI+67DCFBqJLHiEIIrGxQogq2tASt9VBG5czEcQHD+7SJd5Ok/y4uY2RS+IjMej4b/Yr/2Xe9o2MNcoZryZNc35PMQlj8nT7YvAAAA//8DADAY+k2LAwAA", "base64"));
  res.end();

  return __filename;
};
