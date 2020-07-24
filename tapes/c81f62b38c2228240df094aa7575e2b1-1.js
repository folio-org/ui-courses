var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/departments.. : 202 54497us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/departments.. : 200 2165us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPWvDMBCG9/wK4bVROMmSY3ks7ZChSz+m0uEinWODLQtbGULIf6/itKW0FALVcEiv9Bzi4Y4LxjJHAcfYk49Txir2yo4pTXnrzsdM1NYIIRW3TiJXNRI3SIoryIvSlWBK6bLlBfHY0ww9YGyox9ja6fPO0WTHNsR28POTjbfd3rV+x7ZDbFjYj8TQO4YhdC05lujmC+4posOIZ/LyvRTakTCSu0tl7ihBAoc1l+oZ8kpBJdarosxvIK2PRonaB3c9NUOnVE/Ln1p0UZRKWK6FJa6cshwRDAdCKbYABhT+0nKfRDfsybbkLV1hZkdDN+wOSxYojvN2VhSwQxp8nJP/KzL6ekWiqHRZSb0y4g+xt4eXicbNxZLD3IBWNV9bRVwXaXi2mFteF6DBCkyy8Jtk9nbulsUhYvdIdhjdPJJycXoHAAD//wMA3kCX/KoCAAA=", "base64"));
  res.end();

  return __filename;
};
