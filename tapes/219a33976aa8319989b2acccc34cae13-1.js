var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:16:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes.. : 202 52132us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes.. : 200 2447us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTUsDMRBA7/0VYa86OtlN9usoXrwoiJ7EwySZ4EKbLLvbQ5H+d9OtBdEWRc0hkMm8YfKYvC6EyGxcDyM/bHoeM9GKJ/Gaoineud0x8xrLgrkGI2sLCnMDBm0D0qBvClfrCk12vkcCrXiG7sKyC3wIOx7t0PVTF8N8extFF6DnYYxB2LjqY+AwHbJXPJGjiXap+1Z2TQ5ME7vrtM0lcswRsIJcPWDRKmxldVGjPMO03gslat27n1MztE379vyTAiw0cl5JcM7UoBx7oJJqoMJ65VEa490JBZc3QewfekrGVZxeRJyTBQV3zMz4dzUy/42aA3VaTSO1QlUbKMomqcnZAmlLYL1l41ExNuqLmm+dpAF5N/KP0yGbnyuQZavrVuJFWVXHqavN48jDzd6Co6JBrTxUVjHokhhMGg7wJWq0kphy+iBRPO+qZVOcaHnPNg5u/nnFYvsGAAD//wMAbJrHBJEDAAA=", "base64"));
  res.end();

  return __filename;
};
