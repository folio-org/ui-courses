var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 283
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:31 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courses : 202 13008us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses : 201 3960us");
  res.setHeader("location", "8c5f03a7-d80f-48e4-a86c-c7897cb66364");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPzU7DQAyE732KVa5g5E02+5MbFRck1FN5AGfXoRFNGm0SJFT13clPC1x78WE839hz3giR1CERhUiszyvMyECwWIGyrICs9uCNdcaXWmdaJY8z0FLDC/JMMXxR/BRlZA51+7HuA/c+1t1Qn9rFtj+w8BRZUBtEtTrFqRLDWI7HOnA70MD9je0oDs2kva5vyVxrq6SHXHoGFZQHInSATKksER0qWlF/GmPPb3U/TPlXWqfOsdMOnFcKFGkC67MKcpSYGdK2DNV/ejc2Jce13FaiXHc9+7nM7rf3kbvDump4oEADzfp5EuakyFOf8DKNxZ1iKgFTkOlemiJPi0w+2cw9IBaIS8oftP1+7zlenzcmMyzzAAZLDXnIESibnq+UCaWTVSq9ufFjF+4/eoXuPzrhl83lBwAA//8DAPgEWyc+AgAA", "base64"));
  res.end();

  return __filename;
};
