var path = require("path");

/**
 * GET /coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
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
 * referer: http://localhost:3001/cr/instructors/66cec8e4-9ae6-4729-8119-3f341e0e67c3/410287b8-02ab-4b31-90e5-a09f8e073db3/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3 : 202 26117us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3 : 200 13277us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/cNhC951cIe21o80sUuTc7KVCjSRogzqnIYUiObLVaacHVGjEC//eOVlpLXtvpuu4eiIWG73HeaDhPP95k2aKKi2yZLbTg0hbeMi7BM+2VYI5jzoC70iIvVPRq8bYHNLDCHeQMUryB9HfmE2KsmqshHnETUrXuqrbZbbu8xixAwgyamJXDzqwts27rt3UVsemgw80eu4bUrejZxZCWyI2xWgSWi4BMRx0YUEqMI0jhOXdcwyH0D/8Xhq6H/6DAJPForrnIX4n0OvsSKmzCmOUTGi+aUG93wq6wrdur27fZGru0+7vTvYYasG263ZM9ywo7iNDBlCo9DAmpHvE9LTtqySVnvGDSXnK1VPlS6ROV8184/UYiQm3X8TmUEMtcLLU54VY8jTq//brBNFYclbfBFDnzoeAs92CZ5coz70sPEHn04BY7gjta73a1D+02bfBDtemoBCOPMQGDRc0coGG6kI5ZIRxTpdICOZoijA31AP3cyzuajiAJr4gswV5SOjsXXOyj+L3D1EA9Br8/CNZtgP6tjsEyRKMDCmacy5m2JWdWc2TWlSVIaa0qHkEPFUwaXsA2b8GPUDXZh8qToNspHNo4hH//evru3en7i9OPU7DanIWuutlt6NIWp0BDVe62M4mUAHIegEEuLF187ZhHLhg3ykYOGkJezE6F1Xq72b9iGcrC+IKFAKQnKsWcFAXDWGpJOsFqO0HrQcGIzWNhqa+QBeC6P5YSQEAmg1HeSU3J+Am7TtWKsF8w3VQBP7dVsyvwQoHmNpeRaVfSEkvJQJSOGZRGCzDoRDmxbGbwi7jpGf48kiP7NrT8+K6pg1b7FnGFkNJpJrkqmNZlQffFGCaFAXQ5D9KExQz2k/Y4nmneHpepaqruNuuv/ExrR4PrYBwQs5l2YHM4Lugovnigc7ial7drHNU6kWuurWfKOOoWiTRDc2qeUAb0JdfInV48Aj+v+QV8c80XDc3XtKHpex87HMmf2qxt6qoh82lX67YhY3iorb8KaRu6Ng3pjf1wmGEutc4LBTQPIw0eXVCjAg1Fo8FQwxgOxj+R4W9VXfemd441DYZpg4d0f3OFVDqf3+hXTNFnDeXnltKbQ77kvTm4h+Yw4V5uDzOOfzGmZ89+nTUN5kRr9u0/eu2YHD9RRh645qvLckRRnjr3/3XrT9uVxzR8yN07II3I0N+gT/ffeDWur4fQ4woeUT9xInk+1/Ha6h1Ru8dnvqZyd2/u/gEAAP//AwCp/YhhKAsAAA==", "base64"));
  res.end();

  return __filename;
};
