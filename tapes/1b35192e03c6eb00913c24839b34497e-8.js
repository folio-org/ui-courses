var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 7190us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 3534us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTvWrDMBRG9zyF8NrcIFmSLXssXToF+jOVDlfSdTC4drDlQCl59ypO09AmgdLWg8D6fC7i6PPbjLFk3XeOhqFuV/cBwzjQkLCSPbG3GMa49rvXRGijsSg8cKsyUMZKKFCmoLjmleCywEwk8z3S4gtN0G3LHAZsulWcfkg9Da6v16Hu2umjO3JUb8gzOwbWdoG9UjhgI/kD9kIBfdzdMfujxU3XEwbyN3GZZqU85cBzSM0Dl6XUpVQLJeQVj8/HoEiNa3+JEqLUecn1Quf6PHX9+jhQf7u3QtIal+UarMs5aIsGDJcWrK0soufeYpFMA7Zx3c6/SUXjU5U7A2SwAoUiA2NFDrzIVG4ySVKqE6nLlnW9p/6Sz+UuJD//4hM3WDdoG/q7Tq5+rvOUuizD2Co16DJA5zyoeAFgqgpBZrF63JIw+rRhsTzYNMeWnCnXlDNsPRvb/9MgC/ELDZ/UUQN73k1IQhcLH08br3b6/+Rs+w4AAP//", "base64"));
  res.write(new Buffer("AwBgcofKngMAAA==", "base64"));
  res.end();

  return __filename;
};
