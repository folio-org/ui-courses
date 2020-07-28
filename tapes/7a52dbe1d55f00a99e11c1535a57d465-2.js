var path = require("path");

/**
 * GET /item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/66cec8e4-9ae6-4729-8119-3f341e0e67c3/410287b8-02ab-4b31-90e5-a09f8e073db3/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 202 7134us, GET mod-inventory-storage-19.3.0-SNAPSHOT.453 http://10.36.1.132:9168/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 200 1874us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxUy5LbNhC8+ytYusaQ8CQB3TZrp8qVjQ+JcnLlMAAGK5ZJgkVCu1G5/O8BH9LKj1yWBxVFdvcMeprz5U1RbGq/KfbFhlHqGbWB8EBLIgEoscgUodYoy70JBsXm7UQ4DiulTtjS68XU+jo2vu4exz/RxcF/WKAoQiiZEMQa4ER66QgwZ4h3TJeVlz4ws9BDHFocPvhx4n0q/pkfWhhc9DhLmanYgp0aeMAnbO6haT6eWovDDDn8rhhVW601U8W2uFO64JTK4rdD8cf7u3fvFzaGgC7VT/jCvo9tHzvs0lz9S0ZlnHuFeKalc4/r6RXjrBJQEeupIdJQJLaqBGGV1yJwW4qAm8z6uvTVnbIDkOrYzeylW3ccYheb+Hi+eXhGGO6hv0AvdnUx4Tf+uXpwp2aW/Pj9uzFBOt2et4N2cfruCeoGbHPTWwsJhxqaw8vhGChppWCEowxEKu6JcYD5B7EsnQFt+NJtj0MLk7sPEbobBW6NdGVWCA6yPRlPoBKUUIGouMlj4tWikOfdxwGG8/cKKDVWbHI0CCJdvgMTNOFCS2UtZxTkDz242Y9VIThfSoeMlMao3EOgRMs8J53LA+dai4r90MMrFa7Be71CkwVyHmp35xyO6zzX+Z2GepY7ptTvd7vn5+dtE932MT7tcjlfD7sU3Q5d3dOK6V0Ob0U5ldxsj6ltLvFt6u7zAf9Ns9RD/jMWcM3DirmkYfyrz3Khdi+hPUy4IobCxS7NH9TK6U+2qd2Uwp/jitg15wt4wCW047HuV5NEzhpVOSIcp2/JSk0MUEdoKUpfltYEK+a83sS7HlPurbnPK+S6WDZWmVI7g8R573Juq5KYvOOIxpICem2pzxUXkRYTeEhwuxUGzKf372A9CM8eEloRrg9U7IXcC7rVvPrluq2myfT+/ziM7ZXaM7PVlP6M8+v573Fai+s2tdqVlSLWVZQoC5poKiyxNlgAT70FM3vw5ut/AAAA//8=", "base64"));
  res.write(new Buffer("AwDsLl9T4wUAAA==", "base64"));
  res.end();

  return __filename;
};
