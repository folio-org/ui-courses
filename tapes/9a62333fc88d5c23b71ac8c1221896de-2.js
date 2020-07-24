var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/departments.. : 202 6336us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/departments.. : 200 3389us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPWvDMBCG9/wK4bVROMny51jaIUOXNp1Kh4vu3Bhs2djyEEL+exWnodA0UKiGgzvd8yIedFgIERH3OPiWnR8jUYo3cQjTMK/p1EYqSdPcKCsTZVkaMlYiQiGBUastQAEGo+UZcdjyDD2GxJ14sTU7y+Plmni0Q937unPz1mbHYvQT7UVXCR+avkHH/rLeskdCj6fd85vC0A6MnukhlDlDgwYJmdRmA3FpoFTZKi2SOwjnKyhQU0+3KJWWSV5qtcoy/Tt1v38deVifdRDGBSSmkpk1LJMUWW4xtrJKIQGrMFjBaA44hnpc/rRZ2UIpbaQljdJUAS+QjTQQpznlUOSarmw+YZDToq/tTZVrZ5uJavchtl0w308DC3QksO+bmkkEejf+X2we/13sNfWtRbyfEiLfeWye2XYDzX9PL46fAAAA//8DACY7hmiTAgAA", "base64"));
  res.end();

  return __filename;
};
