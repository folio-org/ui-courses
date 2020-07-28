var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/copyrightstatuses.. : 202 7082us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/copyrightstatuses.. : 200 3663us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUQW/bIBQH8Hs/BfJ1fRW2wUBubXbZparW7TTt8B7g1ZptIptUiqp892Fn2aSm1rYsPiDZvP8T/GR4uWIss2GzG5pvT/ExYtyOfszYin1hL2kuzTZues24kEVeKg5aVx5E7jxgTR6kRE2m9koXmF0fIj12fg7dti2bO49s8KMfnr071jg/2qHZxCb0c+kDxiH0rMMd60Nk05oYRoZte0x0PqLDiFP5YW3T2geP0bv3aZjbFLzgwBUU+hMvV6VcleKmMOYdT8/PRim13bilVJ6vpFoV+U3a7Nupu93ntJUPBxZfkraVkkA22UhCDZqXBEQ1ITruCE02N9incX/9WhWl0c5aKEpVg3BKgBZCgEGbXGvjBOoT1fWa3e2WHNcTSPPs2Tp0XejHhBiHhrZTAWsb6/vR/7+oXLD5u9SyB+ZaVsLWoEmXIIRLFFZqIGXKOnelU1K87QH367NI+tCDTd/9YBtsLyek/+GfO00tC5EmT4LXYKbTJ5xMf4ylCrjLK14pYQqkRSF4vL0E0viEQzr+bfPdXxCMnwXG/wRWU6VraQiM4AlMVAjalC4NvDIul5TO6wnYw5bSxpgLHTb9Etl9YL+uzovdVSo/h+GY+s3Avk4dshgith+9DYObr3V5tf8BAAD//wMANu3YJ/QFAAA=", "base64"));
  res.end();

  return __filename;
};
