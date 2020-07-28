var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:30 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/coursetypes.. : 202 8528us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/coursetypes.. : 200 3524us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTPWvDMBBA9/wK4bVRerYkW/bW0CVLCyWdSgd9nKnBkYztDCHkv1d2GkKbmJZGw4FO947TQ9rPCImM37YdrncNdhEpyBvZh2zIV3bYRnksOHCpKUtzSXmChiphFDWlQV0CR8h5ND8iTm1whFaONNh23p1OLHamrZq+Cqmh4KGuSeXo96IN9sqqXg0VxyGG8VpUPdrHEEYygQQoZDSRa2AFEwXjC56JOwjrq1Ggto2douK4EHGR5Asp0uvUcvfaYbs63h+ZlibNBNUmAyq0klQC01TrUitlwWqVR2ODQ4iH+Q99pYCUIUqqY2kohySQYHIaayhzZqXIQF/oe3Z15XDK3ZM/qyPGbxrv0PW3SxTZ3yVeUtMKgAnAJIuptTq8IIslVWnQqJgpeQlxMGknFNz/+pCWvv8gfiwmytlrZrrb1aTyP2pO1FkNeR86RL3vVf2Cxrd2/HNsdvgEAAD//wMAad7BYosDAAA=", "base64"));
  res.end();

  return __filename;
};
