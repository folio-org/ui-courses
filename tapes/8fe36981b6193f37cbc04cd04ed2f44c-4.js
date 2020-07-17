var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/terms.. : 202 6669us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/terms.. : 200 2811us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTPU/DMBCG9/4KKys9ZJ+/4swMLCyoG2I4x46I1LQoMQOq+t9xUiKklArUerB09/o9nx+dDyvGihT7bihYxV7YIcc504YxLIi0o9A04CJ6UFYGKHMCPHrNjVdWExbrk2VHXZxMj+2W+k+GHPmsDYn69EDpdGBUgAsQbtbjLixUCULNahcTBUo0yqf+crLuY3YsbRaE3XBZSVVpfa9R3vG8vgtl18d7+L9rMh3zflwvuDTOCkSnALm0oFRjoeTGAApD0Wleo6nPuGz6dtemv8HkquYymHwJvx1MideAmV2XwdRBRG9jALT5HcobAjciCrYRpKUWjfFnYJ7a+o3itqMhs/kZiiUb4UBwEPJ3NqOKuePb2birhsadDQ17XU+fa59o+xzrfR+mPyZXxy8AAAD//wMA1AvxDHUDAAA=", "base64"));
  res.end();

  return __filename;
};
