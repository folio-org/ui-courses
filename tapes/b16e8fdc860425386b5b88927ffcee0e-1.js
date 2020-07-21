var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 244
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 21 Jul 2020 16:07:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings : 202 6811us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings : 201 4866us");
  res.setHeader("location", "80939663-9486-4382-a5f0-a28a5580d0c9");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTQPW/CMBAG4L2/IsraXnX+PrMVdenUhU5VB8e+VKmAICdIIMR/ryFB7YoHD371+PX59FBVdZfqalHVhF55axV4TRa0IgnBtAhBUjCGMGH09dMFZP7uhjGH/DbJ/LIUKKaMDyPnbVjP0eFftO5jGLt+O0dtTFZHFmC9N6CpVJFGBvJtG6QkUm6G5cbNDXknpPQaJCoHWrcOCK0FKWxgbzBKGycU+30eeHXc8Uy9MBo1NaCsJ9CSY5kvBoht5KZFzej1RLttmW4fxz6/Nz8cx+HiP6uva7jhMaQwhsvZqRxcqjKHkdNr2a5NEiUCuvKolbALdAtjnq3Rj1jWteHPLI8fA9/+saGgWkIBxC6C0cQQGlTQKNNITslLZ29+v0t3d87m/s7Czw/nXwAAAP//AwB5jwnjLQIAAA==", "base64"));
  res.end();

  return __filename;
};
