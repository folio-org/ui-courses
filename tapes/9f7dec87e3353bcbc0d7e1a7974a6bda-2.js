var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:40:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 6945us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 5767us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUz2vbMBQH8Hv/CpHr+opkPclSbm122aWMdTuNHfTLiahjBVsphJL/fXKydtDUbKTx4YEtfR9+H2w9XxEyc2mz6+NylR+yydshDDMyJz/Jc1krq9GPtzOKomK8pqCUDIDMBzCNDSCEUVY3oVaVmV0fI51Zh0Potm3JofNA+jCE/in4lz0+DK6PmxxTd9zqcnwK7Y7YNrnH2C1JXgWy6dOyJAeSGjK4VWpNP6zi5qXJOmTjTTZjh+PrjuP0weTgP5dy6FzRigKtgbPvlM+5mKO44bz6RMv1p1FJbTd+KsWqOdI5YzdUy/dTd7sfZbovRylLUVkZDGClBAiNHBQVDKxErEwjUGo6OzTYl7q/fgtthFbeOah43QD6GkEhImjjCnWjPRp1Ar1YkLvdFO1iBCm4ZJHW69QNxOTcR7sdN5A2utAN4cOiZdb/Fz1NTXsYpoRE14CyigOiLxROKLC15g3z3NcC3/eA+8VZJF3qwJXnoXfRtBcT4hU7Q+g1NS1klQ0WaQN6/CHRi/LFOCuBeiaprFFXxk4KwcPtJZCGlenLidDGx3A5MHYWGPsnWGOlaoS2oJEWMJQGlOa+FCq1Z8Iqyk/Avm5tGYz4tDaxmyK7T+T1NC1cxLTtxxkoPYfhJfWXgfwaO8xyyqb9Flzq/eGkF1f73wAAAP//AwB1cda2BwYAAA==", "base64"));
  res.end();

  return __filename;
};
