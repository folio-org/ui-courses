var path = require("path");

/**
 * GET /coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves.. : 202 15566us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves.. : 200 22566us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/bOBC951cQvm5okxQlkrkFSbsNmrTBrncvix74MUy4K0sGJSUtiv73ji3HlvsRtKfFAquDAJPzZoZvnp758YSQWYYO8gN0M3JG/iIfcQkXU9j8nFVKCBWMpKooCiqDENRoy6ji2kkTiqo05ex0hPh2yB1cp65Pzd3ViPescN7ZgtoKUVKUnLqCV5RVBXdOQBUFf8KnHlY7GGcscOYiFZFVVFrEOuAlZc6UTgQTDRSHsusE4QrBG+jYPi47m30bYJvOMHx28biFoes22/zhuvW2T22zq1oWPpqyitTzEKnEBqh2YKlQUXHhvVX+uSxv3d/g+2kTBx5/KjXCGrsaWz9vGng/3dkf6vUfi4uLxeXV4ny6nbpz36eHbUifB5huNTiZfpgcWDIAxryltuSaSpwo0sz4Zjo6MCutL9VRbbtaD90OXAkfVeUUxe5LlAbqwwiuKIQohQdutdRTcJ3chq0nroPSmhVAvWVyUxqbAAtU+KpwRkhsyE3R65xWiP4dlZo83Lap2TI9K6xkuhSBShPxFaKglkdDKxCV5LYCw+M0TzdJcBV2mv+xLOTdLs2nvQbWkFe2gab/QknRh0oiB7QyBrnRkVGNZFNtYrRCaF0oPvt+lueU9FOpp0q6sakh1+MQnhfUzf+C+rcEhXzWuw+fdICq6JMnj+DIpl3IB834tulzckPf5iPj/tI9+rZJ7XBKfs3prs2pO578PsfywxqexgDMBKkCNSUIbF1bqtGsaVRKOQ2xCpo/k2UJ70civxPzBnubVBPOSJwQp9Fbg3I2SJQqGMVJQilQ0yDsbE/TNw/5p23IK5tXUENzSl5m2/zznz4leXdwhsHVafSEr4a83evuURTbr/tqSW7xn/xowOva+pGjC7tyOYU7OCU3tuvmZBoWbA9v4+1xrZkXjMlpWG530rzdV/5Gy97W9Zth5XZ9LV+XnJVzrTUvyZycl5ps8pKXS3Lz4vzyxUHRQ05bxH3fr88Wi8fHx3nd+vld+7DArkLKi771C/BpzfD2scAsigkmhZnf96v6kAeaAb+UwzmmFeqxJ+tqIG0km4Gh7XakbeqDJ259zTb+aXili4VigD6LxoRSMZ5qAZKWXDHrhGW2MF+DX+WdYW8W2P4R4hB639YBr0pP/gdFjBVH13PGbiQpPXqGNzR4risV0ES4GRnf+cVsBb3F4dmji4/PgPMMl/gatYcsUaZowZesOCvKM1nNhVa/HN+JhnX4cdTYxMl+8LO+7W39G/g2jw7ITz59BgAA//8=", "base64"));
  res.write(new Buffer("AwA1TFyYWwoAAA==", "base64"));
  res.end();

  return __filename;
};
