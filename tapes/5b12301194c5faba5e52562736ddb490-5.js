var path = require("path");

/**
 * GET /coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves.. : 202 6708us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/reserves.. : 200 26574us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWS2/bRhC++1cQuuTQjL3vh2+2g6JqHMdIk0NQ5LCP2ZitRAoUlVYI8t87EmmZqluj7qWX6kCI3P3m8c23M/v1pKpmHa6x+4LrWXVe/Vx9pU/0sc6715mUoYiSPTgnGShuA0SPCjTXusQoeNE4ezlAUrvp1nhdr/u6+Twf8Dw5zDFECFFHUFkbCNIbYDEplzLKIMM9vu5xOcKyKTbxGCAIaUEZjeAVZijSoucxGRXzg9tVjXlO4B10CJ8+x9ClNuPenNLSO2uYVtLJEUdbCLJqu9Btr9sU+rptRu8lZaMScjDea1CuMHCKIThfShCCqLD8CStv4y+Y+mkwD3w+yzTBmrAcUngT6qa6ruPO0XTDIcfXH86urs5ezc/eTJfr9UXq6y/7LX23welSQ4XqN5O8KRBkLBHrmjtQUXmIyDgwI11mQYWk7ZHvsFxt1iPYiFSsiRZSCpRZlhK84BYwFyUo4+CUm4IXQy4jWmfrHJMIKTC1c01BYEAQycjohaKA4hS96uoloX8i4dYJb9u66Qe9BsWcFhmUL/TIRUDgxYNBYRQPhtRTpnbWEwPzPB6Bf2al+jSa+XaQwgq7ZWiw6f8kKC1T8doUSDwXOkUsgosYQNhiuSDCbGKzv7fylKCeZXoqqIumwd+fVtLF/0r6r5REfC6Galx2df6MffVj2+D6xbq6DHFLFbjDKtehq6ltH0Cpbfqujpu+7Y6a+XHhv69xkalDv6x+wAU2xxI4GLih7e+3KxxZFdErIpBDScFT3/KUh6WJQESjFtS8UITZfRbVpwctb+KiHlT8KKL92voOu0GPi9Jhri5Oq9dNuzqidrUIaYj9Bn+rPrbdr9PVHHp8W26PHc0E4+avAkphsbjZLOPo9fYdTQVzOlfauerSKl/tgRNKV9v9xiv6U01mx07zoUn3/NgSs85OgRGZgyKuwCelwaTIrfTexcPAIvBdu6/AveBLtNGywiE6T6eFRArBezotqCJxLmLUZchlFMh05oRmUiZ0UXKSFUgazaDkTm7CeMjZS85SFJkdxvUjG4/bzH2TeYbZqdKu9heC6nC/OEphiX2g0oUjf6lDqmZ+RY+xioI0ZkGI90ycK3/O2amx7DtGv0mRBtTl9gM5GpmILsjiqOU4tAm0ckhXECYhSh0FUuDCTsq8WeV/4XdEPd/vQMTJQZmzvu3D4h2mths6Bz/59gcAAAD//wMA2pl1cZsJAAA=", "base64"));
  res.end();

  return __filename;
};
