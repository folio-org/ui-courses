var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses.. : 202 6076us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses.. : 200 77778us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS3PbOBLH7/kULF/X2OBFkMjN40zVuDbJpNbZmsPWHhpAw+aGElUU5Y1nyt99m3pQlCzblCaT2dTSBz9IdBPdaPz7B6r826skOfPVop7j/Cx5k/wz+Y2u0LUitH+eAbiYRW2YBZUz7TPJnHKC6RTSlGeZVgbOzlcmU5jg0uhq2tRV0lTJRygBq2lTldXN/WZYwLmvi1lTVNPl6OtmEe6TKiYw9QVOm6QsIm4Hz6BuJnT5ajUhkRqTa+FZKjwyHbRnANwyjiCF49xyDY+Nf3b/Rt+0DlbhbQM8wl8/xB/J8W1y3U7YU+a6AfvBXU19uQjF9Ca5wWUWzpMZUnbaXyngkMwOpIj8TLCBAA30p9yuVI3QYHhL35buJZec8YxJ/knwN8q8UfqvIjN/4fTVOSO7xSwMt1ubPSx/PqxzuaqRd8W8oWA2a8G1RUMlEXzAtjg8czZ1DEO00XBvvAtnh+yfWY7hLsmoxhtyWEO9nhB+abCeQin8dszm2t4Q2Rsyx/qu8Diriq7MFGg=", "base64"));
  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
