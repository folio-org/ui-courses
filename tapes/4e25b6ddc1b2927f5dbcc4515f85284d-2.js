var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 8345us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 81009us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS3PbOBLH7/kULF/XSPAmkJuTTNW4Nsmk1pmaw9Ye8GjY3NCiiqK88U7lu2/TkmjqaUqZySY1zMFxSHQT3Wz8+wco+v1Zlp2Fal7PYHaWvcz+mf2OV/BaEdt/njnnU56kJtYJQ2TIOfHCMyKVU4rmuRTanZ0vTCbuFh6MLidNXWVNlX1wpYNq0lRldX2/GhZhFupi2hTV5GH0VTOP91mVMjcJBUyarCwSPA6eurq5xcuXiwkxpbWRLBDFAhAZZSDOUUsoOM48pZZKt238i/83hKZ1sAjvMcAj/PVD/Akd32RX7YQDZq4bsBnc5SSU81hMrrNreMjCeTYFzE77KwYcs+mOFKGfW2hcdI3rT7l9UzW4BuIb/PHgnlNOCc0JZx+peCnUS6WfGyr/RvFP5wzt5tM43G5p9uXh7y/LXC5q5G0xazCY1bug0oLGkoghQlscgXirPIGYbNI06ODj2S77A69juEs0quEaHdauXk4IPjdQT1zJwuOY1bWNIbw3ZAb1XRFgWhVdmQk=", "base64"));
  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
