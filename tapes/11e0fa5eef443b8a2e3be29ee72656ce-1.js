var path = require("path");

/**
 * GET /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42/edit?nreserves=2
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000 : 202 15189us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000 : 200 18227us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/0KQdt2mhFJ8eFdHhujTVugyarIgiJHBQtbMig6iBHk30vZkusGCOBstODlmZk7vHr+UBRl8GWxKEplFLKmZoBeEQhNFhpFLVhBSjBtWkQsP41ApN9hSNHG5YGMl1cVVgeNnhLFzq4m6elEWvXOptB3k9Q6L4WjCqQxde7XImiBBLlTaxnTmqtX4PfmD7k0ws/5+N/kZ1fKSGfXtIdubeiKr6HJNnaz6Hp/EL/cX1xfX9wsL25nKQyXLoXHvZzilubjbkghbU9s5caE6CzYutIgGmGgIawAJdcerbCuVsd+dr3ZDhMomWuVbBQ4Z7MLzzkYVikg3wqW3Vkt9AyuDnNPZO2V1sgJnEUxtszNyRIwJ3ljmMiDNDO5iWGdyZ8UH4OjH33o9gstuRWoa+ZBmDZ/fMvAVq0BSUyKykoyVTvXGE7gpR9G/teZFYqHXOJl/6o5J+s5CkZVjBkBDLkCIVoFGqUEVklLpkbHpCuP0JsxOLfKaQzuYuhC2hUMGR79JRvTjU2HG6MCea9Mzjp1/pWam2B5dOb6bRzobrehyZ+paoFCN8ClyZlg5HI6ckRc66hpURAaUb5C33J5dq1Tl8uu2FAc+m5WPA0uhs2Y2/2Fb33Rd6vQUeH69abvKMfi6GcMedy61MfDUNOLP+zFNSXrbbInk7pIeT3/7SjnnwNWd5Va1GJR88+mrj8iLvC49Am62t3neM25EI3zXiJYIwTUPP/dxnEH3CqrvVfC5f914rcb//6mE/T+puNuPrz8BQAA//8DAPNSwus/BQAA", "base64"));
  res.end();

  return __filename;
};
