var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:38:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 10154us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 82732us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTW/bRhC951cQutab7BfJ3dxcu0CNJk6ApOihyGF2d9bamiKJJelGCPzfu5IoiVJkVHYOrQ8CzOEbzrx984b89irLZsHNsrfZTAkqpKFAjC8ZkVLnxBSSE45aK19yhrmbXawANSxwDbmCyg7V0GWMsk3IYWdjaPvQ1Os7foYu2MwF7zFi3QdYRTKoXRbqHu/i+v8ttIXYL9JdN5uCmLeaMS6JdRyI9IBEA0oiqSiUU1Qr7o6hH8xfaPsV/FsK7Js7O9e0vffQz3GRSrTdNnbc301tq8GF+i4zTT/P2iHiujto2yqgyxJ6vgMvsAcHPezLSxdtROjRXaefdUZOOSW0JJx/puKt5G+lfF2K8iea/sZECTW07nzUGvSYfh/XbNlmiB2+C12f6h65tlQYa0AQKIASyXNGjGAFoYVgxnAsPB9P+AD9FN1np0uQiHcpWYQ4loJfe4w1VLsbtheO4nwb7zA+BIttE3bSESCpyrkjUvv04zwnwLwmBfJCMihQM38KftzPvqNnZDyYkBBtdo3dfcb2Udu4TdS6yVUXOts8YFxeh66tYHk7zTFUm8lZpyIk+xWq6m9Y7tFtsPdD+66xsNVmHwfchedN5T7NsfK/fG1DXH7EGBo37XNVwBB3YHGxv76a1Piw4/8PxPtuNoYfd0/oevD+UxXabnXXn9mXV5P4rBoLG3PkwnqdF55Y5jyRjBqiDALhZfIebi2Udiv2HfTps3lGtunZXNY1fj1xKr/9/ubq6s31zZvLfTB0l7YPD/gdsaFOg9APk94kRaTUAoGcKSKN1MQgZSvtK0dBgs3LyVNh0Q7dCC249WVhSpJqzpPIhCCas5Kg85JbZKCk2kOrYNLULLeUulIpKpBYoHL12FQAJpvjthBGc5mKMRO5xLBI2E8b7X9caf8FMu8m8Bs3Hvx5OY70kRS22FqRY2hKdOn41o0UQDQVJXGlZ5CLnPli28ga9rQunpHpwPaDnQNWC+gyTpmeTSUe+4nlMk0YJUzs78DaHcV5cuXZQasbA/28bHFs2OdJGoiKGKZs2kjcEENtwhrqtXAqL+mu4T346bafkW/a9oe6CjVO/Oho1d02aWeTFmOXfMg2i7ap08I97G01DXGwfRM35Y2SOK6QYxpZ4J5o43RaD9IRY9GTovS554VCZ6a7Lsls6+t5qRVjSESp06RbqtOkp/6AAlVWS4/i5KQ7WHQX2dU8pk0D2eV06H9gF64znFrqZ631/DXj/HCtn7XYJ7itCY9n8L0SCmYL0Oldh5vkJyW1RMlCkEJqCd4xqrA4ybMpwRWQiC2FE8lRkSYzSVpX3gpnJOYl2hM8f4Zl1cSL7H24x/8JxzynL+J4h/s3jrW1SinMiS9cueI42T1jggiaFoHyBoupZ0855oBGOEzmmBdEgkoy5nminCd/QoOsKOUpLcMdRJc4BneHhxP73xJd6pcRvcUdEp19+dGXZl3KF7w071AnX5pvh4XBuPmi4ELmm1fiLjldcsnb/XdDGL9pvi/+LC6pOhDtWTzuMKuSXz3+AwAA//8DABipc27aDQAA", "base64"));
  res.end();

  return __filename;
};
