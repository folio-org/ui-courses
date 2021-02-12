var path = require("path");

/**
 * GET /item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3
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
 * referer: http://localhost:3001/cr/reserves/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/0b285e71-198c-4c4c-a93d-2c3a30aec74e/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 202 21876us, GET mod-inventory-storage-19.5.0-SNAPSHOT.534 http://10.36.1.253:9137/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 200 1818us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxUyY7bRhC9+ysIXZOWel90m4wdwMjEh0Q5BUHQS/WICMkmmpQmguF/T3PRjDJ2chgdBLJZ71XV61f1+V1VbeqwqfbVhmAcCHYR0Ygl4tZi5IAIhJ0RjgYTDbDN9xPgzzPkoU7dBCN8PjrmlaUeocXPPyIWxDE1oe4eh1/Apxw+LqHAYpSEMeSMpYgH7pEl3qDgiZYq8BCJWeAx5RbyxzBMuN+rP+ZDZ7NPAWYqMyVbYqcCHuAMzb1tmk+n1kGeQw4/CYLFVmtNRLWt7oSuKMa8+vFQ/fzh7v2HBQ0xgh/rM7yg71Pbpw66cc7+uUSVOP8G8gIbLz2s3QtCiWJWIRewQdxgQE4phogKmkXqJIuwKagvS13dqShgx1X1zVKtP+bUpSY9Xm4OL2Dzve2voVe5ujTCv/TzdfanZqb89PrbMNrxdNtvZ9tF6buzrRvrGri2FOy4fKGYEoQpIvSA2Z7iPTZbyuV3uDzhl07aEp9r2xxepCBWcMcZQRR4RFzQgIy3UP4ApPTGakOX3nrIrZ3u4iHZ7oaBOsO9LAzR2yJmiUdWMYwwAxDUlEulamEo7uhTtvnymgG4BkUm/SND3Jcna6JGlGkunKMEW/5VDX5Wb2WIPkjugSBpjCg1RIw0L7eqS3pLqdZMka9qeCPDs03fztAUguKe2t95D8N6++ttn3I90x3Hsd/vdk9PT9sm+e1jOu9KulDn3Zj8DnzdY0X0rlhdYYo5Ndvj2DZXZzR199cB/h5nqofyMlT2tXuubhh+7QtdrP2LxQ9TXJVi5VM3zuO3YvqTa2o/efbbcVXqmss1OMNi8eFY96tIrHgNi2IRCtPkOa6RsdgjLJkMUjoTHZv9ejMM9TCW2pr7snCe19DGCSO1N4B8CL74VklkypJEGiS2ELTDoWRcSFoYbRkVe7tDMpTuw/v/HyCxDtDaz6kP/wUiai/onoutMeSboB8uvw3TGp2BZdeost4DUthJJILAyDIWUeQqOEMiJV7NKrz78g8AAAD//wMAvxDyDSYGAAA=", "base64"));
  res.end();

  return __filename;
};
