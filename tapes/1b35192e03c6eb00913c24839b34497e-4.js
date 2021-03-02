var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
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

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/processingstatuses.. : 200 2910us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALxUy27bMBC85ysIXes1SPEhSjcHveSUoo9T0cOSXDkCFMmQ6BRB4H8vJcdwG8dBkxaBAALi7AypmYEeLhjLNkPvaRybbv0lYtyONGasYt/ZQwIT3ITpNQu5LWpvFHArBChHCjD3BXjvBPnp0TZb7Ckd3tJMWq1W7BN1IWkfsECjH5pNbPpuHrmkBDKPEdt+vaXAhmZ9E1nX/zwwbiliSPg0vr9T2vQDYaTwMS2zTM5zAVwCF19FUWlT5XqprfnAecX5o9KRdnn/baThav9ltXI+BMMBS6VAy1JD6aUHiQXaEArlAx0VtpvwloMfaa8/eBbYpXW3eJKI0FZjWQbgThlQ1kkoUeaguOa14LJEI04SueoOXr+QyecUZ3OXsnDbKYnI7in+FtFbg+Gi0rzSesmVOuPPC7bKpVTvYWuayVXhLZDFGhQKA9aJAnhpVGGNJCnVia3XHeuHQMM5R68nkMLiD0fxDpsWXUv/bqgWrzD0Gdp5O6yrc4veAHofQOlCg61rBGlS/bgjYfVpy1KBsG2PTXmmYDPOsAts2/1PI85V5C9pRyPYj0kii32qfbpvinf+L6qL3S8AAAD//w==", "base64"));
  res.write(new Buffer("AwALs9MeNgUAAA==", "base64"));
  res.end();

  return __filename;
};
