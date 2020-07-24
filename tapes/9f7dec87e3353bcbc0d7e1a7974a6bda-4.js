var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:59:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses.. : 202 6494us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses.. : 200 3531us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyVTW8bIRCG7/kVyNeGiN1l+fDNcXvoJYqa9lT1MMBgr7JeLBZbsqL897J2vhRnq8byHkZa4H2BZwZ4uCBkYsN6F5vFMt0lSJse+wmZkt/kIffl3sYNvxOwXmuvJRW2UpRzb6gSrqQcEUQpWeGYn1weJB2scC+azWbkW9vjtsFI2sZi1+PzIIe9jc06NaE7jLWp2WK7I6YN9r7pFiQtkaxjWETsexI86e0ytBD7ZbN+NllhAgcJBofDeof9RISE7msOe+eSlYwySUv+sxDTWk+ZvBKs/MLy92T0qrre/eoxfj9s2kGlWc09lZYjrQUgNVBZ6gWrmS0AoYRXh83anTDvk+rz8+4NHnN8vHyXK8brsqgko0oJpLxwSMGbbFSDMtqjVC/LfpOrtiX7KuhJBo5xi24sVbeQYujICnakC4kM9UMgEWjbU/PCqiln0yLz4fJjPv+gWl6pMdVZqUKtlbOWlpX0lDvJqeKcUw02c/XacVBHVOdzcr0b4zgfgOSiJ/OwWoWuzxBTbMxmGPD+uJxOdKzi/k81zgMKVQtuPVVGVflGcBmFrRU1Ule+cJWTNf+YB72Zn4SkCx21uR2jbaA9H6HqEzV3rBonZJRBw5mnejh93NW5YqwRlLlCMCG5LsGMEqJ3s3NA6pcQ8/Fvm3s8H7BSnQLsWTUOzBuhfK0N1ZxlYFwAVbpyOTChXVEbxaojYLcbkzdGXFhB040huwnk5Zk7211VnIShOMJA/gwOkxQStD/Qhuj2T7C4ePwLAAD//wMAb3jO+qAHAAA=", "base64"));
  res.end();

  return __filename;
};
