var path = require("path");

/**
 * GET /item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 202 9707us, GET mod-inventory-storage-19.3.0-SNAPSHOT.453 http://10.36.1.132:9168/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 200 1267us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAHSSTW/bMAyG7/0VRq6bCn1aUm5tdilQdEXRnYYeSInaDPgLilMgKPrfp9hGl2WbDwIs8n1EvuTbVVVtmripttUm1skGgcBAKst0bYh5TZElZckLDLXGuPl8EvzMq6SZqOMfn+BreGhj0//YP1EYcrxbUhNatDwJhs47pr3UDLwXjJPGWgmJaNIiT0PuKN/F/Un3vXqZLxFyGCLNKG2Ud7bmRiunFg2lRGFqXmkHbftw6JDybujGoad+mjlvJavkhY/wTHp8KpT6+k4b56pbq30luag3Jfd9xh4J8g7GqRn682LCMB7PKLvyW62F9PP11/TYUKD55Y1YI8NEf7QUmhwOLZzgD5ex/QTT4bzwHrql+ZtXaFrAln5X2cFEuYH2+TjS6rYAo1ErwSTpxLSRkfkAZaCBqK6DB+flUtZIuYOTTfcD9GcEiV6HMhiWAnimSz4DqzjjishIX/yWdiGUHRiHDPl4QSCHSgiomUIpmFapEGTtWYxeCR5QRk4X07sfwuzHSjAqJG/qxIKIpQvBkTkkYNImK2QIYMO6ctQWQB76JtyE4vtfXjb7qSmz35UVulisjiaIMMH5kmQqjsYv5Vis4LL0bZl0z1xtld4qfm2d/XTa+fn5ojmM8X8aIbbGbKW/Npr/S3N7/LY/7ftimkIXamsYBsuZQXDMcYUMMSFA5BHBz5O/ev8FAAD//wMA79/v/rwDAAA=", "base64"));
  res.end();

  return __filename;
};
