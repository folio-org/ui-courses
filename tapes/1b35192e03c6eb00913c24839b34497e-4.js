var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:40:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses.. : 202 7130us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses.. : 200 5079us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUS2/bMBCE7/kVhK/1BnwsKVI3B73klKKPU9HDUly5AhzJkOQUQeD/XlqO4bSOi9ZtdRAgDWcofrPQ05UQs3XfVTwMTbv8MNK4GXiYiVJ8Fk9ZzHKTdo8zrFnbGgOkOhGgihI8Bg1MsjCxTqh1NZvvLS3d82RaLBbiHbcpZx+0xEPVN+ux6dppyQ1nUVQ00qpbbjiJvll+HUXbfTs47nmklPXd8v035ZdVzzRyeptvU4yWWoIswKiPSpcoS6murSreyHw9Bx1dN4+fBu5v9weLEn10nM+kvQUb0ICXVkF0iJpqiy68SNis0wX7Prv+fN8pYJvv2/lPfSjrLYWQQEZ0kKMMBDIaUFpZK2kCOXXSx217IP2LRt5zxc1DbiJudj2M4pHHFwVdWos0pbEl2mt06nU8Z6CaUNriOpjw/6GSTxqLygN7qgFJOfBRFSCDw8I7w8bgCdS7VnR94v4cz7udyGn+A096oGZFccV/jxP97+M8dZ2H4WOtPQ==", "base64"));
  res.write(new Buffer("VQ6oqhKgLSz4uiYwLo+ejKy8PZ2wPDy0Wh2n5JXhmnRBbRKb9h9iMHgJhoPriEF82SXMxi4PfP7aXO30P8Sr7XcAAAD//wMAaO0ECC4FAAA=", "base64"));
  res.end();

  return __filename;
};
