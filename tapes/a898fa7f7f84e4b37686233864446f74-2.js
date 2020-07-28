var path = require("path");

/**
 * POST /coursereserves/processingstatuses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 109
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses : 202 7135us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses : 201 3481us");
  res.setHeader("location", "3b7caa10-9a50-4c33-aeab-8636f978a242");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPsW7DMAxE93yF4LVlQVu2JXtz0KVbh/YDSIlxBTRy4CgIgiD/XsVu0TkcOPDu3YHXjVJF8IXqVaHZOKISoaMGoXZaAwkx2Fa3u85YquqqeL4DkfayIMMwqHeJPsRxVbwc3RwOKUxxMWwlS8pRou9pPIlXcxi/korTefXvJZHP6t18zYd8crNQEv+a1xJRYYWABir7UZZ9Y3q0L11bP2GeJeSf2V4+jzK/re+IZuta0wA7g9AwWbCoGZh3TOTRM3V//OngH+78ZR7vzPhtc/sBAAD//wMAKDPhiXoBAAA=", "base64"));
  res.end();

  return __filename;
};
