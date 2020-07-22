var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:38:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/copyrightstatuses.. : 202 20107us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/copyrightstatuses.. : 200 3438us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUP2/bMBDF93wKQmvDgpJIifSWunMQNN2KDkfy2BDVH4OiAxiBv3tPct0hqZFCtYYDxNM7UD++x5cbxgo37g4p/njKjxnyfsKpYBv2jb1Qj7rRz6+FAGW0d45XdRu49K3kWkrJDTgFOhgvQRe3J8kAPS6i7ZZ9OpxXPU4uxV2O43BqJoQcn5Ftx74fh4lBzina/fwB66LDYcKztscMHjLMwtO+5n3PA9B/prIMrEQluGh5VX0V9UZWGyk/Nk35QdDzexCp9jv/76pFdKR6vH3FI9hGB2UsN1Igl7IBrk3tqYjG+FJZLeo3PB72ln6M+bGHOFzicj+yPydCTBh03f9jaOUaDGfVZQxWW7RSBG6CJQxekS2cbbjwZSNIbyqwf7cFv9/yx7tV5hjGgTtax+QidGx6goQcuvgTr+cbvQqYfhcYlFo10gWura7JN54i5JTmtjV1KH3tWyUvArsGrasRMquSZd5NlpCqKutWcK0bslTp6Wxncym6Z6wJ2OoK3hC66zq2JGZiCSdMz+gvwXqAnAhLDwdCk5esXS1mxqxiYl4zYd/nCUUeM3Rf0I3JL5eyujn+AgAA//8DAAvFnNSyBQAA", "base64"));
  res.end();

  return __filename;
};
