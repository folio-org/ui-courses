var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 7222us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 3725us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTQWvcMBCF7/kVwtfshJEl2bKPIZecAm1yCjmMpPHW4NiLLbeEsP89sjfbQjYLoa0OAunNewyfRq8XQmS7cfA8TW2//R4pzhNPmajFo3hNYpLbsBwzaayhqgqAThegrVNQkcpBo8FGoqqokNnmYOnpmVfTbS88ReqGbUo/qoEnP7a72A79WnTNSTzWzRzE2G5/RNEPv46OZ44Ukr6UH7pKl35kihxu0rbG5JgjYAm5vUdVK1MrfaWlusS03oOSa96Fcy4pa1PWqK4wLz93Xb88TDzeHoCwctYXpQHnSwTjyIJF5cC5xhEFDI6qbA3Yp32/+cCTbMh16S2wpQY0yQKskyVgVejSFoqV0ic873oxjIHHcyjvFpHDRrh5ARjFC0dBP6ntyHX87zhRfx3nqes8DOua3JIvgLwPoE2iapuGQBVp6tCxtOZ0uL6xp67jcA7GURfUBzH3/w+DquRfYPjt+oNBPC0JWRzS6Kdu09OuX09d7N8AAAD//wMAYYm1UpkDAAA=", "base64"));
  res.end();

  return __filename;
};
