var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/locations.. : 202 9267us, GET mod-inventory-storage-19.3.0-SNAPSHOT.448 http://10.36.1.174:9168/locations.. : 200 2798us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTW/TQBCG7/wKK1cYut+77q1KClRAU6UgDojD7O4sspTake1UVKj/nc2HCyINrSJxqNQcVsps3pmx32fHzs8XRTGaNwH7qqm7UXFcfC1+5liOVnH1daRlSKU2CQKPCRRnHpwnBGGT5SIEtIGNXm0kNV7RWnRS1/RjiIYmbqLvPx+Nx0eTs6OTYavqTkJfXa+3+3ZJQ7ju+qpfrno623ShGBFjAQE1d6C8KsET48CMdJGhwqDtXT28Wiy7rdCIkKzxFnKnGlSUEkrBLVBMSgTi6JQbhPPKt9jebJU6WueYJAjI1KpkLk5IIIKRvhQqN+IH5aKtrrLyktrrKtBFU9X9OodExZwWEVSZ8hKTAOSpBEPCKI6GSp6GHN0f4rO49eJxGYpv9+TYZhi2rqjHiD2uohuHV7eqJewpTvKy7lcwwYBZEPwTk8dSHWv2Opd/yfJn22dWLRfx8aq16Davt6/+IiuFaFS2AExZZmtcYuCyz+DKlFAI56TlO2R9xKouPmyM2g/Yx2fAnhBg+iDA9IOAcacQyansqc+jKxgEpz2CyjPLSiZMiHoHsGk9r2raQet0iETqQlstVuisNz53VKSmLZq1rmipa5ZtoO7u91UXmmtqbyZVt5jjzfn9hf4/qMqylHiMUEqb7wHPZ86nkrLQh3wUudQx3Q9qEFqV3ivgZbCgUgj5EaAFyJIMF8nb6OkhUL1HaUhHiNrkHDplL3iI4IV2VikrSLJ/g/qoDP8XVOMOAXVQ7QfVapcvwgegEHi2xjtAny1O1hvOnBApxV1QZ1/O3hann96dT4vxZP8snD7Pwic0C9VBs1A9OAu9UNzmxy1wZQwo4hGQCQc8H6o8JnVEZ3cQu2gWyzm2xYwwVvX3YtzM5xTWo28vbhfPuD0h3KQ4BLdB9Y93O6misMEAOvKgDPeA+XUPdCR03FpOdvdfw+XpeHo+Kd58mE5n+wETz4A9IcCsPQSwQfUbsE0ro77pcT6j0LSbizQvbn8BAAD//wMAjXs1ysMOAAA=", "base64"));
  res.end();

  return __filename;
};
