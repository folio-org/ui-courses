var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6332us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 74944us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
