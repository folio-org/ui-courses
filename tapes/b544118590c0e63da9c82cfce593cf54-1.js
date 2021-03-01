var path = require("path");

/**
 * POST /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 143
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves : 202 15903us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves : 201 38773us");
  res.setHeader("location", "1569d16e-f5ae-4c71-a65a-29dca3335d34");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTTU/bQBCG7/yKVS49lEH7/ZEbaVVBiyiq6KGqetiPWbDq2JHtqIoQ/70bxw6BGzlY0e48M++8M/t0RsiiSguyJAumtEtMI2TlEWQ0DLxWHrhL0QshVBJycb4HYrvteryp+qFqHq4PtHGG8qA40GQKbdFDMJjBSzSSW5cppQe6GnA9QUlnE1nw4LkwILVCcBITZGHQsRC1DGkuuakwXRd0Dz6Vo3IYfBfbhGMqqYSzRlMlhRUjUwJK+KbtfLe7aaMfqraZ6uaYtIzIQDunithMwUqKUGRmz7m1wrA5xwa7tW+wGd7kUCJmp3SGyFIGyWgAG0rX3GTDeIzeRHrUUQ31Qeaqq9IDDuRr22D/oScrH3ZLMjwiSZXvKuxnJLbN0FVhO7Rdvyd/T02Xq8avD8m+VFinMoJzcoU1NhP6Gr4twfe7DU6qeXAyasEgR+9K546DN4ICFYiKl/aR+8WY5pn8mR3Yhro69P5GyXjTP2I35r6sc4eJXF6Qb027yS9yNrWPB8W3+I/8aru/L3fJD/g9370useCU6bcyoq/r2+06TNXufpRh64trqawlKyMdGaGjfZvdGPap/CHHhaiafvBNnN0wOSSVrATNEwNZnAEXpQIdAzPCORum/TtBr7rpvewP6MvvWPqxHYfSz7sWTDA0MwjWWZCOS/DOMaAoQxkED0HlfavP456fbKxvTuaGNgjGvAYReFEqcpkb1w5ScoLRGHiieHgpaxx8MdWfvJPYYXE5fS6fyd2Sgwqg7J6ZpVJLqi4kVR8pXdLjzk7Qavezx27uRYaYkqalAymhvDhV/BIRhDfepmRkTDjz2016f9EJen/RvYFnz/8BAAD//wMAVsXuFc8EAAA=", "base64"));
  res.end();

  return __filename;
};
