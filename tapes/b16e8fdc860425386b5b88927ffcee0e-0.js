var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 244
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:57 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courselistings : 202 6678us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courselistings : 201 5172us");
  res.setHeader("location", "a70ffe37-a4e9-4129-9d73-933ed20d64bf");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSQPW/CMBCGd35FlLW96vxtsxV16dSFTlUHxzmjVECQYyQQ4r/XIUHtigcP9+i5134vi6qqu7aullXtDcZIwoCX5EAy7sC1RoATglqOrZZNrJ9HIdGmG3Ly6X0y0+uKIZsYnTKlvd/O6PQPbfvgc9fvZxRDWRmIgXZOgbQRwUoksC5Gz7m1wsxi2bi7S84wzp0EjuWlUkYDFrUGzrQnpzBwHSYp9Mc00Pp8oFl1TEmUtgGhnQXJKYBXwUOIgZqIktDJSe325XfHkPv00fxQyMPof1XfN7ij7Fuf/Ti7lMEYlchnat/KdUviyBHQADNrZpdKLJV5ccI+YTm3hD9ndf4c6N6jsbFBy0sjRhEogwGsJgMKJZZCgkLG7v7x0D6cOTuPZxb9urj+AgAA//8DAMDfp2stAgAA", "base64"));
  res.end();

  return __filename;
};
