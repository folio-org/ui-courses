var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 244
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings : 202 6775us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings : 201 6686us");
  res.setHeader("location", "899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSQPW/CMBCGd35FlLW9ynbOjs1W1KVTFzpVHfxxrlIBQY6RQIj/XoeEtisebrhXj5+7Oy+qqu5CXS2rWhtjybIWiOsA6L0CJ4IAG3jE4LgLTagfRyDRVzfkZNPrRKbnFWd8yuiYKe3sZo6O/6JN723u+t0cRR8UeuKgjJGAOjLQyAi0idEKoXXTzmD5cXuDTMuFMAiCNS0gxhY0UwoEV5aMZF4oP0G+P6SB1qc9zajhEhlqB40yGlCQByu9BR89uciQmMEJ7XZlu4PPfXpz3+TzMPIf1ec13FK2wWY79s6lMaoS2UzhpZSrSTDBoByy4Wsul41ZonlCwR5YeVfDH7M6vQ90u6Mbx1Nky3BagjTYlOUkB6cQhY0SlfnlD/twt3Nm7ncW/LK4/AAAAP//AwDyjbGmLQIAAA==", "base64"));
  res.end();

  return __filename;
};
