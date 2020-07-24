var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 244
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings : 202 6310us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings : 201 4796us");
  res.setHeader("location", "50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTQMU/DMBAF4J1fEWWFQ2fHduxuVCxMLGVCDBf7jILapnJcqVXV/47bpIK1HjL46fPTy+mhquo+1NWiqjX62EQbQBIiqE4a6CIGiJ3vBFlvZWjqpwtI/N2POVF6m2R6WQoUU8aHzGlL6zk6/IvWg6fcD9s5ij4Y5VmAcU6DshHBKmSwLkaS0tqmnWF5cXNDrhVSOgUSmxaUii1YNAakMMSuTJDGT8gP+zTy6rjjmTqhFSrbQWOcBSXZA2lP4KPnMlQxOjXRflvW7X0e0nv3wz6PF/9ZfV3DDWcKlOlydyoXl6rElDm8ls+1SaJEwBakWgmz0O0CzbM0+hHLuTb8meXxY+TbfwzUONQqQusVgy6LoKPGQzRYlgliknTz+124u3M293cWfn44/wIAAP//AwB/7ajcLQIAAA==", "base64"));
  res.end();

  return __filename;
};
