var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:08:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/departments.. : 202 7206us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/departments.. : 200 2276us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSsU7DMBCG9z6FlZUa2Y6TJplhYGABNsRw9V0TS4ltJe6Aqr47rgtFgqUCDyffb38n65MPK8YKpABznMjFpWAde2WHlKbc4qkt5M60UirNDSrgegfEWyDNtSjrBhvRNgqL9RlxMFGGHiEONEG0Zvk6Q1rMbEO03uUrD86Me7SuZ1sfBxb2MzFwyCCE0RKyRA8XeKIICBFO5Pl5KTQzQSS8SyVPVEIJLjZcyRdRdmXVVfXtpi1vRFqfgxK1D3g9laFjqsf1Ty1VXTdaGl5JQ1yjNhxAtFwQKLkVohUafmm5T6IH9mwsOUNXmOnJj75/X7NAcc7brCjACORdzMm/FTVC/0HRhfpWxN5OE4roI4xPZPyM+UOp1fEDAAD//wMA70GS4WgCAAA=", "base64"));
  res.end();

  return __filename;
};
