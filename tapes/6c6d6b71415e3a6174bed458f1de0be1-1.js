var path = require("path");

/**
 * DELETE /coursereserves/copyrightstatuses/3a780bff-bf86-486c-9592-f5753c5ab5c0
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: text/plain
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
  res.statusCode = 204;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:38 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "DELETE mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/copyrightstatuses/3a780bff-bf86-486c-9592-f5753c5ab5c0 : 202 14341us, DELETE mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/copyrightstatuses/3a780bff-bf86-486c-9592-f5753c5ab5c0 : 204 1930us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
