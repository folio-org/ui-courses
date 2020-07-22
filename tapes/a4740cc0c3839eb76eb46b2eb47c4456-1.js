var path = require("path");

/**
 * GET /item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTIwNiwidGVuYW50IjoiZGlrdSJ9.VEA8ID_FQfcqIMlntaG-O8FSdQrpCEXytIUWBtOz830
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:40:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 202 18402us, GET mod-inventory-storage-19.3.0-SNAPSHOT.449 http://10.36.1.55:9168/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 200 1484us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAHRSTWvcMBC951eYvbYK+rSsvSXbSyCkIaSnksNoNGoNtmW03sAS8t+rtU263bY+CKyZ9zTvzXu7qqpNGzbVttqEOloUHhhIZZmuDTGnKbCoLDnhsdY+bD6fAD/zCmkn6vnHJ/haTl1ohx/7J8KUw93SGr31lkfBfOMapp3UDJwTjJP2tRLSexMXeEy5p3wX9ifc9+plvvSQMQWaqbRRrrE1N1o1asFQjIRT+0o76LqHQ+8p71I/poGGaeZ5K12lDz/KM9PjU2Gpr++0aZrq1mpXSS7qTel9n2mPBHkH49Sm4XwYTOPxjGVXfqt1kGG+/hofW0KaX96ItZIm+kMSthkPHZzIHy5r+wmmw/ngA/SL+JtXaDvwHf2esoeJcgvd83Gk1W0BRnutBJOkI9NGBuYQykKRqK7RQePkMtZIuYeTTfcJhjMG6Z3GshgWERzTpZ+BVZxxRWSkK35LuzCUDIwpQz5eMFDjlRBQM+WlYFrFwiBrx0JwSnD0MnC62N59wtmPlcEojM7UkaEIRYXgnjWegEkbrZCIYHGNHHWFIKehxRssvv/lZbuf2rL7XYnQRbB6miDABOchyVQcDV/KsVjBZdFtmZTPXG212Gp+3Qj+6ZT5+fmCOYzhfxihtsptlb4u+/gX5vb4bX/K+4xzJqI2RajkXjLDg2WgAhbdXmkNkZxR8+av3n8BAAD//wMAWHKO+LwDAAA=", "base64"));
  res.end();

  return __filename;
};
