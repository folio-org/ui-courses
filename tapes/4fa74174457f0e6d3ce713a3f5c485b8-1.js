var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 283
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courses : 202 14184us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses : 201 3875us");
  res.setHeader("location", "c62e7511-dbe4-44e5-8592-9777d409ed42");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPwU7DMBBE7/0Kq1dYtHbsOO6NigsS6ql8wMa7oRFNGjkJEqr676RNC1wrWT7MzNvdOS6UWta8VCu1jLkR77QGLsWCteKgcMFA8N6zxSBszfLxDLTUyAV5psRflD5VmUS4bj9mn6WPqe6G+tBeYtudqEhJFLWsqjmpDpUaxnLc1yztQIP0N7ajNDST9jqfpV2eF1ZHcDoKWLYRiDAAChldIga0NKPxMKZe3up+mOZfaR88mtIZQPYTXQhB6aUCsuKtKUKFiP/pzdiUkuZya4169nqJ5zKb39576Xaz1chATAOd9eMknCclmfrwy/Rd0gaNBswA9Vb7lbPTezJ5eEBcXZf/Qevv917S9fjKlpE5R6BgLbgsOAgxi5CRp4LZ28hy48eO7196he5fOuGnxekHAAD//wMArI988z4CAAA=", "base64"));
  res.end();

  return __filename;
};
