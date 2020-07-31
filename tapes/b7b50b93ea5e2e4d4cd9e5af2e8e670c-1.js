var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
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

  res.setHeader("date", "Fri, 31 Jul 2020 12:36:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 9237us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 101253us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("sm5DMMaAIknHvM06tg7GBBEUm4pJHvSu+vezzh14EQElVmkincFS5woXgaO6gQem8+MfLFy5W1dHzLqLt7C/w//3qRdPTr04mfqvczZV5mAvDppYZzfwbMqFVKfOpm9d0Z3Bnn42ZflTzqYs3z+brvJ60VSNK/8BoapXKKCe3f8XAAD//wMAKdZt6yA4AAA=", "base64"));
  res.end();

  return __filename;
};
