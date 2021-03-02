var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/terms.. : 200 1854us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTPW/CMBCGd36FlbVcdedPnLlDly4VW9XhEjsiEoEquEOF+O91ggAVWqHCYsn3+vHHY3s7EaJIse82hSjFm9jmfq60YegWjXckpdcgUTnQunEwQ2tBkuXoDdbS1sV0j6y4iyM079tVm76ERImHcJO4T0+c9iOGBDDPag95XIWzNC9ypLuYOHDiId5vMBfrPmbiB0aACpDmSKXB0uhHT7MHxBIPM2Xs8yP8AxupXW530zM1zMZzaBrwUVagnQowywWoZGXQVtoZlhdqntsl99fNEJD/24wC0vebMbeZMdfN1IFi5WIA6fId68oy+OH5BNcQG2WosdWFmZe2XnBcdrzJdk6nP7dDHgiB1O92hlQCuvvtWHOTnSN2siPep+MXWydevsZ63Yfxp6nJ7hsAAP//AwBMotkvewMAAA==", "base64"));
  res.end();

  return __filename;
};
