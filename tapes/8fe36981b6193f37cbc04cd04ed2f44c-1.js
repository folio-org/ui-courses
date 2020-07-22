var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:38:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/terms.. : 202 16150us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/terms.. : 200 3926us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTsU7DMBCG9z6FlZUess+OXXdmYGFB3RDDOXbUSEmLUjOgqu/OJaUgpVSg1oOlu9//+fzJt58JUeTUd7tCLMWL2HPMmSYOYUFUeop1DT5hAON0hAUnIGAopQ3GlYTF/GjZUJdG02PTUv8hUKI8abtMfX6gfDwwKCAVKH/S0yZOVA3KnNQuZYqUaZCP/XGy6hM7pjYHiCuplwaXxtyXuryTvL4Ksev9Lf7fNZoOvB/mEy61dwrRG0CpHRhTO1hIawGVpeRLWaGtzris+mbT5L/BcFV7GQxfIm8GY6W9Asy36zKYKqoUXIqAjt9hgiXwA6LoakUMVtU2nIF5aqo1pbajHbP5+RRTNsqDkqD072wGFbnj29moq9ioMzbidT4O1zZT+5yqbR/HGdOzwycAAAD//wMAisxd2nUDAAA=", "base64"));
  res.end();

  return __filename;
};
