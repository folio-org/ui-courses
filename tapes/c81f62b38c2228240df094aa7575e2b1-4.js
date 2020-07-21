var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
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

  res.setHeader("date", "Tue, 21 Jul 2020 00:31:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/departments.. : 202 6307us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/departments.. : 200 2997us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSsU7DMBCG9z7FKSs1sl03TTrDwMACbIjh6rsmlhLbSt0BVX13XJeCBEsFHk6+3/5O1icfZgAVccQpjezTroI1vMIhpzl3dGortbWtUtoISxqF2SKLFtkIIxd1Q41sG03V/Ix4HLlAj5h6HjE5u7ucEe/s5GJywZcrD94Oe3K+g01IPcT9xICeAGMcHBNkuv+CR05ImPBEnp+XQzsxJqa7XMpELbUUciW0fFFyvajXC3Oran0j8/oclKl9pOupAh1zPc5/alnWdWOUFUtlWRgyViDKVkhGrTZSttLgLy33WXQPz9axt3yFmY7DELr3OUROU9kWRREH5OBTSf6vaFX/RdGF+lYEb6cJVQoJhye2YaLyofTs+AEAAP//AwDhhtymaAIAAA==", "base64"));
  res.end();

  return __filename;
};
