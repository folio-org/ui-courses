var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
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

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses.. : 202 6216us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses.. : 200 3586us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUu27bMBQG4D1PQXhtTkCKF5HeEmfpEgRNOxUdDm+NEEk0JDqAEfjdS8lNhzoC0tQaCEg8/wH5QeTLBSErl7b7ofn5mB8y5t0YxhVZk+/kpcyV2cZPrysqZMV4TUFrFUAwHwCjDSAlamtiqHWFq8tjpMcuzKHrtiVz55EMYQzDc/CvNT6Mbmi2uUn9XHqPeUg96XBP+pTJtCaCmWDbvia6kNFjxqn8uLZp7UPAHPxtGeY2Fa0o0Boq8ZXytaBrVl8pUX+i5fndqKR2W7+Uqtia6RK8klS/nbrZfytb+Xxk8cgNlSJC7UTBUBjAIncQFZXUMQxYWOYGhzIeLv9WRWm0dw4qXkcQvhaghRBg0BXXaLxAfaK62ZCb/ZLjZgJpngPZpK5L/VgQ89DY3VRA2saFfgz/L0qr94ueppY9kGmphIugreYghC8UTmqwteGRee5rKd72gLvNh0j61IMr38PgGmzPJ8T/4Z87TS0LWW2DFTSCmU6f8LL8Mc4qoJ4pqmphKrSLQvBwfQ6k8RGHcvzb5imcD6xaOG7vSy2DRat0lMaCEbSACYWgDfdloMp4Jq2m/ATsfmfLxohPHTb9EtldIn+uzrPdVexDDOyEgfyYOqxyyth+CS4Nfr7W5cXhFwAAAP//AwCrqYps9AUAAA==", "base64"));
  res.end();

  return __filename;
};
