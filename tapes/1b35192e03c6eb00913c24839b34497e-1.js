var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:18 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/processingstatuses.. : 200 4174us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS2vkMBCE7/kVwtdMh5b1sOzjkktOgX2clj201e1gcOzBlgMhzH9fjWeHZXcyh31cBFKpiuZT6e1GqWI/T1GWpR+fPiVK6yJLoRr1Vb1lMcs9H7eFdsFRXTNgaz3Y0BqoyZRg0WGn0dTkdbE7WUZ6ls30MKpIiYbpKaefVZYlzv0+9dO4XfooUfoXYdWuSY1TUq+SzrZV+Gx7lkScT4+e02j5MM5CSfg+L1tWiaUGNID6M+rGYePcHVp7i9gg/kjKtnXP12y6amxoSn9nK7xi+/D6ZZH54cSls21k9ghUWwvO1A7qaCIYqigwVzayFFvAIa+H3W9Y853SVjGABOrAkvYQWl0B1t5WwRsxxl5gfRzVNLPM14g+HkXh3S9E6YX6gdpB/h2o038A9B3bdRyh7cpA0QPFyGBd5SB0HYHxuX7Yig7usmW5QDQMP5vyTsE2XdHIah3/Jwj/dyD8BQj17RhRpCnXPs+bn3f7hebm8B0AAP//AwAgdGngpAMAAA==", "base64"));
  res.end();

  return __filename;
};
