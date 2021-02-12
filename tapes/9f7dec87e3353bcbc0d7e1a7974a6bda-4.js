var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:55:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/copyrightstatuses.. : 200 3212us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyVy27bMBBF9/kKwtuGAcU3vXPcLroJgqZdFV0MX7YQWTQkOoAR5N9L2XkAcVQggtENAYlzLzlnhuTjBUIzl7b7rl6t812GvOtDP0Nz9Bs9lrkyW/vhcwbOeRelxQwsw1xogcFGiUEHYypDK6Po7PIoaWETDqLFYoG+NX14qEOHmtqFtg8vQT70rqu3uU7tMdbl+iE0e2Sb5O7rdoXyOqBtl1Zd6HuUIurdOjXQ9et6+2KyCRk8ZBgcjvsd8ukC5OC/luHgTAmtMKG4oj8rNRdiTvQVZeoLIXNCnp3eZNf7X33ovh+zVoqpUAmPFbESCy8IBsYijlx5a6pIK6feHHZbP2XhZ9nnFz4YPJXx6fJdtQgXtGKKYK1lwLzyAUO0AQsB2poYlKZwWq2mQYc+6FFBHrqH4MeKdQu5Sy3awB61KaOhgxBkBE0ztTKEzSmZU3UlpRwB9A+u7IpK8j+4gjDaO4dLGSPmXnGsOefYgCtko/Ec9AnX5RJd78dILgckpfHRMm02qe0LxtzVdjcEvD8y05ky/gmmH8jGiUClheQuYm11uRe4LzCc0Ngqw2LlmVeCf0wE3ywnQWlTi135HzpXQ3M+RsJMYvQqG2dktQ2Wk4jNcAa5F6VrXGk/4itJpOKGgh1lhO8W58DUr6Erl0BT34fzIeNiErJX2TiyaKWOwlhsOCnIuASsDfNlINL4SlhN2Amy250tqSGfNlC3Y9BuEnp98M52Zwk6rXfoCQj0Z7CY5ZSh+RFc6vzhOZYXT38BAAD//wMAj2HRFKwHAAA=", "base64"));
  res.end();

  return __filename;
};
