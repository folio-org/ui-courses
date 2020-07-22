var path = require("path");

/**
 * GET /coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
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
 * referer: http://localhost:3001/cr/instructors/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc : 202 7102us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc : 200 12735us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVy27bOhDd9ysEb2+ZUCRFkd6lj4Vx29wCdVcXXQzJUaLWlgRaCmoU+feOHo4cpy2c1gvC4PAczjmaGX5/kSSLMiySZbIQYFKRgWQCnGIKM2CQecmcNyENwIs8+MXLHlDBFgfIFcRwB/Fr4iJiKKubMR5w52PZtGVdDcfWt5h4iJhAFZJiPJnURdJ2rtuUAasWWtwdsA3Edkt7qzGtNNPaqNSzLPXIVFCeAXDLOIJIHeeWKziF/ue+oG97+HcKzBLP5joW+ZZIb5OPvsTKT1n+ROOq8ptuEHaD9aa+2b9MGmzj8HfQ3cAGsK7aYefAssUWArQwp0qbPiL5Ed7QMn4YLjjjORPpmsulzJaZvjBc/cPpNxERqmvC+agBdE/r/eCcr7u4w3flriUBB9+9weDAMXCZI68yzUBazbjzyviAEuTk+yP0L60/l44gEW+ILEKcUolXr1KeHqL4rcVYwWYKfnsU3NQe+m8yBQsftPKYMm1txpQpODOKIzO2KEAIY2T+BHqqYNbwDLbjAnoPZZW8Kx0J2s9hX4cx/O+ny9evL9+sLt/PwXJ35dvybjjQxg7nQEUut92RREoAOfd9s6aGKacsc8hTxrU0gYMCn+VHt8K26XYTVAtf5NrlzHsgPUFKZkWaMwyFEqQTjDIzdDMqmLBZyI3hEpkHrvprKQEEZMJr6axQlIybsU0st4T9iPGu9PihLqvB4IUExU0mAlO2oCUUgkFaWKZRaJWCRpsWM8vuCL4Ku57h/zM5ks9jyU/fmipoeygRm6dCWMUElzlTqsiZ4VpT32hAm3EvtF8cwX5THuczHZfHOpZV2e6TvmGPtLY0dk6amZj1fAKr02anqw6tPSU8tuZ63+Ck1qaZ4so4JrWlahHo+yEPzBceXcEVcqsWT8C/1vwMvmPNq4qmY9zR7HyInQ7U6zqpq01Z0dNRb5u6orH+WFvfCrHzbR3H9KZ6+PxHo1WsuVgqs8zkhc70yWidUK/2n6gCJyOdAVkY6jODOb0nyiBNNk6vpcycwBCsyPUZw/m3906o59/70/F+3W0dxvHdfhiZ1FO+t/z64UnfYHM7hp46eIZ/6kLKR0/T37p3hndP7/wb5+5f3P8AAAD//wMALxIsohcJAAA=", "base64"));
  res.end();

  return __filename;
};
