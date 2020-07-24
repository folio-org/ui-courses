var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
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

  res.setHeader("date", "Fri, 24 Jul 2020 21:16:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6419us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 53596us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
