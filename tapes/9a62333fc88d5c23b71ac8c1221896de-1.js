var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/departments.. : 202 14783us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/departments.. : 200 3058us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBRF9/wK5LUhetj4c6zaIUOXfkxVhxfeS2LJxsgmQxTlv5eQRpXaRmrVBcGFe4QOHGZCJMQOR9+z9VMiGvEqDiENeUunZaLyoqi0MjJXhqUmbSQi1BIYU7UCqEFjMj9XLPYcS/eBuBVPpmVreLpsE09mbJ1vBxtPLa3pdtTajdjw0A2b/Vw49mOcCrQkHHbIg/UxuVB69kjo8YQ4XzWEZmT0THdhiOgUUiUhk6CeQTU5NHm+CNENQAPwQQq1naNrNVU2umpUuah0caV2u3+ZeFyePa31yhAVILHWWuZZncvaZEZmWGJFVGpDnETAMYzH+VfNa1MrlWppKEWp18iyRtZSQ1ZUVEFdpfRN8wP6LffoW/MLx6shPInbjRzVonNdyyRCezv9X20Gf1D7Q+1TjHg7IRI/eOwe2QwjxW+Zzo7vAAAA//8DAGgG3YuuAgAA", "base64"));
  res.end();

  return __filename;
};
