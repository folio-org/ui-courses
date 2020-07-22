var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
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
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:38:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 6697us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 62693us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwC9L641SSMAAA==", "base64"));
  res.end();

  return __filename;
};
