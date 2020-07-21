var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Tue, 21 Jul 2020 16:07:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/copyrightstatuses.. : 202 14414us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/copyrightstatuses.. : 200 2475us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUy27bMBBF9/kKwtuGBSW+vUvddRA03RVdDB9qiOphUHQAI/C/dyTXWdQVUKjWYgBxdAfU4b18uyNk44f9MacfL+W5QDmMcdyQLflG3rCH3RSm1w0DaU3wntZcN1QELagRQlALXoJpbBBgNvdnSQ9dnEW7Hfl0vKyGOPqc9iUN/bmZI5T0Gslu6LqhHwmUkpM7TB+QNvnYj/Gi7WKBAAUm4Xlf076nATF8xjIPrFnNKNO0rr4yvuVyK9VHZcwHhs/vQag67MO/q2bRCevp/g8ejVOmkdZRK1ikQiigxvKAhSkbKukM41c8ng4Of4yEoYPUL3F5HMj7iSATAm373xh0zVZgeFctY3DGRSdYQ23jEEOQaAvvFGWhUkxpYWtwf7cFfdzR54dV5uiHnnpcj9knaMn4AjlSaNPPeDPfaM7XALuoloFBZaQSvqHGGY6+CRghLw112vKmCjxoKRaB3YLWzQiJeg2hi2qZEBOyrrhm1BiFlqoCnu1kLon3jLNN1KaGK0IPbUvmxIwkxzHm1xiWYD1ByYilgyOiKXPWbhYzuSpm8ipm5Ps0YVOGAu2X6Icc5ktZ3p1+AQAA//8DAP8Eev+yBQAA", "base64"));
  res.end();

  return __filename;
};
