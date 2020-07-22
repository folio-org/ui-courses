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
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5 : 202 6840us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5 : 200 12444us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQduWCV+iyOzy2Bht2gJ1VkUW1HBYsLAlgaKDGEH+vZQtua6BFK4WWujyzMwdXr1eFEUZXFlcFyV4gZppRlQNgkhVCWIQgbiGQyXRSeOr8uMIRPwZhhRtXOzJ4eaWUbbX8CVhbO1qkl6OpFUHNoWunSQPTknA3M+YikjtKdGSItHGe8u51qI+Ab82vxDSCL/mz38mP7tSRlq7xh30YENbfA5NtrGdRejcXvz0eHV3d3W/uHqYpTDcQArPOznFDc6f2yGFtDmylRsjpWCJrZgmspGGNEgZoUpoR620UNWHfnbdb4YJVBx8rZqaANjswom8f85qgs5Lnt1ZLfUMrvZzT2Tlaq2pQAKWyrFlbo4WCQclGsNlHqSZyT6GdSa/Y3wOgN+60O4WWgorqa64I/ma88t5TizzhijkSjKr0DA/1xiO4IUbRv7HmRWKp1zibXerOSfrOQqmZpwbSTgVNZHS10RTpQhnyqKpKHAF5QF6NwbnVjmOwTKGNqRtwSmnB3/JxnRv0/7EqJC8V65mHVt3ouYmtDw4g24TB1xue5z8GVZJKnVDhDI5Ezz/VbbKEQEP2HgqkRpZnqDvuTy71rHLRVv0GIeunRWHA8TQj7ndHfjSFV27Ci0W0K37rsUci4OfMeRxA6mL+6GmG3/aiWtM1tlkjyaFiHk9pzuqCedLJq6FuabqUhv+gebn8CvsmdvtY07XvLbKg6xok5fbcFJRVxMrHBDdNEJK6/Olipnf9O7fPYW5NIz+1XNi/r/nuJmLt98AAAD//wMA05ZjrD0FAAA=", "base64"));
  res.end();

  return __filename;
};
