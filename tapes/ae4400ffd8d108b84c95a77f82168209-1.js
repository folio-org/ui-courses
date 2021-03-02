var path = require("path");

/**
 * GET /coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
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

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c : 202 16078us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c : 200 100671us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxVy27cNhTd5yuE2XSR0Ob74Z3toMg0gWO06aIosuDjMlarkQRJk9Yw8u+50mhGqtMCLrILMgthQPLce3jOIfnwrCg2ZdoUF8VGWbDKJCA0MUukTpQETQ0xlgGzNIJTcfNiBMRm3/XwpuyHsv6wPaAZlQ604SRFLCGjiSQ4FQik7LKmUceQDuhygN0MSjqbyIInnguDLRUQJyGRLAw4FqKWR1Bs2hLSFqEj8AGHcDD4LjYJplJSCWeNpkoKKyYMLsDlbdP57v5NE/1QNvXcV4mYndKZRJYykYwGYgN4wk02jMfoTaT/WeNt+APisNBYKfj0sgiq/e5A/bKu4e9l/LSl17+eX1+fv9yeXy6TZX8Zh/LjtGDo9rBM1OjGsF9tUlIASiOKq0Y/g3QkAGWEamET9dJHZVZd/a7d9zNU85iNDoYgZ0VkEoI4zsxopuQRmLfSLtCqDKM+R22TsZYKINFTObZFAuCB8KhFcFwimbBg267cIfYX6D6WEW6bsp6U3QgvqVU8EekyflLmxLPsiAauJfMa45GXKv0Kvk39WOH3J9Yo3k9FPs1ut9DtfA318BWJ+aLG98R8w4lBDauD+lddmT7AUPzU1ND/0BdXPtyj5ndQpNJ3JfTHgMSmHroy7Iemmzs/fGHxjyVUCa/XF8UrqKBem30C3+Did/ctzDry4CRKxkiO3hFpHbI3ghKUFhR3OQP3mwP34v0xq/tQlYeUPmIyzfR30B0SV+UOUnF5Vryum3YlZFv5eGB8A38VvzXdn8tc8gO8zbf/bLHhlOnHNKKvqpv9Lszdbn/Gi1yfbaWytrgy0hUT6CRfez8tu8Y/xemyH/Ps63hUw+SQVLKSaJ4YkagMcVEqgg8RM8I5G+a3ZQV91c3nchygy+/U+q6ZTDmmPgcTDM2MBOvwwGBWiXcODwzIgEbwEFQetzplZf2S+HrlG9ggGKaLiMCRqRhTx7UjKTnBaAw8Udj8e4XHN8vxXnlyyXXkrqdnvehgPByY1hPxHQwevfSrPrEDNDe9xM9sKvahglD2jrILRS+UOuPOPqf0gp4uxn2b/gdobP/s02cAAAD//wMAs+ZNEaIIAAA=", "base64"));
  res.end();

  return __filename;
};
