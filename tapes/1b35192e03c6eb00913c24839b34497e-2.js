var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses.. : 202 6940us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses.. : 200 4730us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTQWvcMBCF7/kVwtfuBMkayfIeQy85BZr2VHoYSeONwbEXW24IYf97ZW9NoduF0kYHgfTmPYZPo7cbIYrjOASeprY/PCZK88RTIfbiq3jLYpbbuBwLZZyhuo4gPVpA5zXUpEtAaWSjpK7JqmJ3tvT0zKvpvheBEnXDIadvauQpjO0xtUO/Ft1xFre6maMY28NTEv3wsjmeOVHM+lJ+7ipfhpEpcfyYtzWmlKUEWYFWn6Xea7NHc4tWfZB5/QzKrvkYr7lUtqi9sbfalH923b1+mXi8PwPxMkOwTIClM2Bq1OCkUeAtYkmNQVvLYg045f20+40nuVhiFRywowaQlAXnVQWytlg5q1lrvOD50IthjDxeQ/mwiBx3ws8LwCReOQn6Tm1HvuP/x4nu73Feuq7DcL4pHQULFEIENJUB1zQE2uapk56VM5fD9YkDdR3HazA2XVAfxdy/IwaN/4Jhc/3CIL4tCUUa8ujnbvPTrl9P35x+AAAA//8DAN5xGM+ZAwAA", "base64"));
  res.end();

  return __filename;
};
