var path = require("path");

/**
 * GET /users?query=(id=="7737e15d-70b6-5d50-a33f-f47db91f21c7")
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/users.. : 202 20235us, GET mod-users-17.3.0-SNAPSHOT.158 http://10.36.1.253:9132/users.. : 200 2691us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQKi1OLSpWslKI5gIAAAD//5RRzUvDMBT/X3J1KUnaJmlPToZSxAlzO4nIa/MqxfWDLJWNsf/d1ykePIi7hOTl98k7nu8dtMhy5pr38RVc23RsxhpHE2NigzJ13IhS89SlgkMc17xOjCszWStZGcJCFZoPUgh+xBkbIPi+u/P9OJBErG0CxmqutZE8Udpyi07wzJVWYVmBFiVJOBzAhxa7QMGeX0jF9/vDbe+/XxS472DL8iPbwi4svxLPFw/Fsnhar+brxxWp1I3/+VsU9xsaYQsN0di51/VUMcI9tMMWo96/TeGd87jb4dn3NGOVRwjoFnQQTQkluVBcqrWIcxXnaRoZm10JkQtB7HFwF6BbDEB4mGr86SPzJItsoi/ySX+jbw4b2m7x702eTp8AAAD//w==", "base64"));
  res.write(new Buffer("itUBpY+S/JLEnKDU5PyiFFAyMdThAgAAAP//", "base64"));
  res.write(new Buffer("UlAChlFpTolnXlo+UKQaTYkhMOgTk1NhcZeSmZiel19ckpkMCVSuWgAAAAD//wMAkwpOh3cCAAA=", "base64"));
  res.end();

  return __filename;
};
