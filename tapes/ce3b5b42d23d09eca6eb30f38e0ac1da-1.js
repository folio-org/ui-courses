var path = require("path");

/**
 * GET /users?query=id==f4bcdd60-a944-5395-9c3c-3a7a8dd74cde
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/users.. : 202 22326us, GET mod-users-17.3.0-SNAPSHOT.159 http://10.36.1.217:9134/users.. : 200 2601us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQKi1OLSpWslKI5gIAAAD//5RRzUvDMBT/X3J1KWmbpmlPToZSxAlzO4nIa96bFNcPslQ2xv5336Z48CDuEpKX3yfvcL530JIoBTbv4ytg23RiIhrkyVrXDtEoCYXWMkuLTBYudTKFHCxirh0SY8GF5oMVgh9pIgYIvu/ufD8OLJEaqyG3RhqTx1InxkpLqGSBtU2odmBUzRJIA/jQUhc42PMLq/h+t7/t/feLA/cdbER5EBvYhvlX4unsoZpXT8vFdPm4YJV143/+ZtX9ikfUQsM0ce51faoY0Q7aYUNR799O4RE9bbd09j1OhPMEgXDGB9MSlcRSpVLFSxWXmS6zPMoTfaVUqRSzxwEvQLcUgPFwqvGnT8L4yBbmIp/4N/pmv+LtVv/e5PH4CQAA//8=", "base64"));
  res.write(new Buffer("itUBpY+S/JLEnKDU5PyiFFAyMdThAgAAAP//UlAChlFpTolnXlo+UKQaTYkhMOgTk1NhcZeSmZiel19ckpkMCVSuWgAAAAD//wMAM+38OncCAAA=", "base64"));
  res.end();

  return __filename;
};
