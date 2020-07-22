var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 283
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses : 202 8538us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses : 201 5981us");
  res.setHeader("location", "2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSRTU7DMBCF9z2FlS0Y+TdxuqNig4S6KgcYeyY0okkjx0FCVe+O07QglvXCi/fmm5lnn1aMFS0WbM0KBU4qC5or8IYbssDBBs19cCgRRFNhKB5noIeOLsgzRPyC+Ml8JMK2/1h8pDHEdkjtsb+U7fbEAkRi0CNrlkp2bFia/HRokfoEicYbO0BMXdZel7WkLUtnZOBWBuIGTeAAouaCQEkvRC0MLGg4TnGkt3ZMuf+NDo7Qg+fgrc+0LTnouuTCB+MCkgb9j95Onae4hNtIIRdvpDCH2f7mPtCwX6yOEiAkmPVTFuZOkXIefMnX8rBCCS4qrtROqLVxa2uetDYPIp9Lkz9m8/0+Urzu7h3oxgnJHVU5vnGUU4j8Idp6RYi1qsobPw1498wrc//MjJ9X5x8AAAD//wMAkFk2vTwCAAA=", "base64"));
  res.end();

  return __filename;
};
