var path = require("path");

/**
 * GET /coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 202 20708us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 200 21920us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/cNhC951cIe21okxQ/9+YkPSyauAXinIochuTIVrsrCZRkZBH4v5craS15HRfrpnsgFhq+x3nDmSd9f5NlqzKssnW2klqgFdoR6UMgwmhFnNCaCFkUTEiQVtrV2wOggh0OkCuI4R7i35mLiKGsbsd4wNbHsunKuhq23dxh5iFiBlXIinFnVhdZ17t+WwasOuiwPWIbiN0uPduMaTGplBHME8k8EhGEJwDUEorAmaPUUgGn0N/dX+i7A/x7CswSz+Zaivw1kd5ln32JlZ+y/IHGTeW3/SDsFuttfbt/mzXYxeHvoLuBLWBddcOTI8sOOwjQwZxqeugjpnqED2kZqDnllFBNuLmh+TqX61xc5JL+QtNvIkqovgkvoRhbU7PO+QXX+Y9R7/ZfWoxTxTF3xistifOaEunAEENzR5wrHECgwYFdDQQPaX0Yau/rPrb4sWy7VIKJx3orPQIlSsicCI6MuKACoUA9tSpo58TqOfqlyzubLkEi3iayCEdJ8eodo+wYxW8dxgq2U/Dbk+C29nC41SlY+KCET2cpa2WaioISIygSY4sCODcm18+gpwpmDa9gW7bgJyir7GPpkqD9HPZ1GMO/fbl8//7yw+by0xws2yvflffDhi72OAeqVOWuX0hMCSClHghIZohwwhKHlBGqchMoCPBSL06FXdO3E1RxX2jlNPEekp6Q58RypgmGQvCkE4wwM3Q7KpiwMmiT+gqJByoOx6YEEJBwr3JnuUjJuBnbxHKXsJ8x3pce/6jLaijwKgdBjeTJsGyRllBwAqywRCFXgoFCy4qZpV3AN6E9MPx5Jkf2dWz56a5TB+2OLWI149wKwmme7FIUOs2LUoQzBWgl9Vz51QL2L+1xPtOyPW5iWZXdPjuM/EJrl4zrxA4Ss5p3YHVqF+kounqicxzNm32Dx6lmUlBhHMmVNYcxTB4qU/P4wqMrqEBqH8dwBr+s+RV8S82bKvlrbJP7PsZOLfm6zupqW1bp5VPvmrpKL4an2g6jEHvf1XFMb+qHr//RnJPNCrsW+oIZe2KzE+r1Nnumvb907v9r79f9zmEc3/yPlplmyh9Kfv34UbDF5m4MPa/gGfUzF4yrpY6frd4ZtXt+5s9U7uHNwz8AAAD//w==", "base64"));
  res.write(new Buffer("AwDGugDHWQkAAA==", "base64"));
  res.end();

  return __filename;
};
