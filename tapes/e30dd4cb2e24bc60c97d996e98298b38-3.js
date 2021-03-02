var path = require("path");

/**
 * GET /coursereserves/courses?query=courseListingId=="79702b52-0d7e-48ea-b7ef-a4e74289f000"
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
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 5376us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALxWTW/bOBS891cIum7pkBQ/fUvbPRjbZhdtelr0QJFPibqyZFBSUKPIf99nSXYUOyliBOjFHyRn9Gb4ONTPN0mS+qaPLbRpskz+TX7iCI6VYfc39YqDloyRkIMgQoAkRlpOrNY6CGohCJ6+HSG1W8MAunQx3Ln4X3Lbt7mrQ9zulwRofSw3XdnUw8rrW0i8i5DgqqQACGV9kzRF0vV5X5UB6s51WNgBvXGxW+PoaqyOSaWMYJ5I5oGIIDxxjlpCwXGWU2qpcKfgv/Pv4Lsdwaj1Qe0ZfHO9fyLxbfLFl1D7Q7VPqF3VvuoHiTfQVM3N9m2ygS4OPwcHNq5y0NTdMPLAs4bOBde5ecm7bYuA7oQP+DHQc8oZoRmh7JqypaRLKRc49AelS0oPbAjsN+E5INNLYZZML4xQzwLfbb+2EKc9KETuQ1CUOCsEkZmVxPrMk8xpZ0LQwgdIJ4r74ft+2pGx7T6WbYeWTGzaaspzyQkNGnfAgCO5hoI4AVpwYwt6qOgx/vlNPYMSQRFukDC6vbz28h2j7GEefnQQa1dN0z+OpqvGu91+783xQQkPjCiLvghTUGIEBYJPLRznxmT6CfCplgc1ZzHOm/STK+vkY5mjtO18gW/CuOCvrxfv3198WF18mk+X7aXvyrthSRd7mE/V6HzXz+RiIUCpd8RJZojIhSU5UOwtlZlAnXBe6kfPdutN305gxX2hVa6J9w6VhSwjljNNIBSCo2JnhJmDq1HLhJZBG0MzIN5RsXs0FgEOCPcqyy0XWFA+R29iuUb0F4h3pYd/mrIeDE8zJ6iRPBBhC/wIBSeOFZYo4Eowp8CyYs7TzghWYcrQl7Ek3/bH4tAB2FvrfetYzTi3gnCaaUzeQhNDlSKcKQdWUs+VTx8Bf9k257DN2+Y6lnXZbRPMiEdR0HYYevMEoQR952q+BupwtAIfSNMT1eNBvt5uYNJumRRUmJxkymIfccAclthWvvCQF1QAtSJ9Av4rB87inDuwqjGlY4sZPps9jvarJmnqqqzxOmvWm6bGa+ZU5+7AxN53TRwLnbrl2yuCHvNaiqXMFlbK07yegOfn9YsvCymXzC6kMr/nsrjq1znE8SVjFrx4Cv1uK64ObyAVbG73k0+5+gJPxYIreyTr9Y6+yE/Bjy/fV7q58/J+bLS0azpXfQbfxDGu2Jv7/wEAAP//AwBTv5xwBgoAAA==", "base64"));
  res.end();

  return __filename;
};
