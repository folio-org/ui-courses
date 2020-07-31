var path = require("path");

/**
 * GET /coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60?unused=0
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60.. : 202 28374us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60.. : 200 69281us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWwXLbNhC95ys4ujawARAEAd2cpAdNE7czcU6dHBbAwmYrkRyQ8sST8b93RVKmLNuN3FQHjAaL97BvsXjg9zdZtqjCIltmCx2d1cLmDEqDTHmdM2cFslDIaKMJCjRfvN0BatjgALmAFG4h/Z25hBiq+nqMB+x8qtq+auph2dUNZh4SZlCHLI4rsyZm/dZt11XAuoceuz22hdRvaG41piUKrY0SnhXCU1pBeQbALeMIUjjOLVdwDP3d/YW+38G/U2CWeDLXochfifQm++wrrP2U5TMaV7Vfbwdh19ism+u7t1mLfRr+DrpbWAM2dT/M7Fk22EOAHuZUadInpHqEDzQM1JJLznjJcnHF82VeLFVxllv1C6ffRESobRteQgm5zO1SqbOc8+dR7+6+dJimijuujNMITElTsMKqnBleCOa0UhJiobTli4Hgnsb7ofa+2aYOP1ZdTyWYeIy1gEApoDCBGspr5mSQDIKIKjjhQh4WT9EvHd7JdARJeE1kCfaS0sU7wcU+it96TDWsp+C3R8F142F3qlMw+qCVR8G0tQVTJnJmFEdmbIwgpTF5+QR6rGDW8Aq2wxb8BFWdfawcCbqbw74JY/i3L+fv359/WJ1/moNVd+H76nZY0KctzoGaqtxvDyRSAsi5BwaFMEw5ZZlDLhjXuQkcFPiiPNgVNu22m6Ba+lhqVzLvgfSEPGdWCjqiEJUknWCUmaHrUcGELUJpDM+ReeBqty0lgIBMkvM4KxUl42Zsm6oNYT9juq08/tFU9VDgRQ6Km0JSQ9hIQ4jUECJaplFqJUCjFXFm6Q7gq9DtGP48kSP7Orb8dNbUQZt9i9hSSGkVkzwvmVKxpPuiNZNCA9qCe6n94gD2L+1xOtNhe1ylqq76u2x35Q+09mRcR3ZAzHpegfWxXdBW+6s9JTxezau7Fie1VhRqZxAs15a6RSJ5aEHN46NHF7lCbtXiCfhlza/gO9S8qslfU0fu+xA7tuTLJmvqdVXT49Ns2qamh+Gxtt1VSFvfN2lMb+qHr//RnEUx2Kw9U/LYZifU6232JHt/ed//194vtxuHaXz5HyyT7pTflfzy4aNgje3NGHpawR/Xr+Bn4vHj9rPV+3HtntnzZyp3/+b+HwAAAP//AwCPsb0KWQkAAA==", "base64"));
  res.end();

  return __filename;
};
