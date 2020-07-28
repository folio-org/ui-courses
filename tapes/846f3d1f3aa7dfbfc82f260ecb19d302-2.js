var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/reserves.. : 202 7355us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/reserves.. : 200 41457us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWW28TRxR+51eM/NKHZuy5X/JmApQUAhFNK1UVD3M5Q7bYu9Z6TYgQ/71nbSdecwmEFlVV4wfLnpnvXL858727R8iohSW0b2A5IofkD/IOl3Cxyv3fkXbgtM1AWeaOKpMZjYZZah0H7lgCr9PoYANJzapdwtNq2VX1q+MNnjPlwVhBc0IjKtlEo9eRQi6+GJZMivkKX3Uw38KyKTbxGGgQ0qJbDdQryLRIC57HZNQOlppFBfkYwT10Ez4ux9CmJsPanNLSO2uYVtLJLQ6PIGTRtKG9fNqk0FVNvfWuZSpem0ITz4UqziJ1EQIVtlguUgo2sRusPI9/QuqGwQzqeRvTCKvDfJPCtK7h7XDnOrknv06OjiYPjifT4Xa1nKauerM+0rUrGG7V2KFuNUhYMQDGEpZb912OytMIjFNmpMssqJC03fMd5ovVcgs2IhVroqUYvaYqS0m94LZvsRIJeHDKDcGzKvbVuqp1ts4xCTQFpnrXGAQEoCIZGb1QGFAcohdtNUf0L8jYKsFpU9XrSo9kUMxpkanyBb9yETTw4qkBYRQPBmlThnaWAwPHecv9r7NCXm7NvL/mwALaeaih7v4Wkz6ycsek/x2TsJ6zTTfut1V+BR35ualh+cOS3A/xEjtwDiRXoa1wXl+DUlN3bRVXXdPuTfH9xj+qYJZxNB+QxzCDep8C1wae4fGzywVsqyqiV1hATksKnirnMQ8rGcVCgxa+FBBhdJUFebnj8irOqg2LP4povbc8h3bDx1lpIZPpmDypm8VeaRezkDaxP4ML8nvTvh7u5tDB83K672gkGDefCiiF2ezZah63Xk9f4HNgxsdKO0fuW+XJGjgo6eJyffAIf5DBo9FzPtTpqj62xKyzU9SIzKnCWlGflKb4sHErvXfx+qUagB+321vcL7DdZxDAebNu1tXdKNFGywqn0Xm8WMhnGrzHiwUqYntEjLps0t5yafguhXrQUXBRcmQglVFgxLJnpjCe5uwlZymKzGD0ORsfT6SreXQLs0NSHq1FA7nWIHspzKEL2OWw5y+1gI3PD/Br23CBdLRUuDMmD6U+lGrspf+xr+fO4WqRvx61CeJeH8gHegiljLDZK2olTieVhaDeBUYtDhflszTa65v0UGIyphgkDQZRSmhsqOSmn488RgGmCP4JPcQZ6i8WCxWFGaoCYiNwTVkvpkT2xYO8hR7y+7W500F3r9f31UElZaOwBtR4j7VxhVGHxaYOH5AghHPS8m/UQbcyPWTSSahq8nTThJsJdXJHqH9fDk3JEpAVXZXIBUTSh4tP+S0l0LTumrpqVgfkp7Z61bTV8jMqaPBeGmA+K5up1yAwdBeow2FNi7U2OigmO36DlTN4uynkd9BbB59M8rdQk8ehnfci74A8akP9+j+d5TepypPjM3KKqmKvwTs9eRTmca2vD8hJWC7H5MvCMgnG1PBY22ypeXrt+cu68+yJ5kyPnXNckzGZakd6u+TRGTl5OH3wcKBY2mqNOO+6xeFkcnFxMZ41afyqeTPBqHLVTromTSBVC4bqY4JWLGoaJfz4vJvPdnagXuFN2eUx9DDbxBTiDEhTSN8wHLtL0tSz3Uz8UPLqWKRlgHMWBxNSxSfqBCiquWUhisCC9F8teYX4rOQFWYrhOPWiDz0lVcKZkVBRJu6MzThEuP9H9KIecy5urRcHqJ1e3DR+1DVdmL2A1LSbCSjuvf8LAAD//wMAj/3aqWsTAAA=", "base64"));
  res.end();

  return __filename;
};
