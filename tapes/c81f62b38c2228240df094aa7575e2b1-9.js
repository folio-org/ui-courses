var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/departments.. : 202 7116us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/departments.. : 200 2414us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/wK5LUhOjB2sMeqHTJ06cdUdTjgEluysWWTIYry30tIW1Vth0hlOHEvPCf0iOOCsczRiFPoyYc5YzV7ZceYxrx15zYTW1sJIRW3TiJXWyReISmuIC+101Bp6bLlBfHYU4IeMDTUY2jt/HnmaLZTO4Z28OnKxttu71q/Y2YIDRv3EzH0juE4di05FunmC+4poMOAZ/LyvBjaiTCQu4slTZQggcOaS/0MeZ0Xda5WeV7dQFwfgyK1H931VIJOsZ6WP7UUZamVsLwQlrhyynJEqDgQSmEAKlD4S8t9FN2wJ9uSt3SFmR0N3bA7LNlIYUrbpGjEDmnwISX/V1TA9YqEqAtRq3IFWvxN3R5eZpo2F0uUG23LdcGNXQMvDGquITfcmK1BdOAMVt8ks7fztCwMAbtHssPk0peUi9M7AAAA//8DAAOqXJyqAgAA", "base64"));
  res.end();

  return __filename;
};
