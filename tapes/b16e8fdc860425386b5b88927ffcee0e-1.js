var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 244
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courselistings : 202 31109us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings : 201 4929us");
  res.setHeader("location", "6299e969-9c44-4a6a-8c3f-501037a68bdf");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTRu07DMBQG4J2niLLCQcd3OxsVCxNLmRCDYx+joLapHFdqVfXdSZpUsHbxcH59/n05P1RV3cW6aqpac+fIaQcuSAnSaw82iAQKGQrjtW1jqp8mkOm7G0r2+W2W+WXFkM0ZHQvlnd8s0fFftOmDL12/W6IUopaBGGjnFEibEKxEAutS8pxbK8wCxx23N+QM49xJ4OOZQMpkwKLWwJn25BQGrsOMQn/IA61Pe1qoY0qitC0I7SxITgG8Ch5CCtQmlIROzrTbjbc7hNLn9/aHQhkm/1l9XcMtFR998dPsPA6mqky+UHwdl2sTR84AOTC+ZqZRvBHsWWn7iNggXiv+0Or0MdDtIY0RhpiKYLDVoKJC8GL8giRNbB1LnAVz84d9vL90QfeXjvzycPkFAAD//wMAF6qlBy8CAAA=", "base64"));
  res.end();

  return __filename;
};
