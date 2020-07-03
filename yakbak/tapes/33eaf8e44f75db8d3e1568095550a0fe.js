var path = require("path");

/**
 * GET /saml/check
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 03:59:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.251:9178/saml/check : 202 828us, GET mod-login-saml-2.1.0-SNAPSHOT.53 http://10.36.1.251:9156/saml/check : 200 11485us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmUlBQSkwuySxLVVKwUkhLzClO5aoFAAAA//8=", "base64"));
  res.write(new Buffer("AwCfL2zBFgAAAA==", "base64"));
  res.end();

  return __filename;
};
