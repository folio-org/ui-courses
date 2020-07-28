var path = require("path");

/**
 * GET /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:34 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3 : 202 7089us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3 : 200 11757us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQdt2Er5EkdnlsTHatAWarIos+BgWLGzJoOggQZB/L2VLrmsghauFFro8M3OHV69nVVVHX1eXVS2lQ6dQgDYoQbRMg6JUAw9cUCQoW8frjyOQ8GcccjJpsSOHq2tK6E7D54ypM8tJej6Qlr0zOfbdJAXnpXBIQWrdgFCBgBIEQekQDGNK8fYI/Gp/ocsj/Fo+/5n85EoF6cwKt9CdiV31Odpi42UWXe934qeHi5ubi9vFxd0sxeHK5fi0lXPa4Py5G3LMmwNbpTES4gyYhioQVmiwSCgQyZUnRhjXtPt+ZrXeDBMomQuttC04Z4oLzzloRltAHwQr7owSagaXu7knsvGtUoQjOEPE2LI0R4PAnORWM1EGsTO5TnFVyO+YnqLDb33stgutuRFENcyD0KG8fGBgaNAgkUlBjURNw1xjOIAXfhj5HydWqB5LibftrZacrOYo6JYypgUwwlsQIrSgiJTAqDSoG+KYdPUeejcGp1Y5jMF9il3MLxUjjOz9ZZPyrcm7E6MCZa9Mzjp2/kgtTUi9d+b6TRrw/mWNkz9NG0GEssClLplg6Eo6SkRccGgDEUi0qI/Q91yeXOvQ5aKr1piGvpsVj4NLcT3mdnvgS1/13TJ2WLl+te47LLHY+xlDnjYu92k31HTjj1txhdl4k83BpC5hWc/xjlpg6p7Sy6a5JOScS/aBlGf/K+yY65eHkq5pbcitcrJtwLqWQGONKhfKLVgbrDGeeGv0zG/W/t89uTjnTfNXz4n5/57jZs7efgMAAP//AwDQhV/HPQUAAA==", "base64"));
  res.end();

  return __filename;
};
