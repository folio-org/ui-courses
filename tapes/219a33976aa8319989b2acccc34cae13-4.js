var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/coursetypes.. : 200 2077us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTUvEQAyG7/6KoVeNZr46bY/ixYuC6Ek8zEcGC7szpa0Hkf3vznZVRF3Ej0tgMu8bkofk6YCxyueHcaLrx4GminXslj2VbMn3YfusosZaEjXgeONBoXDg0LfAHcZWhkYbdNXRzpLsmhbTZVr1iV7TgSY/9sPc57T8XmTWJxhonHJiPq+HnCjNr+o1zTbY2W6lu1a2TY5kZwpnJSwlBAoOKICLa5SdwE6YY6PaQ8QO8aVSsT0M4Qe2xbUpcXP0AQJKjSQMhxBcAypQBFvbBqz0UUXkzsWwB8LJeWK7UffhOM3zPcuLmNkUvmIz/R2Orn8F5822H07LtULVOJB1W+AI8mC1t+CjJxdREbbqE5xvqZQleWHynxuCP4DATSfqTrbHuJfd6ePNROP5joMx0hDXAcpF1KCDxrIfMkJUJriWR8G9eYeR3W2rVXOe7eqKfB7Dcn/yYPMMAAD//w==", "base64"));
  res.write(new Buffer("AwBH8WRnlwMAAA==", "base64"));
  res.end();

  return __filename;
};
