var path = require("path");

/**
 * GET /configurations/entries?query=(module=ORG and configName=localeSettings)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjJlNjMxOWI5LTFmZWEtNTQxZC05MWYwLWQxN2MwODdlZGJkNSIsImlhdCI6MTU5Mzc0Mzk4MCwidGVuYW50IjoiZGlrdSJ9.5_DoxBQWjfNC8vC1SXXnZ5ezBn1Ko65ahXmdG7XdneE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 02:39:46 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/configurations/entries.. : 202 610407us, GET mod-configuration-5.4.0 http://10.36.1.169:9131/configurations/entries.. : 200 208718us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//", "base64"));
  res.write(new Buffer("UlBQSs7PS8tML1ayUojmAgAAAP//lJDPSsRADMbfJVc7OtNpnW1vyoJ4WcHagzAg6SSFYv/IOFXW0nd3ursPoDkEkvzyfSELdAQlGNc4l5lWcC4zkZFSAhVqoY0mlrsiTltIYJho7jnyT88PsTwLHXDYWv3ksOeKQ+jGKJ4Aj9j0HNWDnzmBL+znjVvsBbVQ2giJurKQWAjdwD/TeG7fDew7hzcH/n57nfz7iXCz9zy644moq72FdbuJAxIGhHIB5xkD0z6m6JTKVApphExfpC5zXWb6OpX6SsbYrj/D98f6k/3j9oWUb7UqmkKollHkmSJRqFYKUsbJnWFqKI+L8wf93eUC/9dlXX8BAAD//4rVAcVVSX5JYk5QanJ+UQoowgx1uAAAAAD//1JQKkotLs0p8cxLyweKVKMpMdRRSktMTi0BMqNjdZRSMhPT8/KLSzKTwQK1XLUAAAAA//8DAANhbjwDAgAA", "base64"));
  res.end();

  return __filename;
};
