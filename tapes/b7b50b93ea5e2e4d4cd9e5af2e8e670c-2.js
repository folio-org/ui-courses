var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?nreserves=0&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 9227us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 97299us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("WNZtCMYYUCTpmLdZx9bBmCCCYlMxyYPeVf9+1rkDLyKgxCpNpDNY6lzhInBUN/DAdH74g4Urd+vqiFl38Rb2d/j/PvXi7NSLo6n/OmdTZR7txUET6+wGnk25kOrY2fStK7oz2PlnU5afczZl+f7ZdJXXi6ZqXPkPCFW9QgH17P6/AAAA//8DAN2n/3QgOAAA", "base64"));
  res.end();

  return __filename;
};
