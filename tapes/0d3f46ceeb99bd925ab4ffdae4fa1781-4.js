var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/coursetypes.. : 202 9271us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/coursetypes.. : 200 4117us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUTU/cMBCG7/wKK9cyW3+ME3tvS3vh0koITlUP/hirkbJxlIQDQvvfm2wWaFmgBdocLGU87+vxMyPfnjBWhHzdD3R509FQsDX7xm6n6BSv4/xbyEpKHYQHqpQETA7BWeNBRiyxNMlYksXpImndlvaizWbDPuUmBzdSvNuNNIS+7sY6t0tS07C6hY76YYockrY0uuhGN2cshcwl9jQbfZ6WpSYuOfAKlLgUeo1irfRKWfmBT9/B6EF1dnM1UH++3MZzNL4kByiNBm1RgeFagC8RpUsaS/uLw3UX33DuQfX6c/cGu2ndnT5qghUaZwdQpTWTBwVwOjgIKZBPHIlbPGrCect+Z/u4AV8yy21Tt8RC3na5pXZ8axu4mlisUa+0VE/jeAGiWBmF/x9i0rxURAa8MAGQSw+eBwvC82RVNLri/gji1z2gFwjeT/C/hMjF30M8Vj2PgCvNSVYCYvTTHEVK4EpnwKmQMHHhfYrPIPj4x3E6y+OPu4FybXyKzPB+NOIV83WsekDDvs8OxZhH11xQyH3cP394svsJAAD//wMAXDX9MxYFAAA=", "base64"));
  res.end();

  return __filename;
};
