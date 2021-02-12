var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/copyrightstatuses.. : 202 37297us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/copyrightstatuses.. : 200 2443us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUS2vcMBRG9/kVYraNgp6WNLtkuukmhKZdlS6uXo2pH4OtCQxh/nuvPU0oSU3JdDYC6/pcpMOn+3RByCr02/1Q/3go9wXKbkzjiqzJN/KENazWcfpcMdDOxhCokCZTFY2iVilFHQQNNruowK4uj0gHbZqhzYbc7J93YxrDUG9L3XfH4pCg1I+JbPq27buRQClD7XfTD6SpQ+rG9My2qUCEAhN4PNd07qlBih9xmRsKJjhlgnLxhcm1YGthriqpPjC2Zux3J8R22/gObKYOuB4uXxnx1ievWKYu+4RGNBoJvqIs8opVRjkB/u9G6O2G3l+f5KXrOxpwPw2hhoaMDzAkCk39M51PmdInKXvBlpVlX9msnadOMVSmKqDWyYgLq1zk2lsm3yi723m8Gol9C3W3JO22Jy8xRmEEmub/RWhxkogXbFkEcKsrFTK13koUEfEhBW2pN05mHmU0Wi1m5xzBOVtYtDvNkfunI6a04NIwam2FYeERgz69NI3zxrucjBXwxtF105A5BCMZ0piGxxSXdN1BGVBMC3uUU+b4nC05VfUOK9wgsxb8Sqol7Gb/FS/z6SjGGGkS15EahuNGR80oSJlpViZ6x7PgwfzhlXyfuq1KX6D5nEI/xHnA64vDLwAAAP//AwC3+yjx/gUAAA==", "base64"));
  res.end();

  return __filename;
};
