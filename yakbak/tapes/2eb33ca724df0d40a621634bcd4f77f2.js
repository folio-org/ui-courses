var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImEwOWE4M2FkLTNkMmYtNWI5Yi04OTk0LWQ4NzRmMTQ1NDY5NSIsImlhdCI6MTU5Mzc0ODc5MywidGVuYW50IjoiZGlrdSJ9.Moy02GDjk7IIJQTOGxN5PoSKLTfDwf9Xt5ae_TWLBpE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 03 Jul 2020 03:59:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.251:9178/coursereserves/courses.. : 202 8437us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.251:9157/coursereserves/courses.. : 200 120179us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("AwDAwFex3DcAAA==", "base64"));
  res.end();

  return __filename;
};
