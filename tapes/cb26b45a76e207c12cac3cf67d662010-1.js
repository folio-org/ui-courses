var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 6840us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 33555us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTY/bNhC951cIvnaZ8EuUmNt2t0AXTTYBkqKHIochOVyzK0sCJW1jBPvfS9uyLTte1Ls5tD4IMIdvNDN884b69irLZsHNsrfZrBRUSEOBGF8wIqXOiVGSE45al77gDHM3u1gBaljgGnIFlR2qocsYZRuTw87G0Pahqdc7foYu2MwF7zFi3QdYWTKoXRbqHu/i+v8W2kLsF2nXzSYg5q1mjEtiHQciPSDRgJJIKlTpSqpL7o6hH8xfaPsV/Fsy7JM729c0vffQz3GRQrTd1nac301tq8GF+i4zTT/P2iHiOjto2yqgyxJ6vgMvsAcHPezDS4s2IvTortNj7ZFTTgktCGefqXgr8re5el1o8RNNv9FRQg2tOx+1Bj2m5+O6WrYZYofvQtenuMdaWyqMNSAIKKBE8pwRI5giVAlmDEfl+XjCB+inyn22uwSJeJecRYhjKPi1x1hDtduwXTiy8629w/gQLLZN2FFHgKRlzh2R2qeH85wA85oo5EoyUKiZPwU/zmef0TM8HnRIiDa7xu4+Y3urbdzGat1k1YXONg8Yl9ehaytY3k59DNWmc9auCMl+har6G5Z7dBvs/dC+ayxsudnHAXfmeVO5T3Os/C9f2xCXHzGGxk3zXAUwxB1YXOzXV50aH3b1/wPxvpuN5sfdG7oevP9UhbZb7foz+/JqYp9VY2Cjj1xYr3PliWXOE8moIaVBILxI2sOthcJuyb6DPn02z/A2PZvLusavJ07lt9/fXF29ub55c7k3hu7S9uEBvytsqFMj9MMkN0kRKbVAIGclkUZqYpCyFfdLR0GCzYvJW2HRDt0IVdz6QpmCpJjzRDIhiOasIOi85BYZlLLcQ6tgUtcstyV1RVlSgcQClavXpgAwyRy3ShjNZQrGTOgSwyJhP224/3HF/RfQvJvAb9x48Of5OOJHYthiK0WOoSnQpeNbJ6KAaCoK4grPIBc582qbyBr2NC+e4elA9oOdA1YL6DJOmZ5NKR77ieQyTRglTOx3YO2O7Dyp8uwg1Y2Afl62OCbs80QNxJIYVto0kbghhtqENdRr4cq8oLuE9+Cn036Gv2naH+oq1DjRo6NRd9ukmU1ajF3SIdss2qZOA/cwt1U3xMH2TdyEN1LiOEKOqWWBe6KN02k8SEeMRU9U4XPPVYnOTGddotlW1/NCl4whEYVOnW6pTp2e8gMKtLRaehQnO93BorvIruYxTRrILqdN/wOzcO3h1FA/a6wXr5nih2P9rME+wW1FeDyD75mgmFWg012Hm6QnBbWklEoQJbUE7xgtUZ2ssynAKUiFLYQTSVGRJjFJXC+9Fc5IzAu0J+r8GZZVEy+y9+Ee/yc15kq9qMY73L/VWFtbliXmxCtXrGqc5J4xQQRNg6D0BtVUs6c15oBGOEzimCsioUw05nkqOU/6hAaZKuQpLsMdRJdqDO4ODzv2vy20li8r9BZ3WOjsy49emtNXywsuzTvUyUvz7bAwGDdfFFzIfHMl7pLSJZW83X83hPGb5vvgzxMGfnDfP08U+P62//jq8R8AAAD//wMADvLxEdoNAAA=", "base64"));
  res.end();

  return __filename;
};
