var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses?nreserves=0&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/departments.. : 200 3135us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPU/DMBCG9/4KKys1OifOhzMiGDqw8DEhhqvv2kRKHCtxh6rqf8dNASEQEhXLyX7t55X1yIeFEAmxxzH07MKUiFq8iENMY97SaZuojTVKpVpaSlHqDbI0yFpqyIqKKjBVSsnyjDjseYbuMTTcY2jt9HFGPNmx9aEd3Hxl5Wy3o9ZtxXoIjfC7kQU6Euh91zKJSDefcM8BCQOeyPPzYmhHxsB0G8fcmEKqJGQS1BOoOoc6z68hgyuAGuC9KWI7TxdgM3WM87j8LiYvikorK3NlWWrSViKCkcCYqjWAAY0/xNxF1Y14tC07y39ws+WhG7b7pfAcxnk5S/LYIQ8uzMn/JaXqAkmqrPOiVtl1WWS/YDf754nH1dnTRq8tUQESjdYyz0wujc2szLDEiqjUlviLZvF6akvCELB7YDuMNH/LdHF8AwAA//8DAJ+Ou9muAgAA", "base64"));
  res.end();

  return __filename;
};
