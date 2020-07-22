var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/coursetypes.. : 202 6880us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/coursetypes.. : 200 2654us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTPU/DMBCG9/4KKys1XGwnsTsiFhaQUDfE4I+ziNTYUeIOqOp/x0nbhVKBCh5O8vne092j17sFIYWN22HE9UePY0FW5JXscjbnWzddC19BzRElNaW0VAAz1IBVtDTgFXeyasAUy4Mk6A5n0XPYtAFPaYejHdo+tTHMr0+RtIH2OIwxEBu7PgYM6VTdYdJOJz2VHkaZhhxQJ3QPOcwtGDCg0FDG1sBXgq2EuJV1dQP5HBtl1bZ3v1fNon2O++UXBMArQNaU1DkjqXDoqa61pJpbLzyUxnh3AcHdYyCHRS/BuI/pncS5mOjgviMz/h1NI69Bc1JdRqPKSoCQhvJaZTQMLdWV1dR6i8aDQFDiDM2PTLJBjkT+0R3qKneoM3eQt6lDkWLSmxe0cXDzv+GL/ScAAAD//wMAZ5xzLE8DAAA=", "base64"));
  res.end();

  return __filename;
};
