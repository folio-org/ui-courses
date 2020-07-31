var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="abd88c4d-8de9-46b8-8291-0ccf916fb89e"
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
 * referer: http://localhost:3001/cr/reserves/abd88c4d-8de9-46b8-8291-0ccf916fb89e/09427a84-6777-487d-bdb3-75235f4012de/5b839674-34d7-40b9-aa7b-690a4668c09c/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 7039us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 16163us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTW/bOBC991cIvm6ZkBRFkb6l7R6MbbOLNj0teuDHKFFXlgSaCmoU+e87+rCtOE4RI6gPss3he5w3HD7q55skWbimCxvYLJJl8m/yE0dwrPT93wXVgudGCSLzPCdC5Z5Yb1OSZzzNCkEZ97B4O0Jqs4YBdGWCvzfhv8QGAF/Wt7sZHjYulG0sm3qYeHMHiTMBElP7pBjnJk2RxM52VemhjiZiXnt0a0Jc4+hqTI5lUirBHMmYAyK8cMQYqgkFw5mlVFNhnoL/tt/BxZ5glHoQewbfXO6fSHyXfHEl1G6f7Qm1q9pV3SDxFpqqud2+TVqIYfg5VKA1lYGmjsPIgWcN0XgTzTzlftcCYHX8B3wM9JxySmhOUnZD02WaLUV2kWrxB8XPngxxXeufwzG+TOmS6QvG2HO4d9uvGwjTDlgqlJVgiOAqI5kWKVE0Y8RKIbgpMiE1XUwUD8P3w7QfY899LDcRCzKxGeuVcsIT5UETIa0iimtGqHOFZrKwSu+b7RH++S09gxJBAW6RMJidvHD1jlF2iMOPCKE21RT+cRSuGmf63Z7ChfNSOGBEap3h2SkoUYICUbooDOdKpfkJ8FMtBzVnMc5b9JMp6+RjaVHadj7BNX6c8NfXy/fvLz+sLj/Nw+XmysXyfpgSQwfzUI2Vj91MLiYClDpDTMYUEVZoYoFiqWWqPDXCuCx/tLZZt91mAkvuilzanDhnUJlPU6I5ywn4QnBUjBak5uBq1DKhM58rRVMgzlDRL41JgAHCnUyt5gITsnN0G8o1or9AuC8d/NOU9VDwRWoEVRn3ROgCH77gxLBCEwlcCmYkaFbMeTYzgpWfDPRlLMm33bHYdwD21nrXOjpnnGtBOE3RdkWR47mSknAmDeiMOi7d4hHwl21zDtu8bW5CWZdxm/QW8Uh3RMs7MhBkl/M5UB9bDC54MIN98uNBvtm2MGnXLBO9rZBUauwjDujCGbaVKxzYggrAO2lxAv6rCpzFOa/AqkaPDht08Fn02Nivm6Spq7LGy6xZt02Nl8xTnf2BCZ2LTRgTnbrl2ytsvrfrfJnRC87UE7uecOfb9cuvimfX/h1XxXW3thDG94uZ7eIZdP1GXO9fPipo73bBUzV9QUXZBVVHF+Dr6/mCap5a93W17Cv5MDbZIjbRVJ/BNWG0Kvbm4X8AAAD//wMAq/2CSf8JAAA=", "base64"));
  res.end();

  return __filename;
};
