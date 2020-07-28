var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:52:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/copyrightstatuses.. : 202 7103us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/copyrightstatuses.. : 200 3747us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUQW/bIBQH8Hs/Bcp1fRU2YENubXbZpZrW7TTt8B7gBNUxkU0qRVW++3CyblJTa1saH55kw//J/AQ8XzE2s3Gz68NylR4Spu3ghxmbs+/sOY/l0eDG1xmXqixEzUHryoMsnAdsyINSqMk0vtYlzq6PkQ7X/hC6bVt26Dyw3g++f/LuZY7zg+3DJoXYHafaFJ58u2PURvsYuiVLK882fVzm5MBiwwa7ii32wypsXpqsfUKHCccOx98dl9N7TN59zOXQueQlB15Dqb9yMRdqLuRNacwHnp9fjXJqu3FTqaKYq3JelDeVUG+n7nbf8uo+HaW8IG2rWgHZzKUINWguCIgaQnTcEZrZocE+1/31a2hURjtroRR1A9LVErSUEgzaTN0YJ1GfQC8W7G43RbsYQTIuW8T1OnYDw5T6QNtxAmuD9d3g3y+q6n8XPU1Ne2ChVSVtA5q0ACldprBKA9VGNIUTrlbybQ+4X5xF0sUObP7uexuwvZyQ/o89d5qaFiJNniRvwIwHUjqVd4ylCrgrKl7V0pRIk0LwcHsJpGGFfb4R2vDoLwjGzwLjfwNrqNKNMgRG8gwmKwRthMuFV8YVivJ5PQH7vKW8MObiGkM3RXYf2e/bNHMxbNv3M9TFOQwvqT8M7MfYYZZiwvaLt7F3h5teXe1/AgAA//8DAOdNfL4HBgAA", "base64"));
  res.end();

  return __filename;
};
