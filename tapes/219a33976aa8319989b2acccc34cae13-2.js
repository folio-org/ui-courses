var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAxNCwidGVuYW50IjoiZGlrdSJ9.pYJZcQSjLyze0JsznKIdSEhBxrVih9tUNehad7VLNF8
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
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/coursetypes.. : 202 6530us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/coursetypes.. : 200 2519us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS0sDMRCA7/0VYa92dHaT7KNH8eJFQXoTD3lMcKFNlt30IKX/3ey2i6AWpZrDQCbzDZOPZL9gLDNh1w+0futoyNiKPbN9yqZ8a8dt5iSWnKgGndcGBBYaNJoGco2u4baWFepseUS82tIEPfpN62lOWxpM33axDX46fQis9dBRPwTPTNh2wZOPc/WWorIqqrH0OMo4ZE8qkr1LYWpRYIGAFeTVGvmKi5WU17XEK0zr1ChRu87+npqgQ4qH5ScFyCVSUeVgra5BWHKgSlWD4sYJh7nWzp5RcHPv2fGi52TchvjKwlTMlLffmRn+rqbkl6iZqfNqmlwKFLUGXjZJTUEGlDQKjDOkHQrCRnxR86OT9EBORv7xdVTFJQpm6kMBexk7ZDFEtXkiE3o7/Ru+OLwDAAD//w==", "base64"));
  res.write(new Buffer("AwCzKTQvTwMAAA==", "base64"));
  res.end();

  return __filename;
};
