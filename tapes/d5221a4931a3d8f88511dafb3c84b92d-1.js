var path = require("path");

/**
 * GET /users?query=(id=="da39054f-7c4e-56ae-ba3c-f6050c1aea2a")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:17:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/users.. : 202 13925us, GET mod-users-17.1.1-SNAPSHOT.140 http://10.36.1.43:9143/users.. : 200 3061us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQKi1OLSpWslKI5gIAAAD//5RRy07DMBD8F1+pI8d2nMeJoggUIYpU2hNCaBNvUURechzUquq/symIAwdUfLC865nZGe3x/O6gRZYxW79Pr2DbumMLVtu5AyoVkd7xuNLIIwPIS1AV3xkRiSoEBAmEhcrXH6Tg3YQLNoB3fXfn+mkgCWUSDXFiuDFxyLU0CU/QCp7aMpFYVmBESRIWB3C+xc6TsecXUnH9/nDbu++KDPcdNCw7sgZGv/pyvMwfilXxtFkvN49rUtnV7ucvL+631MIWaqKxc67rOWKAe2iHBoPevc3mrXU4jniee1qwyiF4tDldRJNCCi5iLvVGqEyrTOkgTeMrQYfI02AvB7fogeAwh/hzSphJFQgV/WeK/gW+OWxps8XFWzydPgEAAP//itUBpY2S/JLEnKDU5PyiFFASMdThAgAAAP//", "base64"));
  res.write(new Buffer("UlAChk9pTolnXlo+UKQaTYkhMNgTk1Nh8ZaSmZiel19ckpkMCVCuWgAAAAD//wMAeerG+XMCAAA=", "base64"));
  res.end();

  return __filename;
};
