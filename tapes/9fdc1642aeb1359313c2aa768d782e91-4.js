var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:54:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 7243us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 2891us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTy2rDMBBF9/0K4W0zRbIelrIs3XRV6GNVuhhJ42Bw7WDLhRDy71WSvtuUEiqEwLq6g+foan3CWLEc+kDj2HSLm4RpGmks2Jzds3UWs9zE7WdhfV1aDAYwhAhKVxpsXSNIo63mnoTVopjtLR0+0s50TQHbluKrEGkMQ7NMTd990hl2kU0dPmHTom/p9fwjJYyYcHt4/zt5MwyEieJFXnZFSl5y4BWU9pbLudRzqc6kE6c8j5dC2TUt499dO9Mmr5vZFwxoY6mqYIEs1qBQGLBeVMCdUZU1kqRU3zBcdawfIg2HMFxtRYoz5qfEuj6xFSX2fzAUV0fAeHMdhiHy1aNzEbhXBpT1EhzKEhTXvBZcOjTfM3HZsZC7aPtFTtwvwaDmKQfjI5EX2/Sep+ORCPl3JELMdZ7uzBn7s+t8dTfScLmnQtLbYPL78KHioD1asFx68L72iJFHj+4DVPawrVakPjeX285B2b0/ebJ5BgAA//8DAGidQkyeAwAA", "base64"));
  res.end();

  return __filename;
};
