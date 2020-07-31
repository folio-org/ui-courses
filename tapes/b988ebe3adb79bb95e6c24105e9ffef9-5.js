var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
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
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves.. : 202 6665us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves.. : 200 36518us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWS2/bRhC++1cQuvTQrL3vh2+2gyJuHMdIk0NR5LCP2ZgtRRIUlUYI8t87Eil5VbdG3Usv1YEQd/ebxzffzvDrSVUtBljB8BlWi+q8+qX6iku4WKft64IKRZ0NloCzlMiYJAkpBWJjltlbG5mnixcTJHbrYQU39Wqs20/XE96HhIdkIjaBI1KjJcsdIzTG7JjOwTrY4+sRljMs6WwiC554LgzCFBAnIZEsDDgWopYhPbjta0jXCN5Cp/BxOfghdgl25qQSzhpNlRRWzDg8gpC+G/ywuemiH+uunb3nmLSMwIh2ThFpMyVWUiDW5ew5t1YY9oSVt+FXiGMZzAOfzzKNsNYvpxTe+LqtbuqwdVQeOOT4+sPZ1dXZy+uzN+V2vbqIY/15d2Qc1lButViocV3kjYEApRFZV8wSGaQjASgWSwubqJc+KnPk2y/79WoGax6z0cGQGD1mloQgjjNDIGXJMWNvpS3BzZTLjFbJWEsFkOip3LrGIMAD4VGL4LjEgEKJ7od6ieifULh1hLuubneEL4SX1CqeiHQZHylz4ll2RAPXknmN6smlnVVh4DrNV+CfWak+zma+HaTQw7D0LbTjnwSlBKpd6UwiS5lIRvECBfCEm2wYR8JMpIu/t/KUoJ5luhTURdvCl6eVdPG/kv4rJSGfzVSNy6FOn2CsfuxaWH23qi592GAF7qFKtR9qbNsHUOzacajDeuyGo2Z+XPgfamgSdugX1StooD2WwMHALR5/v+lhZpUHJ5FARnL02MetwzyMoASJBsWxeQH3i30W1ccHLa9DU08qfhTRbm91D8OkxyYPkKqL0+p12/VH1PaNj1Pst/B79XM3/FbuJj/C23x37GjBKdN/FVD0TXO7XobZ6907nAr69Foqa6tLI121AxaU9pvdwSv8UxWzY6t538Y9PyaHpJKVRPPEiESuiItSER0DM8LhCD0MrAL8aphv8XaBPvyKAO67XbH2dyMHEwzNjODgxIuFeibebecpyIDl4SGoPKU9a6kcT74tKgo2CIYKJCJwjFhslcm1Iyk5wWgMPNHDZH5k43FH2vejZ5gtRXm1+3aoDp8iRyksYfRYZX/kLw6AhU8v8TEXnKMcDRHsPePnwp5TdeoM/37LZ1HPCXW5+YCOZiYClTZo7JmSW0WUk4JYqpBiLSX3WUntCgvrPv0LvzPq+X4nIk4OIl6M3eibdxC7YWoy7OTbHwAAAP//", "base64"));
  res.write(new Buffer("AwBvLfGRxgkAAA==", "base64"));
  res.end();

  return __filename;
};
