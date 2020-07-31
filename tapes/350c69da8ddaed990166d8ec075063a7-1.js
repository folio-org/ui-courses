var path = require("path");

/**
 * POST /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 143
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves : 202 7184us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves : 201 75058us");
  res.setHeader("location", "035098b8-e980-4cd4-bddb-8cf4fa88c1a0");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTTU/bQBCG7/yKVS49lEH7/ZEbaVVBiyiq6KGqetiPWbDq2JbtqIoQ/70bxwmBGzlY0e4+M++8M/N0RsiiSguyJAsqFHU2WEBnKciYJISUAtiYZfbWRubp4nwHxHbTD3hTDWPVPFzvaR9SeSIT2IQOpC5xLHcMaIzZMZ2DdbinqxHXM5R0NpEFD54LUyCF4CQmyMKgYyFqGdIhZVdhui7oDnwqR+Uw+D62CadQUglnjaZKCismpjwoz7u29/32po1+rNpmzptj0jIiA+2cAmkzBSspgnU5e86tFYYdYnTYr32DzfgmhhKlMKUzRJYySEaLUwE9cJMN4zF6E+lRRzXWe5mrvkoPOJKvbYPDh4GsfNguyfiIJFW+r3A4ILFtxr4Km7Hthx35ey66XDV+vQ/2pcI6lRackyussZnR1/BteXy/7XBWzYOTUQsGOfrSJus4eCMoUIGoeCkfuV9MYZ7Jn4MDm1BX+9rfKJluhkfsp9iXde4xkcsL8q1pu/wip6t93Cu+xX/kV9v/fblLfsTv+e51igWnTL+VEX1d327WYc5296M0W19cS2UtWRnpyAQd7eu207NP5Q85DkTVDKNv4sENk0NSyUrQPDGQxRlwUSrQMTAjXNmGef5O0Kt+3pfdAX35HVM/tlNThsOsBRMMzQzKBliQjkvwbrcYKENpBA9B5V2pz9Ocn0ysb076hjYIxrwGEXhRKnLpG9cOUnKC0Rh4ovN6rXH0xVR/siexx+Jy+lw+s7u8dNyAYPeML4VdUnXhDP+4K+No4J5ZbX8O2M8iApU26DLjklsFykkBlqpSmZaS+6ykdkd+06V355yZ9+fc2Xf2/B8AAP//AwBz3vSZzQQAAA==", "base64"));
  res.end();

  return __filename;
};
