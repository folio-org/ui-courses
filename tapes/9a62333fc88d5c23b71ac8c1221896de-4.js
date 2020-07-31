var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/departments.. : 202 7131us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/departments.. : 200 4892us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUQY/bIBCF7/srkK8NEWBwILdUrao99NJuT1UPAzNOLDkY2eQQrfLfS5xdbdtsq91Wqg/IjOc98PsQ9zeMVUgJxrynmKeKrdlXdl+qpd7heVrV3pEh8NwFRK7NKnDwKHktlbHeOWglVouLJMKeZtFms2EfaOiH7fHxG9IUxi7lbohzy92O2JQPeGRDy3KZpB4i5cf2PWVAyHDuvWyoFMNIkAnflWH2UEIJLlZlL3fSrLVca7eUavVGlOfB6En19vhlovH28ldeaOsbAq6VNdw4XXMrjOS+0VpBa3TjfnA4JPyLdR9Ur193NjiV8bT4BYY0TWO1DNzIQFyjLjBAOC4IlPRCOKHhCsb7gnfHPoeOYqDpdzxuY+gP2MUt217ALViiPM6vDCKyBD3QEPNPVF+LSdTruiRmlrXTz8f1h5DNclXb/xByG5yUSvOAqni0QNwBaa5F3Vi0wll1feI/QjnDe8hdeEHCfihA0mGkOVhIqe8IWVHvpn8P1sqXB3uteoqFfTs7VHnI0H+iMIw43w/1zek7AAAA//8DAK2CYzY3BAAA", "base64"));
  res.end();

  return __filename;
};
