var path = require("path");

/**
 * GET /loan-types?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/cf3e8181-67c3-4653-9eec-db2c54ed49f5/b5d06488-418f-4c65-a440-4f2613619e6d/5ad0e9c4-586c-4365-a55b-f2042677d606/7212ba6a-8dcf-45a1-be9a-ffaa847c4423/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/loan-types.. : 202 12498us, GET mod-inventory-storage-19.3.0-SNAPSHOT.449 http://10.36.1.55:9168/loan-types.. : 200 2299us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTwW7DIAxA7/0KlOvKBJgk0Ov2Bd1u0w4OmKpSmlQ0nTRV/fc56bpJqzZNLQeEDc/oYXGYCVG0PXbD+5Z2hViIF3HgHGfXcQwL1DHoQCBjWSVpo0PZWO84jFVtQwjOlsX8hHS4oQl6opbCQPG8saEBIw44bp7KczJkQj7zyNMEGWWUVLU05lnBwuoFwL1xcKd4fBZiar+N/6cm6Mjzcf5Di1wDWmMloTFaWkhGoqm8jNGDVqExUdGF1kO/zzsSmXaU3/i5brbz5TV2Z+p3O0PWUa1B6jqBtIFX6JOTBrhbDRsrtBd2S8K47lYi9/3mZjVQ9gq1L+oPtcbbUIGWKaCX1nluXA1cCYhK41MiU182DjsR1jns2/H2m920ucbtTH27idexQjH0A7ZLCn2O0xe0s+MHAAAA//8=", "base64"));
  res.write(new Buffer("AwDeHLulmAMAAA==", "base64"));
  res.end();

  return __filename;
};
