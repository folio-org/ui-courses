var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 283
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
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
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses : 202 7245us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses : 201 4606us");
  res.setHeader("location", "574e947b-5cdd-4876-b477-45ff145a5959");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPvW7DMAyE9zyFkLVlQTmSZWVr0KVA0al9AFKkG6OxE8h2gSLou9eJ0581GjTw7jvyjgtjlo0szdosfXAaXWDwSQRcFUpgFwI4X9fWefLRx+XtCeio1TNyT1k+KL8bzqrSdG+zLtqn3ByGZt+dbS9bNYmyGurE1LPT7GszjDzuGtFuoEH7H/ZAeWin2eN8lvVlWTmbwNuk4MQlIMIIqFRYRozoaEbTfsy9PjX9MOVf6JiiT0oIpfMrcIVaYCkFkDBhLCUwu//089iy5rncxqKdtV7Tqczzb++dHraz1OpAQgOd5sdpcErKOvWRh+k7uwssEDBAUb1Yu3Zx7ao7W5Q3OL1zyB+z+XztNV9u1xVXqQweOAUEz1RBhSsG5pqJBIUp/vDjQa7eeWGu3znhX4uvbwAAAP//AwBrdzfTPAIAAA==", "base64"));
  res.end();

  return __filename;
};
