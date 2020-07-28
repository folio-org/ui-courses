var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/departments.. : 202 7350us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/departments.. : 200 3612us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPWvDMBCG9/wK4bVRkCXZkTyWdsjQpU2n0uGkOzcGf2HLQwj571WchkLTQKEaDu50z4t40GHBWILUwxAaasOYsIK9sUOcxnmFpzZJszw3OvU8Sz1xjdpzAGG5IJCpE8IKDcnyjLTQ0Aw9xsQde/EVtZ7GyzXS6IeqD1XXzlvbHbExTLhnXclCbPoaWgqX9YYCIAQ47Z7fFId+IAiED7HMGVJIwcWaS7MVqlBZofRKZeJOxPMVFKmpx1tUmhZZXmi7snr9O3W/fx1p2Jx1kHLG5+uMO78WPHNguBHKcedKB4ACHdhkDjjGelz+tFl6m6ZSc48SuC6BuAXSXAuVGzTCGolXNp8gymkgVP6myk3r6wmr9oO5Lprvp4EYtMig7+uKkEV6N/5frLJ/F3tNfWth76eEJHQB6mfy3YDz35OL4ycAAAD//wMAbYTNN5MCAAA=", "base64"));
  res.end();

  return __filename;
};
