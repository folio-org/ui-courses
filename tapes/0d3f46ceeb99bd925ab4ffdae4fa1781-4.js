var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/coursetypes.. : 200 2861us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUT2+cMBDF7/kUFtdktmNsY8xtk15yaaUqPVU9+M9YRWIxAnKIov3uBXbTVZOQNtFeLDHMeza/eebxgrHMp/t+oLuHjoaMVewHe5yqU70O82NmLOdRYQDhYw5SYw7GRQvceaOd4tHEmF0dJK3d0SLabrfsJjXJ25HC09tAg+/rbqxTe2hqGla30FE/TJVj045GG+xo547DQeYj9jQbfZ6WRZljzgEFIL/julJFhWpTcHOJWCEenU6y64fvA/W3h8+J0vkQCgRrpAQljALjhQdhtS1D0NIHOjncd+EjGx9l7994MdhP6/7q+Ri4kihLB6IwJcicPFjlLfjoyUWUhEa+GMNty/6m+3wEXxJLbVO3xHzadamldvzoIJBXCiulNljoFR5vYBQbLddk58Q4JbkQRCU4XnqQmDtw6M2UZoxGhFJpdC8wfl0QvcHwT4rPiVHLd2B8RbYOAYVCyjWHENyUpUARbGFLsNMVlxG5czGsQPj0z0hdp/HXU6hsG15jM5wBztqd+0/ZCQ77OVtkYxpt84186sPyG5QX+98AAAD//w==", "base64"));
  res.write(new Buffer("AwC5A5/SHgUAAA==", "base64"));
  res.end();

  return __filename;
};
