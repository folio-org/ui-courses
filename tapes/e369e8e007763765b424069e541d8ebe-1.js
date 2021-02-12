var path = require("path");

/**
 * POST /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 135
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:46 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("location", "0b285e71-198c-4c4c-a93d-2c3a30aec74e");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves : 201 35170us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANRUTXPbNhS851dgdI0g4YsEoJvbJI2nceqDmkumhwfgwcaUIjUgVdeT8X8PKJGW4kkPmZzKg0YD7O57wD7sl1eELFJYkA1ZMCdMhZpTbo2nyitPwcpAhZcgGaDXChfLkeC7Q+7xQ+qH1N5dn9i1sBZtban1SlEFNVDjZaQV40xqqI0L8cROA+4mEmcscOYiFZHVhQSMOuQVZc5WTgQbLcq55D5huC7UkfilLJVFB9l3AY9SlpXviC0bBbbvMuTHD52HIXXtVC/6UCuPnNbWVlSZyKhRDKmxMYIQxkjNZ4095h202A4/oTGkoTm1d0V6LHJD8uQBHdnntMM8w3zXDjm5w9DlfkR/ng5YtlrYTQLt0LWpOyzJbznddTn1E/tb/vZxj7MjyGxQOlBboaAqmOKI5I5GrbUzGOtg+H9qbPHf4ajyXcTH0tVFJeGs8rXkNHqw5UqsoKAlo0wiVqLcCwpYHGWelt852idoyXvIO2ywXZJ3Gdq//5dnI3/No3NwTToNzQs7jzv9fbF+1L653pLbjP2FlfsG/OlWfoWdyync4ZLcQN+vyBkUYMA/4u23VRZeMKbOoNxNo3f7XPNFmx6a5uNh56Zutr9XnFUrYwyvyIpcVYaMiuTdlty8vXrzdp7WQ05H/P0w7Dfr9cPDw6rp/Oqu+2ddugkpr4fOr9GnPdPcrIuGZoIpYVf3w66ZVbA9lBdw7v6s3py6Adcg6SIZrSmvsCdd2zzOqNT2A7R+NqlyUWqG5SV6D2UcrKdGoKIV1wycAAbSvqS+z1PujQvs+RNiBt53TSj51k81UMZYcympszCO3BiP3FsaPDe1DipEbscbfjrm1UUCQXs5TqhMyVhJuY6yhGz5BzYaKqRRlXOCMzh5uNjhAMVouMg7n7E4H96Un5MYE5wyQbnYcr2pxEZVK1ub14xtzlk4kX55/LPHPHWhtdQlZwPVzNW0ChWjIEtYx/KknOVRcK+fDdmHHy86kX686HiBr56+AgAA//8DAPTveoOXBgAA", "base64"));
  res.end();

  return __filename;
};
