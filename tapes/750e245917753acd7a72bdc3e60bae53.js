var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjZjNmI5YWI0LTE2YjEtNWNmMC1iZGM4LWI2NzI4YmM3YTUwNCIsImlhdCI6MTU5NDczODc4NywidGVuYW50IjoiZGlrdSJ9.pE0DFuVgWBOKlfXuIoKeSfTv9crEA98GpVjMrRMvJDQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Tue, 14 Jul 2020 15:00:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/courses.. : 202 6500us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/courses.. : 200 55106us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
