var path = require("path");

/**
 * GET /item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/574e947b-5cdd-4876-b477-45ff145a5959/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 202 25974us, GET mod-inventory-storage-19.3.0-SNAPSHOT.453 http://10.36.1.132:9168/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 200 2302us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxUy5LbNhC8+ytYusaQ8CQA3TZrp8qVjQ+JcnLlMAAGK5ZJgkVSu1G5/O8BH9LKj1yWBxVFdvcMeprz5U1RbKqwKfbFhlEaGHWR8EhLIgEoccgUoc4qx4ONFsXm7UQ49iulGrGh14up9XWqQ9U+Dn+iT334sEBRxFgyIYizwIkM0hNg3pLgmSl1kCEyu9Bj6hvsP4Rh4n0q/pkfOuh9CjhL2anYgp0aeMAnrO+hrj+eGof9DDn8rhhVW2MMU8W2uFOm4JTK4rdD8cf7u3fvFzbGiH6snvCFfZ+aLrXYjnP1LxmVcf4V4pk2njtcT68YZ1qAJi5QS6SlSJzWgjAdjIjclSLiJrO+Ln21p+wAjFVqZ/bSrT/2qU11ejzfPDwj9PfQXaAXu9o04jf++ar3p3qW/Pj9u2GE8XR73haaxem7J6hqcPVNbw2M2FdQH14Ox0BJJwUjHGUkUvFArAfMP4hl6S0Yy5duO+wbmNx9SNDeKHBnpS+zQvSQ7cl4AlpQQgWi4jaPietFIc+7Sz305+8VUBrUbHI0CiJ9vgMbDeHCSOUcZxTkDz342Y9VIfpQSo+MlNaq3EOkxMg8J5PLA+fGCM1+6OGVCtfgvV6hzgI5D5W/8x6HdZ7r/E59Ncsdx7Hb73bPz8/bOvntY3ra5XKh6ndj8jv0VUc1M7scXk05ldxuj2NTX+JbV+3nA/47zlIP+c9QwDUPK+aShuGvLsvFyr+E9jDhihQLn9px/qBWTndydeWnFP4cV6S2Pl/APS6hHY5Vt5okctaoyhHhOH1LThpigXpCS1GGsnQ2OjHn9Sbe1TDm3ur7vEKui2XjlC2Nt0h8CD7nVpfE5h1HDJYUMBhHQ664iDQ4QoARbrdCj/n04R2sB+HZQ0I14eZAxV7IvaBbw/Uv1201TaYL/8dhbK/oPu8VrvnPOL+e/x6mtbhuU2d8qRVxXlOiHBhiqHDEuegAAg0O7OzBm6//AQAA//8DACh4J6fjBQAA", "base64"));
  res.end();

  return __filename;
};
