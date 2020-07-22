var path = require("path");

/**
 * GET /coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:18 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d.. : 202 7254us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d.. : 200 14434us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWTW/jNhC9768QfO3SISmSInNLskUR7G5aINlTsYcROUzU2pJBy+kGi/z3HVtypNhJ6jQoWh8EQ6P3OG8++f1dlk2qMMmOs0mpAzfKWqaEjUx5oxkoxZmK0ojcCIcmTN6vATXMcQM5gRRuIf2ZlQkxVPV1Zw+49KlatFVTbz67usHMQ8IM6pDF7susiVm7KlezKmDdQovLLXYBqZ3Tu/POLaGNsUp4poVHpoLyDIA7xhGkKDl3XMEu9NfyD/TtGv6dDIPEg7nGIn8m0pvs0ldY+97LJzSe13622gi7xmbWXN+9zxbYps3fje4FzACbut282bLMsYUALQyu0kufkOIRPtBjQy255IwXTMornh8reazUtND8J06/nohQq0U4HLUB3dPzfhM536zSEj9Vy5YE9HH3MUcrrGCm8DlTRufMIXoWSum1wqBc1JN99HOhP5iOIAmviSxB6l1JJ6eCi60Vv7WYapj1xm+PjLPGwzonvTH6YJRHOtU5zZSNnFnFkVkXI0hpbV7sQXcVDBpewTYuoM9Q1dmnqiRBd4PZN6Ezf/xydHZ29OH86PNgrJYnvq1uNx+0aYWDoaYot6uRRHIAOffAQAvq3VI5ViIXjJvcBg4KvC5Gp8J8sVr2UCN9LExZMO+B9IScciJFwTBEJUknWGUH6KxT0GN1KKzlOTIPXK2PJQcQkElv8tJJRc6UA3aRqjlhLzHdVh5/a6p6E+BJDopbLQOj9NMjRMlARMcMSqMEGHQiDizLEfw8LNcMvx/IkX3tSr7PNVXQfFsirhBSOsUkzwumVCyY5cYwKQyg09xL4ycj2AvlcTjTuDyuUlVX7V22btiR1pbGzk4zE7MZvsB6t9npqG1r9w53rXl1t8BerRNacWVLlhtH1SKpA0FT8fjosYxcIXdqsgd+XvMr+Maaz2uajmlJs/PBtjtQL5qsqWdVTaujmS+amsb6Y23rVkgr3zapc6+vh10PucACo7fMGKS1BlTpIDxnJnofUIvSIzzh4S/T7OM0O7vBJSW9HTtaQnroXVNYx8c9/YY5+uxCeHkliPw4d8dCTY3Rj1fCgDu9+0K9sy0BHb3SvKRiKSXTPBQM8uCZLctcKYhUqvmY44XF8uLZPe71Z/cU93229zKquFY6UhzBwXr0lDlNPElLHQpOqyDXYIqnMopNusbsdL08Usgub+Cvp5NKDIX7XyRVToUy/1FSi6kr7L+V1OzrP7wAdc5xM7VO7lyA3hyWvw/Kk+e+LSS7l7CL1bzE1N2uHy42tPn8ejBePFy8Z7i46Uz7ETwgfsXUuEeF9dboHRC7/TPfErn7d/c/AAAA//8DADH5o4m9DAAA", "base64"));
  res.end();

  return __filename;
};
