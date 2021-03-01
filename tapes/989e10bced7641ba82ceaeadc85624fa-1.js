var path = require("path");

/**
 * GET /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?nreserves=2
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves.. : 200 8483us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/cNhC+51cQC/RUc5ekSIn0zbHzMBo/kGzaQ5HDkBzZarTSQtLaNQL/9472qfUL8akoUMOQ18uZj8OZbz6OfrxhbNRgi80NtiN2yP5kP+gr+rKI/b+jiNJmBgMXVkmujcq5Q4NcaWVQyWAjqtHByiXUi6bFT0XbFdXV6co/c5lQ3iguYoZcWwTuM8w5aMy0si4XQmz8iw5nazcpRJTC51zlIuUaQHCP0nDhnfEqutxhsnGbN3XAtqU9v3TQLdo1hPW5shBSDiFEijwz3OY58CQ11ghCs0Y+B3Hh/8LQ9TCrbOzy8QpUcqpghku3zxigLDHuliK2oSnmXVFXexYMqsgWFdxAUYIvcecxww4idDAMq896g9BhPKHHEkgJKpRIuJBTIQ+NODRmLEz6qxCH21QvHRfz+ArHtd/98u/9Om9tB003BBBcaK7MJq9YxQerKVdix5d5gfGUqr6XaQ9NqOPKyQkxCHpEpvO6gebuUx2gT92GZcYqY33gGAKxVHrLwQfgeeZTScxVeR5fQHlc7l3BXwU9LPnF5z9OP7B304/nF+z4ZGiyPd1vXyfHx5OT08nFcLloj0JX3CxNumaBw6WKeqtbDE6uBaIQFA8Yabn22lGjCKpjmtgoQEMw2d7eMJtvWyRVIc9Sn/EQwHAdk4Q7JTOOMdcqoASr7dC5LHyftrW3iZm1IkEegIpOW1MQCCQNIU28U5oC8kPveVPMyPsLaU0R8LIuqmXKRwloYY2ibnI5PWKuOMjc8RRVqiWk6GQ+xGkHAKdxrVo/h8K+bWi8JcMcmxlUWHUPKJWHmGrKAU+do9zYXHBLyeYkWTkoZW2SDRr9EcpLlHoV9JBSZ1BU7NOqCC8T6ux/Qv1bhKJ8lqtqHLEWiRVdEdgtetaHi82OM6Guuqbwi65u9q7e/ZofVV1dFfXigH1oiqu6Kdr9ym8xpndz3JQBhYs6i9zRHU2hW+A2kZ40K8u8xTyNVr6AMsW/V4l8xuacYhvsprzTVCHJ8wCO6OwoUVlCWp8gGkWcRgXb6+PgyUP+DhX7CM0MS6wO2PsGqu//6VOybztlWPiyWGnCoyIv19prIsWyu0+n7JJmsb0Cz0sIqxwdw8w3RbzCA3YGbTtmQ7P+Jr/IL/f3GgUlhB6aNfWampfbnZ8IuR9Ezhczv45r+puRwoyttdKwMTsylvW47P2Unb07Onm3Y/SiKZYe1103P5xMbm9vx2Udxlf1zYSiikUz6eowwVDMRSbthFBoOBRaufF1Nyt3OFgtqFN25xjuUK5i6kcjVuesLxjJbsvqqtxp4lLXoAqb4hmfJ5lA0lkSJqKKC9wq1NzITIBXICBxj50/NmvB7r8Q2x+ldqbXdRlpatzoHyZ5nkpSPe+gp6QOpBnB8RikTbNIIiLdaG+CGswiUA3phjQrZzLhMssTrgN9ApdbrhKrjfdKkhSPnsN4fnx9Bez++Ar9MVlT17P9+GmGuyNduu6mDYTvZLO3K8RY9FWE8gsFRB/ary3Gh/fQDmRvgM99anPjPHf95ah1Sv3tkkgPkboojae7YvQcxov372uAh2lY9ReL9Ywu4r32ezDMn9dsGw8D+i3LofnTk/xPzfJ67Fz2aJb/qWl+6Lr1vH98f9UdlJdwhe1ptZnNTZo9sb6ppVbDOShQO5IU9QarAfqXwZgEdzNafgttsVokCcKGXS1I9W7r5vs+t55K00spkhm9shyKdGyMfpCijdvbOwq62RBM+xBjKqgFNGlBQsOYC0ngCWRgY8x0iIPXrxcSvNpYJmMh7cON126v3/jNpjxraV4lnl4T62Y1o8g39/8AAAD//w==", "base64"));
  res.write(new Buffer("AwDNU719vw8AAA==", "base64"));
  res.end();

  return __filename;
};
