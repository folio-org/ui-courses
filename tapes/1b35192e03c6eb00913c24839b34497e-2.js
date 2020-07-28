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

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 7161us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 3716us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS0vEMBSF9/6K0K1zJWkeTWcpblwJPlbi4ia5HQuddmhTRWT+u2nHUXAcEDWEQHLuOYQvN68njGWbvvM0DHW7uokYx4GGjC3ZPXtNYpLrMG0zoa3GsgzAnTKgrJNQosxBcc0rwWWJRmSLnaXFNc2my5Z5jNh0q5S+VwMNvq83se7aueickrivGymwvl49RtZ2z3vHmiKGpE/lu1ulQ98TRgoXaZljcp5z4AXk9pbLpdRLqc6UkKc8jfeg5Bo34ZhLiKVO05xpZb93nb/cDdRf7oCQdNabQoPzBQft0ILl0oFzlUMMPDgsszlgm9bt4gtPtCFXhbdAFitQKAxYJwrgpVGFNZKkVAc8r1rW9YH6YyivJpHCgrlxAhjZC0WGT1g36Br6O06ufo7z0HUchnVVbtEbQO8DKJ2o2qpCkCZ1HXckrD5srmvy2DQUjsHY6wzbwMb2/zDIUvwCw4frEwN7mBKy2KXWT7dNTzt/PXmyfQMAAP//AwA2GG09mQMAAA==", "base64"));
  res.end();

  return __filename;
};
