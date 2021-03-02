var path = require("path");

/**
 * GET /item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/79702b52-0d7e-48ea-b7ef-a4e74289f000/c62e7511-dbe4-44e5-8592-9777d409ed42/de1875ec-0821-452f-9e5e-2425e21c8de2/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 202 31470us, GET mod-inventory-storage-19.5.0-SNAPSHOT.541 http://10.36.1.217:9133/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 200 12747us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxUy47bRhC8+ysIXZOR5sXhjG6btQMssnaCWDkFQTCPnhVhikOQI20Ew/+eJilpZVs5ZHUgJKqq+lXdn98UxaIOi2JdLBilgVEXCY9UEWktJQ5YSagzpePBRANi8eNI+PsA/VCndqSxanq17U8qdYYdvXxYOTO2qQl1+zT8Dj714WGGgohRMSGIM5YTGaQnlnlDgmdaVUGGyMxMj6nfQf8QhpH3Z/HX9NLZ3qcAk5QZg81YiBF8rg/wcQvNAYP+2gfoJ9Tml0KWjJZLrTUri7tSF5JTKoufN8X7d3dv380KYwmPcIDm3jbNh/3OXehX5OVEv8G+xH9h36ddl1po85T/Z0Qhzr9CHGn52MGpfyXjrBK2Ii5QQ6ShQFxVCcKqoEXkTokIC2R9mfNq99hDm09zW8zZ+m2f2tSkp+PVyyPY/t52Z+i54W3K8NUEfN37fTNJfvj2vyHbvL+ut7W7eVb3W/CfIBRpn89FBZvn/zjljFBBKNswuhblWshlJcQPlK5xvpdadojva9tsXprBbCmdFIxwkJHIkgdivAV8ACjljdWGz9V10O/sOI3HZNsrBe6M9AoVorfYTsQTWwmK6QCU3OBYeTUroD+61Nv++K0CSA0VGycQBZEev1kTNeFCy9I5zqiV3+Xgp/6dFKIPSnpgRBlTYg6REi1xrhrDW861FhX7LodXKlyM+nqFBgXQP7W/8x6G0/xP89739SS3zblbr1bPz8/LJvnlUzqsMFyo+1VOfgW+7mjF9ArNXlFOJTfLbd41Z2c0dftpA//kSeoRfwyFPdi6sa6BM+bshuFjh3Kx9i8m34y4IsXCpzZPC3jidHvX1H507W1ckdrmeAb3MJt82NbdqUkCvUZLtAiHcfec1MRY6glVQgWlnIlOTH69Wod6yJhbc49H63LKFq40SnsDxIfg0beVIgYPLdGgqIWgHQ0YcRbZQba4Kvb6ivSA1Ye3NxaIsrU0a+yn4ua0QKd69l34LxKr1mW5pmpZVvIm6afjH8N4imerSIdpK4o2l5KUAv1ivPAEj5LVIVTSh6sL1NghT8v/0F5VMKpu6t2t/admTcWSltXXmWD8Q+3ht1S3+TwOK6ked16aiI8QcXdZNEQBV5JZBYbFCz3bGN/DeHn/bxlvvvwLAAD//w==", "base64"));
  res.write(new Buffer("AwBZ8gThMQcAAA==", "base64"));
  res.end();

  return __filename;
};
