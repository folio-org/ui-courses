var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes.. : 202 6354us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes.. : 200 3429us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUT2+cMBDF7/kUFtdmtmNjwOa2aS+5tFKVnqoexvZYRWIxAnKIov3uhf3TVbNJ2q5SDpYY5j3bv3ni8UqIzKf7YeS7h57HTNTim3icq3O9Cctrllfak6005KYk0NIqsC4aQDY6miApss+u95KONrwTrddr8SG1ydPE4fg18OiHpp+a1O2b2lY0HfQ8jHPl0LThiQJNtHTsD7IcceDF6OO87JQKFQJWoPSdLOvC1FKvVKnf4fwcjE6qm4evIw+3+9sEyi0WOkLlNUNREoOj3EMssUAviUnRyeG+Dxfse1D9+747g+28bq+fDMHKQqM2DvLSGtCKPVDhCXz07CJqRqvPhnDbid/ZPh3ApyRS1zYdC582feq4my4dA+a1xlpWKyPt8zhegYirsqr+P8RYYJkzG3DSeNCoHDj0FqTDaPNgigrdGcTPO0CvEPyV4LeEiPLvIZ6rXkaAeYGsKgkhuDlHgSNQSQZmilFHlM7F8AKC93+M002afhwDRV14jsz4BvlSl6A5qk5oxPfFIZvSRO0X9mkIu9+fvtr+BAAA//8DALWftB0WBQAA", "base64"));
  res.end();

  return __filename;
};
