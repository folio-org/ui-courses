var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:39:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/departments.. : 202 7004us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/departments.. : 200 5253us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/4K5LUhOjC44LFqhwxd+jFVHc5wSSw5GNlkiKL89xKnUaW2kSKV4QQH7yP0wP6GscJTxCFtKKSxYDV7Z/vczf3WH5eF0FVllHBcC0dceeU4IlgOhFI0ABYUFrNTJOCGptBjJq7Zi2spOBrP255GN7QxtX2YTi2C67a+DSu2or7rV7sZi5SGacoweBaxQ+pDmjpnyoYSekx4RJyumptuIEzkH3KZ0BIkcLjjpXiFsi51rfS8tOoW8vgC5dQ2+kspIesSamHnQoi/U/e7t5GGxclSA8o0FSFX0miurSq5AS14UyklcalVZaGYAIdcD7OfkpfOCiEVd15mxhKJWyTFFZSV8Qaskf6X5CdMa9pgat0Vhps+P0jcDjSJxRi7ljzL6fX4f7HmgqLrUt9a2MeRUKQ+YfdMrh/89CXlzeETAAD//wMAEs61x6oCAAA=", "base64"));
  res.end();

  return __filename;
};
