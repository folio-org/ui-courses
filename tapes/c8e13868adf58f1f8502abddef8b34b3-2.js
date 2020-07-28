var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="66cec8e4-9ae6-4729-8119-3f341e0e67c3"
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
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7105us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 14195us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTW/bOBC991cIvm6ZkBRFkb6l7R6MbbOLNj0tehiSo0RdWRJoKqhR5L8v9WFHjp0iRlAfZJvD9zhvOHzUzzdJsrBN5ze4WSTL5N/kZxyJY6Xr/y4Eo1zlRhHKwRBhUkY0xYwA1YVCmqfOpIu3I6SGNQ6gK/DuHvx/ifGIrqxvdzMcbqwv21A29TDx5g4TCx4TqF1SjHOTpkhCZ7qqdFgHCDGvPboFH9ZxdDUmxzIplWCWZMwiEU5YAjExQhE4M5RqKuAY/Lf5jjb0BKPUR7Fn8M3l/hmJ75IvtsTa7rM9oXZV26obJN5iUzW327dJi8EPP4cKtFABNnUYRh551hjAQYB5yv2ueYzVcR/iY6DnlFNCc8LVDU2XabZMxUWa0T9o/OzJIq5r3XM4xpYZWwp5QRV7Dvdu+3WDftoBTI2yMs+IsTklmQFFFE0NMaYwAI46A3oxUTwM3w/Tfow997HchFiQiU1Ki1ahIBpQEpFzTRRjmqRFKhhSlLndN9sB/vktPYMygjzeRkIPO3n+6h2j7DGOPwL6Gqop/ONJuGos9Ls9hQvrpLDIiNQ6I0IVlChBkShdFMC5Uml+Anys5VHNWYzzFv0EZZ18LE2Utp1PsI0bJ/z19fL9+8sPq8tP83C5ubKhvB+mBN/hPFTHyoduJjcmgpRaIJAxFa1CaGKQMkJlqhwFATbLD9aGddttdlvPbZFLkxNrISpzaUo0ZzlBVwgeFYMSag6uRi0TOnO5in2HxAIV/dIxCQQk3MrUaC5iQmaObn25jugv6O9Li/80ZT0UfJGCoCrjjghdxIcrOAFWaCKRS8FAombFnGczI1i5yUBfxpJ82x2LfQfE3lrvWkfnjHMtCKdpToQo8niupCScSUCdUculXRwAf9k257DN2+bGl3UZtklvEQe6Q7S8JwYS2eV8DtZPLSYuSBdHqseDfLNtcdKuWSaoUIakUsc+4hhdOIttZQuLpqACqRaLE/BfVeAsznkFVnX0aL+JDj6LPjX26yZp6qqs42XWrNumjpfMsc7+wPjOhsaPiU7d8u0VNt/bdbak9CKV/MiuJ9z5dv3yq+LZtX/HVXHdrQ368f1iZrvxDNp+I673Lx8Vtne74KmavqCi7ILT7FDV6+v5gmqeWvd1tewr+TA22SI0AarPaBs/WhV78/A/AAAA//8DAN2aDXr/CQAA", "base64"));
  res.end();

  return __filename;
};
