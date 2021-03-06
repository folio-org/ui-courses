var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/processingstatuses.. : 200 3252us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTu27cMBBFe38FoTY7Bik+RKo00rgykEcVpBhxRhsBsrSQqASGsf8eSpttslERJw0B8s69GBzOvN4JUZymMfI8d8PxY8K0zDwXohZfxGsWs9zRei2U9RZDIJCNcWB8oyGgLsFIK1sldUCnisPFMuAzb6bHQURM2I/HnH5Viec4dafUjcNW9MBZvNYtTGLqjt+SGMYfV8czJ6Ssr+WXrvJjnBgT0/t8bDGlLBVIDVJ9kqq2srb2XhrzTspayl9J2bacaM+mqtq6ulT3Jugd28PL55mnxwuS1jSRyEnAYAxYHSyEqCNorNATVSYSF1vAOZ/nw29Ec01pquiBPbZgUDnwjapABmcq7zRrbW6IPg1inIinPZhPq8h0EM2yIkzihZPA79j12PT870Ct+gugf7Dt4/BNW3qMDjBGAmMrC75tEbTLkycbVt7eDtgHjtj3THs4rrrAgcQy/E8Q7m0g3A0I8XWNKNKYFyD3m793W0B9d/4JAAD//w==", "base64"));
  res.write(new Buffer("AwC0wPfLnwMAAA==", "base64"));
  res.end();

  return __filename;
};
