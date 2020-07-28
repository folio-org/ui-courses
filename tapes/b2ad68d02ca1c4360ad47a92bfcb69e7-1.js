var path = require("path");

/**
 * POST /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/instructors
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 146
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/574e947b-5cdd-4876-b477-45ff145a5959/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/instructors : 202 7303us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/instructors : 201 8237us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSPv07EMAzG93uKqCv45KRJk3QEJIRghAewEx90uBa1uQGd7t3pn0PM58HDZ/++zz7vlKq6XKlWVQFDzBITOMMarJAFPrAH7WurY63FB1PdL0BPR1mR57163avHL5mKjGXotzHTmIa8bTQ+RNzkNJzGSd66qXT958uWGVN0SQihsa4Ga0QD5yYDEiaMTfbMdqOPUihToQU7z8JiOAoVyU9zW80MGgT0YMK71q2NrXN7a/QdzrWa/DMPPx+TjNcjpOaQGu+Ak0dwTAEC1gw8v0+UMTPFP/70nW/OvDK3Z874ZXf5BQAA//8DAP/g8QGkAQAA", "base64"));
  res.end();

  return __filename;
};
