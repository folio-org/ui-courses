var path = require("path");

/**
 * GET /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/instructors/bfc64439-e9f8-40fd-b949-806310d80697
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
 * referer: http://localhost:3001/cr/instructors/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/bfc64439-e9f8-40fd-b949-806310d80697/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/instructors/bfc64439-e9f8-40fd-b949-806310d80697 : 202 14581us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/instructors/bfc64439-e9f8-40fd-b949-806310d80697 : 200 2159us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSQv2rDQAzG9zyF8dqq3B+dc/IYOrTQsX0AnSUHgxMX2xlKyLv3bId2jgYJJH7fJ+m6K4qyk7KoizK1TYXoCZTaCGhagURIEE3lrZFcaF8+L8CZT7oib13f86jFQft+aLZh4rEZZJtb5zFs7Wa4jJN+dNPcnY/vm2MkYmWzB7VRAJumguTEAYttUZJN4mWjTzqz8MwLds2NRXBUnlVec1rFnHEGspa3nzbUnuqAL0T7J5NjFflnDj9fk473JZLBmCplQBcDBEKfLw4WUn6G4zZgRX/85Vse9rwzj3tm/La7/QIAAP//", "base64"));
  res.write(new Buffer("AwAwizA0ogEAAA==", "base64"));
  res.end();

  return __filename;
};
