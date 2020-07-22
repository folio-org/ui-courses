var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 283
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses : 202 7017us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses : 201 5689us");
  res.setHeader("location", "b5d06488-418f-4c65-a440-4f2613619e6d");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPzU7DMBCE730KK1dY5P/EvVFxQUI9lQdY22sa0aSRkyChqu9OmrTAtT74sDPf7M5pxVhRx4KtWeFN5FZXFWhRJdDBGkCtOegkrVBWOLKxeLwALTY0I8+Y4xfmT+YzUazbj0WP1Idcd0N9bGfbbk8sYCaGbWRpcbJjYsPox0MdqR1woP7GdpiHZpq9LmcJY22lRQAjAoGOOgAid8AJpfCcO65xQcNxzD291f0w5V/pkBRVohJgy6BAW6PAEQWIXgajKWqXzH96Ozae8lJuI7hYtJ7Cpcz2t/eBuv0iNTRgxAEv89M0uCRlmvrEl+mb3ZJLDrwEKXdCrZVb8/LJOvvApzeH/DGb7/ee8vV2Z1LQhnuQ3EswPJaAKgaovFdaYyJn1I0fu3j3zitz/84JP6/OPwAAAP//AwApLqJ8PAIAAA==", "base64"));
  res.end();

  return __filename;
};
