var path = require("path");

/**
 * OPTIONS /coursereserves/courses?limit=100&query=(departmentId=="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId==("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094") and courseListing.termId=="cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b") sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:08 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "PUT,PATCH,DELETE,GET,POST");
  res.setHeader("access-control-allow-headers", "content-type,X-Okapi-Tenant,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
