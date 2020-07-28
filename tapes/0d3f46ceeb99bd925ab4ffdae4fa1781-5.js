var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/coursetypes.. : 202 7172us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/coursetypes.. : 200 3514us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTPWvDMBBA9/wK4bVRerYkW/YYumRpoaRT6aCPEzUkkrGdIYT898pOTaFJ2tJWw4FO947jcTrMCElM2LUdrvcNdgmpyDM5xGzM13a4JmUqOHCpKctLSXmGhiphFDXOoHbAEUqezE+IV1scoZUnDbZd8NOLxc60ddPXMTUU3AcS/Kb2SEzYNsGj76fSLfbKql4NdadRhiFbVD3auxhGPoMMKBQ0k2tgFRMV4wteiBuI571RpHaNvUalaSXSimULLsrL1HL/1GG7OllApqXJC0G1KYAKrSSVwDTV2mmlLFitymRscIzxOP8k0QnIGaKkOpWGcsgiCaakqQZXMitFAfpM4sMo6AuDtacny/8pURQ/l3hOXVcATABmRUqt1XGPLDqq8qhRMeO4gzSatFcU3H67TsvQv04Lpby9ZKb7u5pc/kbNRH2oIS9Dh6QPvdo8ogmtHX8emx3fAAAA//8DAMP5VJ+RAwAA", "base64"));
  res.end();

  return __filename;
};
