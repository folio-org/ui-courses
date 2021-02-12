var path = require("path");

/**
 * GET /coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364?unused=0
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

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364.. : 200 6555us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTXPbNhS851dweG1gAyCID92cpAdNE7czcU6ZHB6BB5utRHJA0hNNxv+9EEmZtFR15KYXjoYPu3i7eFjqx5skSUuXJqsk1Tb3NANFnKaeCI2CgJaWWKWNsoWUmRTp2z2ggi0OkBsI7hHCX0kREF1Z3Y91h60NZdOVdTUsu3vAxELABCqX+HFlUvuk64t+UzqsOuiwPWAbCN02vluPbbFcSi2YJTmzSIQTlgBQQygCZwWlhgo4hv5e/Im228N/xMIs8WKupchfI+lD8tmWWNmpy3/QuK7sph+E3WO9qe93b5MGuzD8HHQ3sAGsq254c2DZYgcOOphbjS9twOiH+xAfAzWnnBHKCeN3NFtxuuLqSur8F0pXlE5MEdY37hyMqRWXq5xd0Uyegb3bfWkxTJ4rlSlkuSOKFpLkLqcEsswTL5QrDPOcWZUOBE/x+TS4b+s+tPixbLtowsQjuTFopCHGCkEESCDaRp6cMpopkLpwPj1Fnzu+i+kiJOB9JAtwkBRu3jHKDlX83mGoYDMVv78obmoL+3Odit46KSwyIo3J473wlGhBkWjjPXCudaZOoMcKZg2vYFsO4Scoq+RjWURBu7lsazeWf/ty/f799Yf19ae5WLY3tisfhwVd6HEuVNHlrl9IjA0gpRYI5EwTUQhDCqRxemSmHQUBNleLXWHb9O3zEVuvZKGItRD1uCwjhjNF0HnBo07QQs/QzahgwuZOaU0zJBao2G8bG0BAwq3MCsNFbKaYsU0otxH7GcNjafGPuqwGg9MMBNU5d0QYHx/OcwLMGyKRS8FAYhzYmaVdwNeu3TN8vZAj+TaO/HTWcYK2hxExinFuBOFxDokQXhFNpSScSUCTU8ulTRewfxmPy5mW43EXyqrsdkm884ur3XYxupZ5QEn0mct5BVbuqB63oukLnePVvNs1OKk1LBdU6IJk0sRp4RhTNI/DY73FwlOB1Ij0BHxe8yv4lprXVUzY0Mb8fa4dh/JtndTVpqzi56feNnUVPw0vte2vQuhtV4exvWkevv3HeI45m/NVxq5yqY9zdoK9PmcvDPizG/+/AX/bbwsM49f/OTTjrbJ702+f/xhssHkYS6ceXuSgzswLIT/r30XunWz6M949vXn6GwAA//8DAD9FybVfCQAA", "base64"));
  res.end();

  return __filename;
};
