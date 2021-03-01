var path = require("path");

/**
 * GET /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves.. : 200 8230us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWS2/bRhC++1cQvOTQrL3vh2+2gyJuHMdIk0NQ5LCP2ZgtRRIklVYI8t87EimZahqj7qWX6kCIu/vN45tvZvnlpCjKHgboP8NQFufFL8UXXMLFKm1fS6a0S0wDycoDkdEw4rXyhLsUvRBCJSHL5xMktut+gJtqGKvm0/WEN85QHhQnNBnEW/AkGMjESzCSW5cppXt8NcJqhiWdTWTBE8+FIVIrIE5CIlkYcCxELUN6cNtVkK4RvIVO4eNy8H1sE+zMSSWcNZoqKayYcXgEIV3b+35z00Y/Vm0ze88xaRmBEe2cwqAzJVZSIBhu9pxbKwx7xMqb8CvEcRnMA59PMo2wxq+mFF77qiluqrB1tDxwyPHV+7Orq7MX12evl9vVcBHH6vPuyNivYbnVYKHG9SJvDAQojci6YpbIIB0JQBmhWthEvfRRmSPfftWthxmsecxGB0Ni9JhZEoI4zgyBlCXHjL2Vdgmup1xmtErGWiqARE/l1jUGAag4HrUIjksMKCzRXV+tEP0zCreKcNdWzY7wUnhJreKJSJfxkTInnmVHNHAtmdeonry0MywMXKe5Bf6ZleLjbObrQQod9CvfQDP+RVBKxOyUziSylIlkNBAbsBW4yYZxJMxEWn7fymOCepLppaAumgb+eFxJF/8r6b9SEvJZT9W47Kv0Ccbip7aB4dlQXPqwwQrcQ5Eq31c4tg+g2DZjX4X12PZHw/y48D9WUCec0M+Ll1BDcyyBg4FbPP5u08HMKg9OIoGM5Ogdzi2HeRhBCRINiuPwAu7LfRbFxwctr0NdTSr+JqLd3nAP/aTHOveQiovT4lXTdkfUdrWPU+y38Hvxoe1/W+4mP8KbfHfsqOSU6b8LKPq6vl2vwuz17i3eCvr0Wipri0sjXbEDLijtNruDV/inWNwdW837Ju75MTkklawkmidGJHJFXJSK6BiYEc7ZcLiwFuCX/dzF2wX68FsEcN/uirXvjRxMMDQzEqzDxkI9E+8cNhbIgOXhIag8pT1raXk9+WZRUbBBMFQgEYFjxGKrTK4dSckJRmPgiUL5PRvfTqT9PHqC2aUor3bfDsXhU+QohRWMHqvsj/zFHrDw6QU+5oKjPyoIZe+YOVfqnKpTSdUPlJ7TxXCdYZeb9+hpT6oMMSVNkUopCX4rKCyeiER4421KRsa0iHndpX/jeIY93fFExclBxuXYjr5+C7HtpzHDTr7+CQAA//8=", "base64"));
  res.write(new Buffer("AwCoiw3EyAkAAA==", "base64"));
  res.end();

  return __filename;
};
