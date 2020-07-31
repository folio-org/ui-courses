var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:42:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses.. : 202 7060us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses.. : 200 4372us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTwUrsMBSG9z5F6PbOkaQ5SdNZXu7GlXDVlbg4SU6lUNuhTQWReXczHQfRcUDULgLN3+8Qvvx9PhOi2IxD4Glq+/urRGmeeCrEWtyK5xzmuI2710IZZ6iuI0iPFtB5DTXpElAa2Sipa7KqWO2Rnh54gS56EShRN9zn6Yc08hTGdpPaoV8++s+B20eOws9J9EMST5wO2MzxgD1woph3d8z+aHkzjEyJ47+8LLNKWUqQFWh1LfVamzWac7Tqj8zP66BMzZt4ilIZUWtTn2tnP6f+Pt1MPF7srXiZTVgmwNIZMDVqcNIo8BaxpMagrWWxDNjmdbv6IJVcLLEKDthRA0jKgvOqAllbrJzVrDUeSb3sxTBGHk/5vNyFHFfvfNIjtR35jn+uE93XdR5Tp2U435SOggUKIQKayoBrGgJtc/WkZ+XMccNyeajr3lrySbmWXFAfxdz/ogaN39FwoN40iLvdhCINufD5tPlql/9Pn21fAAAA//8DAPyu3DOeAwAA", "base64"));
  res.end();

  return __filename;
};
