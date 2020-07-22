var path = require("path");

/**
 * GET /item-storage/items/7212ba6a-8dcf-45a1-be9a-ffaa847c4423
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
 * referer: http://localhost:3001/cr/reserves/cf3e8181-67c3-4653-9eec-db2c54ed49f5/b5d06488-418f-4c65-a440-4f2613619e6d/5ad0e9c4-586c-4365-a55b-f2042677d606/7212ba6a-8dcf-45a1-be9a-ffaa847c4423/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/item-storage/items/7212ba6a-8dcf-45a1-be9a-ffaa847c4423 : 202 17654us, GET mod-inventory-storage-19.3.0-SNAPSHOT.449 http://10.36.1.55:9168/item-storage/items/7212ba6a-8dcf-45a1-be9a-ffaa847c4423 : 200 1330us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxUTY/bNhC951cIvja0+SWR9G3rpEDQbQ6tewp6GJLDtRBJFCR6t0aQ/17qw7vORy9rA4Ylvfdm5vFpvrwpik3tN8W+2CjOuIUKiPYuEFkCIxYNkBAAtFROSi42byfCaVgpdcKWPn+YXB/Hxtfdw/gnujj4DwsURQgVE4JYA5xILx0B5gzxjulKeekDMws9xKHF4YMfJ96n4p/5poXBRY+zFKP5u2CnBu7xEZsDNM3Hc2txmCHH30tGy63WmpXFtrgrdcEplcVvx+KP93fv3i9sDAFdqh/xhX2IbR877NJc/UtGZZx7hXimpUuP6/Ql40wJUMR6aog0FIlVShCmvBaB20oE3GTW16Wv7pwdgFTHbmYv3brTELvYxIfLzc0LwnCA/gq92uVif7np+JAvC74wupjwG2tdPbhzM1f7+P2zMUE631rRQbscwt0j1A3Y5qbtFhIONTTHl7kZlNJKwQhHOWWKe2IcYP5BrCpnQJu1rR6HFibj7yN0NwrcGumqrBAcZOcynoASlFCBWHKTT5CrRSFHoY8DDJfvFVBqVGwyOwgiXf4HJmjChZaltZxRkD/04GY/VoXgfCUdMlIZU+YeAiVa5iPUuTxwrrVQ7IceXqnwnMnXKzRZIEeldnfO4bie53p+56Ge5U4p9fvd7unpadtEt32Ij7tcztfDLkW3Q1f3VDG9y7lWlFPJzfaU2uaa7KbuPh/x3zRL3eeLsYDnPKyYaxrGv/osF2r3kufjhCtiKFzs0vyurZz+bJvaTSn8Oa6IXXO5ggdcQjue6n41SeSs0TJHhOP0mlmpiQHqCK1E5avKmmDFnNebeNdjyr01h7xdnnfOxpam0s4gcd67nFtVEWNQEI0VBfTaUp8rLiItJvCQ4HZhDJin9+9gHYRnDwlVhPMjFXvJ9pJudSV/mbbmdZxz7/+Pw8RemD2XW6HKn3F+vfw9Thtz5pkyOFlSSzi1nJTUKwIiD6GtFVJCQFMuHrz5+h8AAAD//wMAdBIAJv4FAAA=", "base64"));
  res.end();

  return __filename;
};
