var path = require("path");

/**
 * GET /loan-types?limit=500
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
 * referer: http://localhost:3001/cr/reserves/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/0b285e71-198c-4c4c-a93d-2c3a30aec74e/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/loan-types.. : 202 49262us, GET mod-inventory-storage-19.5.0-SNAPSHOT.534 http://10.36.1.253:9137/loan-types.. : 200 2591us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTzU7DMAzH7zxF1CszSuKsTXaFJxjcEAc3cdCkrp26DglNe3fcDobEhBDbJfLX39ZPdvY3ShVNR+3wvuFtoRbqWe0lJtFVGt3C1sHFEg3kSAGcDxaoQg0amec25My2KmZHSUtrnkT31Kq46uOuoYG/smseKNFAY8VxhgRjz1KSHsa6aZy2BrQFY580LqxeaHOHGm+1WPqzk8h2m/QP2aQ6yHuY/aRj57kyCKbKCC6KRSF7sOjdvK6t0eTO6JZMadW+qr7r1tfDGX8R3En2OxyZFE1khDQvM7jkCWoXvLiprFyMURjP4B654SjTrwfDy7aGf2+NfY3GUAkoGwKHWW7SlgFSCmh0rG3SfH6T3a7fsup5y/2b3PrVfK68iO8k++ZTL2OLYugGapYcuz5NX9HdHD4AAAD//wMA952XWaADAAA=", "base64"));
  res.end();

  return __filename;
};
