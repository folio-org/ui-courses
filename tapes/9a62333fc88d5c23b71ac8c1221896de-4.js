var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/departments.. : 200 3207us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUT4/TMBDF7/sprFypq/G/OMmtCIT2wAWWE+Iw8UzaSGkSJe6hWvW746a7qmBZREHiYtmTec/O+1l+vBMiIx5xinvu45yJSnwVj6ma6i2dlxkzuRpISRXYSZsXTmKjgywMKG3yoBoXstVF0uOeF9FmsxEfeOiG7fH5G/EcpnaM7dAvLQ87FnM80FEMjYhpMXbYc3xu33NEwojn3suBUjFMjJHpXRoWDw1aSdBS6QflK2crk6+9cW8AKoAnp6vs7fHLzNP95be8N56VI+mhzqUjBxKNaWRjPdWlarQK/upwGOlvNn6S3b7xYnBK42n1Ew7l8rywKkiXeEhLNkhEKCUwalUDlGDxBY73CfBOfA4t94Hn14jc96E7UNtvxfaCbiVGjtMyFdiTGLFDHvr4A9dbQYGpNFTar9NNeiWv38Ss16VT/yPmJpRKaSsDaZS2QZYlspUWTF5QAWWh6UXMHzHd4z3GNvxBxvWQkIyHiZdocRy7lkkk9W7+92jLW6L9hewajPh2tsjiELH7xGGYaHklzN3pOwAAAP//AwDdu/RsPQQAAA==", "base64"));
  res.end();

  return __filename;
};
