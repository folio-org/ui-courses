var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/coursetypes.. : 202 9313us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/coursetypes.. : 200 3642us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS0sDMRCA7/6KsFedOtkk22yPxUsvCqIn8ZDHBBfaZNldDyL972a3FsG2PtAcBjKZbxg+Jq9njBUuPXc93b201BdswR7Ya87mfOPHa1FzJVFqC6KqNciSHBjlDLjgyAaUhLUsLnZINBuaoFVkLXV9ivsXT73rmnZocmosuE4sxXUTibm0aVOkOOxLNzQYbwYz1u1GGYfsyAzkr3KY+BJLBJyD4HcoFkItpJqpUpxjPu+NMvXc+lMUzwhfCD7TQh6nli/3PXWrnQU7KqjIZAFagaqlAI2Kg62kLE1QsqqxmBpsc9xefJIYFFaCSIPl2oHE0oJFVwO3GGrhtZqjPZB4Mwn6wmATYWf5PyUi/7nEQ+q0AhQKqZxz8N7mPfIUwFRGgxEuyIDc2uBPKLj8dp2WaXjaL5SJ/piZ/u9q+C/265D6UMMexw7FkAazviWXOj/9PHG2fQMAAP//AwA6B2/GkQMAAA==", "base64"));
  res.end();

  return __filename;
};
