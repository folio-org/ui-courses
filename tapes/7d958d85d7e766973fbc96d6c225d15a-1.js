var path = require("path");

/**
 * GET /coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:07:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03.. : 202 12876us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03.. : 200 78516us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVTW/bOBC991cIvm6ZUCRFkb6l7R6MbbMLND0tehiSo0S7tiTQUlCjyH/f0Ycj1W4LZ+sDYXD4Huc9zQy/vkqSVRlWyTpZeeWUK0LKuCo8U8ZZBtoIWmRwQRrluVy97gEV7HCA3EAMjxD/TVxEDGV1P8YD7n0sm7asq+HY3QMmHiImUIWkGE8mdZG0neu2ZcCqhRb3R2wDsd3R3mZMK820Nir1LEs9MhWUZwDcMo4gUse55QpOoX+6f9C3PfwrBWaJF3MtRf5OpA/JR19i5acsv6NxU/ltNwi7x3pb3x9eJw22cfg76G5gC1hX7bBzZNlhCwFamFOlTR+R/AjvaBmoBRec8ZyJ9I7LtczWmb4yXP3G6TcREaprwuWoAfRE69PgnK+7uMf35b4lAZPvhltptZbMKqOZkn0lZAVnIAxkmeGBe7s6R//I+ovpCBLxnsgixCmVePMm5ekxil9ajBVsp+CXb4Lb2kP/TaZg4YNWHlOmrc2opulCozgyY4sChDBG5mfQUwWzhhewLQvoA5RV8r50JOgwh30dxvAfn67fvr1+t7n+MAfL/Y1vy8fhQBs7nAMVudx2C4mUAHLugexMDaMetswhpy7W0gQOCnyWL26FXdPtJ6gWvsi1y5n3QHqCpK8j0pxhKJQgnWCUmaHbUcGEzUJuDJfIPHDVX0sJICATXktnhaJk3IxtYrkj7EeMj6XHv+qyGgxeSVDcZCIwZQtaQkFVkRaWaRRapaDRpsXMsl/AN2HfM/x9IUfyeSz56VtTBe2OJWLzVAirmOAyZ0oVOTNca+obDWgz7oX2qwXsJ+VxOdOyPO5iWZXtIekbdqG1pbFz0szErOcTWJ02O111bO0p4bE17w4NTmptmilOs51JbalaBNIEzKh4fOHRFVwht2p1Bv6x5hfwLTVvKpqOcU+z8zl2OlBv66SutmVFT0e9a+qKxvq32vpWiJ1v6zimN9XD5/85WlO95vk6y650djpaJ9SbwyeqwMlIZ0AWhvrMYE7viTLIwHHJnMycwBCsyPVFw/kn906ol9/73fF+2+0cxvHdfh6Z1FO+t/z2+UnfYvMwhs4dvMA/fSV1vtTxq+5d4N35nb/i3NOrp/8AAAD//wMAxbpEphcJAAA=", "base64"));
  res.end();

  return __filename;
};
