var path = require("path");

/**
 * GET /loan-types?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/66cec8e4-9ae6-4729-8119-3f341e0e67c3/410287b8-02ab-4b31-90e5-a09f8e073db3/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/loan-types.. : 202 88163us, GET mod-inventory-storage-19.3.0-SNAPSHOT.453 http://10.36.1.132:9168/loan-types.. : 200 2077us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTUWvDIBCA3/srJK+rQz2TaF+3X9DtbezhoucopEmx6WCU/vdd0oXBysZofRDv9Dv5PDwuhCjaHrvhY0f7QqzEizhyjrObOIYF6hh0IJCxrJK00aFsrHccxqq2IQRny2J5Rjrc0gQ9UUthoDhvbGnAiAOOm+fynAyZkM888jRBRhklVS2Ne1awArsycA+VvVM8vgoxddjF/1MTdOL5tPyhRa4BrbGS0BgtLSQj0VRexuhBq9CYqOhC66E/5D2JTHvK7/xcN9vV7hq7mfrdzpB1VGuQuk4gbeAV+uSkAe5Ww8YK7YXdmjBuujeR+357u5qrrlGbqT/UGm9DBVqmgF5a57lxNXAlICqNT4lMfdk47ETY5HBox9tvdvPlNW4z9e0mXscKxdAP2K4p9DlOX9AuTp8AAAD//wMAwJVw75gDAAA=", "base64"));
  res.end();

  return __filename;
};
