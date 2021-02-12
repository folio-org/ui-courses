var path = require("path");

/**
 * GET /loan-types?limit=500
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/loan-types.. : 202 27802us, GET mod-inventory-storage-19.5.0-SNAPSHOT.534 http://10.36.1.253:9137/loan-types.. : 200 2408us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTzU7DMAzH7zxF1CszSuKsTXaFJxjcEAc3cdCkrp26DglNe3fcDobEhBDbJfLX39ZPdvY3ShVNR+3wvuFtoRbqWe0lJtFVGt3C1sHFEg3kSAGcDxaoQg0amec25My2KmZHSUtrnkT31Kq46uOuoYG/smseKNFAY8VxhgRjz1KSHsa6aZy2BrQFY580LqxeaHOHGm+1WPqzk8h2m/QP2aQ6yHuY/aRj57kyCKbKCC6KRSF7sOjdvK6t0eTO6JZMadW+qr7r1tfDGX8R3En2OxyZFE1khDQvM7jkCWoXvLiprFyMURjP4B654SjTrwfDy7aGf2+NfY3GUAkoGwKHWW7SlgFSCmh0rG3SfH6T3a7fsup5y/2b3PrVfK68iO8k++ZTL2OLYugGapYcuz5NX9HdHD4AAAD//wMA952XWaADAAA=", "base64"));
  res.end();

  return __filename;
};
