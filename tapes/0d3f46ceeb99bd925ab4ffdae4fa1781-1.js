var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes.. : 202 6403us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes.. : 200 3545us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTWvkMAxA7/0VJteturJj5+tY9jKXXSjdU+lBtmU20LFDkjmUMv+9TmaHQttpSxkfBJb1hHjITxdCFC7txolvHweeCtGJO/GUsznf++VatNJo1I2Fsmob0IodkHEELji2ATVjq4vLAxJpyyu0iWLgcUrx+OJ5cmM/zH1OLQW/k0jxoY8sXNoOKXKcj6VbnsnTTEvdYZRlyJFpZv8rh5VXqBCwBqVvsew0drK+amT7A/P53yhTu8GfomTVGdXJ6qqpzfvU9ePficfNwYKnskWjA9ROM5iKGCyVDkKFBp0kJkXF2mCf4/7ylcRgsCqZG7CycaBRWbDoWpAWQ1v6xtRo30j8swr6wGAf4WD5nBJRfl3iW+q0AiwNsqoleG/zHnkOQBU1kC0GHVBaG/wJBT8/XafrNP87LhRF/56Z6Qz7pb6j5ki9qBH3S4diTjM93LBLo19/XnmxfwYAAP//AwBhnmJTkQMAAA==", "base64"));
  res.end();

  return __filename;
};
