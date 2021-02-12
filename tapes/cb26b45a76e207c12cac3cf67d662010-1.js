var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
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
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 15930us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 53885us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTW/bRhC951cQutbb7BeXS99cu0CNJk6ApOihyGF2d9bamiKJJeXGCPzfs5IokZJlVHYO7UWAOHzDeW/fzJDf3mTZLLhZdp7NtKBCGgrE+IIRKcucGCU54ViW2hecYe5mZytADQtcQy6hsstq2WWMsk3IYWdjaPvQ1Os7foEu2MwF7zFi3QdYRTKoXRbqHm/j+v8W2kLsF+mu601BzNuSMS6JdRyI9ICkBJREUqG007TU3B1CP5i/0fYr+LcUGMmdnGtK7z30c1ykEm23jR3yu65ttXShvs1M08+zdhlxzQ7atgrosoSe78AL7MFBD2N56aKNCD26q/SzzsgpZ4RywvhnKs45PefFz6rMf6L0nNIhU4ItW/cC2Br1mH4f13rZZhk7fBe6PlU+qG2pMNaAIKCAEslzRoxgilAlmDEclefDGe+hnxP85HQJEvE2JYsQh1Lwa4+xhmp3w/bCQZxv4x3G+2CxbcLOPAIk1Tl3RJY+/TjPCTBfEoVcSQYKS+aPwQ/5jIxekHGvR0K02RV2dxkbo7Zxm6h1k6sudLa5x/hwFbq2goebaY5ltemddSpCst+gqv6BhxHdBnu3bN81Frbu7OMSd+F5U7lPc6z8r1/bEB8+YgyNm/JcFbCMO7A4G6+vejXe7/T/E/Gumw3hx90Tuh68/1SFtlvd9Vf25c0kPquGwoYcubC+zJUnljlPJKOGaINAeJGmD7cWCrt1+w76/Nm8INv0bC7qGr8eOZXf/3h7efn26vrtxRgM3YXtwz0+ETbUqRH65YSbpIiUWiCQM02kkSUxSNnK+9pRkGDzYvJUWLTLboAqbn2hTEFSzXkymRCk5Kwg6LzkFhloqUdoFUzqmoetpK7QmgokFqhcPTYVgGnQcauEKblMxZiJXWJYJOynjfc/rrz/Cpt3E/i1Gw7+tBwH/kgOW2xHkWNoCnTp+NZEFJCSioK4wjPIRc682hJZw573xQsy7Q3+YOeA1QK6jFNWzqYWj/1k5rKSMEqYGO/A2h3EOaHFbI/qZoB+fmhxIOzzZA1ETQzTNu0kboihNmEN9aVwOi/ojvAIfp72C/JNaX+oq1DjZB4dLLubJm1t0mLs0hyyzaJt6rRy97mtuiEubd/ETXmDJZ5UqJhVUKYtzE3yeUEt0VIJomQpwTtGNarJsks2G6QyBTgFiVAhnEidjjSZPJ2B9lY4IzEv0B6h9hkeqiaeZe/DHU4b/gf24DrDsZV+4lLXhTpY6ieu9RG4HcHDCTxRubRWa4058coVK5XTIGJMEEHTiNLeoJpOk6nKHNAIh6ltc0UkaEOA50l0njoHDTJVyGPzFG4huqQyuFvc99J/KnVZ6NdJPQL/TWqOaQcB96Q0rkxcpCPGoieq8LnnSqMz9KjUIi9KzRgSUZRpddl0RtokfwMFqm0pPYqjq8vBojvLLucxSQrZxf9F6bJ4pdI74L7S2ZcffXnWlL7m5XmEHX15vlkuDMbNtwUXMt+8Gndp4qVpeTN+QYTh6+Zp+acVL/eHxGmly8mAeHzz+B0AAP//AwDZFUaY5g0AAA==", "base64"));
  res.end();

  return __filename;
};
