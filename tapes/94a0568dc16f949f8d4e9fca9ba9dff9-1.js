var path = require("path");

/**
 * POST /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/instructors
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 146
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/instructors/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/add
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/instructors : 201 7399us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTOv07DMBAG8L1PYWWFq852bOcyAhJCMMIDnP9BhiYocQdU9d1J6iLmLh7O97vvO+2EaIbYiF40kpQmnwMohRnaTjJ4JAfKMTtvQqKkm/sNjHxIF/K8F6978fiVlpLmMo312/Mcplg3rOsI6zhMx3lJb8NShvHzpWZaRZTIElBoW2jZMnRBZzAoUTu2nY+56kMqHLnwxk7rYDs4Jy4pPq3P5ZhCJQEVSPUuXW9Ur2lvFN4h9lg7/KOHn48lzdcWzmmXpIng0Fsw0SCwXlvk1kVPMisZ3J8/fsfbQ6/o9tCVn3fnXwAAAP//AwBiaQt2pgEAAA==", "base64"));
  res.end();

  return __filename;
};
