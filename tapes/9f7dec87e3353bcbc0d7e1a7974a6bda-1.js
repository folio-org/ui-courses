var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/copyrightstatuses.. : 200 4159us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTWvcMBCG7/kVwtdmgmRJtuRbsr30EkLTnkoPI43cmPpjsbWBJex/r+xtUmjW0KR7GZA078vMw2ieLhjL/LDdj82Ph3gfMe6mMGWsYt/YU3pLrw3Nx4wrnQtZcjCmCKAEBcDaBdAajbN1KE2O2eVR0mMXFtF127LFeWJjmML4GOg5h8Lkx2Ybm6FfUu8wjkPPOtyzfohsrolhZNi2z4ouRCSMOKcfa5trHwPGQB9TWGxyngvgErj4wkWleaX1FeflB84rzn87JdluS2syUVbKVLK4KmW+IrvZf03NfDqCqZXzRAUHtEqBllaD9dKDxBINUak8hWwxOKR4uPybK2pryHvIZVmDSvlgVDKy6BPZ2pJC84rrZsNu9mskNzOS5jGwzdB1Qz8ljHFs3G5OYG3jQz+F/2SqrqyRb2B6QrZOBIXRhfI1GGckKEUJhtcGXGllLUhSqdVpInC7eReUfujBp/sw+gbbMzGa525tgP5Rts7IGRec4jXY+Q8q0mlqvCuAkyh4USqbo1tlBPfX58A0PeCYlkDb/AznGysr3jVWL7J1ZLUrTK2tA6t4QqYKBGMlpcALS0I7w+UrZHc7l1pjNHTY9GvQbgf2skLPs7Pmjt6ys07I/oBg32eLLA4R28/BDyMtC15fHH4BAAD//wMAV/NHrP4FAAA=", "base64"));
  res.end();

  return __filename;
};
