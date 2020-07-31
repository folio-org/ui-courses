var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:39:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/coursetypes.. : 202 9533us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/coursetypes.. : 200 4784us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTO0/DMBCAd36FlZUenGM7TTJWLF1AQjAhBj/OIlJrR0k6VFX/O05KhUQpD4GHk3y+73T6dN5dMJbZuOl6eti21GesZk9sl7Ip37jxmlVcSZSlAVFUJcicLGhlNVhvyXiUhJXMZgck6DVN0DKwlro+huOLo952TTs0KTUW3EYWw6oJxGxctzFQGI6laxq004Me6w6jjEN2pAdyNylMfI45As5B8AcUtVC1VFcqF5eYzlujRG1ad47ieS2qWuDVXOLn1GL72FO3PFgwo4KCdBJQKlCVFFCi4mAKKXPtlSwqzKYG+xT3sw8SvcJCEJVgeGlBYm7AoK2AG/SVcKWaozmReDcJ+sJgE+Bg+T8lIv+5xFPqvAIUCimfc3DOpD1y5EEXugQtrJceuTHenVFw/e06LeLwclwoHdxnZvq/q+G/2K9T6l0Nex47ZEMc9OqebOzc9PPExf4VAAD//wMAqpeo7ZEDAAA=", "base64"));
  res.end();

  return __filename;
};
