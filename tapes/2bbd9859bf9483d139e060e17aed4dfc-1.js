var path = require("path");

/**
 * OPTIONS /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: * / *
 * access-control-request-method: GET
 * access-control-request-headers: content-type,x-okapi-tenant,x-okapi-token
 * origin: http://localhost:3001
 * sec-fetch-mode: cors
 * sec-fetch-site: same-site
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/83d1901e-9727-4ee1-8fb1-35045e9230b2/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:56 GMT");
  res.setHeader("content-length", "0");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "PUT,PATCH,DELETE,GET,POST");
  res.setHeader("access-control-allow-headers", "content-type,X-Okapi-Tenant,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
