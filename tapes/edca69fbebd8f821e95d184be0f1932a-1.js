var path = require("path");

/**
 * GET /configurations/entries?query=(module=COURSES and configName=display)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-configuration-5.7.0-SNAPSHOT.91 http://10.36.1.217:9132/configurations/entries.. : 200 4928us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//", "base64"));
  res.write(new Buffer("UlBQSs7PS8tML1ayUojmAgAAAP//lI+xbsMgEIbfhbWmwgYCZozboUsrNc3m5eAukiVSW8ZUiiK/e7HcPkCWGz599/93dzYgc8xcDtZoDLy13nIFbcOt9cRrVFpID6b1mlXsOmKOVPzu4/x5ej0VtIe9w3XDOKQpwq1g+gYfqUQvc6aK/UDMm3Dv/52euZ71rCogT3EIsFA3jynFIS2E3ZjnRKnf99etmhZAWIC5OwszFR1fyiiZjWhqLiQX9VetnDKuUc+6lk9COCG2C3f7eDsnmt+2by/KB8SD4NAqxbVsNW+DDFyCAYtoVEAqi3nCB2r+7Edr1vUXAAD//4rVAUVKSX5JYk5QanJ+UQooZgx1uAAAAAD//w==", "base64"));
  res.write(new Buffer("UlAqSi0uzSnxzEvLB4pUoykx1FFKS0xOLQEyo2N1gMGamJ6XX1ySmQwWqOWqBQAAAP//", "base64"));
  res.write(new Buffer("AwAokONK7AEAAA==", "base64"));
  res.end();

  return __filename;
};
