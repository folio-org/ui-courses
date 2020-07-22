var path = require("path");

/**
 * POST /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 143
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves : 202 8901us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves : 201 60201us");
  res.setHeader("location", "33af2fd9-8830-417a-b9e4-5155fbb21f5e");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTTW/TQBCG7/0VVi4c6FT7/ZFbA0IUqlKhckCIw87ubGvh2JHtCEWo/52N46Qft/pgWd55Zt55Z/bfWVUt6rSoltVCypBFTh6ckwwUtwHQkwLNtc6IgmdNi/M9ELttP9B1PYx1e391oHl0lDAgBNQIKmkDQXoDDKNyMZEMMhzoeqT1DCWTbeQYIAhpQRlN4BUlyNKS5xiNwnQsuakpXRV0D/4rv8pPDH3sEk2plJbeWcO0kk5OTAko4ZuuD/3uuothrLt2rptjMioSB+O9BuUyA6cYgfM5ByGKAZYfc2yoX4eW2vFVDi1j9tpkiDzlYhdDcEgBhM2WixiDjeykox6bg8xVX6d7GqsvXUvDu6FaBdwtq/GBqlSHvqbhiMSuHfsat2PXD3vy19x0OWrD+pDsU01NKiM4rz5TQ+2MvoRvSvDdbkOzaoFeRSM55Bh86dwLCLaMm0kiLUr7JMJiSvNY/T46sMWmPvT+Ssl0MjxQP+W+bHJPqbq8qL623SY/ydk0IR4U39Df6mfX/3k6S2Gkb/n2ZYmFYNy8lhFD09xs1zhXu/1ehm0urpR2rlpZ5asJOtm32U1hH8pHdVqIuh3G0MajGzZj0skpMCJxUMUZ8FFpMBG5ld47nPevoA/d5PVwXCG0aFnmgM47UF4oCN5zYKSw+CsQdd538Dit77NFDO2zcZBDyXkwIMv9AiVzGYcwHlLykrOIIrH5zq1pDMWr8Gz9Y0/FvPSxvGbTRBmkBSHumFgqv+Tswlj2npXn5MuBWe1+DNTPItAFmR3j4MhG0MpRucRMAkqNgooUYU++bjfpzTVn5u019/adPf4HAAD//wMAWnnU/qQEAAA=", "base64"));
  res.end();

  return __filename;
};
