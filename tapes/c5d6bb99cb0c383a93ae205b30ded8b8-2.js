var path = require("path");

/**
 * OPTIONS /loan-types?limit=500
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: * / *
 * access-control-request-method: GET
 * access-control-request-headers: content-type,x-okapi-tenant,x-okapi-token
 * origin: http://localhost:3001
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * sec-fetch-mode: cors
 * sec-fetch-site: same-site
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:45 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "PUT,PATCH,DELETE,GET,POST");
  res.setHeader("access-control-allow-headers", "content-type,X-Okapi-Tenant,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
