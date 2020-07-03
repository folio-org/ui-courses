var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjJlNjMxOWI5LTFmZWEtNTQxZC05MWYwLWQxN2MwODdlZGJkNSIsImlhdCI6MTU5Mzc0Mzk4MCwidGVuYW50IjoiZGlrdSJ9.5_DoxBQWjfNC8vC1SXXnZ5ezBn1Ko65ahXmdG7XdneE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 03 Jul 2020 02:39:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/coursereserves/processingstatuses.. : 202 47765us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.169:9157/coursereserves/processingstatuses.. : 200 162244us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTP2vDMBDF934K4bVRka0/ljN36RRou5UOZ+kcDI4cbDlQQr57z05M2oaUEqpBID294/TT0/6OsWTbtQ77vg7rlwhx6LFP2JK9sT2JJNd+XCa2rDILznBwznOlc81tVQGXRlstSkytTpPF0RJgg5PpGR00DfpZ8Ni7rt7Gug3fdAbBsyHADuoGygbn8xuM4CHCePjYDm26DiGif6RpKpKJTHCRc5G9CrmUxVLoh0yLe0HjVIhcw9b/3TWZDjQfFj8wgPWZyp3laKHiClLDbZlSmcKo3BqJUqoLDKvA2s5jdw3DahTRL1g5RBbayD4wsn+EYdQtMGbXdRgpPT0UheeiVIYrW0pegMy4ElpUqZAFmMtMPAXm6BZNu6bE/RIMrHcUjK9ETrbhnKfbkeTmFiSz64yEvY8VkthSa9Q0PfP0e+Td4RMAAP//", "base64"));
  res.write(new Buffer("AwDsINTRXAMAAA==", "base64"));
  res.end();

  return __filename;
};
