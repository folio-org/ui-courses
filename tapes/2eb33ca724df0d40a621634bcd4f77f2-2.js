var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 10372us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 80305us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
