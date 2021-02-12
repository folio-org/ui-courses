var path = require("path");

/**
 * GET /item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 202 141404us, GET mod-inventory-storage-19.5.0-SNAPSHOT.534 http://10.36.1.253:9137/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 200 1730us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAIyTzW7bMBCE73kKwdeWAf8p+pa4FwNBGgTpqSiKJblsBEiiQMsGjCDvXlpSE9dtgepkcXc+c3dGL1dVtWrCqlpXq6Cj8cwBAS4MkVohsRIDicKgZc5r6cLq40nw/YB516T+JGN8OnrOC6UZsaNvD6Oz4jm1oel/7B7Rpxy2c2t0xhkaGXG1rYm0XBKwlhGK0mnBuHMqzvKYcod5G3Yn3dfq23ToIPsUcEJJJWxtNFVS1GLWYIzox+aAG2jb+33nMG9SN6Qe+3HivJSu0uffyhPp4bFQ9PVWqrqubo20FadMr0rv64Q9IuQNDOMy/q/L+DQczyib8lotF+mn48/xoUGP0z+v2FJJI/42km+y37dwgt9f1nYjjPvzi/fQzcPfHKBpwbU4UUslwDhXOOVlnZww/kTFmtM1tdfM2g+0/KLvM3WlPzfQPh0HXLxhoKSTghGOMhKpeCDWQ0mER9TaW6gtn4cYMHdwWupdgv6MwJ2VvthIogdLZOknYAQlVCAqbos73MyEkpghZcjHCwLWTjAGmghXxpAiFgLXloRgBaPe8UDxwuu75KftLQQlfLRKR+JZKFMw6kjtEAg30TDuPRi/BBTbAsipb/yNLy79sflmNzYlKZsSuIsYdjhCWTicRypj2Wj49H82LKbth/AvETNrxdcllUzRv4puj192p+9jEhpTPlimAjHUaaKCogSEiCRKE5xlkTNvJu+vXn8CAAD//wMARVACr/8DAAA=", "base64"));
  res.end();

  return __filename;
};
