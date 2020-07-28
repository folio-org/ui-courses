var path = require("path");

/**
 * GET /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4
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
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4 : 202 7172us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4 : 200 12080us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTP2/bMBDF93wKwWvLhKQoivSWP4vRpi3QZCoyHI+ngoUtGRQdxAjy3UvZkuMESOFq0KCn39294+PzWVHMgp8V82Jm0VZIwJlWVcmUJMGc155x4Mit9rVzavZ5ACL9Dn2KEBd7sr+8ElzsNXpKFFtYjtLTkbTsEFLo2lFq0GuFuYu2tmLKNJwZxYkZ2zQgpTFl/Q787v4QpgF+zp9fJz+5UkZaWNEOuoXQFl+Dyza2k4id34tf7i+ury9uFhe3kxT6S0zhcSenuKHpc9unkDZHtnJj4hyBQSUMU05Z5ogLxnVpPAcFWNWHfrBab/oR1BKbWruaIUJ24cuSWSlqRr5RMrsDo8wELvdzj2Tla2N4SQyBq6Flbk5ATKIunZUqD+Imch3DKpM/KT4GpB9daHcLnZWguKmkZ8o2+eUbyUA0lmmSWgnQZEUz1eiP4IXvB/7XiRWKh1ziZXeqOSerKQq2FlJaxSQva6ZUUzPDtWZSaCBbcZQaZwfowxicWuU4BncxtCFtC8klP/hLENMNpP0fg8LyXqWedGr9OzU34bODM+w2sae77ZpGf1ZUiivjWKmtGa4W5nTkiGCD5BquiNvxar2iH7k8udaxy0VbrCn2XTspnnqMYT3kdvfDt67o2mVoqcBute5ayrE4+BlCHjeYurgfajzxh524ogQeEhxNipHyet7vqGbS3AkxV3au6nNh7Ceen8NV2DNX2/ucrnFtVDqDuq6Yw5qzyoHJB1o65lzjADz3DuzEb9b+Hz0rPhf2XMryTc+R+f+ew2bOXv4CAAD//wMAhfkcyD0FAAA=", "base64"));
  res.end();

  return __filename;
};
