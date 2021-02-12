var path = require("path");

/**
 * GET /coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364?unused=9999
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364.. : 200 6547us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWXW/bNhR9768Q/LrSISl++i1JhyFomw1I+jT04ZK8SrTZkkHJWYMi/720rFiK7QTOUgx7EQRdncN77ie/v8uySRkm2SybGC8LmoMmwdCCCIOCgFGeeG2s9k6pXInJ+zWgggV2kFOI4Q7i35mLiKGsbjb2gI2P5bIt66r77foWMw8RM6hCVmz+zOoia1duNS8DVi202DxilxDbRfp2sXGLSaWMYJ5I5pGIIDwBoJZQBM4cpZYK2IX+7v5C367h35NhkHg011jkr4n0NrvyJVa+9/KAxovKz1edsBus5/XN/ftsiW3sXjvdS5gD1lXbfXlkWWALAVoYXE0ffcQUj/AhPTpqTjkjlBPGr2k+43TG9VQZ+QulM0p7pgRbLcNzMKZnXM0km9JcPQM7u//SYOxjrnWukclANHWKyCApgTwvSCF0cJYVnHk96Qge0vOhi76vV7HBT2XTpiD0PIpbi1ZZYr0QRIACYnzikZTRXIMyLhSTffRz6TuaLkEi3iSyCI+S4ukZo+zRit9ajBXMe+O3J8Z57WGd195Y+KCER0aUtTL1RUGJERSJsUUBnBuT6z3oroJBwyvYxkX4Gcoq+1S6JOh+MPs6bMwfv5ycn598uDj5PBjL5tS35V33QxtXOBiqFOV2NZKYHEBKPRCQzBDhhCUOaaoelZtAQYCXenQqLJarZptiX2jlNPEekp6Q58RypgmGQvCkE4wwA3S+UdBjZdDG0ByJByrWxyYHEJBwr3JnuUjOuAG7jOUiYa8w3pUe/6jLqgvwJAdBjeSBCFukRyg4AVZYopArwUBhKtiBpRnBL0KzZvjzSI7s66bk+1ynClo8lojVjHMrCE91SIQoNDFUKcKZArSSeq78ZAR7oTyOZxqXx3Usq7K9z1LPj1q7adPoGs8DSlKcuRr+wCrs2NNRdPJE56Y1r++X2Ku1TAoqjCO5sqlaOKYpKlPx+MKjK6hAasVkD/y85lfwjTVfVGnCxibN361tdyhf1lldzcsqrZ96sayrtBqealu3Qlz5to4b9/p62PWQWZ5bV3jCebcaGRBHrSZcA2gnPVrMD3j42zT7OM3Ob7FJSW/HjjqI295Vab/ScU+/YY4+u1ReXitpP0g+y+1UcrqzHwbg6zfEiOPl5fTC4W9bT5sFtc73Xk6dBWG19ESxdcsL6RJJag/p02T2HI0v7KGcYh1vMDtbr48Ysqtb+OdwWlkutf1fpFVPLd29LfxXaRVsqtSBw39SWrOv//Ii1YeGTaUyuzeiNwfmiGo/ePDPvYpdrhYO4+aevr3epP3n1+PxcnuFn+PydmPaj+FRETS5fSLkrfE7Knp7h74ldg/vHn4AAAD//wMAzy5HmwkNAAA=", "base64"));
  res.end();

  return __filename;
};
