var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses.. : 202 14798us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses.. : 200 3556us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUu27bMBQG4D1PQXhtTkCKd2+Ju3QJgqadig6HFzVCJdGQ6ABG4HcvJdcd6gpoXWsgIPH8B+QHim83hKx82u6H5ttLfs6Yd2McV2RNvpC3MldmmzC9rqiQFeOagjEqgmAhAtYugpRonK2jNhWubo+RHrs4h+7blsydRzLEMQ6vMZxqQhz90Gxzk/q59AnzkHrS4Z70KZNpTQQzwbY9JbqYMWDGqfy4tmntQ8Qcw/syzG0qWlGgGirxifK1oGum75TQ72h5fjYqqd02LKWYWku7ptWdWUo97D+XrXw4sgTklkpRg/aiYCiM4JB7qBWV1DOMWFjmBocyHm5/V0VpTfAeKq5rEEELMEIIsOiLa22DQHOmutmQh/2S42YCaV4j2aSuS/1YEPPQuN1UQNrGx36M/y9Kq78XPU8teyAzUglfg3GGgxChUHhpwGnLaxZ40FL82QMeNxeR9KkHX77HwTfYXk+I/8OZO08tCznjohO0Bjv9fSLIcmK8U0ADU1RpYSt0i0LwfH8NpPEFh/L7t833eD2wylwCdkotg9VOmVpaB1bQAiYUgrE8lIEqG5h0hvIzsKedKxsjIXXY9Etkj4n8ujqvdlexixjYGQP5OnVY5ZSx/Rh9GsJ8rcubww8AAAD//wMA/cXOhfQFAAA=", "base64"));
  res.end();

  return __filename;
};
