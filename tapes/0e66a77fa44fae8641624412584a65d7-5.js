var path = require("path");

/**
 * GET /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves.. : 202 21354us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves.. : 200 30330us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWS2/bRhC++1cQuuTQrL3vh2+2gyJuHMdIk0NQ5LCP2ZgtRRIklVYI8t87FCmZahqj7qWX6kCIu/vN45tvZvnlpChWHfTQfYZ+VZwXvxRfcAkXyzS+rrxNErgORGXniLQ+E6t0JgmkCCZ7MDGunk+Q2Gy6Hm7KfijrT9cT3jrnwVNDgNlEZIyaBJ448YllmQILSaQ9vhxgPcOSziay4InnwhCpFRAnIZEsDDgWopYhPbhtS0jXCB6hU/i4HHwXmwQ7c1IJZ42mSgorZhweQUjbdL7b3jTRD2VTz95zTFpGYEQ7pzDpTImVFIh1OXvOrRWGPWLlTfgV4rAM5oHPJ5lGWO3XUwqvfVkXN2UYHS0PHHJ89f7s6ursxfXZ6+V22V/Eofy8OzJ0G1hu1VioYbPIGwMBSiOyrpglMkhHAlBGqBY2US99VObIt1+3m34Gax6z0cGQGD1mloQgjjMsfMqSY8beSrsEV1MuM1olYy0VQKKncnSNQYAHwqMWwXGJAYUluu3KNaJ/RuGWEe6ast4RvhJeUqs4Ss1lfKSMUmPZEY0ilsxrVE9e2ukXBq7T3AL/zErxcTbz9SCFFrq1r6Ee/iIoJWJ2Y9tEljKRjAZiA3jCTTaMI2Em0tX3rTwmqCeZXgrqoq7hj8eVdPG/kv4rJSGf1VSNy65Mn2Aofmpq6J/1xaUPW6zAPRSp9F2JY/sAik09dGXYDE13NMyPC/9jCVXCCf28eAkV1McSOBi4xePvti3MrPLgJBLISI5+vAcc5mEEJUg0KI7DC7hf7bMoPj5oeROqclLxNxHt9vp76CY9VrmDVFycFq/qpj2itq18nGK/hd+LD03323I3+QHe5LtjRytOmf67gKKvqtvNOsxe797iraBPr6Wytrg00hU74ILSdrs7eIV/isXdMWre13HPj8khqWQl0TwxIpEr4qJURMfAjHDOhsOFtQC/7OYuHhfow28RwH2zK9a+N3IwwdDMSLAOGwv1TLxz2FggA5aHh6DylPaspeX15OtFRcEGwVCBRASOEYtRmVw7kpITjEa8pSmsvmfj24m0n0dPMLsU5dXu26E4fIocpbCGwWOV/ZG/2AEWPr3Ax1xwjnI0RLB3TJ1Lek7Vqbbmh5HPRT0n1OX2PTqamQhU2qBxZkpuFVFOCmKpQoq1lNxnJbVbWNi06V/4nVFP9zsRcXIQ8WpoBl+9hdh005BhJ1//BAAA//8=", "base64"));
  res.write(new Buffer("AwDWyM5uxgkAAA==", "base64"));
  res.end();

  return __filename;
};
