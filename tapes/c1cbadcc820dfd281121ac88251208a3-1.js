var path = require("path");

/**
 * GET /bl-users/_self
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: * / *
 * access-control-request-method: GET
 * access-control-request-headers: content-type,x-okapi-tenant,x-okapi-token
 * origin: http://localhost:3001
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * sec-fetch-mode: cors
 * sec-fetch-site: same-site
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 401;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:15 GMT");
  res.setHeader("content-type", "text/plain");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/_/version : 403 52328us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("SW52YWxpZCB0b2tlbm==", "base64"));
  res.end();

  return __filename;
};
