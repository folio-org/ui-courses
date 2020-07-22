var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326 : 202 6759us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves/6601c6ca-e252-484f-b39b-90e222225326 : 200 28097us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWwW7cNhC95yuIvdbcJSlKJH1z7aQ1YidGs+mlyGFIjmy2Wmkhae0YRv69o9WutXEcIEZPLSoBgiDyzZuZNzPiwyvGZinO2DGbFYWQoQjAUeWKa6tL7jPnuROohivPVDE7GgCh2bQdXqSuT/X1+YiWwWL04Dn43HMd84JD5goufNA2RMwggxGdelztQEZJ5aEAbmMouc5Bco8OeFkCWG2C1irbU64TxnOCDsAH+kQfPbShiTjyC7q3e2mBtq2bFtr7iyZAn5p6x1eGWOiAkhfO5RRiKbjVArl1xKiUtZn5vo33/k8M/UQ/Ze4FZglUw2p0+RJSzS6SH0im5ceI3n5cnJ4uzs4Xl9Ni6k5Cn263G/p2g9NCTWL0m4NYyQEUguSEXFquvXaUWyG5KDIbBWgIuTlghdV60+2ghQqlKbzhIQDFE7OMOyUNx1hqRXGSNnaCVmMEO2wejbUiQx5A6IGWHEBArkKReac0OeMn7LpNK8J+wPY2BbxqUr1N8CwDLWyuIteupEcsFQdZOl6gKrSEAp0sJyvdAfw8doOFP37QBvu0NfJlJ/oa2xXUWPf/oHC+sfF/4fz3C4dyWI3ZP2Edkv59CuwOPRscxXZfG6Gp+zb5Td+0O7aHb9Q9qfumTs3miP3SpuumTd2hxo/45f0a92lH4aI2kbscaXJHSwM1k56XxhhvsSyild+1scTPY+qe3fGOvDpgUt5p0kPyMoCjgnWUGpMJTrphrqhqUcFsl5hnQvsdavYrtCussD5ib1qo//pXxsY+7Xt946s0dvkTObcr3Q1Jv+3Y8yW7arE7kHJdQRizcgor36Z4jUfsErpuzqZNEXp8X159zTILSgg9bWqbXeldPXI+cTNAVb3brPzOm+XbXIp8bq2VOZuzk9yywSJ7s2SXr0/OXu+rddOm7f6bvl8fLxZ3d3fzqgnz6+Z2Qd7E1C76JiwwpLUw0i7IhhFKaOXmN/2qmmp+fT/GSS9M7T9jvaHGmIKaSKvRSfAVsqZkg2I0TTvW1NV+3G3HFtRhr13uy8wIpPFJk4eqxAVuFWqeSyPAKxB0FtlDb5oq0rllP7MwK8tC0qTyDoYC04G6PTgeg7SFidT+0g353Hb64akA6sPiQW3RyIxLU2ZcB3oDV1quMqtz75WkwTl73sLT38P+5/DDJg877DeEITjWNs1q8nqFPVApwQFJaJFqK57RY2Qj5bgwXKmlUMfaHUs1V8b+JOh6VHLE/Hz/kQbnLnBvISst/R7I18BzcplOgIKymeVeYYxOmeJR2nV8MecO83LOIfhXX/4GAAD//wMAdYqZduEKAAA=", "base64"));
  res.end();

  return __filename;
};
