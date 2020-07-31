var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/instructors/7a15bc67-6d1d-41ef-9b4f-16a68a245110
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
 * referer: http://localhost:3001/cr/instructors/abd88c4d-8de9-46b8-8291-0ccf916fb89e/09427a84-6777-487d-bdb3-75235f4012de/7a15bc67-6d1d-41ef-9b4f-16a68a245110/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/instructors/7a15bc67-6d1d-41ef-9b4f-16a68a245110 : 202 8067us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/instructors/7a15bc67-6d1d-41ef-9b4f-16a68a245110 : 200 2788us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTOPW7DMAwF4D2nMLy2LESZkiWPQYYW6NgegJLowIATF7IzBEHuXv8E7RwNGkh87/G2K4qyS2XRFGXNaEK0NdiECQilBR+oBbRsHWsyiKp8XcCZT7KS967vOUuxl74f4rYMnOOQtj3qisw2jsMlj/LZjVN3Pn5sjRySc5ESuCQeyAYHTnsEFWPr0bbBedn0SSZOPPHCbvNgCczCk6TD/K1hWmkFqoYKv1A3Vd0Y80ZYv6j5rSH/Zn/9HiU/jgiKXLDCQNoZMJ4qcMogBEukuTVk/Z+//KSnOx/m+c6Z33f3XwAAAP//AwAzDXbwogEAAA==", "base64"));
  res.end();

  return __filename;
};
