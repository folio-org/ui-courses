var path = require("path");

/**
 * GET /coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de?unused=0
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
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de.. : 202 9504us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de.. : 200 15570us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTY/bNhC951cIvjb0khRJkb5tkh6MJtsC2ZyKHPgx3FVrSwIlLWIE+987kuWV7c0W3gb1QTA4fI/zRjOP+v4myxZlWGSrbEGN4IXVgqiiKIjQRSAuuJwUkucyCsp4gMXbAVDZLYyQa5vCg01/Z/d962wV0m6/IUDrU9l0ZV2N+27vIfM2QYZ7sggQyuouq2PW9a7flAGqznbQHrCNTd0W19b7vJhUSgvmiWQeiAjCE2upIRQsZ45SQ4U9h/7u/gLfDfDvGJg1Xsx1rPJXJL3PPvsSKj9l+QON68pv+lHYHdSb+m73NmugS+PfUXdjNxbqqhtXDixb6GywnZ1TxUWfAOsRPuBjpOaUU0ILkrNbmq9yuRJymRvxC8XfRISovgkvoRhf5XTFzJIx9mPUu92XFtJUcUeFdgosEVxLIo3IiaaSEaeE4DZKoQxdjASP+Hwca+/rPrXwsWw7LMHEY13Q2otAdABDhHKaaG4Yod5Hw1R02kwddYJ+6eVdTIeQBHdIluxBUnv9jlF2iMK3DlJlN1Pw20lwU3s7vNUpGH1QwgMjyhiJYxEp0YIC0SZGy7nWefEMeq5g1vAKtuMW/GTLKvtYOhS0m8O+Dvvwb1+u3r+/+rC++jQHy/bad+XDuKFLPcyBCqvc9UcSMQGg1FtiJdNEOGGIA4qFVbkO1ArrZXF0qt02fTtBFfexUK4g3lvUE/KcGM4KAiEKjjrRT/QM3ewVTFgZCq1pDsRbKoZjMQGwQLhXuTNcYDJuxjap3CL2M6SH0sMfdVmNBV7kVlAteSDCRHyEyIll0RAFXAlmFRgWZ5b2CL4O7cDw54Uc2dd9y0/vGjtoe2gRUzDOjSCc5uicIhY4L0oRzpQFI6nnyi+OYP/SHpczHbfHbSqrsttlw8gfae3QuM7sAJnVvAOqc7vAow6jPSW8H83bXQOTWsOkGAyC5Mpgt3BAD5XYPD56cJEKwItk8Qz8suZX8B1rXlfor6lF932KnVvyTZ3V1aas8PKpt01d4cVwqm0YhdT7rk779KZ++PofzXmw2WIl6ZIzfWazE+r1NnupvesVZ8tC5/+rvd/0Wwdpf/U/WSbOlB9KfvP0VbCB5n4fel7BC+rHllSfXFM/W72LaicKenLmz1Tu8c3jPwAAAP//AwDtSTmnWgkAAA==", "base64"));
  res.end();

  return __filename;
};
