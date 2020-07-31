var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:39:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses.. : 202 6863us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses.. : 200 6834us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTWvcMBCG7/kVwtfuBMkayZKPpZecAv04lR5G0jgYHHux5UAI+9+r9XYJ7WahpPVBYL1+BvHo9cuNENV+niIvSz8+fMmU14WXSrTiu3gpYYn7dHytlHGGvE8gA1pAFzR40jWgNLJTUnuyqtqdkJEeeYPuRhEp0zA9lOnnNPES536f+2ncPvrMkfsnTiKsWYxTFs+cz9jK6Yw9cqZUdo/M6WhlM85MmdOnsmyzallLkA1o9VXqVpsWzS1a9UGW59egQq37dI1Sdat9a5pbr/3b1MfnbwvPdycrQRYTlgmwdgaMRw1OGgXBItbUGbReVtuAQ1kPuz+kkks1NtEBO+oASVlwQTUgvcXGWc1a44XU+1FMc+L5ms/7Y8hp95tPeqJ+oDDwv+tE9/c6L6nrMlzoakfRAsWYAE1jwHUdgbalejKwcuayYaU8NAyvLXmjXFsuaExiHf+jBo3v0XCmXjWIH8cJVZ5K4ctpy9Vu/5++OfwEAAD//wMAe4TG754DAAA=", "base64"));
  res.end();

  return __filename;
};
