var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:40:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 8487us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 6915us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUPW/bMBAG4D2/gtDaXECKR4n0lrhLlyBo2qnocPxQI1QfhkQHMAL/91Jy3QJxhAauNRCQeO+BfEDx5YqxzPWb3VD/eIqPkeJ2DGPGVuwbe0lzabb202vGUeVClhy0LgKg8AGosgGUIm1NFUqdU3Z9iHTUhjl02zRs7jyyIYxheA7+WOPD6IZ6E+u+m0sfKA59x1rasa6PbFoTo8ioaY6JNkTyFGkqP6xtWvsQKAb/MQ1zm5znHHgJUnzhciXVCtWNlPkHnp7fjVJqu/FLKZGvkK8E3qARb6fudl/TVj4dWCxHbYtAgLlWoAxK0FwJsAViTpXCwvBsbrBP4/76tSopo71zkMuyAvQlgkZEMOSSa2U8kj5RXa/Z3W7JcT2B1M+Brfu27bsxIcahttupgDW1C90Y/ls07fX9oqepZQ8SWhXoKtBWS0D0icIpDbY0shJe+lLh2x5wvz6LpOs7cOl7GFxNzcWEZL5wet6XWhay2gaLvAIz/X3oVToxzhbAvSh4UaLJyS4KwePtJZDGJxrS79/UP8PlwMRZYOKfYJUtdKWMBYM8gWFBoI30aeCF8UJZzeUJ2MPWpo0x37dUd0tk9z37c3Ve7K7i/ByGY+ovA/s+dchiH6n5HFw/+PlaV1f7XwAAAP//AwBcXfig9AUAAA==", "base64"));
  res.end();

  return __filename;
};
