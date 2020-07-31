var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:39:34 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/coursetypes.. : 202 30914us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/coursetypes.. : 200 5731us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUTW+cMBCG7/kVFtdmNuMv1ua2aS+5tFKVnqoe/DFWkViMgByiaP97gd00bTabNmnKwRLDvK/NMy/cnTFWhHzTD3R929FQsIp9ZXdTdarXcb4tpNRKBU8Qo/agvBHgfOIQtHcipIRkQnG+l7RuS4tos9mw97nJwY0U759GGkJfd2Od231T07C6hY76YaocmrY0uuhGN3fsDzIfsafZ6MO0LEqBAgHXIPk1F5W0lZQrY/k7nK6D0YPq8vbLQP3V/m08KuNLcqCE0aCtkmBQc/ClUsIlrUr7i8NNF1+x70H18n0Xg9207s4fDcFyrWYHkKU1kwcFcDo4CCmQT6gIrToawlXLfmf7eAAfM8ttU7fEQt52uaV2fO0YUFZSV0qvtJBP43gGIq7WCv8/xKSxlEQGPDcBFAoPHoMF7jFZGY1eoz+C+GkB9AzBnwl+S4h4IlN/pzqNAKVGEms+fcx+ylGkBK50BpwMSSXk3qd4AsHFH+N0mcfv94FybXyKzPDvaPgL8nWsekDDvs0OxZhH13ymkPu4/P7U2e4HAAAA//8=", "base64"));
  res.write(new Buffer("AwBcP9ogFgUAAA==", "base64"));
  res.end();

  return __filename;
};
