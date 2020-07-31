var path = require("path");

/**
 * GET /coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
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
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60 : 202 19479us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60 : 200 41178us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWwW7bOBC99ysEX1s6JEVSpG9puwdj2+wCTU9FDyNymGjXlgRKCmoU+fcdy3LsOM2u02J9IAwO3+O84fBR319l2awKs2yRzUwsnREuZ1BYZMqbnJVOIAtaRhdtUGD47M0WUMMaR8glpHAH6e/sduhKqEPa7BYE7Hyq2r5q6nHd9S1mHhJmtCaLiKGqb7ImZv1QDqsqYN1Dj90e20Lq1zS33OUltDFWCc+08JRXUJ4BcMc4ghQl544rOIX+Uf6Fvt/Cv1PgoPFsrmOVvxHpbfbJV1j7KcsfaFzWfjWMwm6wWTU3mzdZi30a/466W1gBNnU/zuxZ1thDgB4OqdKkT0j1CO9pGKkll5zxguXimueLXC+UnudOveb0m4gINbThOZSQi9wtlJrnnP8Y9XbzucM0VbzkypYGgSlpNdNO5cxyLVhplJIQtTKOz0aCexrvx9r7Zkgdfqi6nkow8VjnAIFSQGEDdZQ3rJRBMggiqlCKMuRh9hT93OGdTUeQhDdElmAvqbt8K7jYR/Fbj6mG1RT89ii4ajxsT3UKRh+M8iiYcU4zZSNnVnFk1sUIUlqbF0+gpwoOGl7AdtyCH6Gqsw9VSYI2h7Bvwi78++eLd+8u3i8vPh6CVXfp++puXNCnAQ+BmqrcD0cSKQHk3AMDLSxTpXKsRC4YN7kNHBR4XRztCut26CaokT4WpiyY90B6Qp4zJwUdUYhKkk6wyh6gq52CCatDYS3PkXngarstJYCATJL1lE4qSqY8YNtUrQn7CdNd5fHPpqrHAs9yUNxqSQ3hIg0hUkOI6JhBaZQAg07EA0t3BF+Gbsvw5UyO7Ouu5aezpg5a71vEFUJKp5jkecGUigXdF2OYFAbQae6l8bMj2L+0x/lMx+1xnaq66jfZ9sofae3JuE7sgJjNYQXWp3ZBW+2v9pTw7mpeb1qc1Dqh1dYgWG4cdYtE8lBNzeOjxzJyhdyp2RPw85pfwHeseVmTv6aO3PchdmrJV03W1KuqpsenWbdNTQ/DY23bq5AG3zdpl97UD19/0pyFHm3WzZU8tdkJ9XKbPcve6UXgC2nmktv/1d6vhnWJaff0P1gm3Sm/LfnVw1fBCtvbXehpBf+7fprPxePH7Verd0bt9Nw68WjPX6nc/av7fwAAAP//", "base64"));
  res.write(new Buffer("AwC15JOEWgkAAA==", "base64"));
  res.end();

  return __filename;
};
