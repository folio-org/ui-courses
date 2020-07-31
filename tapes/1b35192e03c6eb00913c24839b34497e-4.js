var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:42:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses.. : 202 7134us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses.. : 200 4094us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUO2/bMBSF9/wKwmtNg2+R2hx0yZSij6nocEleuQIUyZCoFEHg/15KjuE0rovWTTQQkA7PkfSdKz1eEbLY9l3AYajbzacEaRxwWJCSfCWPWcxyHafTheSxAOMkVcwKqiqmqTVFoB4tSl559FEulntLC3c4m9brNfmAbczZBy3iEPp6m+qunbdcYxZJgARNtxkxkr7efE+k7X4cHHeYIGZ92r5/pnwx9AgJ4/u8zDGCCUZZQSX/zHWpRMnEygn+juXjKejoun74MmB/s38xz5T1BoEqYTXVTklqmebUG6UEVFoZ9yxh3MYL7vvk+vf7zgG7vO6WL/rg2mpwLlLmlaE5SlIHMjfDNKs4kw4MP+njpj2Q/kMjHzFgfZ+b8OPUQyIPmJ4VdGktTJYyE9IrZc7gOQeVl9qtpDVvDxVsFKoIlqKFiirghlrPC8qcUYU1EqVUJ1BvW9L1EftzPG8nEePyF55wD3UDvsH/x6ns3+M8dZ2HYX0lLARDIYRIlS7yF19VQKXJo8c8cqtPJywPDzTNcUp+M1yzTqCNZGxfEYNUl2A4uI4YyLcpYZG6PPD5aXO18/9QXe1+AgAA//8DAOyTwsQuBQAA", "base64"));
  res.end();

  return __filename;
};
