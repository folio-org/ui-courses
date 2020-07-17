var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMTk5MSwidGVuYW50IjoiZGlrdSJ9.VdxBRdnr4Z96aVZLMLIgD-i7DD_5A2WBjedFRgimRLc
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/departments.. : 202 6716us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/departments.. : 200 3015us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSsU7DMBCG9z6FlZUY2Y6TJp1hYGABNsRw9V0TS4ltpc6Aqr47rktBgqUCDyffb38n65MPK8YKpABznMjFfcE27JUdUppyi6e2kDvTSak0N6iA6x0Q74A016JqWmxF1yosyjPiYKIMPUIcaIJozf5yhrQ3sw3RepevPDgzLmhdz7Y+DiwsMzFwyCCE0RKyRA9f8EQRECKcyPPzUmhmgkh4l0qeqIQSXKy5XL+IalPpTV3frpW+EWl9DkrUEvB6KkPHVI/lTy1107RaGl5LQ1yjNhxAdFwQKLkVohMafmm5T6IH9mwsOUNXmOnJj75/L1mgOOdtVhRgBPIu5uT/iqrmL4ou1Lci9naaUEQfYXwi42fMH0qtjh8AAAD//wMAY38Y9GgCAAA=", "base64"));
  res.end();

  return __filename;
};
