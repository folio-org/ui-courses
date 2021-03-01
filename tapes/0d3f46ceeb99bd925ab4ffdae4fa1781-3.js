var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/coursetypes.. : 200 3033us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTsU7EMAxAd74i6goGp0napiNiYQEJwYQYktgRlbikasuA0P07bY9bgAOBWCzF9rOsJ+f1SIgi5Odh5NuXnsdCtOJevM7ZOd/R8iysNBp140FVtgFdcgBngoMQA/uImtHq4mSHJLfhFbpMoudhzGlfIR7D0PVTN6eWhqsscnrqEouQN31OnKZ964YnR25yS99ulWXJgd3EdDGHlS+xlIAKUN6ibA22xpxiVR8jtojvk2bsuadDmKxbU7WoTmt9CDt/uRt5uNx5iNoHogrBWa3BKGvABhVAudo1RLUOxMU6YDvH7ckHjdFgpZgb8LIJoLH04DFYkB6jVdSYGv0njderom8cdgl2nv9TY61/ofEL7LAEVAa5rCUQ+fmWiCO4yjXgVIg6ovQ+0gEJZz+e1HmeHvdH5RJ95Wb8Bzn2b3LsJzniYRlRTHlyTzcc8kDr/1NH2zcAAAD//wMA5IaSgpcDAAA=", "base64"));
  res.end();

  return __filename;
};
