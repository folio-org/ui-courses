var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/processingstatuses.. : 202 12750us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/processingstatuses.. : 200 2516us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTWvcMBCG7/kVwtfuhNGXJftYeskpkLankMNIGgeDYy+2HAhh/3u1u9kkNGwhoReB9PIMmoeZ5wshqu08RV6Wfrz/mSmvCy+VaMWteC5hifu0v1bkkzIuemBPHRiSNfggHWBTG+drzVqbanNERnrgA3Q9imlOPJ+CxEuc+23up/GY70NOGxHWLMYpiyfOgh6pHygMfKIeOFOiTHvk+KnyGGemzOlHOQ6lFCoJqECqX6hbha1yl076b4gt4kulgq3b9AnsQO3Kudv8pcOHTnmKNVCMCYx1FnzXEejaeouBpbfyg44bjjQMnM7pOOWCxiTW8T+KUOZLIl6x8yJk6ZeaJgEGU4PxQUNDWoFBi51E3VD9UcTVKGLpY5juy9T9wwb3j8XG++F4wdY3iV+Xgp+ZDukK06K59Mqewb4//V54vjp6cU47ljaBw1CDTRaBtO6gMy6FRnZKRvdOq7jbV6vyVNorjZetOWyhvtj9AQAA//8DAAYQ2yKkAwAA", "base64"));
  res.end();

  return __filename;
};
