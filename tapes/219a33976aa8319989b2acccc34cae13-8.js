var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
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
 * referer: http://localhost:3001/cr/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401/edit?nreserves=0
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
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/coursetypes.. : 200 2136us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTwU7DMAyG73uKqFfwcJqkbXqcuOwCEoIT4pDErqjEkqotB4T27nTdkBAwTUNcLOWPf8v+ZL8vhMhCeu0Hvn/reMhELR7F+6ROeku7Z9YYLBRzBV5WATTmHjwGC9JjYxVVpkSfXe4t0W14Nt3Glzbyp0w8hL7txjbF+fcmiTZCx/2Qoghp06XIcfzM3vDoyI1ul7pvZddkz25kup7CXCLHXAIqQHmPsjZYG7PEUl8g1oiHSpPttaMzbLNrO8Xt5TcIqAxyXkog8hVo4gZc4SpwKjS6Qel9Q0cgXK2j2I96DMcqjc8izcnCRfqNzfAPcOzf4NiTcKw0GnXlQRV2gpNzAGeCg9AE9g1qRqt/wDlJZVqSA5N/3JCiPAOCLGtT1KiWpT5mW709DNyvD5eifSAqEJzVGoyyBmxQAZQrXUVU6kD8BaN42lXLxjS6lzsOqaf5/tRi+wEAAP//", "base64"));
  res.write(new Buffer("AwALrnatlwMAAA==", "base64"));
  res.end();

  return __filename;
};
