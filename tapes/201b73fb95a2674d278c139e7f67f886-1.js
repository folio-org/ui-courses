var path = require("path");

/**
 * GET /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:37 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5 : 202 6980us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5 : 200 12487us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTP2/bMBDF93wKQWvLhiIpisyWP4vRpi3QZCoykMdjwcKWBIoOYgT57qUsyTUMBHA0aNDj7+7e8en1oijK4MriqijBc1SVqohsgBMha040IhBnGdQCndC+Lj+PQMQ/YUjRxNVExuubilaThi8JY2vWs/RyJK07MCl07Sx5cFIA5n5a10QoT4kSFInS3hvGlOLNCfjD/kVII/yaP/+f/OxKGWnNBvfQvQlt8S3YbGO3iNC5Sfz6eHl7e3m3urxfpDBcQwrPeznFLS6f2yGFtD2ylRsjpWCIqStFhBWaWKQVoZIrR40wUDeHfmbTb4cZlAx8I21DAEx24XjeP6sags4Llt0ZJdQCrqe5Z7J2jVKUIwFDxdgyN0eDhIHkVjORB7EL2cewyeQvjM8B8GcX2v1CS24EVTVzJF9zfjnPiKm8JhKZFJWRqCu/1BiO4JUbRv73mRWKp1zibX+rOSebJQq6qRjTgjDKGyKEb4iiUhJWSYO6psAklAfo3RicW+U4Bg8xtCHtCkYZPfhLJqY7k6YTo0LyXplcdGzdiZqb0PLgDLptHPBh1+PsT1e1oEJZwqXOmWD5rzJ1jgh4QOupQKpFeYK+5/LsWscuV23RYxy6dlEcDhBDP+Z2f+B7V3TtOrRYQLfpuxZzLA5+xpDHLaQuTkPNN/60FzeYjDPJHE0KEfN6TnfUEMYeKn7F9RWVX5Rmn2h+Dr/CxNzsHnO6lrXVHkRNbV6uZaSmriGGOyDKWi6E8flS+cJve/fhnjPz8Z7jZi7e/gEAAP//AwBgKqPgPQUAAA==", "base64"));
  res.end();

  return __filename;
};
