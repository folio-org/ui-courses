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

  res.setHeader("date", "Fri, 31 Jul 2020 12:39:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses.. : 202 6876us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses.. : 200 4227us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTT2vcMBDF7/kUwtfuBMn6Y8nH0EtOgTY9lRxG0nhrcOzFlltC2O8e2VsTyGahJNVBIL15j+Gn0fMVY8VhHAJNU9vvvydM80RTwWr2kz1nMcttXI6F0FajcxG4VwaU9RIcyhIU17wRXDo0otidLD0+0mq67VnAhN2wz+mbGmkKY3tI7dCvRTeUxa1upsjGdv8rsX74szkeKWHM+lJ+6ipfhpEwUfyatzWm5CUHXoEU91zWUtdKXysjvvC8/gZl13yIl1yirKWrtb4Wzrzvunn6MdF4ewLieYZgCEGVVoN2SoLlWoA3SpXYaGUcL9aAY96Puzc80cZSVcECWWxAoTBgvaiAO6MqayRJqc543vVsGCONl1DeLSLFHfPzAjCxJ0oMf2Pboe/o8ziV/Xec567LMKxvSovBAIYQQelKg20aBGny1HFPwurz4fpGAbuO4iUYm86wj2zu/yMGqT6CYXO9YmAPS0KRhjz6udv8tOvXk1fHFwAAAP//AwCYs/WWmQMAAA==", "base64"));
  res.end();

  return __filename;
};
