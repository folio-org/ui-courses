var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes.. : 202 6322us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes.. : 200 8797us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUQW+cMBCF7/kVFtdmtmNjwOa2aS+5tFKVnqoe7PFYQWIxAnKIov3vhd1NV81m2zRKOFhimPdsvnnwcCFERuluGPnmvucxE7X4IR7m6lxvwnKb+VjpnMgAWVeC1tKBJdKgsDTWRm+DouxyL+nchnei9XotPqU2kZs4PD4NPNLQ9FOTun1T24qmg56Hca4cmjY8ueAmt3TsD7IcceDF6PO87JQKFQJWoPSNkrU0NeLKWvUB5+tgdFRd3X8febjev01wucVCR6hIMxSlY/AuJ4glFkjSsVPu6HDXh1fse1D9/747g+28bi+fDMHKQqM2HvLSGtCKCVxBDigS+4ia0eqTIVx34k+2TwfwJYnUtU3HgtKmTx1302vHgHmtsZbVykj7PI5zEKu6qFZVrt8fYiywzJkNeGkINCoPHsmC9BhtHkxRoT+B+HUH6C8Efyf4LSGifDnEU9V5BJgXyKqSEIKfcxQ4giudgZli1BGl9zGcQfDxn3G6StPtY6BcF54jM75Bvs58bi9THdGIn4tDNqXJtd+Y0hB2vz99sf0FAAD//wMAqDXwdxYFAAA=", "base64"));
  res.end();

  return __filename;
};
