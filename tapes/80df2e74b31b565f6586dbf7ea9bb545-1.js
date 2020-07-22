var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves.. : 202 6685us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves.. : 200 38301us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/jNhC+768gDPTU0CYpUqJyy2ZfQTcP7HrbQ7GHITlK1JUlQ5KTBov8944sP6S8kJyKAnUCxTH5zQxnvhl+/vmGsUmNDdbX2EzYIfuT/aSP6MM8dP9O4lhIH3vgqIzi2uqMuyh1PBWoupeJVDw56CG+WtUNfs6bNi8vT3q89BaDA8fBGcd1MDGHKI25cF5bHzCCCLb4vMXFBpYoqRzEwG3wGdcGJHeYAs8yAKsTr7WKtrBlXXlsGvL5tYV21WxMWJcpC578eR/IRGK4JTiPYmONcCitkU+ZOHd/oW87M3029vl4hVUClbDANewLeigKDPulgI2v82WbV+VoB4MysFUJ15AX4ArcIxbYQoAWhmF1Wa8RWgzv6LE2pIQSXCRcybmIDiNzaOKpjZJfBb12xgi3WoaX4zawu/Xfu03Wmhbq9h5ec2W2WcXyvvWYK7FnyzLHcEI1H+XZQe2r0IOkoJ99Amjrsqqhvv1ceegStyWLscpY5zl6L7mWzhLbiLJZ4mIprFJZFp6x8rDY+3K/yvSw4Odf/jj5yN7PP52ds+N3wy270/32bXZ8PHt3MjsfLufNkW/z6/WWtl7hcKmkzmpXg5NrgSgExQNGWq6dTqlNhKRERzYI0OBNMvINi+WuQWLlsyR2CfceDLVmFPFUyYRjyLTyKKnR7BBc5K5L2wZtQmKtiJB7oKKTawoCAbnyceRSpSkgN0Qv63xB6K80aXKPF1VerlM+iUALaxT1UprRI2SKg8xSHqOKtYQYU5kN7TQDAydhM7NeZoV939J4R4Yl1gsosWzvUSrzIdaUAx6nKeXGZoJbSja3KTW7UpYaY0DMB1aeo9SrTA8pdQp5yT73RXieUKf/E+rfIhTls+irccQaJFa0uWc36FgXLtZ7zviqbOvcrdqqHl2845oflW1V5tXqgH2s88uqzptx5Xc25rdL3JYBRRp0EnhqkK7sYOkWjaSjmZUkzmIWByufsTLHv/tEPrHnjGIbeFMu1VQhyTMPKdE5pUQlEc36CNEo4jQq2F0fB48e8nco2SeoF1hgecA+1FD++E+fkn3fT4aVK/J+Jjwo8nqtuSJSrLv7ZM4uSImNCrwswPc5OoaFq/NwiQfsFJpmyobbuov8PLsY+5p4JYQebqurDTUvdp4fCbmTIWerhdvENf/NSGGm1lpp2JQdGcs6u+zDnJ2+P3r3fs/oVZ2vEVdtuzyczW5ubqZF5aeX1fWMogp5PWsrP0OfL0Ui7YysJCQKtEqnV+2iGHbG8rY/M71har+A5YpaaH/AoeuiD7ZTTKzKWFdJmscNq8piPyzXAw9Kv62qcVmUCKQBTBOLOJR6bhVqbmQiwCkQJFX34KuqCKQQt9MOoyyLJc04l0JHQO1pQviUBy9tnAQaGTKdjPTSQHlAOSQXaouJjLhMsohrT+8gzSxXkdXGOSVp8E6esvG0VH2F2bFUhe6YrK6qxTj+rjA0ha7aeQ3+B+0ZeYUQ8q40UHylgOhN863BcP/W2RsZifXMxTYz3feK7irUulP+aRToIeI0SOPoZpg8ZePZ2/Y1hodp6LuJhWpB1+6o2e4J97OK7eJhQL9FMdz+uGp/oW5PlLiv21+o3HfIHfDu4V1VtVBcwCU2J+VWh5s4eWR9W0mthprHU4fR2Ok29GL5l4EkgtsFLb+FJu8XadxgzS5XNOFuqvrHmFmPJenpBKm5UIc6PZRqqhI7TtAW9faWYq437HIWosySjKF+8NxQW5CKF9S5kXEKQ0hVEg+GyVPp3flNp8ak9/xuUK/3+2ZbnM0Q7tNOXwerulcj8s3dPwAAAP//AwCvMSqnpw8AAA==", "base64"));
  res.end();

  return __filename;
};
