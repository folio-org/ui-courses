var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 42170us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 3564us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTT0vDMBiH7/sUoVf3StIkbdqjePE08M9JPLxJ3o5CbUebDkT23U0759A5ELWHQPPr8xKe/Pq6YCzZ9J2jYajb9V3AMA40JKxkj+w1hjGu/fSaCG00FoUHblUGylgJBcoUFNe8ElwWmIlkuUdafKYZummZw4BNt47TD6mnwfX1JtRdO390S47qLXlmx8DaLrAXCgdsJH/Animgj7sTsz9a3HQ9YSB/HZd5VspTDjyH1NxzWUpdSnWphLzg8XkfFKlx489RQpTclFpf5uoMdfXyMFB/s7dC0hqX5RqsyzloiwYMlxasrSyi595ikcwDdnHdLb9IReNTlTsDZLAChSIDY0UOvMhUbjJJUqoTqauWdb2n/pzP1RSSX37yiVusG7QN/V0nVz/XeUqdl2FslRp0GaBzHpSOVk1VIcgsVo9bEkafNiyWB5vm2JJvyjXnDFvPxvb/NMhC/ELDB3XUwJ6mCUnoYuHjaePVzv+fXOzeAAAA//8DAMTK49WeAwAA", "base64"));
  res.end();

  return __filename;
};
