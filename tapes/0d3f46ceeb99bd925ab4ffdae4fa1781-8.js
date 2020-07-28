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

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/coursetypes.. : 202 7149us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/coursetypes.. : 200 3473us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTPWvDMBBA9/wK4bVRerYkW/YYumRpoaRT6aCPEzUkkrGdIYT898pOTaFJ2tJWw4FO947jcTrMCElM2LUdrvcNdgmpyDM5xGzM13a4JmUqOHCpKctLSXmGhiphFDXOoHbAEUqezE+IV1scoZUnDbZd8NOLxc60ddPXMTUU3AcS/Kb2SEzYNsGj76fSLfbKql4NdadRhiFbVD3auxhGPoMMKBQ0k2tgFRMV4wteiBuI571RpHaNvUalaSXyisMiy/hlarl/6rBdnSwg09LkhaDaFECFVpJKYJpq7bRSFqxWZTI2OMZ4nH+S6ATkDFFSnUpDOWSRBFPSVIMrmZWiAH0m8WEU9IXB2tOT5f+UKIqfSzynrisAJgCzIqXW6rhHFh1VedSomHHcQRpN2isKbr9dp2XoX6eFUt5eMtP9XU0uf6Nmoj7UkJehQ9KHXm0e0YTWjj+PzY5vAAAA//8DADrRJdGRAwAA", "base64"));
  res.end();

  return __filename;
};
