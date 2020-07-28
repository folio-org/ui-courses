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

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/departments.. : 202 7205us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/departments.. : 200 3695us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUT4/TMBDF7/sprF6pq/GfpHZuRSC0By6wnBCHsWfSRkqTKHEP1arfHTfdVQUFtAsSOVjxZN5z/HuWH++EWBAPOKY9d2laiEp8FY+5musNnaeLNaN3RltZ1tpLW4CR6IKWIQQTyFHwUCyWF0mHe55Fm81GfOC+7bfH52/EUxybITV9N7c87FhM6UBH0dci5cnQYsfpuX3PCQkTnnsvP5SLcWRMTO/yMHto0CBhLbV7UKoqVGX9Snv1BvLzZHRVvT1+mXi8v+yKTXCxXBcyxDXIIqCTDkzIu6oDIgEF9FeHw0B/se6T6vXrzganPJ6WP4WhirJ0VkVZqMjSko0SEbwERq0CgAeLN2G8z/HuxOfYcBd5+l0e911sD9R0W7G9BLcUA6dxfhXYkRiwRe679EOqr40JTGWKytiVKeDXuP4AuVyB+x+Q6+iVyic+kkZpa2Tpka20YEpHDrzTdAP5I+YzvMfUxBcQDn0OZDiMPIPFYWgbJpHVu+nfwRr/crC3qisW8e3ssEh9wvYTx36k+X4wd6fvAAAA//8DAOQvIJ43BAAA", "base64"));
  res.end();

  return __filename;
};
