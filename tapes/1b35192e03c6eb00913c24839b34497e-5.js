var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/processingstatuses.. : 200 3248us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTUvsMBSG9/6K0K1zJGk+mnYpblwJeu9K7uI053Qo1HZoU0Fk/ruZjoNctaDoJtC8eQ7hydvnMyGy3TgEnqa2395FjPPEUyYqcS+eU5jilg6fmbLeYlkSyNo4ML7WUKLOwUgrGyV1iU5lmyPS4wMv0HUvAkbshm2afkqJpzC2u9gO/XLolgO3j0yinqPohyieOJ6wmemEPXBESrsH5ni1tBlGxsh0lZZlVi5zBVKDVH+kqqysrL2QxpxLWUn5Oilh847WMFVU1lW5vtDGrWCXT38nHq+PXhpTByInAUtjwOrSQhl0AI0FeqLCBOJsGbBP637zTms6k5sieGCPDRhUDnytCpClM4V3mrU2H7Te9GIYicc1ozeHkGnzn1F8xLbDuuOfC7XqG0I/wdZ1+LrJPQYHGAKBsYUF3zQI2qX6yZqVtx9blgqEXffWlE8KtuQCexJz/5si1iryRexNhPh3GJHFIdU+3Tc97/IX6rP9CwAAAP//AwCI0cGvpAMAAA==", "base64"));
  res.end();

  return __filename;
};
