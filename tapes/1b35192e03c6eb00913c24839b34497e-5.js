var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/processingstatuses.. : 200 3087us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTvU7kMBSFe57CSstc5H87KVc0VEi7S4W2uLZvUKSQjBIHCaF59/VkmEX8TAFsY8k++a6sL8dPZ4xV22mMNM/dcPcrY15mmivWsFv2VMISd2m/rYTxBus6AQ/agvZBQY1KguaGt4KrGq2oNgdkwHtaoauBRczYj3dl+jFNNMep2+ZuHNaPflKk7oESC0tmw5jZI+UjtlA6YveUMZXTPXO4WjmME2GmdFmWdZbkUgCXIORvrhrJG+kuHPfnnDecP08q2LJNpzDhGqMb7S6ssSewH483M01XBy/OKUfCJHA8WDDJcEClWmi1S6EWrRTRVeuAXVl3mzda0SepXfRAHlvQKCz4IBzw2mrnrSKl9Dut1wMbp0TTKaPX+5DS5pVRfMCux9DT94WKzwj9ADutw4dWeowWMMYE2jgDvm0RlC3144GEN+9bVgqEff/SlA8KtuYMh8SW4T+KkPpLIv5hLyLYn/2IKo+l9uW+5feur1Cd7f4CAAD//wMAl4vtzKQDAAA=", "base64"));
  res.end();

  return __filename;
};
