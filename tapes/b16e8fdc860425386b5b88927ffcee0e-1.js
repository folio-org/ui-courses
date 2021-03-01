var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 244
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings : 202 29874us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings : 201 4919us");
  res.setHeader("location", "79702b52-0d7e-48ea-b7ef-a4e74289f000");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTQPU/DMBAG4J1fEWWFQ2f7/JWNioWJpUyIwbHPKKhtqiSVWlX97yRNKli7eLhXz73ynR+KomxSWVRFab1FWWsJmCwDOQ5QW84QiC1J5zMilk8T6Pi76YcudG+z7F5WAsWc8XHgbhc2S3T8F23aGIam3S1RjslQZAHGez32ZQRHyDA25SClc8oucNy4vSFvhZSeQKKyQJQtODQGpDCBvcYoTZxRbA9dz+vTnhfqhSYkV4My3gFJjhB0DBBz5DojMXqaabMbf3eIQ9u91z8ch37yn8XXNdzyEFIYwjQ7j4OpquMwcHodn2uTRCkAFaBYC1tpqrR69lo/IlbLCf/Q6vTR8+2QmeqYkkEIngi0Gu/io4qggg0uJUsx8c0f9un+0gXdXzryy8PlFwAA//8DAJlAM44vAgAA", "base64"));
  res.end();

  return __filename;
};
