var path = require("path");

/**
 * POST /coursereserves/coursetypes
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 98
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
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/coursetypes : 202 14148us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/coursetypes : 201 3789us");
  res.setHeader("location", "9a11f50d-3cf2-4702-9bfa-1bc97b51f9ff");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPsW6EMBBE+/sKizbZaI1tHNNxSZM++YBl15aQOEDAFdHp/j0GEqW+ZouZeTPa20mpopNC1aoIpHVyKGA4lWA9lhDaRKBbDr51OoWUiucNGOgSd6RpGvU29iPTGuXwJC48d9PajcMR6XvVDTDFecnKHrnElYRW2vxbFrLEc9wq3vPZqRJLDWgA9af2tatqdC+VDk+INeLe8g+dv7+WOH8cTyTbskiFQMFacCY4CGwYDHl6FfGWJf7x10keH/2FHh/N+P10/wEAAP//AwAeSCTacQEAAA==", "base64"));
  res.end();

  return __filename;
};
