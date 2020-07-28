var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/departments.. : 202 7172us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/departments.. : 200 3603us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/wK5LUhOjB2sMeqHTJ06cdUdTjgkliysWWTIYry30tIo0pNK0UqwwkOnlfogcOMsczRgGPoyIcpYzV7Z4fYjf3GnZaZKMpSK2F5ISxx5ZTliFBxIJTCAFSgMJufEY8dJegxJm7Zi23IW5ou244mOzZDaHqfTq28bXeu8Ru2ob7tN/s5GyiMacrQOzZgi9T7kDqXlI4COgx4ijhfNTbtSBjIPcSSoiVI4LDkUr9CXudFnatFXsAdxPEVFKnd4P6ihKgLUatyAVr8Tt3v3yYaV2dLlBtty2XBjV0CLwxqriE33Ji1QXTgDFZZCjjGepz/lLy2lRBSceskcrVG4hWS4gryUjsNlZbuSvIThi11GBp7g2HTxwcZdiMlsTgMbUOORXo7/V9sXt0u9pr61sI+TglZ6AO2z2T70aUvKWfHTwAAAP//AwAM7MtcqgIAAA==", "base64"));
  res.end();

  return __filename;
};
