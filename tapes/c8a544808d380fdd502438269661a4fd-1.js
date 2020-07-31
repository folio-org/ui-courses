var path = require("path");

/**
 * GET /loan-types?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/abd88c4d-8de9-46b8-8291-0ccf916fb89e/09427a84-6777-487d-bdb3-75235f4012de/5b839674-34d7-40b9-aa7b-690a4668c09c/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/loan-types.. : 202 6909us, GET mod-inventory-storage-19.4.0-SNAPSHOT.455 http://10.36.1.15:9168/loan-types.. : 200 2388us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTwWrDMAxA7/0Kk+vqYVtObPe6fUG329hBsZVSSJPipoNR+u9T0nWDlcJofTC2oifxsHKYCVG0PXbD55Z2hViIN3HgGEfXabwWpg42VqBlEzFI64OR6EBJBUSlCU1DxhXzE9LhhiboCTsR1znuWxzo/HVDAyYccMw49eBgzMQp6XnMm9opw7WdBP2qYAF2AeZRB3hQvL4LMbXfpv9TE3Tk/Tj/60bWk9MgtWtA2sgnDI2XBrwt69pohfbCbUmY1t1K5L7f3K1mlLtB7Ye6roY6RR0JZCqrRtrkUdY2eL6mytkYIxteqL1QS5Gb36+lq1u0ztR1LfI1aI2VBH4daaHhaTRVkCkF0CrWJim6nMZ+n3ckMu0of/CU321nylvsztSvnXgfKxRDP2C7pNjnNP2Cdnb8AgAA//8DAF0XdOKYAwAA", "base64"));
  res.end();

  return __filename;
};
