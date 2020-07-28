var path = require("path");

/**
 * OPTIONS /users?query=(id=="e3b8c675-bc70-5ba8-803b-bbfbaad0dba9")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * access-control-request-method: GET
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * access-control-request-headers: content-type,x-okapi-tenant,x-okapi-token
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:34 GMT");
  res.setHeader("content-length", "0");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "PUT,PATCH,DELETE,GET,POST");
  res.setHeader("access-control-allow-headers", "content-type,X-Okapi-Tenant,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
