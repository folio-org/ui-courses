var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:38:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 6709us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 63784us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
