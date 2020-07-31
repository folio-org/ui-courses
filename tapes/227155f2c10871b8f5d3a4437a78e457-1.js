var path = require("path");

/**
 * POST /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 143
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
  res.statusCode = 201;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves : 202 6897us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves : 201 78724us");
  res.setHeader("location", "a8d4e26b-5f99-48af-856f-de43b7fae7cc");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJRTyU7cQBC98xXWXHIIhXpf5sYkiiBBBEXkEEU59FINVjy2ZXsUjRD/nvYyw8ANH1pWd72qV+9VPZ0VxaqMq2JdrJyJApnyIJO1IIxLYKRKEFFwr5NDHcLqfASEZtf1eFP2Q1k/XM9oY61DRzQgNRFECAo8iwxcpElET33kcUaXA24XUFRJB+odOMY1CCURrMAIiWu01AclfDyUbEuM1xk6Ap/yVb70rgtNxCmVkNwarYgU3PAJkwNyeNt0rtvfNMENZVMvdVOISgSkoKyVudVEwAiCYGxKjjFjuKaHHC12W1djPbzJIXlIdtQn0JhAUOLBeHTAdNKUheB0IEce5VDNNDddGR9wKL42NfYf+mLj/H5dDI9YxNJ1JfYHSGjqoSv9bmi6fkT+XprOT7Xbzsm+lFjFbMF5cYUV1gv0Nfg2B9/vW1xYM29FUJxCCm402WaHNCdAOKJkuX1kbjWleS7+HBTY+aqce3/DZHrpH7Gbcl9WqcNYXF4U3+qmTS902sqFmfEt/it+Nd3fl7foBvye7l6XWDFC1VsawVXV7W7rl2p3P7LZ6uJaSGOKjRa2mEBH+dr9FPYp/xTHgSjrfnB1OKihk48yGgGKRQoiKwM2CAkqeKq5tcYv83cCveqWfRkvyMt3LP3YTKb0h1nz2muSKHhjDQjLBDhrKRAUPhvBvJdpbPV5mvOTiXX1iW9oPKfUKeCeZaY8Zd+YshCj5ZSEvGoE503Z4uCyqO5kT0KHWeX4OR+Luiw7roHTeyrXgqyJvFBGfxzbOAo4Yzb7nz12CwlPhPEqz7hgRoK0goMhMnemhGAuSaHsEb9r47trLpj31xzlO3v+DwAA//8=", "base64"));
  res.write(new Buffer("AwBSWJSvzQQAAA==", "base64"));
  res.end();

  return __filename;
};
