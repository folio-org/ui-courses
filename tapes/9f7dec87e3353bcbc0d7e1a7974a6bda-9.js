var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/copyrightstatuses.. : 202 8471us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/copyrightstatuses.. : 200 3626us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyVPW/bMBCG9/wKwmtzASWRFOnNcTt0CYKmnYoMxw/FRGTRoGgDRuD/XspOGiCO2sYwqoGARL4vdc/dkU8XhExMWG2jf1iku4Rp3bt+QqbkJ3nKc3nW2+F1orkpuFUlIJUSmOQKFFKEglMpuKpYKezk8iDpcOn2otlsRr60vdt4F0nrjet697LIut5Ev0o+dIe1JvmNa7dEt8E8+u6BpIUjqxgeout7EhrSm0VoMfYLv3oxWbqEFhMODof/HeKJDpOzn/Owdy5pSYHWUMrvRTHl9bTkV0LKTzQ/z0avquvtj97Fr4egXaWlETUHbWoKXKMESSsNWjca0VKrUb06rFf2hH2fVR/fd2+wy+Pu8k2uKONlUWWllMIBK6wDbLQDzlFq1bhalnicq7Yl+yroSQbu4sbZsVTdYoqhI0vcki4kMtQPwUSwbU/NC62mFZ9W7KpU6n0+f6BaXOVg/wNV5EpaY6Cs6gaYrRlIxlhuA5O5NsoylEdU53NyvR3jOB+A5KIn87Bchq7PEFP0ej0seNsupxPlI2z+TTXOAwvJBTMNSC0rYMxmFIZL0LWqmsJWtubsfR5wMz8JSRc6MPm7i8Zjez5C8gM1d6waJ6SldprRBtTQfczyXDFGC6C2EFTUTJWoRwnB3ewckPoFxtz+rX90ZwRGTwJG/was0UI2XGlQjGZgTCBIVdk8UKFswXXu1yNgt2udAyM2LNF3Y8huAvl9zZ3trKqLUzC8qF4xkPvBYZJCwvabMyHa/RUsLna/AAAA//8DAFWSRHagBwAA", "base64"));
  res.end();

  return __filename;
};
