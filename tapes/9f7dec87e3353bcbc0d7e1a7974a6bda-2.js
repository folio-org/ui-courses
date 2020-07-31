var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:42:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 6862us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 3874us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUTWvbMBgH8Hs/hch1VdHLI1vKrc0uu5Sxbqexw6MXJ6KOFWylEEq+++Rk3aCpWUnjg8CW/g96fsh6viJk5tJm18flKj9kzNshDDMyJz/Jc5krs9GPrzMGSnBZM6p1FShwHyg2NlClUFvThFoLnF0fIx2uwyF027bkUHkgfRhC/xT8yxofBtfHTY6pOy51OT6Fdkdsm9xj7JYkrwLZ9GlZkgNJDRncKrXYD6u4eSmyDhk9ZhwrHLc7ttMHzMF/LsOhsmCCUVZTyb8zOZdqDupGSvGJledPoZLabvxUipeImHNxA8DfTt3tfpTuvhylLANtq4AUhFZUGZBUM8WprQAENgoqw2aHAvsy7q9fQ6My2jtHhawbCr4GqgGAGnSFujEeUJ9ALxbkbjdFuxhBCi5ZpPU6dQPBnPtot+MC0kYXuiF8WLT0+n7R09S0B3KtKnAN1VZLCuALhVOa2trIhnvpawVve9D7xVkkXeqoK99D7yK2FxOSYuL0vC81LWS1DRZYQ834Q4JX5cQ4W1HmecWqGoxAOylEH24vgTSssC83Qhsfw+XA+Flg/L9gja10o4ylBlgBgwqpNtKXgVXGc2U1kydgX7e2NEZ8WmPspsjuE/l7mxYugm37cQbGzmF4Sf1jIL/GCrOcMrbfgku9P9z06mr/GwAA//8DAChGM5gHBgAA", "base64"));
  res.end();

  return __filename;
};
