var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 244
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings : 202 7184us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings : 201 19628us");
  res.setHeader("location", "66cec8e4-9ae6-4729-8119-3f341e0e67c3");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTQPW/CMBAG4L2/IsraXnX+ttmKunTqQqeqg305V6mAoMRIIMR/byBB7YoHD/fq8avz6aGq6rapq0VVW0tMnjWEyBa0kwG8EAFUVlowsnWk6qcL6Pm7HUof+7dJ9i9LgWLK+FC438b1HB3+ReuOYmm77RxlaqwmFmBDMKB9RvAaGXzIOUrpvXIzHF/c3FBwQsqgQaJyoHV24NFakMJGDgZJWpoQdft+4NVxxzMNwmjUPoGywYOWTBANRaBMnDJqxqAn2m7H7fZUuv49/TCV4eI/q69ruOESm1jiZXYaB5eqnmPh5nW8rk0SJQI6kH4lxMKYBeKzsvIRx3Nt+DPL48fAt39klTxZZyCRQzAp+nE5lSClnGJssEkx3Px+19zdOZv7O0d+fjj/AgAA//8=", "base64"));
  res.write(new Buffer("AwCwamSXLQIAAA==", "base64"));
  res.end();

  return __filename;
};