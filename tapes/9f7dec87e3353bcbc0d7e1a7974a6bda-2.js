var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:55:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/copyrightstatuses.. : 200 3035us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUu27bMBQG4D1PQWhtGPB+8Za4S5egaNqp6MCrTUQWDYoOYAR+91J2k6GOhrpeCEg8/4H44YivNwB0Lm/3Ja3W9amauhvD2IEF+Ale217bTX567BDjBFOJoFIiQIZ9gCbaADk3yuoYpCKmuz1FBrMJx9B934Nj5xGUMIbyEvxbjQ+jK2lbUx5Opa6ml9Dvge2ze07DCtR1ANuSVy05ghzB6Na5N2Vcp+1bk02oxptqpg6nz52OU4KpwX9uy7EzQQRDRCAm3xFdELQg8k4I8QmhBUJ/OrXYbuvnYlguOG/Fd0zImdjD/kc735eTlZRUBsw9lMgKyD1H0FAaYWTSW40jwU52xwaHth5u/6Y2XCvvHCRURsi8ZFAxxqA2rmFH7ZlRZ9TLJXjYz+EuJ5LGC5Z5s8nDCEytJdndVAD65MIwhv83pewfTD+IzYsYrLhgLkJlFYWM+YbhuIJWahqxp15y9rEIfFxehDLkAbr2PhSXTH89I64vMnqPzRtZZYNlKEI9/ZbM8zY1ro0f8lggIZkmxs4awaf7azCNa1PavdCn53A9MsYvInuPzZNFK1Tk2kLNUCNjwkClqW8LEtpjbhWiZ2Rfd7YdDfi8MWmYQ3vM4P1WbWDA9P0VZodcNjvkDAL8mlp0NVfTfwsuF3+88/nN4TcAAAD//wMALqhL1REGAAA=", "base64"));
  res.end();

  return __filename;
};
