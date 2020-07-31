var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:38:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses.. : 202 9634us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses.. : 200 3395us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTQU/cMBCF7/wKK9fuIDseO3aOFRdOSLQ9IQ5je4IihWSVOEgI7X+vd5cVUEqFUH2wZD+/kefz89OZENV2niIvSz/e/ciU14WXSrTiRjwVsch92i8rF7raUbRAMSZA0xhwXUegrXFGBlbOqGpztIx0zwfTNUcaBk4nIfES536b+2l8owsak1hHeqB+oDDw6fw9Z0qUaX/4eJ2yGWemzOmiTIcitawlyAa0+il1q02L5hw1fpNlPBcqrnWbPu86mHZl3m3+wEAu1dhEB+yoAyRlwQXVgPQWG2c1a43vMFyNYpoTzx9huNqLnDYirFmMUxaPnMV/hIHuKzBOro9hqPL05H0CGdACuqDBk64BpZGdktqTfZ+Jy1HE0sUw3ZXE/SMY3D+UYLwm8mxbX/L0dSRWfR6JqlvtW9Oce+3/7vr++Gvh+fJIJchCwjIB1s6A8ajBSaMgWMSaOoPWv4YqbvfVqjyV5krbJSiH/6fPdr8BAAD//wMAogDro54DAAA=", "base64"));
  res.end();

  return __filename;
};
