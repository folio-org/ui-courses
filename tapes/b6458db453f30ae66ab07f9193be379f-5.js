var path = require("path");

/**
 * GET /coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959 : 202 17559us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959 : 200 17677us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWwW7bOBC99ysEX7d0SIqkSN/Sdg/BttkFmp4WPQzJUaJdWzIoKahR5N93LMuR4jQLZ4v1gTA0fI/zhjNP+v4myxZVXGSrbKELhU4VnukQI1O2MMyromBKl6VQGrTTbvF2D6hhgwPkElK8h/R3dte3HuqYdocNEduQqm1XNfWw7+YOswAJM9qTlYixqm+zpsy63vfrKmLdQYftEbuF1G3o2dUhL6GNsUoEpkVApqIKDIA7xhGk8Jw7ruAU+rv/C0O3h3+nwKTxbK65yl+J9C77HCqsw5jlDzRe1WHdD8JusVk3t7u32Ra7NPwddG9hDdjU3fDkyLLBDiJ0MKVKD0NCqkf8QMtALbnkjBdM2huer3K9ytUy1/wXTr+RiFD9Nr6EEmLF7SqXS1nkP0a9231pMY0Vx9zbYArNfCg40x4sszz3zPvSA0QePbjFQPBA68NQ+9D0qcWPVdtRCUYeF5wOCJwZpXOmJArmo4mMAw/cmVh4rxbP0S9d3tl0BEl4S2QJjpLay3eCi2MUv3WYaliPwW9PgusmwP5Wx2AZolGBzjLOaRqLkjOrODLryhKktDYvnkFPFUwaXsE2b8FPUNXZx8qToN0UDk08hH/7cvH+/cWHq4tPU7BqL0NX3Q8butTjFKipyl0/k0gJIOcBGGhhmfLKMY9cMG5yGzkoCLqYnQqbbd+OUCNDWRhfsBCA9MQ8Z06KgmEslSSdYJWdoOuDghGrY2Gpr5AF4Gp/LCWAgEwGk3snFSXjJ+w2VRvCfsZ0XwX8o6nqocCLHBS3WpJjuZKWWEoGonTMoDRKgEEnyomlncGvYrtn+PNMjuzroeXHu6YO2hxbxBVCSqeY5Dn5pSoLmhdjmBQG0GkepAmLGexf2uN8pnl73KSqrrpdth/5mdaOjOvEDojZTDuwPrULOoovnug8jObNbovHqRZacWU9y42z+zEkD9XUPKEM6EuukLvHMZzAL2t+Bd9c81VN/ppact/H2KklXzdZU6+rml4+zWbb1PRieKptPwqpD12TDumN/fD1P5oz2axyK1UshXUnNjuiXm+zZ9q75ivhllL+v/Z+3W88psOr/9EyaabCvuTXj18Fa9zeHULPK3hG/exSSDPX8bPVO6N2dun40zN/pnIPbx7+AQAA//8DAGwq/YpaCQAA", "base64"));
  res.end();

  return __filename;
};
