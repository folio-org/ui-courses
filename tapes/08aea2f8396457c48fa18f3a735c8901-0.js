var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 283
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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
  res.statusCode = 201;

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses : 202 6663us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses : 201 5046us");
  res.setHeader("location", "9ddc9cff-cdaa-4aec-9de6-907124893d4f");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPsW7DMAxE93yF4LVlQcmyZWVr0KVAkSn9AFqkGqOJE8h2gSLIv9exk7ZrNGjg3TvyTgulsoYztVSZZw4+xAiBicCSBPAsJXh02tjK52xj9ngBWtrLhDxT4i9Kn6pOIty0H7PO0oXUHPvm0E62zVZUoCSKWlZxdqpDVP1QD7uGpe2pl+7GHin1+3H2Op+li7KsrA5Q6CBg2QYgQg8oZHSN6NHSjIbDkDp5a7p+zL/S5DBGyR2QFQ9WGz+Wcjn4PBc2yKWt4396PexrSXO5lUY9a52ES5n1b++dHLeztJeemHq6zE/j4JKUZOzDL+M3uQ0aBHSg3UZXyyJfFtVTaf0Djm8K+WNW3++dpOvtroo1VkZD6QqBwmGAqhQHBVo0pgoFan3jhyPfvfPK3L9zxM+L8w8AAAD//w==", "base64"));
  res.write(new Buffer("AwBtfzV0PAIAAA==", "base64"));
  res.end();

  return __filename;
};
