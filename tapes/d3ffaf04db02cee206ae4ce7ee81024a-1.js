var path = require("path");

/**
 * GET /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/574e947b-5cdd-4876-b477-45ff145a5959/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9 : 202 7194us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9 : 200 26112us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWz2/bNhS+968gfF1okxQlkrllSbsGTdpgc3cZengkHxNtsmRIcrMg6P++J1u2vDQFGuy0YT4Ihvi+73u/xcdXjM3KOGOnbGZMSlnMPM9DEFyj1NxDzHhmAVDlQYbkZicDIDSbtsOrsuvL+vZyh3bB5QFB8ELnGdcKJfexiFyACMIV0Xivd+iyx9UIkkJEKXziKomCayC4R5lz4V3uVXTJYbaXXJcYLwk6AB/pFb300IYm4k5f0G9rSwdktm5aaB+umgB92dSjXgqx0IFcK5zLubZJcKsFcutSAqWszYz8JscH/zuGfpKfMvcCWgLVsNq5fA1lza5KP4hMx4eI3n1cnJ8vLi4X19Nh2Z2Fvvy8NejbDU4HNRWj3xzFSg6gEAE45NJy7bWj3ArJRZHZKEBDyM2RKqzWm26EFiokU3jDQwCKJ2YZd0oajjFpRXGC1XaCVrsIRmwejbUiQx5A6EGWHEBArkKReac0OeMn7LotV4T9BdvPZcCbpqy3CZ5loIXNVeTaJXrEpDjI5HiBqtASCnQyTSzdEfwydgPDb9/JwT5tSb6MRV9ju4Ia6/4fNM5XHP83zn+/cSiH1S77Z6xDqn9fBnaPng2OYrvvjdDUfVv6Td+0o9rjV9U9q/umLpvNCfupLW+btuyOa3zALx/WuE87Che1idzlqMhhC9xm0vNkjPEWUxGt/CbHEv/cpe5Zi/fk1ZGS8k5TPSRPARw1rKPUmExwqhvmiroWFczGxDwT2q9Qs7fQrrDC+oS9aaH+418ZG/u0n/WNr8rdlD8p5/aku6PSbyf2csluWuyOSrmuIOyycg4r35bxFk/YNXTdnE1GEXr8kG7+rjILSgg9GbXN2Ho3B80nbgaoqveblR+9Wb7Lpcjn1lqZszk7yy0bGNmbJbt+fXbxet+tm7bc2t/1/fp0sbi/v59XTZjfNp8X5E0s20XfhAWGci2MtAviMEIJrdz8rl9VexasNzQBk/cTe7XzBnyFrElsKA2tzY41dbXfa9v9BHXYFyn3KTMCaU/SiqF2cIFbhZrn0gjwCgRk7in0bTuu2+GFOPyU2hveNVWkm8x+i2GWUiFpd3kHQ8vpQPMfHI9B2sJEWgjSDRnezv7xPQHq43ZCbdHIjEuT6EIU6B+4ZLnKrM69V5JW6ex5hqcfjP3n4rspj2fuZ4QhONY2zWryeoU9UHPBkUhokbotXtBjp0a15MJwZZdSnubilFpGSfXD8UVrxPz48JFW6SF93obC5NwHI3juwXLa6557nzxAFNHDoUSbdXyx5oh5ueYQ/KsvfwEAAP//AwB1PSU38woAAA==", "base64"));
  res.end();

  return __filename;
};
