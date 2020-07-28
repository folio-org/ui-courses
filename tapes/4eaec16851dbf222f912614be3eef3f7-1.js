var path = require("path");

/**
 * OPTIONS /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/instructors/8089de9c-52b1-4ea4-bfb7-17341931e782
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * access-control-request-method: DELETE
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * access-control-request-headers: x-okapi-tenant,x-okapi-token
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:00 GMT");
  res.setHeader("content-length", "0");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "PUT,PATCH,DELETE,GET,POST");
  res.setHeader("access-control-allow-headers", "content-type,X-Okapi-Tenant,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
