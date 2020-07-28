var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/departments.. : 202 7175us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/departments.. : 200 3055us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/wK5LUhOgOOsceqHTJ06cdUdTjgEluyMbLJEEX57yVOW1Vth0hlOHEvPCf0iOOCscxRwDH25OOUsZq9smNKU966c5vlW1vluVDcOoFcbZF4haS4ArnWTkOlhcuWF8RjTzP0gLGhHmNrp88zR5Md2xDbwc9XNt52e9f6HTNDbFjYj8TQO4YhdC05lujmC+4posOIZ/LyvBTakTCSu0tlnihAAIeSC/0MspZFLdVKyuoG0voYlKh9cNdTM3RK9bT8qaVYr7XKLS9yS1w5ZTkiVBwIRW4AKlD4S8t9Et2wJ9uSt3SFmR0N3bA7LFmgOM7bWVHADmnwcU7+r6iA6xXleQ26lmIlSvk3dXt4mWjcXCyRNNquy4IbWwIvDGquQRpuzNYgOnAGq2+S2dt5WhaHiN0j2WF085cUi9M7AAAA//8DABn8NlKqAgAA", "base64"));
  res.end();

  return __filename;
};
