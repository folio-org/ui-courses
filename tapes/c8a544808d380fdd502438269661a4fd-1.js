var path = require("path");

/**
 * GET /loan-types?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc/6601c6ca-e252-484f-b39b-90e222225326/7212ba6a-8dcf-45a1-be9a-ffaa847c4423/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/loan-types.. : 202 21719us, GET mod-inventory-storage-19.3.0-SNAPSHOT.448 http://10.36.1.174:9168/loan-types.. : 200 2119us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTzU7DMAzH73uKqFcWlK/mY1d4gsENcXATZ5rUtVPWIaFp747bsQsVCG05WLGdv6Nf7JwWjFVtD93wucdDxVbsjZ0oRtFtGt0KZIoyouaptpmb5IE3Jnhyk3UmxuhNXS0vkg52OIlesMU4YLomdjhAggHG5KU8BWNBoDPPZCaREkpw4biSr0KvtFmZ8Gi0exC0vguR6rhP/1dNojPZ8/IHFvpGSwmW60ZJbnRWHJQNPKWgpYiNSgJnWE/9sRyQFTxg+aDnupuuVrfQXVW/0yk0Hp3UXLqsuYm0g5A9V5q61RCxADOjWyOkbbdhpe9396NZewvaVfUHWhNMtFryHCFw4wM1zmmqpBFrFXJG5eaNg47FbYnHdrz9bjZ301C62VCy97FCNfQDtGuMfUnTFzSL8xcAAAD//wMALonrnpgDAAA=", "base64"));
  res.end();

  return __filename;
};
