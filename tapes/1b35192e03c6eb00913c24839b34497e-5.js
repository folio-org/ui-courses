var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/processingstatuses.. : 202 6391us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/processingstatuses.. : 200 3622us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTy2rDMBBF9/kK4W0zRbKe9rJ0k1Whj1XpYiyNg8Gxgy0XSsm/V3EaQh+B0tYLgXV9BnF0/bpgLNsOvadxbLr1XcQ4jTRmrGSP7DWFKW7C/jUT2mksigC8UgaUqyQUKHNQXPNacFmgEdnygHS4oRladcxjxLZfp+nHNNDoh2Ybm76bP7olT80zBVZNkXV9ZC8Uj9hE4YhtKGJIu3vmcLS06QfCSOE6LfOsnOccuIVc3XNZKl4Ke2kNv+DpeR+UqGkbzlHClNqVSlwWXHxPXb08jDSsDlYCyoJrVYP1ikAbJKhQeqhN0uIFEuaYzQN2ad0tP0lFF3JlvQNyWINCYcBVwgIvjLLOSJJSfZF607F+CDSc83mzDyksP/jEZ2xarFr6u059RszPqPMyXFXnDr0B9D6A0laDq2sEaVL1eEXC6a8NS+XBtj215JtyzTnDLrCp+0cN0v5Gw5E6aWBP+wlZ7FPh02nT1c7/n1zs3gAAAP//AwCDxzFQngMAAA==", "base64"));
  res.end();

  return __filename;
};
