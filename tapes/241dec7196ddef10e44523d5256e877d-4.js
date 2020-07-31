var path = require("path");

/**
 * GET /users?query=(id=="b048b6ea-4285-5943-8051-b6442af54690")
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:42:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/users.. : 202 14908us, GET mod-users-17.1.1-SNAPSHOT.140 http://10.36.1.15:9143/users.. : 200 2913us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQKi1OLSpWslKI5gIAAAD//5RR0UrDMBT9l7y6lCxN0rRPToZSxAlzexKR2+VOiktbslQ2xv7d2yo++CAzDyH35pxzz+GexncDHlnBXP3ev4LzdcMmrHbUqYSylUHgSlrNda5SboWe8sooJWGrlckFYWET6w9SiKHHCesghra5C23fkURqrILMGm5MNiUdY7lFJ3juKiux2oARFUk47CBEj00kY88vpBLaw/G2Dd8VGW4b2LHixHawj4svx7P5Q7kon1bL2epxSSrbOvz8zcv7NbXQQ000Nua6HiImeADf7TBpw9tg3rmA+z2Oc88TtgkIEd2cLqJJIQUXGU+nK5EWaV6ILBEmuxJ0iNx37nKwxwgEhyHEn1NMoWVilf3PFP0LfHNc02bLi7d4Pn8CAAD//4rVAaWNkvySxJyg1OT8ohRQEjHU4QIAAAD//w==", "base64"));
  res.write(new Buffer("UlAChk9pTolnXlo+UKQaTYkhMNgTk1Nh8ZaSmZiel19ckpkMCVCuWgAAAAD//wMAsR8W+nMCAAA=", "base64"));
  res.end();

  return __filename;
};
