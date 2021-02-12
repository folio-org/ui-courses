var path = require("path");

/**
 * GET /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf
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

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf : 200 4661us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJRUy27bMBC85ysEXdtNSIriw7c8LkabtkCTU5EDRS4LFrZkUHQQI8i/l7IlxQmQwr3ooOHs7AxHej4rijK4slgUpWBaoxYatOUcuBEGlK081ISSShqhGufLzwMh4u/Qp2ji8sDsL68ooQcMnxLG1qxG6OkIWnXWpNC1I+StE9wiBaF1DVx5AooTBKW9N4wpVcl3xO/NH7RpID/n16+bnzwpU1qzxj3p1oS2+BqabGM3gbZzB/DL/cX19cXN8uJ2gkJ/aVN43MMpbnF63fYppO2RrSyMhFgDpqYKeMM1NEgoEFEpRww3tpaznllvtv1yyt96KRoJ1prswlUVaEYloPOcZXdGcTURV4e9R2btpFKkQrCG8EEyi6NBYFZUjWY8L9JMzE0M68z8ifExWPzRhXYfaFkZTlTNHHDt88N5BoZ6DQKZ4NQI1NRPM/oj8tL1A//XiROKhzziZX+ruSfrqQpaUsY0B5abBpx7CYoIAYwKg7omlglbzqQPa3DqlOMa3MXQhrQrGGFk9pdMTDcmHU4MCORcmZhwbN07NIuQcnZmu23s8W63wdGfpjUnXDVQCZ07wdDmduSKWG+x8YQj0bx8R/3I5cmzjl0u22KDse/aCXHY2xg2Q2/3B751RdeuQouF7dabrsVci9nPUPK4tamLh6XGG3/Yg2tMxplkjja1EXM8bzLK/WdA2R2Vi5otKnpeC/WJkAWZQx9JV7v7XK8xNykribR2IEkjoHY1AVPlX5Ln0jW5Toza+Vvabty/RKsFYedM129FR9L/iw7ZnL38BQAA//8=", "base64"));
  res.write(new Buffer("AwBN6m7VPwUAAA==", "base64"));
  res.end();

  return __filename;
};
