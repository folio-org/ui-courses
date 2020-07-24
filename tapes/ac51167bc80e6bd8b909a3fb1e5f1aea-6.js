var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves.. : 202 6188us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves.. : 200 44359us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYW28TRxR+51eM/NKHZszcL3lzQikpBCIaKlUVD3M5A9vau9buGogQ/73Hl9jrJkBCUWnV5MGy13Pu3/nmi9/fI2TUQgftG+hG5JD8Rt7jI3xY5eXHUbJemSQS5dwxqqywNHqbqUnGFGsyMyqPDtYmqVm0HTypur6qX52s7TVLRRaXqQgM7aMwNBaWaYkp8uCSE1le2lc9zDZmHgIvmUXKhPZUQY7U6yApRFF8YEaCYLuw8wryCRovTdfp4+MY2tRkWLmbcOWklVJJZjZmeAIt5k0b2osnTQp91dSb4CVloxJwarzXVLnCqFMMqPOlBCEcuuKf8PIs/g6pH+aya+etXKNZHWbrCk5DVZMnVVwGGh7Ylvj4xf3j4/sPTu6fDr+uuknqqzerI327gOFXNc6pXwzqxkSAsRRo0NzhrJSnERin2G6XWVAhabsXO8zmi25jbERCPERLUwpYWZaSesEthVyUwIqDU25oPF3XcgmTbJ1jEmgKTC1DYxIQgIpkZPRCYUJxaD1vqxla/4y4rRKcNVW9avhIBsWcFpkqX/AlF0ERSJ4aEEbxYMDzMvTTDRyc5M0G3MwLeblx82ELhTm0s1BD3f8tQF3xcgeo/yugsJ/TDYORDhAVfZXIW4hkmS60O8ykpu7bKi76pt2j8f2ZT+q+qatmcUB+bKtXTVt1+5Pf+ji/mMPlGID5rJDxvQaBqbtAneSRFmttdFBMdvwTXs7h3bqRHznzFHMbRBPRK5wQpyUF5H3nsVFWMoqTBC0Q0yDCaNuma4v8JdTkUWhnMIX6gDxsQ/3Hf7pK8nLHDIs4rdaccGXIq++61wiK1XafnJMzvNf3BjyfhrTu0XGYxbbKr+CAnIauG5PhsRx6eFbO9mONkmBMDY+1zQaaZ9vI16ScwnT6dDGLm7zOH2vO9Ng5xzUZk4l2ZOmXPDwnpz9MHvwwRPT8YmUyYEaoF4j6XU5vxpYd1s0Y2W93aElDoU6XvdaxSMsAaRF5BCfrE3UCFNXcshBRlQTprxo/ajf8unzAtn9C7I6+bqYZdc4lXYEsxXAkqejDEkEq4YonT3PiztiMO8/9ukGb9R4Kh1AP0QHKgeWSclskVQnfBV8cFdIpHaPgyJyjj/m4eldc3hS3cDtcp+cQlmWStmlm+/nPoA+IlbAXLLWA8MkP8GUdlQnEtaVCnXNzqO2hUGOkvO+X3RwMe211dPEC+XPThoyDYVoVapMCqg2Sdwwy0WIYikqObI5LsvWwmOcviLuxun3cdSPuDUho2+bkEQmcU+/QXPlgqTesIBikFFbr7MMl3r6mYM6oxhOPeMsJaakyGqhH2UwR/Hi5xGRUHOj0zwpmpaV3FitW0sldv+4U853A+UcUs5apeG0KTTwXqjj+J+giBCpssVxgw2warPGtFPOtXO+rpxrefRpJkzskfXupfLRSNj35qamh+64jRyFe4AReA8lVaCvohiLjJrL5YQWrq/6APFqKyn+LxptMSwuZTMbkcd3M91q7U3pP4S35tWn3JPD1Ak8wbm6g4M6e461gxidKO0eOrPJkZXhVtx3jGyKvSqtNf2yJWWenqBGZU4W9oj4pTQ1ec1Z67+L2wvq8Lhv+qvMXXVaijZYVTqPzuFiIZ5Q9HhcLVMTxiBh1uZkuAxclRwRSiWKJKrlEpjCo8LKXnKUoMoMv0GW3cDsE5fFKO5Dtb3dfQ5qJsef6G0iz6+J+BWm2BvGob/owfQ6padckI+59+BMAAP//AwAcLBpO9xQAAA==", "base64"));
  res.end();

  return __filename;
};
