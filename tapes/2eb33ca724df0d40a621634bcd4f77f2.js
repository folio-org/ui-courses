var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjZjNmI5YWI0LTE2YjEtNWNmMC1iZGM4LWI2NzI4YmM3YTUwNCIsImlhdCI6MTU5NDczODc4NywidGVuYW50IjoiZGlrdSJ9.pE0DFuVgWBOKlfXuIoKeSfTv9crEA98GpVjMrRMvJDQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 14 Jul 2020 14:59:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/courses.. : 202 6573us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/courses.. : 200 78288us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
