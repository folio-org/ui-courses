var path = require("path");

/**
 * GET /loan-types?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/83d1901e-9727-4ee1-8fb1-35045e9230b2/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:17:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/loan-types.. : 202 9348us, GET mod-inventory-storage-19.3.0-SNAPSHOT.451 http://10.36.1.43:9168/loan-types.. : 200 2128us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTzWrDMAyA730Kk+vq4b8kdq/bE3S7jR0UWS6FNCluOhil7z4lXTdYKYzWB2Mr+iQ+rBxmQhRtD93wuaVdIRbiTRw4xtF1HK+FaYLDymqZEIJ0PhgJtVVSWaLShJTI1MX8hHSwoQl6gk7gOuO+hYHOXzc0QIQBxoxTDw5iJk6Jz2Pe1E4Zrl1L416VXdiwUP7RVeZB8fouxNR+G/9PTdCR9+P8rxs5T7W2UtfJSod8gpC8NNa7smmMVuAu3JYEcd2tRO77zf1qvrxF7UxdVwMdUSNZGcsqSRc9yMYFz9dY1Q4R2fBC7YVaQm5+t1ap/A1aP9R1LfKN1Roqafl1pLOJp9FUQcYYrFbYmKjochr7fd6RyLSj/MFTfredUbfYnalfO/E+ViiGfoB2SdjnOP2Cbnb8AgAA//8DAH5f0tuYAwAA", "base64"));
  res.end();

  return __filename;
};
