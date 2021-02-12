var path = require("path");

/**
 * GET /users?query=(id=="7737e15d-70b6-5d50-a33f-f47db91f21c7")
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

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-users-17.3.0-SNAPSHOT.158 http://10.36.1.253:9132/users.. : 200 2772us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQKi1OLSpWslKI5gIAAAD//w==", "base64"));
  res.write(new Buffer("lFHNS8MwFP9fcnUpSdomaU9OhlLECXM7ichr8yrF9YMslY2x/93XKR48iLuE5OX3yTue7x20yHLmmvfxFVzbdGzGGkcTY2KDMnXciFLz1KWCQxzXvE6MKzNZK1kZwkIVmg9SCH7EGRsg+L678/04kESsbQLGaq61kTxR2nKLTvDMlVZhWYEWJUk4HMCHFrtAwZ5fSMX3+8Nt779fFLjvYMvyI9vCLiy/Es8XD8WyeFqv5uvHFanUjf/5WxT3GxphCw3R2LnX9VQxwj20wxaj3r9N4Z3zuNvh2fc0Y5VHCOgWdBBNCSW5UFyqtYhzFedpGhmbXQmRC0HscXAXoFsMQHiYavzpI/Mki2yiL/JJf6NvDhvabvHvTZ5OnwAAAP//", "base64"));
  res.write(new Buffer("itUBpY+S/JLEnKDU5PyiFFAyMdThAgAAAP//UlAChlFpTolnXlo+UKQaTYkhMOgTk1NhcZeSmZiel19ckpkMCVSuWgAAAAD//wMAkwpOh3cCAAA=", "base64"));
  res.end();

  return __filename;
};
