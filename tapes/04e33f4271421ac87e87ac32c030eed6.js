var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby name
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
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 14 Jul 2020 15:00:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/courses.. : 202 6671us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/courses.. : 200 91449us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
