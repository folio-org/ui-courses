var path = require("path");

/**
 * POST /coursereserves/copyrightstatuses
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 137
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:55:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/copyrightstatuses : 202 12436us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/copyrightstatuses : 201 3621us");
  res.setHeader("location", "accdcf6b-3ab3-4585-abf6-a8e991921972");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPvW7DIBSF9zwF8tpS8ROM8eaqHbq3D3CBS4zi2BbQSFGUd69jt+qc5Q5H5/uO7nVHSBV9RVpSgXPehdpSCVbSvWoUBRtqCg0aw43gRovq+Q6McMIV6bqOvA8ZzxETGaLDMeNW8ZhdinOJ07g1XYlnHC7EDpM7xvFASo9kTtMhYc5kCiS7fhog5T7Om+KEBTwUuPPXJVgilxAK+rflrFbBBKdMUC4+uW6ValnzIqR+YqxlbLX8Q6+Xr4zpY/tVa6mRK081szVVXjEKUgYa9tpbw4PgTv/x37N/fPQXenx0wW+72w8AAAD//wMA8qYxMJgBAAA=", "base64"));
  res.end();

  return __filename;
};
