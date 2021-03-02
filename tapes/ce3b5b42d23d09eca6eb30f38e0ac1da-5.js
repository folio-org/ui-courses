var path = require("path");

/**
 * GET /users?query=id==f4bcdd60-a944-5395-9c3c-3a7a8dd74cde
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
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
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-users-17.3.0-SNAPSHOT.159 http://10.36.1.217:9134/users.. : 200 2611us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQKi1OLSpWslKI5gIAAAD//w==", "base64"));
  res.write(new Buffer("lFHNS8MwFP9fcnUpaZumaU9OhlLECXM7ichr3psU1w+yVDbG/nffpnjwIO4SkpffJ+9wvnfQkigFNu/jK2DbdGIiGuTJWtcO0SgJhdYyS4tMFi51MoUcLGKuHRJjwYXmgxWCH2kiBgi+7+58Pw4skRqrIbdGGpPHUifGSkuoZIG1Tah2YFTNEkgD+NBSFzjY8wur+H63v+3994sD9x1sRHkQG9iG+Vfi6eyhmldPy8V0+bhglXXjf/5m1f2KR9RCwzRx7nV9qhjRDtphQ1Hv307hET1tt3T2PU6E8wSBcMYH0xKVxFKlUsVLFZeZLrM8yhN9pVSpFLPHAS9AtxSA8XCq8adPwvjIFuYin/g3+ma/4u1W/97k8fgJAAD//4rVAaWPkvySxJyg1OT8ohRQMjHU4QIAAAD//1JQAoZRaU6JZ15aPlCkGk2JITDoE5NTYXGXkpmYnpdfXJKZDAlUrloAAAAA//8=", "base64"));
  res.write(new Buffer("AwAz7fw6dwIAAA==", "base64"));
  res.end();

  return __filename;
};
