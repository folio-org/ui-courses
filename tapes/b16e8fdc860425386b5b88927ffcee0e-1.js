var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 244
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courselistings : 202 6124us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courselistings : 201 7128us");
  res.setHeader("location", "2fd794bc-b36a-4b38-9c84-14e8685f87fe");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTQPU/DMBAG4J1fEWWFQ2f7/NWNioWJpUyIwbmcUVDbVEkqtar630mbVLDWg4d79dzZd3ooirKpy2JRlDrXPlLFUBmXgCoTIHIgUCTBBZuDz1I+XUAn300/dKl7m2T3slSopkwOg3TbtJ6jw79o3XIamnY7R5lrRywKXIwWKGSEQCgQYs5J6xCMn+HYcXND0SutI4FG44EoewjoHGjlkkSLrB1PiNt918vquJOZRmUJKVRgXAxAWhiS5QScWaqMJBhpos12/N2eh7Z7r36Eh/7iP4uva7iRIdVpSJfaaSxcRnWSBqlfx2vaJGoE9OOjVogLgwvrntHoRxzPdcKfWR4/erntkYRq9prAJtZgc/KQhMZWVllHuuJQmZvf7+q7Z87m/pkjPz+cfwEAAP//AwD6CnFnLQIAAA==", "base64"));
  res.end();

  return __filename;
};
