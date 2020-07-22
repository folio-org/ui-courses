var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a : 202 7099us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a : 200 10877us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSUy27bMBBF9/kKQduWCUVSFOldHhujTVugyarIYkiOCha2JFB0ECPIv5eyHnUNpHC10EJXZ2bu8EqvF1mWe5dnqywvrEJnwBAwpSHClZIA15JQY4WyDjlwyD8OQMCfvo8Bwnok++ubghajhi8RQwObSXo5kjathejbZpJq66SwWBCpdUmEqilRgiJRuq6BMaV4dQJ+Nb/QxgF+TY//TH52pYQ0sMUDdA++yT57k2zsZ9G2bhQ/PV7d3l7dra/uZ8n31zb654Mcww7nx00ffdwd2UqNkVILBMpCEWGEJgZpQajkylEQYMtq6QfbbtdPoGS2rqSpiLWQXDjOiWZFRdDVgiV3oISawc0490SWrlKKciQWqBhapuYISJiV3Ggm0iBmJrvgt4n8juHZW/zW+uaw0JyDoKpkjghdp5urGYGi1kQik6IAibqo5xr9Ebx2/cD/OLNC9pRKvB1ONeVkO0dBVwVjWhBGeUWEqCuiqJSEFRJQl9QyafMFejcG51Y5jsFD8I2P+4xRRhd/EUK8gzi+MSgk7ZXJWcfGnaipCc0XZ7bdhR4f9h1O/nRRCiqUIVzqlAmGNqUjRcTWFk1NBVIt8hP0PZdn1zp2uW6yDkPfNrPisLfBd0NuDy98abO22fgGM9tuu7bBFIvFzxDysLOxDeNQ04k/HcQtRnAQ4WhSGzCt53RHFWHsgbKVUKuSX8pSfqDpWj6FkbnZP6Z0TWszCnit0rejsLKkFArTv4lyYnhpGDqnWbWcya5z/+qpV0xeal391XNi/r/nsJmLt98AAAD//wMAyPyv0D0FAAA=", "base64"));
  res.end();

  return __filename;
};
