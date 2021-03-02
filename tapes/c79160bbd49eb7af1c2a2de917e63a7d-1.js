var path = require("path");

/**
 * GET /coursereserves/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401.. : 200 7366us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXW2/bNhR+768Q8rqwJSlKJPOWJgMWrE0LtMUehj7wcphwkSWBkrIaRf77jm3ZVhwncJoN3YsB8/A7t+9cxO+vsuwo+qPsJDsKnBorC06kDoEIwxVRXueEehac09QIyo6OF4DazGAJOTOVG6qhyxhlGcnOh7aKzvSwuuahcym2fWzq5e23posu8zEESFD30Swkmal9FusertLy/xramtTP8NbFyjl0QTPGBXGeGyKCAaINCCJoXiqvqFbc70I/2L/A9Qv4dxRsAz1Y1zTU96a/hhm66Lq1bDe+i9pVg4/1VWab/jprhwTL6EyLaQGfIfp6A55Bb7zpzdY9PHQJMHv+fJHChUZOOSMUKWCfKTsp6ElRvKY5/YXSE0pHTQgbWv8M2BJ1h793y3y5ZkgdvItdj56P2bZeBiOFINTmOWYoGKJcKQkF640tXWnoyPE99GMJP1gdQhJcobJk0ugKfOsh1aZi6wvrgx05X8s7SLfRQdvETfHkWLqq4J4IHfDHB04MC5qUwEvBTAmahX3w3Xi2ET1D471+icll59DdZGwrdY1fSZ2fnPrYueYW0vw8dm1l5pdTHUO16p2lKkKy30xV/W3mW3Qb3c3QvmucWVdnnwbYiK+byn+6hir8+q2Naf4RUmz8NM6FA0PagPPj7fmiV9PtJv9/ANx0R6P4bmOh600In6rYdotbf2ZfX03kR9Xo2KijyF3QRRmIYx4nD6OWKAuGcBkk484Z6dbVvoE+zs0ztE25Oa1r+LaHld+/vDk7e3N+8eZ0K4zdqevjLTxIbKyxEfphEpugAJQ6Q0zBFBFWaGKBYnuWufI4U40r5MSqmbVDN0JL7oIsrSToc4FFhr2jOZMEfBDcATNKqC20iha7Zr5OqZdK0RyIM1QszKIDgIOOuzK3mgt0xk7KJcUZYj+tav/jovZ/oMy7CfzCj8QfpmOnPrDCZmMgQSNpXAvCaS6JEEESRcuScFYa0AV1vHRHE9jjdfEMTdO6+JxiHft5hkN1UjZY36mfDlxKMM+83N6A2u/I0dR6+o4Or6bn53kL62gLrAsARSxTDhcSt8RSpwmzNOjcq0LSNW0T8BMxH65vGvOHuoo1TIbRzqa7bHBlkxZSh0PINbO2qXHf3o9t0QppcH2TVu6N9bDrodYOguNAINeMCGUpwY2ANSKUxBGSq1JP+mPAGlsP9UJqxRiQHL9XiHBUY5tjfIYaqpwWAfK9be7NrDvOzq4TrhmTnU47/gWLcKlh305/eqszeVLIEypfU6V3tvoW+Hb+ZRt2ENZ5X1JiNLpV5Log2uWO5EYa5b0UzsNUxxPfBk8bH4HPN77eBWM1PGBcac844xrTyTjWpA0E5wMlssBjphUwa/YybqXxpUGKZe6RDAboBzBKVHC5twIKCXsb2MyrJh1n7+MN/E/YxvB/Htt7jf9nbFOLzWgLRUyOX9zCY8MazXH+Bs2DpTh5HexnmxuwucfrrCjxOaKwtXmB5HNkCSywUop9/W2uTPLItvFXcH+K/UTKy9cqz38W5Y8Y/5coz77+4Itm412hy90XzYsTc1Ba9hh+WVJ2X1WXw8xCWj06eS6K1Zupw22Im/Ry+7SM47P3YQoPGieS34/jpek7aIw8MPqS1N29uvsHAAD//wMAtPAskosQAAA=", "base64"));
  res.end();

  return __filename;
};
