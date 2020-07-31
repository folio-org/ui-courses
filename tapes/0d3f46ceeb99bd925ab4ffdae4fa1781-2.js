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

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/coursetypes.. : 202 9349us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/coursetypes.. : 200 4417us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTS0vEMBCA7/6K0KuOTl7ddG+KFy8KoifxkMcEC7tJaetBZP+7aVcRXReVzSGQyXxD5mPyesRY5fNzP9DdS0dDxZbsgb2WaIm3YTpWDdcKlXEg68aAEuTBam/BR08uoiJsVHWyRZJd0wxdJdZRP+T0cRNo8H3bjW0JTQnnqxVrE3xNWtNogx3tlLF9xPS8nuxI4bJsMylQIOACJL9DuZR6qfSpFvIYy3ovVKjnLuyjeEH4UjSnwpifqYuX+4H6q23/bmq+JltaNxp0oyQY1BxcrZSwUau6wWousCn75uSbvqixlkQGHDceFAoHDn0D3GFsZDB6gW5H301atYn2ubvOn+qYz+suJ0rj4RKR/13iLrVfAUqNJBYcQnBlggJFsLU1YKWPKiJ3LoY9Cs5+HaSLPD6xPCczm8JPZobD1fB/zNcu9amGPU4VqjGPdnVLPvdh/nPyaPMGAAD//wMAlzOOiYsDAAA=", "base64"));
  res.end();

  return __filename;
};
