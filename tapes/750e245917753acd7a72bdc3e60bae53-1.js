var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(name="calcu*" or courseNumber="calcu*" or sectionName="calcu*" or courseListing.instructorObjects="calcu*" or courseListing.registrarId="calcu*" or courseListing.externalId="calcu*") sortby courseNumber name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:56:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6348us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 59265us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
