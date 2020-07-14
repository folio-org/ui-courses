var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 14 Jul 2020 14:59:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/processingstatuses.. : 202 6476us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/processingstatuses.. : 200 2783us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTT2vDIBjG7/sUkuvq0Pgnpudddipsu40dXvVNCaSmJKYwSr/7TNrQbaVjlHkQ9PF5ef35uL8jJNt2rcO+r8P6JUIceuwzsiRvZJ/EJNd+XGbGVrkBpyk456lUhaKmqoAKrYxiFrlRPFscLQE2OJme0UHToJ8Fj73r6m2s2/BNJxA8GQLsoG7ANjif32AEDxHGw8d20qbrECL6xzRNRXKWM8oKyuUrE0uhlkw+CFXeszROhZJr2Pq/uybTIc2HxQ8MYHwuC2coGqioBK6psbygrNSyMFqgEPICwyqQtvPYXcOwGkX0C2KHSEIbyQdG8o8wCnULjNl1HQZPTw9l6SmzUlNprKAliJxKpljFmShBX2biKRCXbtG065S4X4KB9S4F4yuRk2045+l2JEbcgmR2nZGQ97FCFtvUWmo6PfP0e8Td4RMAAP//AwCeq8sJXAMAAA==", "base64"));
  res.end();

  return __filename;
};
