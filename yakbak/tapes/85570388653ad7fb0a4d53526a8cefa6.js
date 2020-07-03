var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjJlNjMxOWI5LTFmZWEtNTQxZC05MWYwLWQxN2MwODdlZGJkNSIsImlhdCI6MTU5Mzc0Mzk4MCwidGVuYW50IjoiZGlrdSJ9.5_DoxBQWjfNC8vC1SXXnZ5ezBn1Ko65ahXmdG7XdneE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 03 Jul 2020 02:39:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/coursereserves/coursetypes.. : 202 444915us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.169:9157/coursereserves/coursetypes.. : 200 68557us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS0sDMRCA7/0VYa92dHaT7KNH8eJFQXoTD3lMcKFNlt30IKX/3ey2i6AWpZrDQCbzDZOPZL9gLDNh1w+0futoyNiKPbN9yqZ8a8dt5iSWnKgGndcGBBYaNJoGco2u4baWFepseUS82tIEPfpN62lOWxpM33axDX46fQis9dBRPwTPTNh2wZOPc/WWorIqqrH0OMo4ZE8qkr1LYWpRYIGAFWCxRr7izQrlNc/lFaZ1apSoXWd/T03QIcXD8pMC5BKpqHKwVtcgLDlQpapBceOEw1xrZ88ouLn37HjRczJuQ3xlYSpmytvvzAx/V1OUl6iZqfNqmlwKFLUGXjZJTUEGlDQKjDOkHQrCRnxR86OT9EBORv7xdXB+iYKZ+lDAXsYOWQxRbZ7IhN5O/4YvDu8AAAD//wMAhRH7Jk8DAAA=", "base64"));
  res.end();

  return __filename;
};
