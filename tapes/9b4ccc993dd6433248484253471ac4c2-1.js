var path = require("path");

/**
 * POST /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/instructors
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 144
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/cf3e8181-67c3-4653-9eec-db2c54ed49f5/b5d06488-418f-4c65-a440-4f2613619e6d/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/instructors : 202 6912us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/instructors : 201 9557us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSQvW7DMAyE9zyF4bVloR/StjwGHVqgY/sAlEQHBpy4kJ2hCPLulX+KzuHA4Q7fHcHboSjKPpZFW5SoCKkjC+wYAb234MUEIK6VVtoSV3X5vAAXPsuKvPXDwEmKowzDGDbTcwpj3HxtLNImh/GaJvnop7m/nN63xtBZaXSjoaqDBaxytxMJEL0JhBLRdTt9lpkjz7xgtywsgUl4lvia1xpmlFGgajDmU9vWulabF43Vk8qzhvwzx5+vSdJ+hKMuICkPRnkDpGINbGOAJj8AkTtxZP/463d8uHNnHu/M+P1w/wUAAP//AwDO4NrIogEAAA==", "base64"));
  res.end();

  return __filename;
};