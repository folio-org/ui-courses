var path = require("path");

/**
 * GET /configurations/entries?query=(module=ORG and configName=localeSettings)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTIwNiwidGVuYW50IjoiZGlrdSJ9.VEA8ID_FQfcqIMlntaG-O8FSdQrpCEXytIUWBtOz830
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:40:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/configurations/entries.. : 202 7126us, GET mod-configuration-5.5.0-SNAPSHOT.76 http://10.36.1.55:9131/configurations/entries.. : 200 5693us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQSs7PS8tML1ayUojmAgAAAP//lJBNa8MwDIb/i66LO8cfzcetpVB26WBdD4PAkG0VwvIxPGejC/nvc5ruuMOEEEg8el+hEWoHJUjSyhSFZVLqnClDOctTlEyjzrmSLltbAQm0vRsaivzj0z62i9AB23nU9BYbOlIIdRfFE6AOTUNRPfiBEvjEZpi5sbqhFZRVhNh+W0FSQahb+u67ZbxpydcW7w/09frS+7crYQfvqbOXK3E67iqY5psooMOAUI5gPWEgt4slOgkuOOMZE+KZqzLlpdCrtUjveIz5+gXeXk4f5B/mLxT6bJXmhgluBNPcZQylsyw3RiqFZyq0jIvDu/vDJStjSr0Sqfh1ucH/dZmmHwAAAP//itUBxVVJfkliTlBqcn5RCijCDHW4AAAAAP//", "base64"));
  res.write(new Buffer("UlAqSi0uzSnxzEvLB4pUoykx1FFKS0xOLQEyo2N1lFIyE9Pz8otLMpPBArVctQAAAAD//wMAUMWfNgMCAAA=", "base64"));
  res.end();

  return __filename;
};