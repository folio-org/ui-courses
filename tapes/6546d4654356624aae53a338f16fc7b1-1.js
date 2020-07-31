var path = require("path");

/**
 * POST /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/instructors
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 146
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/abd88c4d-8de9-46b8-8291-0ccf916fb89e/09427a84-6777-487d-bdb3-75235f4012de/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/instructors : 202 7136us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/instructors : 201 11799us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSOPU/EMAyG9/sVUVdwlaTOhzsCEkIwwg9I4hQ6XIva3IBO99/pxwnm8+DB9vM+Ph+EqHquRCsqMkjoyAM7zYAhMPjUSUioOHI0EZmq+xUYwjFvyHMtXmvx+JXnkqcyDvs6himNvF9Y50nu4zSepjm/9XPph8+X3Rkie59wMXEmQBs9eE0KZEodKdtFT3mnj7kEDiWs2HkZrIFTDiXz09K2MC21BOmgUe9Kt41rjavJ6Du51Bbyzzz8fMx5uj4RJfpocwDU3oAhbMBLoyBaRB06g5b++NM33+y8Mrc7F/xyuPwCAAD//wMASJc11KQBAAA=", "base64"));
  res.end();

  return __filename;
};
