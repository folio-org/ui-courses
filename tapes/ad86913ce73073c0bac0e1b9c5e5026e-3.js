var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
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

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 7457us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 5212us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTW/bMAyG7/0VQq4rC1miZCm3NrvsUhTrdhp2oD68GvNHYCsFgiL/fbLTFsM6Y0UWHwhY1EtIj17y6YKxle+3+6H+8ZDuE6XdGMcVW7Nv7CnncrYO0++Kk7ImeA9ClhVgKBEMIoIlr8hUNiCZ1eVR0lEbZ9Fmw272L6shjn6ot6nuu2NyiJTqx8g2fdv23cgopaF2u2kDa2ofuzG+aNuYKFCiSXg813TuqUAMH3OYCwouOPASZPGFy7VUa1RXwqgPPH/PhbJqtw3vV82iQ46Hyz94VE6bSlkHFnkERE1grAw5cG1DoZzh8g2Pu53LF2Ohb6nulrjc9uz1RTITRk3z3xgk5ydgeFUtY3DGRYe8Alu5jCGobAvvNPBQaK5LtILc320Btxu4vz7JHF3fgc/rcfA1NWx8oCECNfXPeDbfyKI4BdiLahkYFUZp9BUYZ2T2Tcgt5JUBV1pZFUGGUuEisHPQOhshcRIh8U9CHJUoZMnBGJ0tVYT8tpO5VJ4zzlaxNILeELpuGjZ3zMiGOMbhMYYlWHeUhoylpX1Gk+ZeO1ubSfF+JoVYS75GecWXmvNm/zVf5dNzp3E0TkcCzNMJlEUJhqsCnEYUVCnU9neq7PtUbZX6RM3n6PshzGNdXRx+AQAA//8DAInn1S30BQAA", "base64"));
  res.end();

  return __filename;
};
