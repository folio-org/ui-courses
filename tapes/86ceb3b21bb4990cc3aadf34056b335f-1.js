var path = require("path");

/**
 * POST /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 135
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
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("location", "de1875ec-0821-452f-9e5e-2425e21c8de2");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves : 201 30878us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANRUTZPbKBS851dQvq6xAYEA32bzsZnaTDIHJ5fUHh7wmKEiSy4k7+xUav57kC3FzlT2kNrT+qBywet+Df3ory8IWaSwIBuyCMiNVugpM4JTqUSkFhVSIYVCwb0JKBbLEeC7Q+7xXeqH1N5dn9DaaiacEpQFjVQaBOo0RgoStRTGRsbYCZ0G3E0gzljgzEUqIqupBGDUIVeUOaucCDZarOaW+4ThukBH4NeyVBYdZN8FPFJZNjcoG6Vs32XIj+86D0Pq2qlf9KGWHjmtrVVFZGTUSIa0yIsghDGV5jPHHvMOWmyH/8AxpKE5ybsiPRa6IXnygI7sc9phnst81w45ucPQ5X6s/jwdsGy1sJsI2qFrU3dYkj9yuuty6if0j/jt4x4noTUyG6QO1Bb7qAwGqKm4o1Fr7QzGOhj+rxxb/Gc4svy04n1RddFJOCt9XXEaPdhyJVZQ0BWjrEJUotwLClgcaZ6WPznaJ2jJW8g7bLBdkjcZ2i//y7ORv+bRObgmnYbmmZ3Hnf6+WD9y31xvyW3G/sLKfQP+dCsvYedyCne4JDfQ9ytyLgow4Id4+2OXhReMyXNR7qbRu/3e85lMD03z/rBzk5rtn4oztTLGcEVW5EoZMjKSN1ty8/rq1et5Wg85Hevvh2G/Wa8fHh5WTedXd93f66ImpLweOr9Gn/ZMc7MuHCUZmBR2dT/smpkF20N5AWf1Z/bmpAZcg6SLZLSmvMKedG3zOFelth+g9bNJysVKMywv0Xso42A9NQIlVVwzcAIYVPY59G2ecm9cYN9/QsyF910TSr71Uw+sYqx5VVFnYRw56Slwb2nw3NQ6yBC5HW/46ZhXFwkE7eU4YYlGzSvKdayo9OUf2GioqIxUzgnO4OThYocDFKPhIu98xuJ8eFU+JzJWgppVlPEt1xulNqxeKSV/Y2xzzsIJ9Pvjxx7znGHS+RBqVnrLcktVCTLrK08r0GBC0NKXVJ0N2YdfbzqBfr3peIEvnr4BAAD//wMA4W8GYZcGAAA=", "base64"));
  res.end();

  return __filename;
};
