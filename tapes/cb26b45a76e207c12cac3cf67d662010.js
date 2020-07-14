var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjZjNmI5YWI0LTE2YjEtNWNmMC1iZGM4LWI2NzI4YmM3YTUwNCIsImlhdCI6MTU5NDczODc4NywidGVuYW50IjoiZGlrdSJ9.pE0DFuVgWBOKlfXuIoKeSfTv9crEA98GpVjMrRMvJDQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 14 Jul 2020 15:00:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 6560us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 21963us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTY/bNhC951cIvnbZ8EsUldt2t0AXTTYBkqKHIochOVyzK0sCJW1jBPvfQ3/Ilh0v6t0cWh8EmMM3mhm+eUN9fZVls+Bm2ZtspgUV0lAgxheMSFnmxCjJCcey1L7gDHM3u1gBaljgGnIFlR2qocsYZRuTw87G0Pahqdc7foEu2MwF7zFi3QdYWTKoXRbqHu/i+v8IbSH2i7TrZhMQ87ZkjEtiHQciPSApASWRVCjtNC01d8fQ9+ZvtP0K/jUZ9smd7Wua3jvo57hIIdputB3nd1PbanChvstM08+zdoi4zg7atgrosoSe78AL7MFBD/vw0qKNCD266/RYe+SUU0ILwuQnKt6I/A2VPwua/0TTb+sooYbWnY9agx7T83FdLdsMscO3oetT3NtaWyqMNSAIKKBE8pwRI5giVAlmDEfl+faED9BPlftsdwkS8S45ixC3oeCXHmMN1W7DuHBk56O9w/gQLLZN2FFHgKQ6547I0qeH85wA8yVRyJVkoLBk/hT8OJ99Rs/weNAhIdrsGrv7jO2ttnEbq3WTVRc62zxgXF6Hrq1geTv1MVSbzlm7IiT7DarqH1ju0W2w90P7trEwcrOPA+7M86ZyH+dY+V+/tCEuP2AMjZvmuQpgiDuwuNivrzo1Puzq/yfifTfbmh93b+h68P5jFdputeuv7POriX1WbQPb+siF9WWuPLHMeSIZNUQbBMKLpD3cWijsSPYd9OmzeYa36dlc1jV+OXEqv//x+urq9fXN68u9MXSXtg8P+F1hQ50aoR8muUmKSKkFAjnTRBpZEoOUrbivHQUJNi8mb4VFO3RbqOLWF8oUJMWcJ5IJQUrOCoLOS26RgZZ6D62CSV2zHEvqCq2pQGKBytVrUwCYZI5bJUzJZQrGTOgSwyJhP264/2HF/RfQvJvAb9z24M/zccSPxLDFKEWOoSnQpeNbJ6KAlFQUxBWeQS5y5tWYyBr2NC+e4elA9oOdA1YL6DJOWTmbUjz2E8llJWGUMLHfgbU7svOkyrODVDcC+mnZ4jZhnydqIGpimLZpInFDDLUJa6gvhdN5QXcJ78FPp/0Mf9O039dVqHGiR0ej7rZJM5u0GLukQ7ZZtE2dBu5hbqtuiIPtm7gJb0uJ4wg5ppYF7klpXJnGg3TEWPREFT73XGl0ZjrrEs1GXc+LUjOGRBRl6nRLy9TpKT+gQLUtpUdxstMdLLqL7Goe06SB7HLa9D8wC9ceTg31M8e6yuXhWD9zsO9wowhvz+B7JihmFZTprsNN0pOCWqKlEkTJUoJ3jGpUJ+tsCnAKUmEL4URSVKRJTBLXtbfCGYl5gfZEnT/BsmriRfYu3OP/pMaFoi+q8Q73bzUurdVaY068csWqxknuGRNE0DQItDeoppo9rTEHNMJhEsdcEQk60ZjnqeQ86RMaZKqQp7gMdxBdqjG4Ozzs2P+20Lp4WaFH3GGhs88/emnOGXvBpXmHOnlpvh0WBuPmi4ILmW+uxF1SuqSSt/vvhrD9pvk++POEgalp6OeJwohZhfzq8RsAAAD//wMAq69ZX9oNAAA=", "base64"));
  res.end();

  return __filename;
};
