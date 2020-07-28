var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/departments.. : 202 8500us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/departments.. : 200 3479us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALxUTW8bIRC951egvdZYw8fugm+uWlU59NKmp6qHAcb2SmsW7eKDFfm/F68TWW2SKmmlIoRgmPeA90bc3zBWBUo45j3FPFVsxb6z+xIt8S6cl1XTtq2QouZSkuAavOHGWsWFUQpBg/TOVYsLJOKeZtB6vWafaOiH7fFxL9Dkxy7lbohzyt2O2JQP4ciGDctlkXqMlB/T95QxYMZz7uVCJehHwkzhQxlmDgkSOLRcmjshVnVT+lJo+w5KeyC6ot4fv0003l5eRcoZ37Q1d74FXjssrwLluHMbhxggOLRXhkMKf3HuA+rt584EpzKeFr+ZIeqmMVp4XgtPXAftOSJYDoRSOAALGp+Y8bHYu2NffUfR0/SSH7fR94fQxS3bXoxbsER5nKcMY2AJe6Qh5l9cfatNoFaqXim9VDU8L9cfRJZLC+o/iLzxVgipuQ8Sud4gcYukS+2rxgQD1sjwROTPWGp4j7nzr1DYDcWQdBhpFhZT6jsKrKB3078Lq16ow9ehrrKwH2eGKg8Z+y/khzHM/4O6Of0EAAD//wMAtvioRzcEAAA=", "base64"));
  res.end();

  return __filename;
};
