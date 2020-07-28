var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:48:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/coursetypes.. : 202 86687us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/coursetypes.. : 200 2097us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTPWvDMBBA9/wK4bVRe7YkW/YYumRpoaRT6aCPEzUkkrGVIYT898pOAqVNaGmrQaDTveP0OO1nhGQmbPsBV7sOh4w05IXsUzTFWzseMyegZIiS6lwayqHQVIOpaa7B1cxKUYHO5kfEqw1O0KNftx7PYYuD6dsutsFPtw+BtJ522A/BExM2XfDo4zl7g1FZFdWYemxlbLJHFdHep20qUUABFCpayBWwhomG8VsuqhtI61QoUdvO/pyaoEPaD/NPCoAJwKLKqbVaUm7RUVUqSRUzjjvItXb2ioK7pSfHh16TsQjxjYQpmShvL5kZ/q6mlL9Rc6auq6lzwYFLTVlZJzUFGqqEUdQ4g9oBR6j5FzXfOkkDcjLyj9NRiZ8ryPMGZAN1osrL1GL3PGC/PFpApqUpK0G1qYAKnWZDAksfRTutlAWrVf1BInkdq2UxRLV+QhN6O/08Nju8AwAA//8DAHHrhrORAwAA", "base64"));
  res.end();

  return __filename;
};
