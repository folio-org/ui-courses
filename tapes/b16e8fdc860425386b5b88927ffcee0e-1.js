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
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings : 202 6952us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings : 201 4163us");
  res.setHeader("location", "1c8edbab-ab5b-4d56-a396-0bc48cde3a3a");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTRPW/CMBAG4L2/IsraXnX+jM1W1KVTFzpVHc72uUoFBCVGAiH+ewMJalc8eLhXj1/ZPj1UVd2mulpUtYiOU6AAFEwAnYwFUt4ChqhdTKxIUf10AT1/t0PpqX+bZP+yFCimjA+F+y2t5+jwL1p3kUrbbecox2R1ZAHWewPaZQSnkcH5nElK51Qzw/HEzQ35RkjpNUhUDWidG3BoLUhhib3BKG2cUOz2/cCr445n6oXRqF0AZb0DLTkCmUgQc+SQUTN6PdF2O95uH0vXv4cfjmW4+M/q6xpuuFCiQpfZaRxcqnqmwul13K5NEiUCNiDlCuVCu4VRz9bYRxzXteHPLI8fA9/eMThS2aEAx00Eox2Pf4EKgjJBckpeNvbm97t0d+ds7u8c+fnh/AsAAP//AwA8CDOQLQIAAA==", "base64"));
  res.end();

  return __filename;
};
