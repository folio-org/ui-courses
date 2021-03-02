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

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/copyrightstatuses.. : 200 3002us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUPW/bMBCG9/wKQmtzASWSEqktcZcuQdG0U9Hh+CGbCC0aEh3ACPzfS9lNGjTW4NQLAYn3vNA9ON3zFSGFiZvd4Jer9JAwbUc3FqQlP8lzvsu33k6PBeWiKllDQcraAS+tA+y0AyFQatW5RlZYXB+RHtfuAN2GQA7JIxnc6IYnZ19qrBvN4DfJx/5YapJ/cmFHdIjm0fdLklaObIa4zORIYkdGs4oBh3HlNy8ha5fQYsIp4fi5UzuDw+Ts53wckitalUAZ0PI7LVtBWyFuKG0+UdpS+icpY9uNncPKphV1y6obWssZ7G73I/f35eiq49pYW1NAxTkIpgQowwwwbFBa23BjXXEI2Odzf/2vahRKWmOgYk0HPNeD5DlIocmyO2U5yneqFwtyt5uTu5iUZL1kEdfr2I8EUxq83k4FJHjj+tH9p1N+oyQ7w+kJbN4IllLU3HQgtWTAuc0yjJCgG8W60jLbCH7aCNwvPiSljz2Y/N4NxmO4kKNp7qrzHb3F5h1pqZ3mtAM1/Zbcijw1RtdAbVnTuuGqQj3rCB5uL6FpXOGQ90Lwj+5yY6XKD43VKzavrNO17ITSoDjNyniNIBWz+aC1sqXQkrJ3yr5udW6N2LhG389Ju4/kdatmYQRDuICIc3bWCeyvCPJriihSTBi+ORMHe9j54mr/GwAA//8=", "base64"));
  res.write(new Buffer("AwAHmL/YEQYAAA==", "base64"));
  res.end();

  return __filename;
};
