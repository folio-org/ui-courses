var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 14 Jul 2020 14:59:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/terms.. : 202 12282us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/terms.. : 200 2418us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTu2rDMBSG9zyF8Nqcorsizx26dCnZSocjSyaGOCm2OpSQd++xUxNwGloSDQKdX58uH9JhwViRU9f2BSvZGzvQmCpNHIYFovEY6xp8kgG0UxFWVIAgg+E2aGdQFssTssM2jdBzs8Xui0ku+ZT1Gbv8hPk0YUiACxB+ytMuzlIFQk9pmzJGzDjEp/NRseoSEXPMEbbmqlSm5PpRcPHAqf0sRNTnR/w/NUJH6o/LmZfaOyGl1yC5cqB17WDFrQUpLCZveCVtdeFl3TW7Jv8thla118XQJvx+MdbeImairoupokjBpQjS0T10sAh+UBRdLdAoI2obLsS8NNUG07bFntycH8XcjfAgOAj1u5shlXTi+904fYubiTq7Ye/L8XPtM25fU7Xv4vjH1OL4DQAA//8=", "base64"));
  res.write(new Buffer("AwBfvX3odQMAAA==", "base64"));
  res.end();

  return __filename;
};
