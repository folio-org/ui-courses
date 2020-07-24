var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/instructors/120c49a6-6993-4923-9898-447068114042
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
 * referer: http://localhost:3001/cr/instructors/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/6d973b67-b0ed-44df-a169-67b46365264a/120c49a6-6993-4923-9898-447068114042/edit
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/instructors/120c49a6-6993-4923-9898-447068114042 : 202 6210us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/instructors/120c49a6-6993-4923-9898-447068114042 : 200 1662us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSOu27DMAxF93yF4bVlQUm0LHkMOrRAx/YDKIkKDDhxYTtDEeTf61fRORw4kDjn3tuhKMo2lUVTlEpjJM8WrPcGyGsD3nkHRDVapxQh6fJ5AS58lhV5a7uOBymO0nV93J6Bh9gn2ZWGqu0c++swykc7Tu3l9L4lVhizyS6BZkSgoC2EjAlyiEGxi04ns9FnmTjxxAt2mw+LcBCeJL3Oa5Vp1AhYg6ZPZZuqbpR6sV494Tyr5J85/nyNMuwlEhuPFWWoIwlUlgUCmwjZ4txPsbDmP/76nR7O3JnHM2f8frj/AgAA//8DAHvfLVaiAQAA", "base64"));
  res.end();

  return __filename;
};
