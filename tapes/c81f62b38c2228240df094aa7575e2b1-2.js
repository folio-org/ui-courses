var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/departments.. : 202 27437us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/departments.. : 200 2497us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPU/DMBCG9/4KKys18sclxBkRDB1Y+JgQw8W+NpESx0rdoar633FdQAgYKuHhZL/2c7Ie3WHBWOEo4BxH8nFbsIa9skNKU96707GQa2ukVMCtU8hhjcQNEnAQuqpdLUytXLE8Ix5HytADxo5GjL3dft452tq5D7GffH6y8nbYud5vWDvFjoXdTAy9YxjC0JNjie6+4JEiOox4Is/fS6GdCSO5u1RyRyWU4OKGa/ksdKPLBsprXcsrkdZHo0TtgrucytAx1ePyp5ayqmqQlpfSEgcHliMKwwWhkq0QRgD+0nKfRHfsyfbkLV1gZkPTMG32SxYoznmbFQUckCYfc/J/RQYuVyRVo00DcK2F+Ju63b9saV6dLbUC6raiNDeqLnlpQPNalJK3FYDCdQmV+S6ZvZ26FXGKODySnWaXR1Itju8AAAD//wMA+ZG1UaoCAAA=", "base64"));
  res.end();

  return __filename;
};
