var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 21770us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 15927us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTXPbNhC951dwdG1gAyAIAro5SQ+aJm4ncU6dHJbA0mZLkRyI9EST8X/v8kMSLctONJ7qQElYvId9i8UDf7yJooWru7DBzSJaRn9HP2iExgrf/13oPLNa2JhBapApp2OWWYHMJzK3ufEKNF+8HSEVrHEAXUHw9xD+jbKA6IvqdjfD48aFommLuhom3txh5CBgBJWP8nFuVOdR22VdWXisWmgprz26gdCuaXQ1JicSrY0SjiXCUXJeOQbALeMIUmScW67gKfjP7B90bU8wSj2IPYNvLvd3Ir6LvrgCK7fP9oTaVeXKbpB4i3VZ327fRg22Yfg5VKCBErCu2mHkwLPGFjy0ME+537WAVB3/gR4DveSSM56yWNzweBknS5VcxFb9xumzJyNc1/jncEIuY7tU6iLm/Dncu+3XDYZpBzKuTKYRmJImYYlVMTM8ESzTSknIE6UtX0wUD8P3w7QfY899LDYtFWRiM9YCAqWCwnhqNqdZJr1k4EWufCYyH/vFKfzzW3oGJYEC3hJhgJ28cPVOcHGI4/cWQwXlFP5+FC5rB/1uT+Hcea0cCqatTZgyOWdGcWTG5jlIaUycngA/1XJQcxbjvEU/QVFFH4uMpG3nE1ztxwl/fL18//7yw+ry0zxcbK5cW9wPU9rQ4TxUUeXbbiaXEkHOHTBIhGEqU5ZlyAXjOjaegwKXpI/WhnXTbSawli5PdZYy54CU+ThmVgraNp8rSYrBKDMHl6OWCZ341BgeI3PAVb80JYGATJJfZVYqSiibo5tQrAn9BcN94fCvuqiGgi9iUNwkkhrF5vTwOTWKyC3TKLUSoNGKfM6zmRGs/GSgv8YSfdsdi30HUG+td61jUyGlVUzyOGVK5SmdK62ZFBrQJtxJ7RaPgC+2zTls87a5CUVVtNuot4hHuluyvCMDIXY9n4PVscXQggcz2Cc/HuSbbYOTdisS1dsKi7WlPpJILpxQW7ncYZZzhdyqxQn4SxU4i3NegVVFHh025OCz6LGxX9dRXZVFRZdZvW7qii6Zpzr7AxM619ZhTHTqlm+vsHmRDHZtL5R8atcT7ny7/sWr4qW1/4+r4rpbZxjG94uZ7dIZdP1GXO9fPkps7nbBUzX9eUUTfiGOL87X1/Pn1Ty57utq2VfyYWyyRVu3UH5GV4fRqsSbh/8AAAD//wMAwUhznv8JAAA=", "base64"));
  res.end();

  return __filename;
};
