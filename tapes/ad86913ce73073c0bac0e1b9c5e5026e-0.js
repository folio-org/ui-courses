var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMTk5MSwidGVuYW50IjoiZGlrdSJ9.VdxBRdnr4Z96aVZLMLIgD-i7DD_5A2WBjedFRgimRLc
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/copyrightstatuses.. : 202 6834us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/copyrightstatuses.. : 200 4908us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTWvcMBCG7/kVwtdGRbb1ubd0ew6h6a30MPpwI+qPRdYGlrD/vWNv3UIT0+KuDgPS6B2kR+/o5YaQwg2HU4rfnvJjhnwcw1iQHflCXjCH2einacFAGO2do1WtGsq94lRzzqkBJ0A3xnPQxe1F0kMXZtF+Tz6cllUfRpfiIcehvyRTgByfA9kPXTf0I4GcU7THaQNpowv9GBZtFzJ4yDAJL+eazj0VCP4jhrlgxSpGmaKl+szqXc13QryXXL9jOH4WQtXx4P9dNYvOGM+3f/BorNSNMJYazgLlXALVpvYYmDS+FFaz+hWPh6PFixE/dBD7NS73A/n1IsiEQNv+PwbJtmBYVOsYrLbBctZQ01jE4AXawllJmS8lk4qbCuzbtqD3e/p4t8kc/dBTh+shuQgtGZ8gBQpt/B6u5xtpNgEzfwMGpRaSu4Zqq2v0jccWckJTq0zdlL72SvBVYNegdTVCSm0htKjWCTEuqrJWjGot0VKlx7edzCXwn7GmCUpX8IrQXduSuWNGksIY0nPwa7AeICfE0sEJ0eS5167WZppvYbKofjMhX6cKRR4ytJ+CG5KfP2Vxc/4BAAD//wMAonP3Z7IFAAA=", "base64"));
  res.end();

  return __filename;
};
