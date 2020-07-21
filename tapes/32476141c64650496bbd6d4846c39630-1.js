var path = require("path");

/**
 * GET /coursereserves/courselistings/80939663-9486-4382-a5f0-a28a5580d0c9
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
 * referer: http://localhost:3001/cr/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:08:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courselistings/80939663-9486-4382-a5f0-a28a5580d0c9 : 202 8023us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courselistings/80939663-9486-4382-a5f0-a28a5580d0c9 : 200 16706us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQduWDcWXyOzy2Bht2gJNVkUWFDksWNiSQNFBjCD/3pEtqYaBAI4XXujqzMyduXq9KIoy+rK4KkpNDTdKcWKEVkRwzYiVgRLLtJVSU0+dKT+PQII/ccjJptWBTNc3Fa0OGrxkSK1dT9LLkbTunM2xaycpOK+Eg4ooYyQRGltpQYFoE4JlTGten4A/mr/g8gi/4uP/k59dCZHWbmAP3dvYFt9igzZ2s+g6fxC/Pl7e3l7erS7vZykO1y7H572c0xbmx+2QY94e2cLGQKmzuLxKE9EIQxqgFaGKa0+tsE7WSz+76bfDBCrmQq2amjhn0YXneAlW1QR8EAzdWS30DK4Pc0+k9LXWlANxloqxJTYHC4Q5xRvDBA7SzGSf4gbJX5Ceo4OfXWz3Cy25FVRL5okwAf98wOtXwRAFTInKKjBVmGsMR/DKDyP/+8wKxROWeNtfFXOymaNg6ooxIwijvCZChJpoqhRhlbJgJHVMuXKB3o3BuVWOY/CQYhvzrmCU0cVftinf2Xx4Y1QI7pWpWYfWn6jYhJaLM9dt0wAPux4mf6aSggrdEK4MZoKBw3RgRFxw0AQqgBpRnqDvuTy71rHLVVv0kIaunRUPg0uxH3O7f+F7V3TtOrZQuG7Tdy1gLBY/Y8jT1uUuHYaaLv60FzeQrbfZHk3qEuB6TndU4yEeKnVF6yspvygpPlH8LZ/CgbnZPWK6prU12vKg8dvRUDsihQZiG8pJw2XDwHvD6uUm295/uOfEfLznuJmLt38AAAD//wMAvBtEVD0FAAA=", "base64"));
  res.end();

  return __filename;
};
