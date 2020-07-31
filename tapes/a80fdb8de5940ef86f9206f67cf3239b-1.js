var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 283
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses : 202 6823us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses : 201 7438us");
  res.setHeader("location", "09427a84-6777-487d-bdb3-75235f4012de");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPwU7DMBBE7/0KK1dYZDu2Y/dGxQUJ9VQ+YG1vaESTRo6DhKr+O2lSCtf64MPOvNmd04qxookFW7OCOyUrtApMVVWgbBXBR19CpWWpa8WFjFQ8XoAOW5qRZ0zxC9Mn84koNt3HokcaQmr63By72bbbEwuYiGEXWb042bFmefTjoYnUZcw0/LI9ptxOs9flLKGNsUoE0CIQqKgCIHIHnFAKz7njChc0HMc00Fsz5Cn/SqOP1gYVwUZyoIy3YKUTwEOonTC1t47+09ux9ZSWchvBxaINFC5ltrfeB+r3i9RSxogZL/PTNLgkJZr6xJfpm92SSw68glLshFyX1VqLJ27FA5/eHPLHbL7fB0rX2z1X1htCUNJq0E6VYLkW4I1SEmutjLvxYx/v3nll7t854efV+QcAAP//AwBM9iCCPAIAAA==", "base64"));
  res.end();

  return __filename;
};
