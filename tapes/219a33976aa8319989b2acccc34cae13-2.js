var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/coursetypes.. : 200 2225us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTwUrEMBCG7z5F6FVHJ03SJj0uXvaiIHoSD0lmigU3KW09iOy72+2uIOoiipeB/Jl/mPmYeT0Rooj5eRj59qXnsRCNuBevszrrHe2eRWuwUswWgrQRNJYBAkYHMmDrFFlTYyjO9pbkN7yYrtNTl/hdJh7j0PVTl9Pye5VFl6DnYcxJxLzpc+I0vWdvePLkJ79L3beya3JgPzFdzmEpUWIpARWgvEXZGGyMOcdanyI2iIdKs+25p1/YFtd2jtuzTxBQGeSylkAULGjiFnzlLXgVW92iDKGlIxAu1knsRz2GY5WnR5GXZOETfcdm/Ac47m9w3I9wnDQatQ2gKjfDKTmCN9FDbCOHFjWj01/g/EhlXpIDk3/ckKr+BQRZN9o2aM9tWR6xrV7uRh7Wh0vRIRJVCN5pDUY5Ay6qCMrX3hLVOhJ/wCgedtWKKU/+6YZjHmi5P3WyfQMAAP//AwBuyTV6lwMAAA==", "base64"));
  res.end();

  return __filename;
};
