var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:16:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 17787us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 76676us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("0ZFHH4uPPPoX8qj5g1+TS3MOkq6kNki68OtFV3eu/CeEullkrXr2+X8AAAD//wMAJ5Ub1SA4AAA=", "base64"));
  res.end();

  return __filename;
};
