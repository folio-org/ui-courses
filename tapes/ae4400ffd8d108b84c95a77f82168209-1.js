var path = require("path");

/**
 * GET /coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c
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
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c : 202 12754us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c : 200 6338us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxVy27cNhTd5yuE2XSR0OZLfHhnOygyTeAYbbooiiz4uIzVaiSB0qQ1jPx7rjSakeq0gIvsgsxCGJA89x6ec0g+PCuKTRU3xUWxKQ2YUkcgNDJDpIqUeEU10YYBMzSALcPmxQgI7T738Kbqh6r5sD2gGZUWlOYkBiwhgw7E29ITiMkmRYMKPh7Q1QC7GRRV0oF5RxwXGluWQKyESJLQYJkPSh5Boe0qiFuEjsAHHMJB73JoI0ylZCms0YqWUhgxYXABLu/a7PL9mza4oWqbuW8pQrKlSiSwmIhk1BPjwRGuk2Y8BKcD/c8ab/0fEIaFxkrBp5dFUON2B+qXTQN/L+OnLb3+9fz6+vzl9vxymaz6yzBUH6cFQ97DMtGgG8N+tUlJASgNKG45+umlJR4oI1QJE6mTLpR61dXtun0/QxUPSSuvCXIuiYxCEMuZHs2UPABzRpoFWld+1OeobdTGUAEkOCrHtkgAHBAelPCWSyTjF2yXqx1if4H8sQpw21bNpOxGOElNySORNuEnJk4cS5Yo4EoypzAeaanSr+Db2I8Vfn9ijeL9VOTT7HYHeecaaIavSMwXNb4n5htODGpYH9S/ylX8AEPxU9tA/0NfXDl/j5rfQRErlyvojwEJbTPkyu+HNs+dH76w+McK6ojX64viFdTQrM0+gW9w8bv7DmYdubcSJWMkBWeJNBbZa0EJSgsltykBd5sD9+L9Mat7X1eHlD5iMs30d5APiatThlhcnhWvm7ZbCdnVLhwY38BfxW9t/nOZi26At+n2ny02nDL1mEZwdX2z3/m52+3PeJGrs60sjSmutLTFBDrJ191Py67xT3G67Mc8uyYc1dDJxzIaSRSPjEhUhtggS4IPEdPCWuPnt2UFfZXnczkO0OV3an3XTqYcU5+89pomRryxeGAwq8RZiwcGpEcjuPdlGrc6ZWX9krhm5RsYLximiwjPkakYU8eVJTFawWjwPFLY/HuFxzfL8V55csl15K6nZ73IMB4OTOuJ+A4Gh166VZ+QAc2NL/Ezm4p9KCeMv6PigtMLbs6olM8pvaCni3Hfxf8BGts/+/QZAAD//wMAm2i19qIIAAA=", "base64"));
  res.end();

  return __filename;
};
