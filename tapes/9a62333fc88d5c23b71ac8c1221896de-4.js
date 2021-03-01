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

  res.setHeader("date", "Mon, 01 Mar 2021 17:56:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/departments.. : 200 3206us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUMW/bMBCF9/wKQmtM4yiSkqjNQYsiQ5cmmYIOJ97JFiBLgkQPRuD/XlqOYaRpiroFuhDi6d478nuCXm6ESIgHHMOWuzAlohTP4iVWY72h4zapjefKQy3zvKik4dzJymqQTntTK6etrfNkcZJ0uOVZtFqtxBfu2369P78jnvzYDKHpu7nlccNiCjvai74WIW6GFjsO5/YtByQMeOw9HSgW/cgYmD7FZfZIIVUStAT1qPLSZqXKlilktwAlwKvTRXa3f5p4vD9fq/JEGUh0xkirnZXOay815lgQ5cYTXxx2A/3N4FfZ9YNng0NcD4uf4lA2ywqjvLTKszRkvEQEJ4ExVRWAA4Pv4vgcA96IB99w53n6KJH7zrc7arq1WJ+iW4iBwzg/CuxIDNgi9114k+u1QYEqLZTWLmPpA16/wayXeab/B+baO6VSIz2lKE2NLB2ykQZ0VlABrkjpHeavGL/jLYbG/wHjqo+RDLuRZ7Q4DG3DJKJ6M/07Wg1XoP2F7AJGfD9aJKEP2H5j3480/yX0zeEHAAAA//8=", "base64"));
  res.write(new Buffer("AwAE/2IUPQQAAA==", "base64"));
  res.end();

  return __filename;
};
