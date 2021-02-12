var path = require("path");

/**
 * POST /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/instructors
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 144
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/instructors/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/add
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/instructors : 202 12990us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/instructors : 201 9180us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPvU7DQBCE+zyF5RYW7f17XUYUIFHCA+zd7UWWnBjZToGivDt2HESdZosZfTOzl11V1V2uq7aqI7Gl4BJ4VTJY6yKwQQsueaKkpUmF6ucVOPFRbshb1/c8SrWXvh/SZkYe05A3X2lj3San4TxO8tFNc3c6vG+NXhMJeQJK1oJlz9AkU8ChQhPYNzGXjT7KzJlnXrHLIqyBo/As+XU5tzCNWgFqUPpThdbp1oQXQveE2CLeUv6h/c/XJON9RQgmiHIZAkYPLjtc/l5WFBtyJFW0SuGPP3/nx0vv0OOlC37dXX8BAAD//wMAl8vbeaQBAAA=", "base64"));
  res.end();

  return __filename;
};
