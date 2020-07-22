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
 * referer: http://localhost:3001/cr/reserves/cf3e8181-67c3-4653-9eec-db2c54ed49f5/b5d06488-418f-4c65-a440-4f2613619e6d/5ad0e9c4-586c-4365-a55b-f2042677d606/7212ba6a-8dcf-45a1-be9a-ffaa847c4423/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves/5ad0e9c4-586c-4365-a55b-f2042677d606 : 202 15725us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves/5ad0e9c4-586c-4365-a55b-f2042677d606 : 200 111874us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/bRhC951csdK1X2k/urm+unbRG7MRolF6KHPZj1mZLkQJJ2TGM/PcORclUHAeI0VOLSgBB7O6bNzNvZrgPrwiZlWlGjslM+8TARUW1LSJVstDUax1oFkyJwphUsGJ2NABis2k7uCi7vqyvz0d0zBIst5wWJkqqCi2pA4g0BRG1gqRc1iO67GG1AxnBRfCFpzbFTJX2nAZwnubsvVUmKiXknnJdQjpH6AB8wCVcDL6NTYKtKc7wvz2LG3hs3bS+vb9oou/Lpt7x5ZgKFQGddE5TZTOjVjGg1iGjENZK830b78OfEPuJfsrcC8wiqPar0eVLX9bkogwDybT9GNHbj4vT08XZ+eJy2iy7k9iXt9sDfbuBaaNGMfrNQazoADAWPYrILVVBOcwt45QV0ibmlY/aHLD61XrT7aCFiNkUwdAYPcaTJGopuKGQshIYJ2pjJ2g1RrDD6mSsZRJo9EwNtOgAeKAiFjI4odCZMGHXbblC7Adob8sIV01ZbxM8k14xq0WiWDb4SFlQz7OjBYhCcV+A43my0h3Az1M3WPjjB22QT1sjX3air6Fd+Rrq/h8Uzjc2/i+c/37hYA6rMfsnpAPUvy8juYNABkeh3ddGbOq+LcOmb9od28M36p7UfVOXzeaI/NKW101bdocaP+KX92vYpx2YS8ok6jQIdNjiQJUcJ7cxJljIRbL8uzaW8HlM3bMn3qFXB0wiOIV6cJqjd1iwDlNjJKOoG2iBVQvCz3aJeSa0331NfvXtCiqoj8ib1td//StjI5/2vb4JVTl2+RM5tzvdDUq/7djzJblqoTuQcl35OGbl1K9CW6ZrOCKXvuvmZDqUfA/v89XXLLMoGFPTobbZld7VI+cTN6OvqnebVdh5s3yrOdNzay3XZE5OtCWDRfJmSS5fn5y93lfrpi2352/6fn28WNzd3c2rJs6vm9sFepPKdtE3cQGxXDPD7QJtGDZcFtz8pl9VU82v78c48YWI/TLUG2yMKaiJtBqd9KEC0mQyKIbTtCNNXe3H3XZs+TrutdMhS8MAxydOHqwSF6kVgFcZbpgPwjMv3R5601QJ7y37mQUy54LjpArODwWmInZ7dDRFbguTsP25G/K57fTDW4GvD4sHlAXDJeUm4/Un4pt32VIhrdIhCI6Dc/a8haefh/3H4YdNHnbYb+CH4EjbNKvJ6xX0HkvJH5DEFrC20hk+RjZUjjJDhVhyeSzdsVBzycVPDH+PSo6Yn+8/4uDcBe50jkqzQAULgmqWDPUyYfpDkEr5DE7LR2nX6cWcO8zLOYfgX335GwAA//8DAEV38ObhCgAA", "base64"));
  res.end();

  return __filename;
};
