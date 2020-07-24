var path = require("path");

/**
 * GET /users?query=(id=="da39054f-7c4e-56ae-ba3c-f6050c1aea2a")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/users.. : 202 14269us, GET mod-users-17.1.1-SNAPSHOT.140 http://10.36.1.43:9143/users.. : 200 2882us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQKi1OLSpWslKI5gIAAAD//5RRy07DMBD8F1+pI8d2nMeJoggUIYpU2hNCaBNvUURechzUquq/symIAwdUfLC865nZGe3x/O6gRZYxW79Pr2DbumMLVtu5AyoVkd7xuNLIIwPIS1AV3xkRiSoEBAmEhcrXH6Tg3YQLNoB3fXfn+mkgCWUSDXFiuDFxyLU0CU/QCp7aMpFYVmBESRIWB3C+xc6TsecXUnH9/nDbu++KDPcdNCw7sgZGv/pyvMwfilXxtFkvN49rUtnV7ucvL+631MIWaqKxc67rOWKAe2iHBoPevc3mrXU4jniee1qwyiF4tDldRJNCCi5iLvVGqEyrTOkgTeMrQYfI02AvB7fogeAwh/hzSphJFQgV/WeK/gW+OWxps8XFWzydPgEAAP//itUBpY2S/JLEnKDU5PyiFFASMdThAgAAAP//", "base64"));
  res.write(new Buffer("UlAChk9pTolnXlo+UKQaTYkhMNgTk1Nh8ZaSmZiel19ckpkMCVCuWgAAAAD//wMAeerG+XMCAAA=", "base64"));
  res.end();

  return __filename;
};
