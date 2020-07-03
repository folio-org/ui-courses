var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/coursereserves/copyrightstatuses.. : 202 69804us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.169:9157/coursereserves/copyrightstatuses.. : 200 92283us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTW/cIBCG7/kVaK8NFTZgw97S7TmKmt6qHgYGN6j+WGE20ira/96xt9tDUiuVuxxGguEdwcM7vNwwtvHD/pjij6f8mCEfxjBu2JZ9Yy+Uo2zEaboRoK1B73kp64YrrBU3SiluwWswjUUFZnN7lvTQhVm027FPx8sqhtGnuM9x6M/JFCDH58B2Q9cN/cgg5xTdYdrA2uhDP4aLtgsZEDJMwvO5pnNPBQJ+pjAXLEUpuKi5KL8KuZV2K/THorAfBI3fhUh12OO/q2bRieLp9hWPxlWm0dZxq0TgSlXAjZVIQVQWC+2MkG94PBwcXYzh0EHsl7jcD+zPixATBm37/xhksQbDRbWMwRkXnBINt40jDKjJFt5VXGBRiapWtgT3d1vw+x1/vFtljn7ouaf1kHyElo1PkAKHNv4M1/ONKtcAu6iWgUFhdKV8w40zknyD1EJeG+5qK5sCJdZaLQK7Bq2rEdKrLKXftZRQuixkLbgxFVmqQHrbyVya/hlnm1CbEt4QumtbNnfMyFIYQ3oOuATrAXIiLB0cCU2ee+1qbabNKibmNRP2faqwyUOG9kvwQ8L5U9Y3p18AAAD//w==", "base64"));
  res.write(new Buffer("AwAV/jiXsgUAAA==", "base64"));
  res.end();

  return __filename;
};
