var path = require("path");

/**
 * GET /coursereserves/courselistings/a70ffe37-a4e9-4129-9d73-933ed20d64bf
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f/edit?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:54:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courselistings/a70ffe37-a4e9-4129-9d73-933ed20d64bf : 202 6870us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courselistings/a70ffe37-a4e9-4129-9d73-933ed20d64bf : 200 13226us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQduWyZCi+PAuj43Rpi3QZFVkQZHDgoUtCRQdxAjy76VsyXUNpHC10EKXZ2bu6PL1oijK4MpiUZRGgvdYSWI4asIp00Q7WRFdVegYOMEbX34cgYg/w5Ciics9OVzfUKB7DV8SxtasJunlSFp11qTQtZPkbS5pkRKhdU248kAUByRKe28YU6qSJ+DX5hfaNMKv+fOfyc+ulJHWrHEH3ZvQFp9Dk21sZ9F2bi9+ery6vb26W17dz1IYrm0Kzzs5xQ3On9shhbQ5spUbI4A1xNRUEd5wTRoESkBUyoHhxtby0M+s+80wgYJZL0UjibUmu3BVXj2jkqDznGV3RnE1g6v93BNZO6kUVEisAT62zM3RIGFWVI1mPA/SzGQfwzqT3zE+B4vfutDuFlpWhoOqmSNc+/xynhFDvSYCmeDUCNTUzzWGI3jphpH/cWaF4imXeNv91ZyT9RwFLSljmhMGOX+ce0kUCEEYFQZ1DZYJWx6gd2NwbpXjGDzE0Ia0LRgwOPhLJqY7k/YnRoXkvTIx69i6EzU3gfLgzHabOODDtsfJn6Y1B64aUgmdM8HQ5nTkiFhvsfHAETQvT9D3XJ5d69jlsi16jEPXzorDwcbQj7ndHfjSFV27Ci0Wtlv3XYs5Fgc/Y8jjxqYu7oea/vjTTlxjMs4kczSpjZjXc7ojSah8oGpRV4taXupKfYD8HK7CnrnZPuZ0TWuTyjegWL7XskZSS7BECZSkBg75Wtsa6OFeb3r3r558AdWlBvir58T8f89xMxdvvwEAAP//", "base64"));
  res.write(new Buffer("AwBP0aW0PQUAAA==", "base64"));
  res.end();

  return __filename;
};
