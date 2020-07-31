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

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/departments.. : 202 9268us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/departments.. : 200 3643us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSvW7DIBRG9zwF8tpQAQYHMlbtkKFLf6aqwzXcJJZsjGwyRFHevZg0qtS0UqQwXMGFc4Q+OMwIKRwGGGKHPo4FWZIPckjd1G/ctCy4qiotuaWKW6TSSUsBmKEMQfCaMcMkFPMT4qHDDD0l45a82ga9xfG87XC0QxNi0/t8auVtu3ON35AN9m2/2c9JwDjkKQHvSIAWsPcxd86WDiM4iDApTldNTTsgRHSPqWS1YIJRtqAlf2PlslRLqe5LI+9YGt+iRO2C+4/iCeETtSj139TD/n3EYXVKqWZS1xUClUIrqowsqWaK07qSUsBaycqwIguOqR7nv0NeW8O5kNQ6kRxrQGoAJZWsrLTTzGjhLkJ+hrjFDmJjr0i47tODhN2AOVgIoW3QkURvx9uD1fz6YC+pn1jI52QoYh+hfUHbDy5/STE7fgEAAP//AwAD7tamqgIAAA==", "base64"));
  res.end();

  return __filename;
};
