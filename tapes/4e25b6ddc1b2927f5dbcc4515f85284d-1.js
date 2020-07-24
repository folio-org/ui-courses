var path = require("path");

/**
 * GET /coursereserves/courses?
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/83d1901e-9727-4ee1-8fb1-35045e9230b2/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:17:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 9840us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 76200us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
