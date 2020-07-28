var path = require("path");

/**
 * GET /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:17 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4 : 202 9281us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4 : 200 15696us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTP2/bMBDF93wKwWt7DUlRFJktfxajTVugyRRkOJKngoUtGRQdxAjy3UtZkmMECOBo0KCn39294+PLWVEsgl8UF8XCOFM5QgZKViVIQRysVx4YMseM8rW1cvF1ACL9DX2KGJcjGS+vOOOjRs+JYourSXo+kladwxS6dpIa55V0uYsypgKpGwZaMgJtmgaF0Lqs34G/7D9yaYBf8ue3yU+ulJEW17SHbjG0xY9gs43dLLrOj+L3+/Pr6/Ob5fntLIX+0qXwtJdT3NL8ue1TSNsjW7kxMeYQsOIapJUGLDEOTJXaM5ToqvrQD9ebbT+BSrimVrYG5zC78GUJRvAayDdSZHeopZ7B1Tj3RFa+1pqVBA6ZHFrm5oQEwqnSGiHzIHYmNzGsM/mH4lNw9LsL7X6hixIl05XwIE2TX74RgLwxoEgoyVGR4c1coz+Cl74f+IcTKxSPucTr/lRzTtZzFEzNhTASBCtrkLKpQTOlQHCFZCrmhHKLA/RhDE6tchyDuxjakHaFYIId/CWM6QbT+MegQN6rULNOrX+n5iZscXDmum3s6W63ocmf4ZVkUlsoldHD1XI5HTkirnFkGyaJmelqvaEfuTy51rHLZVtsKPZdOyueehfDZsjt/oefXdG1q9BS4br1pmspx+LgZwh53LrUxXGo6cQf9+KaEnpMeDSpi5TX835HNQh9x/mFNBey/sa1+cLyc7gKI3O1u8/pmtZGpdVO1RVYVzOoLOp8oKUFaxuL6Jm3aGZ+u/Gf7jkxn+85bObs9T8AAAD//wMA0ZjM0T0FAAA=", "base64"));
  res.end();

  return __filename;
};
