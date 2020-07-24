var path = require("path");

/**
 * POST /coursereserves/processingstatuses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 109
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:46 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/processingstatuses : 202 23493us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/processingstatuses : 201 3515us");
  res.setHeader("location", "ed2c7007-42bf-49b9-b342-801bbd3ef8d8");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPPW7DMAyF95xC8NqyoGXJf5uDLt06tAegRNoV0MiBo6Aogty9it2iczhw4HsfH3nZKVUELlSvCmHtG8QGjHYjmM514CqjocXSOa5kbLktHm9ApIOsyDAM6lUihzhtCsvJL+GYwhxXw16ypDwl+pyns7BawvSRVJy/Nv9BEnFWb+ZLHuSRX4SS8HNu6wqNGiFfpc1bWfe27U39ZHXzgLnWJf/M/vv9JMvL9g5T1aE1IzTeCNiaBBxVHsYaLfqShDT98ecj3535y9yfmfHr7voDAAD//wMAcZN6YnoBAAA=", "base64"));
  res.end();

  return __filename;
};
