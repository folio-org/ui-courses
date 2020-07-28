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
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3 : 202 14081us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3 : 200 32897us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQdt2Gr5EkdnlsTHatAWarIos+BgWLGzJoOggRpB/L2VLrmEggKOFFro8M3OHV68XVVVHX1dXVS2lQ6dQgDYoQbRMg6JUAw9cUCQoW8frzyOQ8E8ccjJpsSfT9Q0ldK/hS8bUmeUkvRxJy96ZHPtukoLzUjikILVuQKhAQAmCoHQIhjGleHsC/rB/0eURfi2f/09+dqWCdGaFO+jexK76Fm2xsZ1F1/u9+PXx8vb28m5xeT9Lcbh2OT7v5Jw2OH/uhhzz5shWaYyEOAOmoQqEFRosEgpEcuWJEcY17aGfWa03wwRK5kIrbQvOmeLCcw6a0RbQB8GKO6OEmsHlfu6JbHyrFOEIzhAxtizN0SAwJ7nVTJRB7EyuU1wV8hem5+jwZx+73UJrbgRRDfMgdCgvHxgYGjRIZFJQI1HTMNcYjuCFH0b+95kVqqdS4m13qyUnqzkKuqWMaQGM8BaECC0oIiUwKg3qhjgmXX2A3o3BuVWOY/CQYhfztmKEkYO/bFK+M3l/YlSg7JXJWcfOn6ilCakPzly/SQM+bNc4+dO0EUQoC1zqkgmGrqSjRMQFhzYQgUSL+gR9z+XZtY5dLrpqjWnou1nxOLgU12Nudwe+91XfLWOHletX677DEouDnzHkaeNyn/ZDTTf+tBNXmI032RxN6hKW9ZzuqAWmHii9aporQr5wyT6R8hx+hT1zs30s6ZrWhtwqJ9sGrGsJNNaocqHcgrXBGuOJt0bP/GbtP9xzYj7ec9zMxds/AAAA//8DAE+nMIM9BQAA", "base64"));
  res.end();

  return __filename;
};
