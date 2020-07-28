var path = require("path");

/**
 * POST /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 143
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves : 202 7110us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves : 201 67397us");
  res.setHeader("location", "18304740-b3c5-4824-96e4-e75723d6ca9f");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJRTy27bMBC85ysEX3poNuBLfPgWtyiSNkiDIj0URQ9ccpkIlSVBklEYQf69tCw7Tm7xQTBIzs7szO7TWVEsqrgolsWCW8mUUQxQhhKUFQqcJgVkSiNk1MG7tDjfAUK76Qe6qYaxah6u92gXXBnIM9CqlKAEccCoIzDPAnM6GkS1R1cjrWdQ1MkEjh68kAaULgmcoghJGnIcg1YYD5RdRfE6Q3fAp3yUD9H3oY00lcqszhrNSiWtnDD5QX7etb3vtzdt8GPVNjNvClGrkCVq53atJgZWMQLrUvJCWCsNP9ToqF/7hprxTY1ShuRKnSDwmEBxhmCRPAiTDBcheBPYUUc11nuZq76KDzQWX9uGhg9DsfK4XRbjIxWx8n1FwwES2mbsK9yMbT/skL/npvNV49f7Yl8qqmOO4Ly4opqaGfoafJsf3287mlULdCpoySHlOHPnToA3kgGTRKXI7ZPwi6nMc/Hn4MAG62rf+xsl083wSP1U+7JOPcXi8qL41rRdepHT1T7sFd/Sv+JX2/99uYt+pO/p7jXFQjCu38oIvq5vN2uc2e5+5LD1xbUqrS1WRrliAh3t67bTs0/5T3EciKoZRt+EgxsmYSyjVaBF5KCyM+CCKkEH5EY6Z3GevxPoVT/vy+6AvfyO1I/tFMpwmDU0aFjK62CdBeXyWnnnODBSmIMQiGXatfo8zfnJxPrmJDeyKDn3GiSKrFSmnJvQDmJ0krOAIjLab8qaRp9N9Sd7EnrKLsfP+TO7K3LiBoS953xZsiWTF1qLj7s2jgbuMavtz4H6gwiJNmhTAgbDoERvwTKJgJjQ+8gienfAb7r4bs4Z837OnX1nz/8BAAD//w==", "base64"));
  res.write(new Buffer("AwDwPwOxzQQAAA==", "base64"));
  res.end();

  return __filename;
};
