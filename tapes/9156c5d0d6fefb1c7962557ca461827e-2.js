var path = require("path");

/**
 * GET /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves/5ad0e9c4-586c-4365-a55b-f2042677d606
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves/5ad0e9c4-586c-4365-a55b-f2042677d606 : 202 6573us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves/5ad0e9c4-586c-4365-a55b-f2042677d606 : 200 28070us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/jNhC+91cQBnpqaJMUKZK5ZZN9BLt5YNfbHoo9DB9K1JUlQ5KTBov8944sy7LzQvZSoEDjQBBMfjPDmW+Gn3/8QsgkDxNySCYKAovWS6pM6qlMUkVBKUczwaRItQ4pSycHHcBXq7qJn/Kmzcur0x7tsyQabjhNtU+oTFVCbYyeBie8kjFIm6kenbdxsQFpwYWDFKgJPqNSAacuWqBZBmCk9lKKpAct68rHpkF/X1poV83GgHGZMOBTCt4HNKAVNQimGLxRzEVuFH/awIX7K/q2M/IDl8csvNoiQkpYxDXoc/RQFDEMCyE2vs6XbV6Ve+sEykBWJdxAXoAr4rB/EVsI0MIYTpflOkIbwwk+1kYEE4wyTYWYs+RQikMpp9qa3xj+bQwharUMr0etQff4vF/nqGmhbh8gJRWbusXyodWUCjYwYpnHcIqV3cmog9pXoQdwhp/huLhtWdVQ332qPHRJGuigjFDGeRq951RyZyg4j3TQLuXMCJFl4VkbDws6lvQnzO4W9eLzH6fvydv5h/MLcnwybtie6ePX2fHx7OR0djEu5s2Rb/Ob9Ya2XsVxocRuaVc7p5UsRsYwDlDcUOmkRfIzjmlNTGAgwSu94xUWyy3tU+EznTpNvQdFZUiw2QTXNIZMCh85No8ZoUXuukRtsCpoY1gSqQcsLrrFACJEKnyaOCskBuNG7LLOF4j9Euub3MfLKi/XKZ4kIJlRAjvEZvgImaDAM0vTKFLJIY2WZ6OVZgd+GprOwp+vtEG+9STdlH0Z6wWUsWwfUCfzIZV4cppaixkxGaMGE0yNxeYVwphEb+n3yMbz1PkJs7vUOYO8JJ/6tL9EnLP/ifNvEQdzWPTZPyJNxPq3uSe30ZEu0FgP3PBV2da5W7VVvfH241F1j8q2KvNqdUDe1/lVVefNbo23+PndMg5pj8wGqQO1KgoM2OCNl3C8WrXWzsQsDYY/a2Me/+5T9+SOc4xqx5NwVmI9OM08WCSsxdToBGd1EqMSyNooYDP2D5442u9Qkg9QL2IRywPyroby+3/ybOTb0OsrV+R9lz8o53qlucbSrzv2dE4uaxQIOwwuwPdZOYaFq/NwFQ/IGTTNlIybusv2Irvc9zLxgjE5bqqrDfUutz4fhNnJg/PVwm2imX9UnKmpMYYrMiVHypDOInk3J2dvj07eDmxd1fl6/3XbLg9ns9vb22lR+elVdTPDaEJez9rKz6LPl0xzM0MbmnVqzk6v20Uxcn55158TX4gYvo7lChtjPNTotOiD7BQMqTLSVQynaUOqshjG3XpsQemH2imXJZpFHJ84eZAl1lMjImpNrhk4AQwSO0CvqyKgThtmVkyyLOU4qZyFjmDSY7d7S4PnJtUB25/byVbD7OgCKHfJE6WJmieU6wz1qcc3sJmhIjFSOSc4Ds7J0xaek4qvNrkvFaE7HKmrajFG3ZUAZ8l1O6/Bf8f1HW8QQt4VAYovGAa+NF+bGPbvidHAnjzOXGoyZR213aUlZae0bRLwwVIbuHI4zydPW3jhTny90d2D9z1CQrXAy3GngR5I5fOKbCMhgP9FMW5+Sie/UimnWu4r5Vdq5S1uA7vfv1WqFopLuIrNaTmoX5XqR6tDxaQYNYjHnsHR0S33MvXXrUCBuwUuvoEm75dwZMSaXK1wPt1W9feRN48T8lIyeHKY2EMhpwkXu8kYMG/uMM56wx2rMi/xFw9qfCeoYkFTSAK2rXOJlJBFq7bceSGRvc9ETBlTez43mJ/32R3+l/t/AAAA//8DAJmCjWK6DgAA", "base64"));
  res.end();

  return __filename;
};
