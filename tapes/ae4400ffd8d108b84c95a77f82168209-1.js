var path = require("path");

/**
 * GET /coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTIwNiwidGVuYW50IjoiZGlrdSJ9.VEA8ID_FQfcqIMlntaG-O8FSdQrpCEXytIUWBtOz830
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:40:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c : 202 7003us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c : 200 35757us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxVy27cNhTd5yuE2XSR0Ob74Z3toOg0gWO0yaIosuDjMmY6IwmSJq1h5N9zpdHMKE4DGMiuqBaCQPKce3juEfnwrKpWJa2qi2qlLFhlEhCamCVSJ0qCpoYYy4BZGsGpuHoxAmKz63p4Xfqh1B/WezSj0oE2nKSIFDKaSIJTgUDKLmsadQxpjy4DbGdQ0tlEFjzxXBgsqYA4CYlkYcCxELU8gGLTFkhrhI7ABxzCweC72CSYqKQSzhpNlRRWTBhcgMvbpvPd/esm+qE09VxXiZid0plEljKRjAZiA3jCTTaMx+hNpN/leBM+QhxOMhYOPp0WQbXf7qVf1jX8cxo/bunVu/Pr6/OX6/PL02TpL+NQPk0Lhm4Hp4kauzHsFpuUFIDSiOaqsZ9BOhKAMkK1sIl66aMyi6p+2+76Gap5zEYHQ1CzIjIJQRxnZmym5BGYt9KeoJsSRn8O3iZjLRVAoqdyLIsCwAPhUYvguEQx4YRtu7JF7O/QfSoRbptST86uhJfUKp6IdBlfKXPiWXZEA9eSeY3xyCeWfgFfp35k+POJHNX7ieTz3O0Wuq2voR5+IDHfcPyfmP9wYtDDzd79q66kDzBUvzY19D/11ZUP9+j5HVSp+K5AfwhIbOqhK2E3NN1c+eGbFv9cYJPweH1R/QIbqJfNPoJvcPHb+xZmH3lwEi1jJEfviLQO1RtBCVoLirucgfvVXnv1/pDVXdiUfUofKZlm+jvo9onb5A5SdXlWvaqbdmFku/Fxr/gG/q7+aLq/TnPJD/Am335dYsUp049lRL/Z3Oy2Ya52+xse5PpsLZW11ZWRrppAR/va+2nZNX5Ux8N+zLOv48ENk0NSyUqieWJEojPERakIXkTMCOdsmO8WhN41k9eHMOdggqGZkWAd/gcYQeKdw/8AZEB/eQgqjzuYIrC8IHy9aAfYIBiGhojAUYAYw8S1Iyk5wWgMPFFY/TvD4wPjcFw8mXKZpOvptq46GDOPITwK38LgsUV+USd2gD1LL/E194pjfgzh/C0VF5JfSHUmDH1O8TkU2rXp6Zix+LPPXwAAAP//", "base64"));
  res.write(new Buffer("AwC4jMZYdwgAAA==", "base64"));
  res.end();

  return __filename;
};
