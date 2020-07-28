var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/coursetypes.. : 202 7228us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/coursetypes.. : 200 3562us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTPWvDMBBA9/wK4bVRerYkS/bW0CVLCyWdSgd9nKkhkYztDCHkv1d2GkKbhJZGw4FO947TQ9pNCEls2LQdLrcNdgkpyRvZxWzM127YJkUqOHBlKMsLRXmGlmphNbWVRVMBRyh4Mj0gXq9xhBaeNNh2wR9PHHa2rZu+jqmh4GG1IrWn34vW2Gunez1UHIYYxmtR9+geYxjJDDKgIGmmlsBKJkrGZ1yKO4jrq1GkNo27RqVpKfKSyZlUxWVqvn3tsF0c7o/MKJtLQY2VQIXRiipghhpTGa0dOKOLZGywj3E//aGvEpAzREVNqizlkEUSbEFTA1XBnBISzJm+Z7+qPV5z9xRO6ogN6yZ49P3tEoX8u8Rz6roCYAIwkyl1zsQX5LCiOo8aNbMVryCNJt0VBfe/PqR56D9IGIuJ9u6Sme52Nbn6j5ojdVJD3ocOSR96vXpBG1o3/jk22X8CAAD//wMAjspx4YsDAAA=", "base64"));
  res.end();

  return __filename;
};
