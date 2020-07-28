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
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
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
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses : 202 7231us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses : 201 7499us");
  res.setHeader("location", "410287b8-02ab-4b31-90e5-a09f8e073db3");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPwU7DMBBE7/0KK1dYtHbsxOmNigsS6ql8wNre0IgmjRwHCVX9d9KkBa71wYeZfbszp5UQWRMysRaZlqhs6SygIgfa5RIqZAOEVW0Zyzy4PHu8AB21PCPPFMMXxU/hInNouo/FDzz42PSpOXbz2G7PwlNkQV0Q9TIpjrVIoxsPTeAuUeLhxvYUUztpr0ssaYrCaunBSM+gg/ZAUyRAJiUdYoWaFtQfxzjwWzOkaf+VLgrP3rKGirgAXaoKrJQV5HWuJSMXpc//09uxdRyXchuJcvEG9pcy29/eB+73i9VyokCJLvppEi6bIk99wsv0zdMKFQKWoOxOyrUxa5RPCs0DTm9e8sdsvt8HjtfsnDvri9KA8yWCcWTBYu7AudoRBQyOqhs/9uHum1fm/psTfl6dfwAAAP//AwB33xSRPAIAAA==", "base64"));
  res.end();

  return __filename;
};
