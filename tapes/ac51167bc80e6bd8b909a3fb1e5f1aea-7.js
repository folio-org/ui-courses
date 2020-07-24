var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves.. : 202 21675us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves.. : 200 62772us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
