var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e : 202 7105us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e : 200 13385us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQdt2EpKiKNK7PDZGm7ZAk1WRBUUOCxa2JFB0ECPIv5eyHnUNpHC10EKXZ2bu8Or1Istyb/NsleW6tlIabkFaVMBFLUEyRYEY4xQVrpYK848DEPCn72PQYT2S/fUNJXTU8CViaPRmkl6OpE1rdPRtM0nOWMENUhBKlcClIyA5QZDKOc2YlEV1An6tf6GJA/yaPv+Z/OxKCWn0Fg/QvfZN9tnXycZ+Fk1rR/HT49Xt7dXd+up+lnx/baJ/Psgx7HD+3PTRx92RrdQYCTEadEkl8JorqJGkNYpCWqK5NmW19NPbbtdPoGDGVaKuwBidXNiiAMVoBWgdZ8mdllzO4GaceyJLW0lJCgSjCR9apuaoEZgRRa0YT4PUM9kFv03kdwzP3uC31jeHheaF5kSWzAJXLr2sY6CpUyCQCU61QEXdXKM/gte2H/gfZ1bInlKJt8Otppxs5yioijKmODBSVMC5q0ASIYBRoVGVxDBh8gV6NwbnVjmOwUPwjY/7jBFGFn9Rh3in43hiUCDtlYlZx8aeqKkJyRdnpt2FHh/2HU7+FC054bKGQqiUCYYmpSNFxDiDtSMcieL5Cfqey7NrHbtcN1mHoW+bWbHYm+C7IbeHA1/arG02vsHMtNuubTDFYvEzhDzsTGzDONR0408HcYtRWx310aQmYFrP6Y4qKOgDZauiWpXkklH5gaRn+RVG5mb/mNI1ra0efArUyaUsoVS8SBdaUqgF50y7kgu18LvO/qunXDF6Wcnir54T8/89h81cvP0GAAD//wMAFtFjfT0FAAA=", "base64"));
  res.end();

  return __filename;
};
