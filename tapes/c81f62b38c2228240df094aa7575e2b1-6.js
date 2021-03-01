var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
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
 * referer: http://localhost:3001/cr/courses?nreserves=0&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/departments.. : 200 4522us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPWvDMBCG9/wK4bVROdnyhzyWdsjQpR9T6XC5u8QGWza2MoSQ/17HaUtpKTR0OaRXel7Egw4LpSKWHofQig9jpEr1og5TOuU1n7aR2ZAzJraaOEZtNyjaoVhtIckKLsAVMUfLM+KxlRm6x1BJi6Gm8eOMZaSh7kPd+fnKylOz49pv1boLlep3gyj0rLDvm1pYTXT1CbcSkDHgiTw/bwppEAzCt9OYG2OIjYZEg3kCU6ZQpuk1JHAFUAK8N03YrucLsJk6TvO4/C4mzbLCGtKpIdGWLWlEcBoEY7MGcGDxh5i7SXWlHqkWT/IHN1vpmm67X6pewjAvZ0k9NiidD3Pyf0mxuUCSyUtblCa/Lmz2C3azfx5lWJ09beyamDPQ6KzVaeJS7SghnWCOBXNuieWLZvV6aotCF7B5EOoGnr9lvDi+AQAA//8DABogL96uAgAA", "base64"));
  res.end();

  return __filename;
};
