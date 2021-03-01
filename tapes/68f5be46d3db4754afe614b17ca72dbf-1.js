var path = require("path");

/**
 * GET /coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e : 202 20922us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e : 200 18882us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMRVTW/jNhC951cIvjbc8EsimVuaFGjQ7e4CyaKHYg9DcpiwkSVDktMYi/z3jmPLdr4Ap9siFwPm8M1w3nsz+n5QFJMcJ8VxMfHRJDBaM+6VYjolYDZUhnH0EXwVKuA4OVwCOrzK/dBBd75C4t2AXQO1WIXHv0+ichXtsbvNAWdtbob1DQWa21JGpl2in5gkA5Ecq1BWWkCFTqTn4M/+LwzDMsF3Cm372DsbQRqY4gPoNHehOMP+phBjLLRxFQtxcxZzH9pb7BZnuZ/VsPi0i5/XMOS2WaVhrPgV6vpvWIzYWQ4389nHNjzcWqKGbo7r4HVbx4trrNMvd7PcLb5gl9u47W1Zet5tgOpwPCUeiJIN138g3vSTh+D9OnM/QEoXdZ71yxt/Ft8O1rFJvX7KGluqkFxZJRZETEwL7pn1CEyaZIQMAUzgk0fA1xTYO9OuAidNg3fPuP/t69Hp6dHZ+dHJGMr9SRjyLT4hMDf9kIf5Tj+aI3IegEEpLNNeO+aRC8YrZSMHDaE0m3ownc37NbCSIZnKG0YvLclANA1OCsMwJi0DCrDajsA6e5qDxUhhNNZyhSwA18uSVBwBmQyV8k5qeojf2KHLU0JerBz9ZenoN9u33wGfx7XA+2XY8QE5aLpuIDkSSDrNJFeGaZ0Ms7yqmBQVoCt5kFWYbECv6b93ll39L7vc5GFRSC435iDvdsMZDKsbywgjXmU1xrGJT6JUhE82nYV23vV4uZjh2F9J6iNa5oUNTHPpmefBMeF5cira0vCVQDvQV7vcN9dul5+bOje4WSfYhy7PxrGefGqL3LAZdj2tkdBOZ22DZItNP0uTd/MwtN3qUWvFH7/LuYApSGSonGDaes5oe5MHtDW0CpSt3Mb3c3LQuIRL46wQyJRxNLSBOxpa6gk4cBucTqheGNoI0/6wOL3u6IMAxcl2fpfsfaTD3Fydv/H7QvgpDhBhgEcbMHRIYj9SnKZZMS4uhTkuzTE3H7h1P3F+zMenbmE/L75um03ahxgrzsDRg0rlSuaCCkyBARuj0SHiNsN8Fv9N4TXs7YVX+/tB9SfaWheFFNIRfUKS53xiNOmcmZKOhbMoPLygrTcQKyAxjYpEvUCqj4Izm4KKXmNp8IWBhEXddofF7/kG311Xavp9dH2h8P+gK/c0Yr60DJSkD0ekMQQnaXcmJ5PntDUDvqSrBPQq0mVRVkyDpXGVJcksSRP0KCqjn88sXEEXSVeIV7i7jd5J3OqDVeo9xH2x8H8gbvHtYVk/p2MvMkpXPXrTj1KxFxHPiv4IDfcH9/8AAAD//wMA2PM7flgMAAA=", "base64"));
  res.end();

  return __filename;
};
