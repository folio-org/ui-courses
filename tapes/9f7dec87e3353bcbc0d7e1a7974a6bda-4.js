var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:42:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 6924us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 4592us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyVy27bMBBF9/kKwtuGAd8ivXPcLroJgqZdFV3wMYqFyKJB0QGMIP9eys4LcYS2glEtCEjkvdScmSEfzhCa+bjZpeZ2lW+yzdse+hmao5/oocyV2SYMrzOjK8uUI5hDqLFQlGAdHMeBaKhDYEw7NTs/SDq7hr1osVigL20P9w0k1DYeuh6eFwXofWo2uYndYa3PzT20O+Ta6O+a7hblFaBNircJ+h7FGvV+FVub+lWzeTZZQ7bBZjs4HP53iCeBzRA+l2HvzAgjmFSY0+9UzgWbM3LBKvWJlOfJ6FV1ufvRQ/p6CNoRUcICiwXTEksjONZEUuyUEMzWUijzxmG7CRP2fVL9+757g8cyPp6/yxURklFelQxpBVjQANjWDrCUVjtTQ6WZPc5V26J9FfSoAId0D2EsVdc2p9ihtd2hLmY01A+yGdm2nZoXwue8IJIXnLOP+YxTpfJCyf9B1Uqjg/eY8ap0QKgE1kIIbKwvXGsThNVHVJdLdLkb47gcgJSiR8u4XseuLxBzatx2WPC+XSYTLbH+PdFj1TgPS7VUwtdYO82xEKGg8FJjVxle08BDJcXHPPDVchKSLnbYl++QfGPbkxHijE4g9KIaJ+S0AydIjc3QfSLIUjHeKUwCVURVwjDrRgnhm8UpIPUrm0r7t80dnA4YnQSM/hFY7ZSupXHYCFKACWWxNjyUgSgTqHSa8CNg11tXAkMhrm3TjSG7iujlmjvZWUXIFAzPqlcM6NfgMMsx2/Yb+JjC/gpWZ4+/AQAA//8=", "base64"));
  res.write(new Buffer("AwAjadGtoAcAAA==", "base64"));
  res.end();

  return __filename;
};
