var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:40:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 6867us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 4829us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyVPW/bMBCG9/4KwmvDgBSPEunNcTt0CYKmnYoOx69YiCwaFB3ACPLfSzlJU8RVmxpGNRwgke9L3XNH8v4dITMbN7vU3qzydca8HfwwI3PyjdyXsTLauvF1JtE32puaIjJFQQdGtWaSBnSCB2iYxWZ29ijpce33osViQT52g79rfSJda30/+OdJzg82tZvcxv5xrs3tne92xHTR3rb9DckrTzYp3iQ/DCQGMthV7DANq3bzbLL2GR1mHB0e/3fMJ3nM3n0oYe9csYpR1lDBv/BqDmzO9Xmtq/esPE9GL6qL3dfBp0+PSRsGytQeKVRKUqlBUMUkp6YGqDBIqPUvDtuNO2LdJ9W/r7s3eCjx4exVrRjIiouGUaVqT4E7TzEYT6VEZXTwjarwsFZdR/ZdMJAC3Kc776ZKdYU5xZ6scUf6mMnYPwQzwa47ti5MzIWcgzwXYoLPH6jCOWj+H6ii1MpZSyvRBAquAaoAgGq0hWvQDlAdUF0uycVuiuNyBFKanizjeh37oUDMqTXbccLr7XI00ZLr24keqqZ5IFeyBhuoMkpQAFdQWKmoabQI3AnXSPg9D3q5PApJH3tqy3efbIvdyQiJaqJ73qaaJmSU8QZYoHrcfeBk6RhbjlDmeM3qBnSFZpIQvV6cAtKwwlS2f9fe+tMB40cB438FFkytgtSGamAFGNRIlRauBFZrx6VRTBwAu9qakhhxcY1tP4XsMpKf19zJzirGjsHwrHrBQL6PDrMcM3afvY3J7a/g+t3DDwAAAP//AwB2I4B3oAcAAA==", "base64"));
  res.end();

  return __filename;
};
