var path = require("path");

/**
 * GET /coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
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
 * referer: http://localhost:3001/cr/instructors/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/bfc64439-e9f8-40fd-b949-806310d80697/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60 : 202 6964us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60 : 200 19350us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMRWy27bRhTd5ysIbZuR58XhjHe2U7RGHi0QZ1VkMY9Lmy1FCkPKiBH433v5kElLsivXAeIFLfDynLnnPuf7myRZFGGRnCYLlTujmBHEZhqI9EoQZxiQkPLc5DpIq+jibQeo7Ap6yJmN4dbGfxIXAUJRXQ/2AI2Pxbot6qr/7OoGEm8jJLYKST58mdR50m7cpiwCVK1todli1za2K3x3ObjFUqW0ZJ6kzKNbQXpiLTWEguXMUWqotLvQP9zf4NsO/h0Nk8SjueYif0XSm+SzL6Dyo5cHNF5Wvtz0wq6hLuvru7fJGtrY/+x1r21poa7a/s2WZQWtDba1k6v40kfAeIR3+OipOeWU0IwIdkXFqUhPZboURv5C8W8kQtRmHZ5CMX4qzKmUS0HpYdT53ZcG4hhxR6V2CiyRXKckNVIQTVNGnJKS2zyVytBFT3CPz/s+9r7exAY+FE2LIRh5tDEWLLoATAcsKK+I44ETG1gug2MuiLDYRz+VvKPpEBLhGsmi3UqKZ+eMsq0VvrUQK1uOxm+PjGXtbZfV0Zj7oKQHRpQxKZE6p0RLCkSbPLecay2yPeiugknDC9jmJfjRFlXyoXAo6G4y+zoM5vdfTi4uTt5dnnycjEVz5tvitv+gjRuYDBVGud3MJKIDQKm3xKZME+mkIQ4oI1QJHaiV1qfZ7FS7Wm+aEaq4zzPlMuK9RT1BCGI4wxSFXHLUabXUE7QcFIzYNGRaUwHEWyq7Y9EBsEA4Th5nuERn3IRdx2KF2M8QbwsPf9ZF1Qd4IaykOuVYECbHR8ixIFhuiAKuJLMKDMsnlmYGvwxNx/DXkRzJ16Hkx1xjBa22JWIyxrmRhFORESnzDPtFKcKZsmBS6rnyixnsmfI4nmleHlexqIr2Lulafqa1xcG1Mw6QWU1fQLU7LvCobWuPDg+teXW3hlGtYansBgQRymC1cMAZmmLx+NyDy6kEauRiD/y05hfwzTVfVjhfY4PT98G2O5I/1UldlUWFy6deresKF8NjbV0rxI1v6zi4N9bDrocu9zj5hCGAa5BIijXiDDYJpkYwGvCfyQ54+HtRlt3SO4cSB8P0gbPxoXMZFzKdd/QrpuiTC+X5lcLSbjmkcmlM9ng5TLiXr4cZx3OL6bmzX7eahuXU5Xovn0p4HDxckSC6oeVw5miGc8gqwy1PPR7CD+Tzt2Xyfplc3ECDTdzOC2+eUZXpmfyfmdFsmTLxkzJ6+OwflNHk6/+8PQ3OSbOUfPce9Oqw/HdQDp77Y+9fnzYrB3G4mj/caXDp+W4mfnq4tZewvhlM+xE8orDokj2+fb42ekcU1P6Zr4nc/Zv7fwEAAP//AwAHwm2l+gwAAA==", "base64"));
  res.end();

  return __filename;
};
