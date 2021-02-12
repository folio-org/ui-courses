var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
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

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/departments.. : 200 3255us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSu2rDMBSG9zyF8NooHMnyRR5LO2To0stUOhzrHCcG37CVIYS8exWnodA20NJFSL/0f4hPOiyEiIgHHH3LnZ8iUYhXcQhpyGs6LSOVpGlulJOJciwNGScRwUpg1KoEsGAwWp4rHbY8l+4DcSueXM2d4+myTTy5sR583XfzqXXnmh3V3UZsuG/6zX4pBvbjPBXYkRiwQe47PycXSsseCT2eEOerhtCNjJ7pLgwzWoNWErRU+hniQkOhs1WaJzcABcAHKdR2A12rqaxITBHrlU3Uldrt/mXicX32lGVxxiohmUGZyoQSkBjHlaxMRqVVlVYui2bAMYzH5VfNlbNKaSMdaZSmQpYW2UgDcZpTDjbX9E3zA/ott+hr9wvHZR+eZNiNPKvFYWhqJhHa2+n/au1f1P5Q+xQj3k6IyPcem0d2/Ujzt9SL4zsAAAD//wMAwwXLYq4CAAA=", "base64"));
  res.end();

  return __filename;
};
