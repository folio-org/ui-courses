var path = require("path");

/**
 * GET /configurations/entries?query=(module=ORG and configName=localeSettings)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/configurations/entries.. : 202 7320us, GET mod-configuration-5.5.0-SNAPSHOT.76 http://10.36.1.132:9131/configurations/entries.. : 200 5267us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQSs7PS8tML1ayUojmAgAAAP//lJDbSsRADIbfJbd2dHqe9m5lQbxZwdoLoSDJTArFHmScKmvpuzvd7gNoLgIJX/4/yQKdgRKikJLUhJmgTLUiSeNQFEVhBBJmFGkMtWohgGEyc8+ef3p+8OUudMJha/WTxp4rdq4bvXgAPCL17NWdnTmAL+znjVuaK9pA2XhI1FUDQQOuG/hnGvf2YWDbabw78ffb62TfL4SereVRny9EXR0bWLed2KFBh1AuoC2jY3P0aTtKRlLIXETqRcZlUpRhdiuVupE+tu13+P5cf7J93L7AMSmd5akgnUuREiqhZEyCqCVEIw1h4QfnD/N3lyv8X5d1/QUAAP//itUBxVVJfkliTlBqcn5RCijCDHW4AAAAAP//", "base64"));
  res.write(new Buffer("UlAqSi0uzSnxzEvLB4pUoykx1FFKS0xOLQEyo2N1lFIyE9Pz8otLMpPBArVctQAAAAD//wMAK4tpAwMCAAA=", "base64"));
  res.end();

  return __filename;
};
