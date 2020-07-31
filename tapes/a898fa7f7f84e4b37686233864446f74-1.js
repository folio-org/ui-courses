var path = require("path");

/**
 * POST /coursereserves/processingstatuses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 109
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
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 12:40:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses : 202 7353us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses : 201 5287us");
  res.setHeader("location", "4fe25f49-dfda-41b0-8492-ea073bfd422c");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPvW7DMAyE9zyF4LVRQcmU/zYHXbJlaB9AMilXQCMHjoKiCPLuUeyincOBw919R/C6EaIIVIhOFOhZG4+tJE9WonIgG2y1ZAt16Tyh1kOxfQDRHnlB+r4XB44U4rg6xOdhDqcUprgEdpwtMdhkv6bxwiTmMH4mEafvNX/kZCm7j/A1C1kaZraJ6S2vpUKDBgm1LNW70h1CB+rVqPoF8iwl/8zu5+PM8359xwE2ruL8iW6MNC2WsgGjpKsQtfUGq/aPv5zo6Zu/zPM3M37b3O4AAAD//wMAXfyp0HoBAAA=", "base64"));
  res.end();

  return __filename;
};
