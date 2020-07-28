var path = require("path");

/**
 * GET /coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3 : 202 9609us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3 : 200 22703us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTW/bOBC991cIvm6ZDD9Ekb6l7R6CbbMLND0tehiSo0S7tiRQUlCjyH9fWpYj22kWzhbrA2Fw+B7nDYeP+v4myxZVWGTLbKE4CFM4w0CgY8pJzixQzhBsaQgKGZxcvN0CalzTCLnCGB4w/p3dD53DOsTNbkGgzseq7aumHtfd3lPmMVKW1mQlUajqu6wps35ww6oKVPfYU7fHthj7dZq73uXFc62N4p7l3BNTQXmGKScGhII7AAsKT6G/u7/I91v49xSYNZ7Ndajy10R6n332FdV+yvIHGq9rvxpGYXfUrJq7zduspT6Of0fdLa6QmrofZ/Ysa+oxYI9zqmnSR0r1CB/SMFILEMCgYMLcglzKfCnVhczhF0i/iSihhja8hOJ8mfOl0hdg+I9R7zZfOopTxUk643WRM+cLYLlDwwxIx5wrHWKA4NAuRoLHND6OtffNEDv6WHV9KsHEo7Unb0gxi6SZKoRlhnPLZCkVJyBd+KmjjtAvHd7ZdAkS6S6RRdxL6q7eceD7KH3rKda4moLfjoKrxuP2VKdg6YNWnjjT1uZMmRKYUUDM2LJEIYyRxTPoqYJZwyvYDlvwE1Z19rFySdBmDvsm7MK/fbl8//7yw/XlpzlYdVe+rx7GBX0caA7Uqcr9cCAxJUAAHhnm3KSbryxzBJyBliYAKvR5cbArrtuh2x+x8GWhXcG8x6QnSMms4AWjUCqRdKJRZoaudgombB4Kk/qKmEdQ221TAoTEhNfSWaFSMm7GtrFaJ+xnig+Vpz+aqh4LvJCowOQiMGXLNIRSMOSlZZqEVhw1WV7OLN0B/Dp0W4Y/z+TIvu5afjrr1EHrfYvYggthFRMgC6ZUWaT7ojUTXCPZHLzQfnEA+5f2OJ/psD1uY1VX/SbbXvkDrX0yrhM7SMx6XkH1qV2krWBxpHN3NW83LU1qLc8VKOOY1DZ1i6DkoXlqHl96ciUoAqsWz8Ava34F36Hm6zr5a+yS+z7FTi35psmaelXV6fFp1m1Tp4fhWNv2KsTB903cpTf1w9f/aM5bm82XABdSixObnVCvt9lz7X16FPL/1d5vhrWjuHv6nywz3Sm/LfnN01fBitr7Xeh5Bc+oH78QcKTjZ6t3Vu1AHO/5M5V7fPP4DwAAAP//AwDqWobDWgkAAA==", "base64"));
  res.end();

  return __filename;
};
