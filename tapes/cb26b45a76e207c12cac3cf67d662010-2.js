var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 30128us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 34487us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTW/bOBC991cIvm645ZcoKrc0WWCDbdMCbbGHRQ9DcphwI0sCJWVrFPnvpW3Zlh1n4bSH3YsBa/hG8958Ud9eZdksuFl2ns20oEIaCsT4ghEpy5wYJTnhWJbaF5xh7mZnS0ANc1xBLqGyQzV0GaNsbXLY2RjaPjT16sQb6ILNXPAeI9Z9gKUlg9ploe7xNq7+b6AtxH6eTl2vA2LeloxxSazjQKQHJCWgJJIKpZ2mpebuEPre/I22X8K/JcOO3Mm+pvTeQX+H8xSi7Ta2Q37Xta0GF+rbzDT9XdYOEVfsoG2rgC5L6LsteI49OOhhF156aCNCj+4q/aw8csoZoYJQ9omy85ye5/mvVNBfKD2ndPSUYEPrXgBboR7T7+NKL9sMscO3oetT5KPalgpjDQgCCiiRPGfECKYIVYIZw1F5PuZ4D/2c4Ce7S5CIt8lZhDiGgl97jDVU2wObBwd2vrF3GB+CxbYJ2+IRIKnOuSOy9OnHeU6A+ZIo5EoyUFgyfwx+yGfH6AUe93okRJtdYXefsZ3VNm5ttW7y1IXONg8YF1ehaytY3Ex9DNW6d1auCMl+h6r6BxY7dBvs/dC+bSxsqrOPA27Nd03lPt5h5X/72oa4+IAxNG7KcxnAELdgcbZ7vuzV+LDV/0/E+242mh+3b+h68P5jFdpueeqv7MuriX1WjYGNPnJhfZkrTyxznkhGDdEGgfAiTR9uLRR2U+1b6PO5eYG3aW4u6hq/HsnKH59fX16+vrp+fbEzhu7C9uEBnwgb6tQI/TDhJikipRYI5EwTaWRJDFK2rH3tKEiweTF5K8zboRuhiltfKFOQFHOeikwIUnJWEHRecosMtNQ7aBVM6prFRlJXaE0FEgtULl+bAsA06LhVwpRcpmDMpFximCfsx3Xtf1jW/g+UeTeBX7sx8af5OKiPVGHzzShyDE2BLqVvRUQBKakoiCs8g1zkzKsNkRXs+bp4gae9wR/sHWA1hy7jlJWzaYnHfjJzWUkYJUzsTmDtDuyc0GK2R3U9QD8tWhwJ+zyVBqImhmmbdhI3xFCbsIb6UjidF3RLeAd+nvYL/E1pv6+rUONkHh0su5smbW3SYuzSHLLNvG3qtHL3uS27IQ62b+I6vLEknkSomFVQpi3MTarzglqipRJEyVKCd4xqVJNll8pslMoU4BQkQoVwInU60lTkKQfaW+GMxLxAe4TaJ1hUTTzL3oV7nDb8T+zBlYdjK/3Epc40O1jqJ671HXAzgscMPFG5tFZrjTnxyhVLldMgYkwQQdOI0t6gmk6Tqcoc0AiHqW1zRSRoQ4DnSXSeOgcNMlXIY/MUbiG6pDK4W9yvpf9Uav7k/nSi1Hz/BvUvUnNMOwi4J6VxZeIiHTEWPVGFzz1XGp2hR6UWeVFqxpCIokyry6YcaZPqGyhQbUvpURxdXQ7m3Vl2eReTpJBd/F+UlsUPKr0F7iudffnZyzPj/AWXZybPeXHOeOoy8QzszeLzLn1eGuucSlOolJLkIn01lVZYIqAA7VwhbbpTHL1+3wxzg3H9dcKFzNeX6y7NzDRvb3bfIGH8PnoqwGn0c7XH47QRswUtg371+B0AAP//", "base64"));
  res.write(new Buffer("AwD0guk2KA4AAA==", "base64"));
  res.end();

  return __filename;
};
