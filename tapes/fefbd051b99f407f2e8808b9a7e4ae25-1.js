var path = require("path");

/**
 * POST /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 143
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves : 202 7290us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves : 201 87979us");
  res.setHeader("location", "fcf21fc0-fffd-45c2-aacf-468f3e74a7a1");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJRTu27bQBDs/RWEmhTxGvd+qLMSBHZiOEbgFEGQ4h57NhGKJEgKgWD433PiQ5bdWQUh3O3szM7sPZ0VxaqMq2JdrFJIjKZAIKUUQcjAwLmQQCiTOGrhtKOr8wMgNLuux5uyH8r64XpCKxUwGBRgHSoQmlkwlFrgiQuKBJUOfEKXA25nUFRJB+odOMZ1JpIIVmCExDVa6oMSPi6UbYnxOkMPwKd8lA+960ITcWwlJLdGKyIFNxNRLsjlbdO5bn/TBDeUTX29jBqVCEhBWStBmETACIJgbEqOMWO4pkuPFrutq7Ee3vSQPCQrVYJAYzaJEg/GowOmk6YsBKcDOeooh2qSuenK+IBD8bWpsf/QFxvn9+tieMQilq4rsV8goamHrvS7oen6A/L3PHS+qt12avalxCrmCM6LK6ywnqGvwbe5+H7f4qyaeSuC4hRScDZPbnPImhMgHFGyPD4ytxrbPBd/Fgd2viqn2d8oGW/6R+zG3pdV6jAWlxfFt7pp04uctnJhUnyL/4pfTff35S66Ab+nu9cUK0aoeisjuKq63W39zHb3I4etLq6FNKbYaGGLEXS0r92PZZ/yn+K4EGXdD64Oixs6+SijEaBYpCCyM2CDkKCCp5pba/y8fyfQq25+L4cD8vI7Uj82Yyj9smtee00SBW+sAWGZAGctBYLC5yCY9zIdRn0e9/xkY119khsazyl1CrhnWSlPOTemLMRoOSXBs0hweilbHFw21Z28k9Bhdjl+zp/ZXZYT18DMPaVrKddUXyhOPh7GOBo4YTb7nz12iwjuTVBagg+agPTOgCHcg/fJOxdJ9M4u+F0b3805Y97PebDv7Pk/AAAA//8DAEVjTfrNBAAA", "base64"));
  res.end();

  return __filename;
};
