var path = require("path");

/**
 * GET /coursereserves/courses?query=courseListingId=="6299e969-9c44-4a6a-8c3f-501037a68bdf"
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
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 6911us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTW/cNhC951cIuja0SYrix96cpIdFE7dInFORw4gc2Wq1kkBRRozA/71cSbuWvWvDC6OX/dDMe5w3HD7q17skSW07+B77NFklfye/4pP4rHLbv6m2eUkzUMRpWhKhURDQ0hKrtFG2kDKTIn0/QRrY4Ai6AO9uwf+bFB7RVc31LsNhb33VhaptxsSrG0wseEygcUk55SZtmYShGOrKYRMgxLr26A582MSn66k4lkupBbMkZxaJcMISAGoIReCsoNRQAYfgP4t/0IYtwST1QewJfEu5v0fim+SbrbCx+2qPqF03th5GidfY1u313fukw+DHn2MHOqgB2yaMTx54NhjAQYBlydtd8xi74z7Fj5GeU84I5YTxK5qtOF1xdSZ1/hulK0r3bBE4dO45IFMrLlc5O6OZfBb44e57j37eA6UyhSx3RNFCktzllECWlaQUyhWGlZxZlc4U9+P3/bwj09R9rvoQWzKzSW4MGmmIsUIQARKItpEtp4xmCqQuXJkewz+/qSdQRpDH60joYSfPX3xglD3E8WdA30A9h38+Cdethe1+z+HSOiksMiKNyePpKSnRgiLRpiyBc60zdQR8qOVBzUmMyyH9AlWTfK6KKO1umWBbNyX88f3848fzT+vzL8tw1V/YUN2OKcEPuAw1sfNhWMiNhSClFgjkTBNRCEMKpHG2ZKYdBQE2V4/Whk039Putt6WShSLWQlTmsowYzhRBVwoeFYMWegmuJy0zOndKa5ohsUDFdulYBAISbmVWGC5iQcUS3flqE9Hf0N9WFv9qq2ZseJqBoDrnjghTxg9XcgKsNEQil4KBxDjSS55+QbB2s4W+jiX5sTsW+wmIs7XZjY5RjHMjCI9TSoQoFdFUSsKZBDQ5tVza9BHwxbE5hW05Nle+aqpwl0SPeGQFfYimt3QQSmLfuVzmYOOeZMQFaXqgejrIV3cdztoNywUVuiCZNHGOOEYfzuNY2dJiUVKB1Ij0CPylDpzEuezAuoku7fvo4YvoU2u/bJO2qasmXmftpmubeM0c6tweGD/Y0Pqp0HlafrzB6KNf53yVsbNc6kO/noGn+/WrL4sXFv8/LovLYVOgn94xFsYbT6HdbsXl/gWkxu5mFzzW1Vf1VGfmiay3d/RV/Tyy8Nu6ue3l/TRoaWgD1F/Rtn6yK/bu/j8AAAD//wMAzPBRJQUKAAA=", "base64"));
  res.end();

  return __filename;
};
