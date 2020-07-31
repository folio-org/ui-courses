var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 244
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings : 202 6859us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings : 201 6212us");
  res.setHeader("location", "abd88c4d-8de9-46b8-8291-0ccf916fb89e");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTQvW7DIBQF4D1PYXltbwX4giFboy6duqRT1YGfS+UqiSNMpERR3r04dtquYWDg6ONcOC+qqu5CXS2r2rqgtccAOpABVE6DFoYD8z4arqLThurHEST66oacbHqdZHpeccanjI6Z0s5u5uj4L9r03uau381R9EGhJw7KGAmoIwONjECbGK0QWjftDMuN2xsyLRfCIAjWtIAYW9BMKRBcWTKSeaH8hHx/SAOtT3uaqeESGWoHjTIaUJAHK70FHz25yJCYwYl2u/K6g899enPf5PMw+o/q8xpuKdtgsx3PzuVgrEpkM4WXsl2bBBMMWAsNX3OxbNqlZE+C6wdW1rXhz6xO7wPd/tGN4ymyZTgtQRpsyuMkB6cQhY0Slfn1h324u3M293cWfllcfgAAAP//AwBXZ9DNLQIAAA==", "base64"));
  res.end();

  return __filename;
};
