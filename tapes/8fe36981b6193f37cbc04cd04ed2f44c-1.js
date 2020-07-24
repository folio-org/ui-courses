var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:16:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/terms.. : 202 63791us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/terms.. : 200 1805us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTu07DMBSG9z6FlZUeZB/f6swMLCyoG2I4jh0RqWlRYgZU9d1xUkKllArUerDk8/vz5ZO9XzBWpNi1fcFK9sL2eZwrTRiGBZF2FOoaXEQPysoAq1wAj15z45XVhMXyiGypjSP02Gyo+2TIkU9Zn6hLD5SOE4YEuADhpjxuwyyVINSUtjFRoERDfDxfLlZdzMQcs4BqzWWpeCnsvXL8juf2vVCmPt7D/6kROuT+sJx5qZ0ViE4BcmlBqdrCihsDKAxFp3mFpjrzsu6abZP+FpNXNZfF5E34zWK0lleI+aEui6mCiN7GAGjzPZQ3BG5QFGwtSEstauPPxDw11RvFTUt9dnN6FHM3woHgIOTvboYU84lvd2PENW4m6uSGvS7Hz7VLtHmO1a4L4x+Ti8MXAAAA//8DAN5jsmJ1AwAA", "base64"));
  res.end();

  return __filename;
};
