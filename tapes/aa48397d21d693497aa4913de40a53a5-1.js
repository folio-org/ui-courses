var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId="f5063ee8-b18c-402b-b0c9-1b0f93d8570b") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 6959us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 33052us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTW/cNhC951cIe63Z8EsUlZtrF6jRxAmaFD0UOQzJoZe1VhIoyfUi8H8P91u7Xhtrt0Drwxor8s3OvJl5M/r2Jssmthlih90ke5f9mX1LT9Kz4BZfJ1pQIQ0FYnzBiJRlToySnHAsS+0LzjB3k7MVpIYZLkEXUNmhGrqMUbY5dNjZGNo+NPXyzk/QBZu54D1GrPsAi5MMapeFusebuPy+A7cQ+1m6d7Vyi3lbMsYlsY4DkR6QlICSSCqUdpqWmrvH4I/mL7T9wsAqyF2YL7A3DvQD9FOcJVdttzs9jPSqttXgQn2TmaafZu0QcRkntG0V0GUJPx3BZ9iDgx7Gbi5yFBF6dJfpY2mVU04JLYhgX6h4J/J3Mv9RaPYDTX9bYwk3tO503Br2sPz/sOZvVR3vQ9enGNb8WyqMNSAIKKBE8pwRI5giVAlmDEfl+Tbze/inU/ACkwkU8SYZjBDXDuF9j7GGanRl8+jgBt/d6DDeBYttE7aFJUBSnXNHZOnTh/OcAPMlUciVZKCwZP64gceR7WJ7kdW9TgrRZpfY3WZsfG4btzq3bu+5C51t7jDOL0PXVjC/HtsZqlWPLc0Rkv0CVfU3zMf4NtjboX3fWNhUbx8HHF2YNpX7PMXK/3zfhjj/hDE0bj/mhRtD3BoQZ+OTRW/Hu21O/kC87SbbCw+jX+p68P5zFdq1LH19c3BnUq3dXNvKhfVlrjyxzHkiGTVEGwTCi6Rc3Foo7K4xtuDnsvYii+Osndc13h/N16+/v724eHt59fZ8fBy6c9uHOzxCeKhT2/TDKE5JESm1QCBnmkgjS2KQskWfaEdBgs2Lvd+GWTt0a7Di1hfKFCR5n6dCFIKUnBUEnZfcIgMt9RhcBZN6bL6h2BVaU4HEApWLn05OYJJKbpUwJZfJIbNXTjHMEvrzqks+LbrkVe3QjQxcuXVBnGblSN2kCpxtZMwxNAW6lNJlQApISUVBXOEZ5CJnXu0CWgKfq5cXWdsbI8FOAasZdBmnrJzst0HsR+LNSsIoYWJ8B2t3cIMnhZ88CnwlxF/mLa7D93kqGkRNDNM2zTpuiKE24Q31pXA6L+go/B38ORJeZHNMwse6CjXuqdnBIL1u0m5AWoxdUjHbzNqmTkP9cZyLnomD7Zu4cnRvsRn7yjG1OHBPSuPKNHKkI8aiJ6rwuedKozP7szQV4mZO5EWpGUMiijJpg6Vl0oYUK1Cg2pbSo3hCGxzMurPsYhrT/ILsfF8m/tGkXdo4vj6cuEAUKj9cIE5cIbbInZhv83KsShSzCsq0ZXGTdKiglmipBFGylOAdoxrVE8ybApyCRHUhnEiqjDSJUOoJ7a1wRmJeoD3K/BeYV008yz6EW/xfsV7S4pWsb5GnsV5aq7XGnHjligXraXQwJoigaahob1Dtq/+YdQ5ohMMksbkiEnQqdZ6nJPCkbmiQqUIer3e4gegS6+Bu8LDD/3vqxaupF09Sn339N5b5XD/qxZMc2+KeWeavh5nBuHrz4ULmm1W9S2qZ1PZ6934Ttu9gx0I5TVTYAcenCQob87sIYs3rpG96qH5D28TVKsDePHwHAAD//w==", "base64"));
  res.write(new Buffer("AwAKqCP3xg4AAA==", "base64"));
  res.end();

  return __filename;
};
