var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/departments.. : 200 3202us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBRF9/wK5LUhethgG49VO2To0o+p6vDCe0ks+Us2GaIo/72ENKrUNlKrLggu3CN04DATIiEecPQtd35KRCVexSGkIa/ptEyUyfNSKyeNciw1aScRwUpgTNUKwILGZH6udNhyLN0H4lY8uZo7x9Nlm3hyYz34uu/iqWXnmh3V3UZsuG/6zX4uBvZjnArsSAzYIPedj8mF0rJHQo8nxPmqIXQjo2e6C0NEp5AqCZkE9QyqMlAZswjRDUAF8EEKtd1A12qqqExeqWxR5NmV2u3+ZeJxefa01itHlINEq7U0mTXSuszJDAssiQrtiJMIOIbxOP+qee2sUqmWjlKUeo0sLbKWGrK8pBJsmdI3zQ/ot9yir90vHK/68CTDbuSoFoehqZlEaG+n/6vN4A9qf6h9ihFvJ0Tie4/NI7t+pPgt09nxHQAA//8DAHSV2tWuAgAA", "base64"));
  res.end();

  return __filename;
};
