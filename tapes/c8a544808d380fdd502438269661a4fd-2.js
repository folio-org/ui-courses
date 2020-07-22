var path = require("path");

/**
 * GET /loan-types?limit=500
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/loan-types.. : 202 12728us, GET mod-inventory-storage-19.3.0-SNAPSHOT.449 http://10.36.1.55:9168/loan-types.. : 200 2338us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTwW7DIAxA7/0KlOvKBJgk0Ov2Bd1u0w4OmKpSmlQ0nTRV/fc56bpJqzZNLQeEDc/oYXGYCVG0PXbD+5Z2hViIF3HgHGfXcQwL1DHoQCBjWSVpo0PZWO84jFVtQwjOlsX8hHS4oQl6opbCQPG8saEBIw44bp7KczJkQj7zyNMEGWWUVLU05lnBwuoFwL1xcKd4fBZiar+N/6cm6Mjzcf5Di1wDWmMloTFaWkhGoqm8jNGDVqExUdGF1kO/zzsSmXaU3/i5brbz5TV2Z+p3O0PWUa1B6jqBtIFX6JOTBrhbDRsrtBd2S8K47lYi9/3mZjVQ9gq1L+oPtcbbUIGWKaCX1nluXA1cCYhK41MiU182DjsR1jns2/H2m920ucbtTH27idexQjH0A7ZLCn2O0xe0s+MHAAAA//8DAN4cu6WYAwAA", "base64"));
  res.end();

  return __filename;
};
