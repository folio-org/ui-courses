var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves.. : 202 9518us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves.. : 200 71708us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
