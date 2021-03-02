var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/departments.. : 200 3321us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSsU7DMBCGd57CykpdnRM7iTMiGDqwQJkQw9V3oZESJ0rcoar67rgpFRLQAbGc5N/3/bI++XAjREI84Bg69mFKRCVexSGmMW/odEyUyfNSKyeNciw1aScRwUpgTNUGwILGZHFGPHY8Qw+xcSueXcPe8XS5Jp7c2Ayh6f28td6ymMKO9qKvRYiHoUXP4bLecUDCgKfd85ti6EbGwHQfx9yRQqokZBLUGlRloDJmGaNbgArgsyliu4GuYaqoTF4pWBZlfgW7279MPK7OQmq9cUQ5SLRaS5NZI63LnMywwJKo0I44mQuOcR4X333WziqVaukoRalrZGmRtdSQ5SWVYMuUfvh8xKinw9C4qzJX3rU7avy72PTR/bAbWaAngcPQNkwi0tvp/2oz+IPaX7AvMeLtVJGEPmD7xK4faf5/6c3xAwAA//8DAMK1+X2XAgAA", "base64"));
  res.end();

  return __filename;
};
