var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:52:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 7239us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 4059us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUzW7bMBCE73kKQtd6DVIkRVI3B73klKI/p6KHJblyBSiSIckpgsDvXkqO67aOi8ZpBYKAOJwl9c1Cj1eMZZu+CzQMdbv+MOK4HWjIWMk+s8ckJrmO02tmuHZaOQ4i5AjKOAJnDEKQUlhpo5C5yRZ7S4t3NJtWqxV7R21MtQ9apCH09Wasu3beck1JZAFHbLr1liLr6/XXkbXdt4PjjkaMSZ+27++UFkNPOFJ8m6a5TM5zDtxAbj8KUeq85HKpOH/D0/NU6Oi6fvg0UH+z/zCS3obCaPDBcNAeLVguPXhfecTIo0d3rLDdxAvOfXK9/Ny5wC7Nu8VveQhtNToXgXtVgLJegkOZg+KaV4JLh4U4yeOmPZD+QyLvKVB9n5Lw2ymHkT3Q+FNAl8bCZSl1KdVSCfk8nnNQ03BLV9j/DxVtzJUJFshiBQpFAdYLA9wVythCkpTqBOpty7o+Un+O5+0kUlz8whPvsW7QN/R6nFz9Pc5T13kY1le5xVAAhhBB6UTVVhWCLFLrcU/C6tMOS82DTXPskmeaa9YZtpFt23+HQTpxAYYfriMG9mWqkI1davh02xTt/D9UV7vvAAAA//8=", "base64"));
  res.write(new Buffer("AwCFaFGfLgUAAA==", "base64"));
  res.end();

  return __filename;
};
