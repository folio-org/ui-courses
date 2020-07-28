var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId=("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094") and courseListing.termId="cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:54:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7164us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 29414us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXS2/cNhC++1cIe63Z8CWKzM21C9Ro4gRNih6KHIbk0KtaKwmU5MYI/N/DfUvrjbFOC7Q+rLEiv9n55vHN6MtZls1cM8QOu1n2Ovsz+5KepGelX36daUGFtBSIDQUjUpqcWCU54WiMDgVnmPvZ+RpSwwJXoEuo3FANXcYo2x567Fws275s6tWdn6ArXebLEDBi3ZewPMmg9llZ93gbV9/34BZiv0j3rtduseAMY1wS5zkQGQCJAZREUqG019Ro7p+C39m/0PVLA2uSe5ovsDcm+hb6OS6Sq67bnx4yva5dNfiyvs1s08+zdoi44gltW5Xos4Sfj+AL7MFDD2M3lzmKCD36q/Sxssopp4QWhOuPVLwW+WshfxTC/EDT385Ywg2tPx23gT2u/j9u4reujjdl1ycOm/g7KqyzIAgooETynBErmCJUCWYtRxX4LvMT/LdT8AKTCRTxNhmMEDcO4eceYw3V6Mr20cENvr/RYbwvHbZNuSssAZLqnHsiTUgfPnACLBiikCvJQKFh4biBp8z23F5kddJJZXTZFXZ3GRufu8avz52fPPdl55p7jA9XZddW8HAztjNU6x5bmSMk+wWq6m94GOPb0t0N7ZvGwbZ6+zjg6MK8qfyHOVbh589tGR/eYywbP+W8dGOIOwPifHyy7O14v8vJH4h33Wx34XH0S10PIXyoynYjS5/ODu7Mqo2bG1u5cMHkKhDHfCCSUUu0RSC8SMrFnYPC7RtjB34uay+yOM7aRV3j56P5+vX3V5eXr66uX12Mj8vuwvXlPR4JeFmntumHEU9JESl1QCBnmkgrDbFI2bJPtKcgweXF5Ldh0Q7dBqy4C4WyBUne56kQhSCGs4KgD5I7ZKClHoOr0qYee9iG2BdaU4HEAZXLn05OYJJK7pSwhsvkkJ2UUywXCf1h3SXvl13yXe3QjQxc+01BnGblSN2kClxsZcwztAX6lNIVIQXEUFEQXwQGuchZUHtCK+Bz9fIia5MxUro5YLWALuOUmdm0DWI/Em9mCKOEifEdrP3BDZ4UfvaE+FqIPz60uKEf8lQ0iJpYpl2addwSS13CWxqM8Dov6Ij+Hv5cEF5kcxyEd3VV1jhRs4NBetOk3YC0GLukYq5ZtE2dhvpTnsueiYPrm7h2dLLYjH3lmFoceCDGepNGjvTEOgxEFSEPXGn0djpLUyFu50ReGM0YElGYpA2OmqQNiStQoNoZGVB8Qxs8LLrz7HIe0/yC7GIqE/9o0q5sHF8fTlwgVKEPF4gTV4gdci/mu7wcqxLFnAKTtixukw4V1BEtlSBKGgnBM6pRfSPytgCvIIW6EF4kVUaaRCj1hA5OeCsxL9AdjfxHeKiaeJ69Le/wfxX1wsjvjPoOeVrUjXNaa8xJUL5YRj2NDsYEETQNFR0sqqn6j6POAa3wmCQ2V0SCTqXO85QEntQNLTJVyOP1DrcQfYo6+Fs87PD/PPSaq+8M/Q75NPTZp39jmc/FE9dOcmyHe2aZvxkWFuP6zYcLmW9X9S6pZVLbm/37Tbl7BztG5TRREcWUyGmCskWdbUls4jrrmx6q39A1cb0KsLPHrwAAAP//AwB1Bk+2xg4AAA==", "base64"));
  res.end();

  return __filename;
};
