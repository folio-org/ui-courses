var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(copiedItem.title="seman*" or copiedItem.barcode="seman*" or copiedItem.callNumber="seman*") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves?query=seman&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/reserves.. : 202 6387us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/reserves.. : 200 23479us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/bOBC951cQvm5okxQlkrkFSbsNmrTBrncvix74MUy4K0sGJSUtiv73ji3HlvsRtKfFAquDAJPzZoZvnp758YSQWYYO8gN0M3JG/iIfcQkXU9j8nFVKCBWMpKooCiqDENRoy6ji2kkTiqo05ex0hPh2yB1cp65Pzd3ViPescN7ZgtoKUVKUnLqCV5RVBXdOQBUFf8KnHlY7GGcscOYiFZFVVFrEOuAlZc6UTgQTDRSHsusE4QrBG+jYPi47m30bYJvOMHx28biFoes22/zhuvW2T22zq1oWPpqyitTzEKnEBqh2YKlQUXHhvVX+uSxv3d/g+2kTBx5/KjXCGrsaWz9vGng/3dkf6vUfi4uLxeXV4ny6nbpz36eHbUifB5huNTiZfpgcWDIAxryltuSaSpwo0sz4Zjo6MCutL9VRbbtaD90OXAkfVeUUxe5LlAbqwwiuKIQohQdutdRTcJ3chq0nroPSmhVAvWVyUxqbAAtU+KpwRkhsyE3R65xWiP4dlZo83Lap2TI9K6xkuhSBShPxFaKglkdDKxCV5LYCw+M0TzdJcBV2mv+xLOTdLs2nvQbWkFe2gab/QknRh0oiB7QyBrnRkVGNZFNtYrRCaF0oPvt+lueU9FOpp0q6sakh1+MQnhfUzf+C+rcEhXzWuw+fdICq6JMnj+DIpl3IB834tulzckPf5iPj/tI9+rZJ7XBKfs3prs2pO578PsfywxqexgDMBKkCNSUIbF1bqtGsaVRKOQ2xCpo/k2UJ70civxPzBnubVBPOSJwQp9Fbg3I2SJQqGMVJQilQ0yDsbE/TNw/5p23IK5tXUENzSl5m2/zznz4leXdwhsHVafSEr4a83evuURTbr/tqSW7xn/xowOva+pGjC7tyOYU7OCU3tuvmZBoWbA9v4+1xrZkXjMlpWG530rzdV/5Gy97W9Zth5XZ9LV+XnJVzrTUvyZycl5ps8pKXS3Lz4vzyxUHRQ05bxH3fr88Wi8fHx3nd+vld+7DArkLKi771C/BpzfD2scAsigkmhZnf96v6kAeaAb+UwzmmFeqxJ+tqIG0km4Gh7XakbeqDJ259zTb+aXili4VigD6LxoRSMZ5qAZKWXDHrhGW2MF+DX+WdYW8W2P4R4hB639YBr0pP/gdFjBVH13PGbiQpPXqGNzR4risV0ES4GRnf+cVsBb3F4dmji4/PgPMMl/gatYcsUaaokEtWnEl2xvVcKvHL8Z1oWIcfR41NnOwHP+vb3ta/gW/z6ID85NNnAAAA//8DAMMFsNNbCgAA", "base64"));
  res.end();

  return __filename;
};
