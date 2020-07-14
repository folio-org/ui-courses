var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjZjNmI5YWI0LTE2YjEtNWNmMC1iZGM4LWI2NzI4YmM3YTUwNCIsImlhdCI6MTU5NDczODc4NywidGVuYW50IjoiZGlrdSJ9.pE0DFuVgWBOKlfXuIoKeSfTv9crEA98GpVjMrRMvJDQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Tue, 14 Jul 2020 14:59:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/coursetypes.. : 202 6920us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/coursetypes.. : 200 6968us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS0sDMRCA7/0VYa92dDbJvnoUL14UpDfxkMcEF9pk2U0PUvrfzW67CGpRqjkMZDLfMPlI9gvGMhN2/UDrt46GjK3YM9unbMq3dtxmrsBSENWg89qARK5Bo2kg1+gaYeuiQp0tj4hXW5qgR79pPc1pS4Pp2y62wU+nD4G1Hjrqh+CZCdsuePJxrt5SVFZFNZYeRxmH7ElFsncpTC04cgSsIJdrFCtRrFBeS15dYVqnRonadfb31AQdUjwsPylAUSDxKgdrdQ3SkgNVqhqUME46zLV29oyCm3vPjhc9J+M2xFcWpmKmvP3OzPB3NaK8RM1MnVfT5IVEWWsQZZPUcDKgCqPAOEPaoSRs5Bc1PzpJD+Rk5B9fh+SXKJipDwXsZeyQxRDV5olM6O30b8Ti8A4AAP//", "base64"));
  res.write(new Buffer("AwBImvs/TwMAAA==", "base64"));
  res.end();

  return __filename;
};
