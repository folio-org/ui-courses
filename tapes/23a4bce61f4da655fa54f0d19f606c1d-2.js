var path = require("path");

/**
 * POST /coursereserves/copyrightstatuses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 137
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/copyrightstatuses : 202 7099us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/copyrightstatuses : 201 3371us");
  res.setHeader("location", "b5c15d92-a088-4859-9a0a-15086593426d");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPwW7CMBBE73zFKtfWlePgxMktFT303n7A2l6IRYgj2yAhxL/XJK16Zg97GM2b0dw2AIWzBXRQaGlKaVvBkCvFtkq2rEWOrJRc1bKttqK2xesDmPBEC9L3PXyMkS6OAozO0BRptViKJrg5OT+tTpPchcYr6NGbo5sOkAaCOfhDoBjB7yGawY8Y4uDmNeJECS0mfPC3LGTJBMJEdpffkiq44Iw3TKivsuxk0wn5Viv1wvMtIf/M+/U7Uvhcp1KllakbybRpOJMaFVO80kzrvUa03Gps//jzbJ/u/GWe78z4fXP/AQAA//8DAFfmgJGWAQAA", "base64"));
  res.end();

  return __filename;
};
