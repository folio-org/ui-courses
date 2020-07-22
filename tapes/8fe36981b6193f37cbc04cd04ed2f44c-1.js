var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/terms.. : 202 56502us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/terms.. : 200 1847us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTPU8DMQyG9/6K6FZqlDhfTWcGFhbUDTE4l5w4qdeiaxhQ1f+O70pBulKBSoZI9pvXcR7F+5kQVcl9t6vEUjyJPcecadMQVkQ2UGoaCBkjGK8TLDgBEaOVLhpvCav50bKhLo+m+3ZN/btAifKk7Qr15Y7K8cCggFSgwknPmzRRNShzUrtcKFGhQT72x8m6z+yY2jygWkm91HZp3a315kby+izErrfX9HfXaDrwfphPuDTBK8RgAKX2YEzjYSGd4zKOcrCyRlefcVn17aYtv4Phqu4yGL5E/huMw8UVYL5cl8HUSeXocwL0/A4THUEYECXfKLLaqsbFMzAPbf1Ced3Rjtl8f4opGxVASVD6ZzaDitzx/9noq9joMzbieT4O17bQ+jHX2z6NM6Znhw8AAAD//w==", "base64"));
  res.write(new Buffer("AwDh7bWFdQMAAA==", "base64"));
  res.end();

  return __filename;
};
