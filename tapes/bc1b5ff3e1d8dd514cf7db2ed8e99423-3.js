var path = require("path");

/**
 * GET /users?query=(id=="e3b8c675-bc70-5ba8-803b-bbfbaad0dba9")
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:52 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/users.. : 202 35025us, GET mod-users-17.1.1-SNAPSHOT.140 http://10.36.1.132:9143/users.. : 200 3111us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQKi1OLSpWslKI5gIAAAD//5RRy07DMBD8F1+JI8dpHDcniiJQhChSSU8IoXW8RRF5yXFQqyr/zrYgDhxQ8cHyrmdmZ7TH87uDFlnGbP0+vYJt644FrLbUwdjoSqUJN1UqeGJAcy1iw43ZGQArrIElYaHy9QcpeDdhwAbwru/uXD8NJBErvYBUK65UGvGFVCSBVvClNVqiqUAJQxIWB3C+xc6TsecXUnH9/nDbu++KDPcdNCw7sgZGv/5yvMofinXxVG5W5eOGVHa1+/nLi/sttbCFmmjsnOv6FDHEPbRDg2Hv3k7mrXU4jnieOwescggebU4X0aSQgouUS12KOIt1lkShjJMrQYfI02AvB7fogeBwCvHnFEXcUEXyP1OiX+Cbw5Y2W1y8xXn+BAAA//+K1QGljZL8ksScoNTk/KIUUBIx1OECAAAA//9SUAKGT2lOiWdeWj5QpBpNiSEw2BOTU2HxlpKZmJ6XX1ySmQwJUK5aAAAAAP//", "base64"));
  res.write(new Buffer("AwC0ga7vcwIAAA==", "base64"));
  res.end();

  return __filename;
};
