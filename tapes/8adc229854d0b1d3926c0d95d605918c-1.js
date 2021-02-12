var path = require("path");

/**
 * GET /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364/edit?nreserves=2
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf : 202 13313us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf : 200 4915us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSUy27bMBBF9/0KQdt2GpKi+PAuj43Rpi3QZFVkQZHDgoUtCRQdxAjy76VsSXUDBHA2WujyzMwdXun5Q1GUwZXFqigF0xq10KAt58CNMKBs5aEmlFTSCNU4X34agYi/w5CiiesjGS+vKKFHDZ8SxtZsJunpRNp01qTQtZPkrRPcIgWhdQ1ceQKKEwSlvTeMKVXJV+D35g/aNMLP+fW/yc+ulJHWbPEA3ZrQFl9Dk23sZ9F27ih+ub+4vr64WV/czlIYLm0Kjwc5xR3Or9shhbQ7sZUbIyHWgKmpAt5wDQ0SCkRUyhHDja3l0s9s+92wnvdvvRSNBGtNduGqCjSjEtB5zrI7o7iawc1x7omsnVSKVAjWED62zM3RIDArqkYzngdpZrKPYZvJnxgfg8UfXWgPCy0rw4mqmQOufX44z8BQr0EgE5wagZr6ucZwAq/dMPK/zqxQPOQSL4dbzTnZzlHQkjKmObCcNODcS1BECGBUGNQ1sUzYcoHejMG5VU5jcBdDG9K+YISRxV8yMd2YdDwxKpD3ysSsY+teqbkJKRdnttvFAe/2PU7+NK054aqBSuicCYY2pyNHxHqLjSccieblK/Qtl2fXOnW5bose49C1s+JwsDH0Y24PB751RdduQouF7bZ912KOxeJnDHnc2dTF41DTjT8cxC0m40wyJ5PaiHk9/+0o558BZXdUrmq2qujnWqiPhKzIsvQJutrf53hNe5OykkhrB5I0AmpXEzBV/iV5Ll2T48SoXb6lXe/e33SC3t903M2Hl78AAAD//wMAt3Up/z8FAAA=", "base64"));
  res.end();

  return __filename;
};
