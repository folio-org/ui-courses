var path = require("path");

/**
 * GET /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/instructors/cecaa1aa-eb01-4ba5-9fd2-1ffcdf064e02
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
 * referer: http://localhost:3001/cr/instructors/79702b52-0d7e-48ea-b7ef-a4e74289f000/c62e7511-dbe4-44e5-8592-9777d409ed42/cecaa1aa-eb01-4ba5-9fd2-1ffcdf064e02/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/instructors/cecaa1aa-eb01-4ba5-9fd2-1ffcdf064e02 : 202 15188us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/instructors/cecaa1aa-eb01-4ba5-9fd2-1ffcdf064e02 : 200 1959us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPsW7DMAxE93yF4bVlQcmUZXkMOrRAx/YDKJEqDDhxYTtDEeTfa8cGOmfhcId3x7seiqLspCzaokyamA0zaEQDFNlByGLB5JwkY02KtnxegTOf9I68dX3PoxZH7fshbWbkMQ2y+cZW5DY5DZdx0o9umrvz9/vW6INHG50FFK9AjTJErxmY1JNtQkbEjT7pzMIzr9h1EdbAUXlWeV3OPcyiNYAVoPk0vnXUuubF1+YJsd1T/qHj79ek4/5FpphEagQOROCqsOxOVYKKPTcintKyZucvP/J46Q49Xrrgt8PtDwAA//8DAG7+wVekAQAA", "base64"));
  res.end();

  return __filename;
};
