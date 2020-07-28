var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/departments.. : 202 7237us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/departments.. : 200 3260us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/wK5LUhOgN2sMeqHTJ06cdUdTjgkljyB7LJEEX57yWkUaWmlSKV4QQHzyv0wGHGWObI4xg66sOUsZq9s0Psxn7jTsssL8pSq9zyIrfElVOWI0LFgVDkBqAChdn8jPTYUYIeY+KWvdiGekvTZdvRZMfGh2bo06lVb9uda/oN29DQDpv9nHkKY5oy7B3z2CINfUidS0pHAR0GPEWcrxqbdiQM5B5iSdECBHBYcqFfQdayqKVayALuII6voEjtvPuLyvMadC3FQizl79T9/m2icXW2RNJoWy4LbuwSeGFQcw3ScGPWBtGBM1hlKeAY63H+U/LaVnkuFLdOIFdrJF4hKa5AltppqLRwV5KfMGypw9DYGwybIT6I342UxKL3bUOORXo7/V+srG4Xe019a2Efp4QsDAHbZ7LD6NKXFLPjJwAAAP//", "base64"));
  res.write(new Buffer("AwAozritqgIAAA==", "base64"));
  res.end();

  return __filename;
};
