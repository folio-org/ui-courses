var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:36 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/terms.. : 202 13200us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/terms.. : 200 2169us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTPU/DMBCG9/4KKys55G/XnRlYWFA3xHCOHRGpaVFiBlT1v3NJCZVSKlCbwZLvzXO2H9n7BWNFTl3bF2zFXtie5lRp4jAtEI3HWNfgkwygnYqwpAIEGQy3QTuDsiiPyBbbNEKPzQa7Tya55FPWZ+zyA+bjD0MCXIDwU562cZYqEHpK25QxYsYhPu6PilWXiJhjDuRyzdVKmZXS94KbO07fdyOiPt7j/6kROtB4KGdeau+ElF6D5MqB1rWDJbcWpLCYvOGVtNWZl3XXbJv8txjqai+LoUX47WK8uEbMRF0WU0WRgksRpKNz6GAR/KAoulqgUUbUNpyJeWqqN0ybFntyc7oUczfCg+Ag1O9uhlTSjm92Q62ucPNDndyw13J8XLuMm+dU7bo4vjG1OHwBAAD//wMAb84TGHUDAAA=", "base64"));
  res.end();

  return __filename;
};
