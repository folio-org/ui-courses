var path = require("path");

/**
 * GET /coursereserves/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef.. : 202 10776us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef.. : 200 81104us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVwW7bOBC99ysEX7dsSIqiyNzSdg9G27RA3dOihyE5TLRrSwItBTWK/HvHkhw5Tls4Wx8Ig8P3OG808/j9RZYtqrDILrNFLoxBYQumjNdMlSAYOGsZD1pGZ4QpMS5e7gE1bHCAXEEKd5D+y1xCDFV9M8YDbn2q2q5q6uHY6hYzDwkzqEMWx5NZE7Oud/26Clh30OH2gG0hdRvaW45piUJro4RnhfDIVFCeAXBKC0EKx7nlCk6hH92/6Ls9/DsFZolncx2L/JtIb7PPvsLaT1n+ROOy9ut+EHaDzbq52b3MWuzS8HfQ3cIasKm7YefAssEOAnQwp0qbPiHVI7ylZaCWXHLGSyb5SvDLXF/m6pUo9V+cfhMRofo2nI8aQPe03g+V802ftvi+2nYkYKq7jKG0ynnmcg1Mudww641iQqHRpoimjLh4iv5V6c+mI0jCGyJLkKZU0tVrwcUhit86TDWsp+C3R8F142H/TaZg9EErj4JpOzR25MwojszYGEFKY/LyCfRUwazhGWzHDfQBqjp7XzkStJvDvglj+N2XizdvLt4uLz7MwWp75bvqbjjQpR7nQE1V7vojiZQAcu6BQSEMFVZZ5pALxnVuAgcFviiPboVN228nqJY+ltqVzHsgPSHPmZWiZBiikqQTjDIzdD0qmLBFKI3hOTIPXO2vpQQQkEmvc2elomTcjG1TtSHsZ0x3lcdPTVV3o+eA4qaQgSkbaQlRMhDRMo1SKwEarYgzy/YIvgzbPcM/Z3JkX8eWn741ddDm0CK2FFJaRYOSl0ypWDLDtWZSaEBbcC+1XxzBftMe5zMdt8cqVXXV7bL9wB5p7ch2ToaZmPV8AuvTYaerDqM9JTyO5mrX4qTWikJxZRzLtaVukUgOWFDz+OjRRa6QW7V4Av615mfwHWte1uSOaUve+RA7NdTrJmvqdVXT09Fs2qYmW3+sbT8Kqfddk8b0pn74+r+sVaw4mSS/LPQrnssTa51Qr3dfqAMPY4cq+FIqVoCXrIhQUv8rIivokVHSeePyM8z5t/dOqOff+1N7v+43DtP4bj9YJs2U35f8+uFJX2N7O4aeVvCs+pX60dP0p9U7q3and/5J5e5f3P8AAAD//wMAOmFowBcJAAA=", "base64"));
  res.end();

  return __filename;
};
