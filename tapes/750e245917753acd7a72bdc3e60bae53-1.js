var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
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
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7176us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 66662us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
