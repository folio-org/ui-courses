var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 283
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses : 202 7180us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses : 201 5464us");
  res.setHeader("location", "6fb96193-a78e-4c63-b91e-d52f9f8d4a60");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPwU7DMBBE7/0KK1cwshPbtXuj4oKEeiofsPZuaESTRo6DhKr+O05SCtf64MPsvtmZ84qxosGCbVhhau+MdBWHtSWugqm4d5I46rJ2tUUFRhSPE9BBSzPyDBG/IH4yH4mw6T6WOdIQYtOn5tTNa/sDsQCRGHTI6mWTnWqWRj8eG6QuQaLhl+0hpjZrr0ssqY2xSgauZcixUAUOIBwXBKX0QjihYEHDaYwDvTVDyv5X2joHBGLNSVrMpYLhvsSSA8paoZceK/xP78bWU1zKbaWQy2ygMJXZ3XofqT8so5YSICSY9HMWJqdIuQ++5G/eLkUpeI5Qyb3Um8pttHiSTj2I/GaTP2b7/T5QvGb3QllvCLgqrebaqYpboSX3RqkSaq2Mu/Fjj3ffvDL338z4ZXX5AQAA//8DAIp43F48AgAA", "base64"));
  res.end();

  return __filename;
};
