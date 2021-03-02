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

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/coursetypes.. : 202 37700us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/coursetypes.. : 200 3162us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTMU/lMAyAd35F1BXMOU3SJh0RCwtIJ25CNySxo6vES6q2DAi9/35t370FeIdALJZi+7OsT87LmRBVLE/jxPfPA0+V6MSDeFmyS76n9Vk5aTRqG0A1zoKuOYI30UNMkUNCzeh0dXFAst/xBt1kMfA4lXysEE9x7Ie5X1Jrw20RJT/2mUUsu6FkzvOxdcezJz/7te+wyrrkyH5mul7CxtdYS0AFKO9RdgY7Yy6xac8RO8R/kxbsaaBTmGw7bTu0l7auT2BXz78mHm8OHpIOkahB8E5rMMoZcFFFUL71lqjVkbjaBuyXuL94pTEZbBSzhSBtBI11gIDRgQyYnCJrWgxvNN5tiv7jsM9w8PydGlv9CY3vYKcloDLIdSuBKCy3RJzAN96CVzHphDKERCck/PjwpK7K/Od4VD7Te26mb5DjvibHvZEjfq8jqrnM/vEnxzLS9v/U2f4vAAAA//8DAO9iEzSXAwAA", "base64"));
  res.end();

  return __filename;
};
