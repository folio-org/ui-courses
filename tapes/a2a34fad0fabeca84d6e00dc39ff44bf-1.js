var path = require("path");

/**
 * POST /coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/instructors
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 133
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/instructors : 202 14113us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/instructors : 201 31960us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTPO27DMAyA4T2nELwmLGg9bW8NuhRot/YAlEgbBhq38GMogty9spsgcxYNEr6f4nmnVLFMMr5yoRpVRE0SDQtQ6TxYqiKQdhGC5tBKlNIHWxxWNNBJNvJMHY18UO/EnXz1g/y/p+9lnOStn+Z+6G71HKFgLWA0BmzbElTJB0CJTNEnT3jVJ5mJaaaVnfPFGhyFZuGXfGwxjboENIDlRxkaFxr0T5Uxe8QGcavc0fH3875ja2Ni9ghU5684Uzuok0lgKFDFHGxiufnlhx8fekWPD838srv8AQAA//8DAJl5/ymUAQAA", "base64"));
  res.end();

  return __filename;
};
