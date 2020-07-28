var path = require("path");

/**
 * POST /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/instructors
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 146
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/66cec8e4-9ae6-4729-8119-3f341e0e67c3/410287b8-02ab-4b31-90e5-a09f8e073db3/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/instructors : 202 7316us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/instructors : 201 9340us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTOu07EMBAF0H6/wkoLE40f8SMlICEEJXzA2J5Aik1Q4i3Qav+dPBZRrwsXMz73+nwQoupzJVpRkUkpZamAcjBgdAwQsCFgFSJ2UiXUXXW/goGOvJHnWrzW4vGL58JTGYd9HWlKY95fWOcD7uM0nqaZ3/q59MPny95pbeLk2UAgtmCcCuClDKA7bSQjW5f0ro9cKFOhlZ2XwRo4MRXOT8u1hSlUCOhA+Xcp26ZpMdTS4B0uZwv5Nw8/HzNP10+wjj5Z10BMDqGJ5MGjjhBjF4ky5kjhz5++882dV3N758Ivh8svAAAA//8DAOBYTzGkAQAA", "base64"));
  res.end();

  return __filename;
};
