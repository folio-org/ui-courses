var path = require("path");

/**
 * GET /coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a.. : 202 6325us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a.. : 200 20333us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/bRhC951cQujZr7xeXXN3spECFJm6BOKcih+HurM2UIoUVZcQI/N87JCWTlq1EruIDYXD2vZ03nJmn72+SZFb6WTJPZsbbTBUmYwVHz7T2gYEwlpms0EaZVBoNs7cdoIYl9pALiP4O4r9JERF9Wd8McY9rF8tVWzZ1f+z6FhMHEROofRKGk0kTknZTbKrSY91Ci+sddgWxXdK7xZCWSI3JtXAsFQ6Z9toxAG4ZR5Ci4NzyXVoj9K/iK7q2g3+nwCjxaK6pyN+J9Db55Eqs3TbLFzQualdtemE32FTNzf3bZIVt7P/tda+gAmzqtn+zY1liCx5aGFOlly4i1cO/p0dPLbnkjGdM6muu5prPRXZmbPobp78tEaE2K38IJcw8lXMlz5SyL6Mu7z+vMW4r7kFZnurAMqeRpQaQFaAcC4an3AmgYsGsJ3ig50Nfe9ds4ho/lOuWSrDlocNBhdwzCZwzXUjDisA9C4UrBOQul17NnqMPfbyj6QgS8YbIIuwkxYtLwcUuit9ajDVU2+C3J8GqcdB91W0wOG+0Q8GMtSnTeeAs1xxZbkMAKfNcZc+g+wpGDa9gm7bgRyjr5ENZkKD7MewaP4T//Hz+7t35+8X5xzFYri9cW971B9q4wTFQU5XbzUQiJYCcO2CQipwKqy0rkAvGjco9Bw0uzSa3wnK1WW+hRrqQmSJjzgHp8UoxK0XG0ActSSfkOh+h1aBg1x4+y3OukDnguruWEkDqNemMKqzUlEwxYlexXBL2E8a70uHfTVn3BZ4p0DxPJS0sG+jhg6StFWhrIe0rAQatCCPLegJf+HXH8M+RHMmXoeW335o6aLlrEZsJKa1mkquMFmfIWM6NYVLQ6FhqW2ncbAL7QXsczzRtj+tY1mV7n3QjP9Ha0uLaWwfEbMYTWO+vC7qKz57oHEbz+n6FW7VWpJrrvGDKWOoWibRDU2oeFxzSPGrkVs+egQ9rfgXfVPOipv0a17R9H2P7K/mqSZq6Kmsyn2a5amoyhqfaulGIG9c2cUhv2w/7GQrJnbZguqFV1COSmjzvctUZN7kQlL58IcM/yqrqTO8SK1oM44EC4uPkCql0Op3oE7boQUP5saV05pDNhSBLEU/NYcS93h4mHD8xpoN3n2ZNgznRM/nyP712SI6bM2n2vfbksvy8KC/e+2vd+mqzLDAOP+QeHZBWpOsm6OrxN16Fq9sh9LyCR9XPGj3VcWr1jqrd/p2nVO7hzcN/AAAA//8DAFp77sgoCwAA", "base64"));
  res.end();

  return __filename;
};
