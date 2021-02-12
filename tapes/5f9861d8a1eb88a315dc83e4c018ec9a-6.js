var path = require("path");

/**
 * GET /coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
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
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364 : 200 6273us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTY/bNhC951cIvjbcJSl++rZJejCabAtkcwpyoMjhrlpbEihpESPY/96xLK9kb114m14IQ8P3OO9xZugfb7JsUYZFtswWxstIc6dJMDQSYUAQZ5QnXhurfaFUrsTi7Q5QuQ0MkBuXwqNLf2UPfVu4KqTtfkOA1qey6cq6GvbdPUDmXYIM92QRIJTVfVbHrOuLfl0GqDrXQXvANi51G/y22ufFpFJGME8k80BEEJ44Ry2h4DgrKLVUuFPo78Wf4Lsd/AcGJo0Xc81V/oqkD9lnX0Llxyz/QeOq8ut+EHYP9bq+377NGujS8HPQ3bi1g7rqhi8Hlg10LrjOTaniR58A/QgfcBmoOeWMUE4Yv6P5ktMl11fKyF8oXVI6MiGsb8I5GNNLrpaSXdFcnYG9235pIY2ea51rYDIQTQtFZJCUuDyPJAodCssiZ14vBoInXJ8G933dpxY+lm2HJow8ilsLVllivRBEOOWI8cgjKaO5dsoUIS5eos9d38V0CElwj2TJHSS1N+8YZYcofO8gVW49Br8fBde1d7t7HYPRByU8MKKsldgYkRIjKBBjY3ScG5PrF9BTBZOGV7DNi/CTK6vsY1mgoO0U9nXYh3/7cv3+/fWH1fWnKVi2N74rH4cNXephClToctfPJGICQKl3xElmiCiEJQVQrB6Vm0CdcF7q2alu0/Tt8xX7qFWhifcO9YQ8J5YzTSBEwVGnM8JM0PVewYiVQRtDcyDeUbE7FhMAB4R7lReWC0ymmLBNKjeI/QzpsfTwR11Wg8GL3AlqJA9E2IhLiJw4Fi1RwJVgTgEW7MTSzuCr0O4Yvl7IkX3bl/x411hBm0OJWM04t4JwrEMiRNTEUKUIZ8qBldRz5Rcz2L+Ux+VM8/K4S2VVdtsMe37W2m2Ho2s+DyhBn7madkAVTuJ4FF0c6dy35t22gVGtZVJQYQqSK4vVwgGnqMTi8dFDEakAasXiBfi85lfwzTWvKpywqcX5+xw7Hcq3dVZX67LC56feNHWFT8Oxtl0rpN53ddqnN9bDt/84nnHOSr7M2ZVU5nTOjrDXz9kLB7zMl5RfcXvuXfifBvxtvykg7Z//56GJXeV3pt8+/zNYQ/OwD7308CIHTW6PhPysfxe5h512fOjPePf05ulvAAAA//8=", "base64"));
  res.write(new Buffer("AwAxTZArYAkAAA==", "base64"));
  res.end();

  return __filename;
};
