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

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes.. : 202 6305us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes.. : 200 3326us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS0skMRCA7/6K0Fctrbz6MUfx4kVh0dPioZJUsMFJmu72IDL/fdM9Dgvq7IqYQ0Eq9RXFR+X1RIjK5+dx4ruXgadKbMRv8VqyJd+H5Vp10ho0rQNddy0YxR7IegIfPbuIhrEz1dkeSbTlFbpOYuBxyunwEnjyYz/MfUktBTdZ5PTUJxY+b4ecOM2H0i3PFGimpW4/yjLkyDRzuCph5RUqBGxAmTvUG4Mb2Zy3sjvFct4aFep5CMcoJQuysc15o83n1OXL/cTj9d5CIN2hNREabxhsTQyOtIdYo0UviUlRtTbYlbg7eycxWqw1cwtOth4MKgcOfQfSYex0aG2D7oPE21XQPwz2CfaWf1Iiyq9L/EgdV4DaIqtGQgiu7FHgCFRTC8ViNBGlczEcUXDx33W6zPPjYaEohc/MTD+wX+o7ag7UXzXiYelQzXmmp1/s8xjWn6dPdn8AAAD//wMABJPn+5EDAAA=", "base64"));
  res.end();

  return __filename;
};
