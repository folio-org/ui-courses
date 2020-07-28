var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:54:34 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7109us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 66945us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
