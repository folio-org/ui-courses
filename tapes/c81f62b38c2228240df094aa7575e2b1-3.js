var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
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
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/departments.. : 202 7453us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/departments.. : 200 3540us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/wK5LUhAgwueKzaIUOXfkxVhzNcYks2RjYZoij/vYS0VdWqUqQwnOCF54Qe3WFBSOEwwBQH9HEuSE3eyCGlKe/c6VjwjTWcC0mtE0DlBpAaQEklKyvtNDNauGJ5RjwMmKFHiC0OEDs7f905nO3UhdiNPj9Ze9vvXOe3pBljS8JuQgLeEQih79CRRLff8IARHEQ4kefvpdBOCBHdfSq5o2CCUXZLS/7CyrpUtVSrUvMbltZno0TtgrucytAx1ePytxZVVVpySxW3SKWTlgIwQxmC4A1jhkn4o+UhiW7Js+3QW7zAzBbHftzulyRgnPI2KwrQA44+5uR6RUZeroiLumQ1NyvO/xF7t3+dcVqfLTVM6qbCNDdCK6qMLKlmitOmklLARsnK/JRM3k/dijhG6J/QjpPLIykWxw8AAAD//wMApIb+NaoCAAA=", "base64"));
  res.end();

  return __filename;
};
