var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/coursetypes.. : 200 3065us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTWvcMBCG7/kVwtdkNqMvy/Yx5JJLCyE9lR70MSKGXcnY3sMS9r9H9nZbaHdb+nERaDTPy/AwerthrPJ5P070chhoqljHPrO3Ui31PizXquVaoWocyLptQAnyYLW34KMnF1ERtqq6OyHJ7miFnhIbaJxyOr8EmvzYD3NfSkvDh8xy2vaJmM+7ISdK87l1R7MNdrZL32mUZciR7EzhsRwrL1BwQAFcvKDsBHbCbIzCW8QO8WtSwfZDuIZx02nVcdzUSlzBHg6fJhqfTh6MkYa4DmDQ1aCDRrBSRojKBNfyKLg31RpwLOfx7geNUWMtiRpwvPGgUDhw6FvgDmMrQ6NL7E8aP66KfuGwT3Dy/F81tn+g8QJ2XQJKjSQMhxBc2aVAEWxtmyLSRxWROxfDFQn3v12phzy/npfKpnDJzfTvcnT9V3K+Yd/lsC9LRDXn2W6fyecxrP9P3hzfAQAA//8DAEExLtWXAwAA", "base64"));
  res.end();

  return __filename;
};
