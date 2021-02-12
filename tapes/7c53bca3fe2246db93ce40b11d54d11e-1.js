var path = require("path");

/**
 * GET /coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364?unused=1
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364.. : 200 6489us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/bRhC951cQujZr7y73Uzc7KQqjSVrAzqnIYbg7tNlKpLCk3BiB/3tHJG3S8kfluhdC4Ox7O+9xPvTjXZYtqrjIltnCBV3yHCyLjpdMOVQMnAksWOdtKIzJjVq83wFqWGMPOYEUryH9lRUJMVb15RCP2IZUbbqqqftjF1eYBUiYQR2zcjiZNWXWbYvtqopYd9Bhe4fdQOrW9O5sSEtoY5wSgWkRkKmoAgPgnnEEKQrOPVewD/2t+BNDt4P/oMAk8WCuucififQqOw8V1mHM8gmNZ3VYbXthl9ismsub99kGu9T/7HVvYAXY1F3/5o5ljR1E6GBKlV6GhORH/EiPnlpyKRiXTMgLni8lX0p7ZJz+ifMl5yMTwbab+BxM2KU0Sy2OeG6egZ3efG0xjZ5bm1sUOjLLC8N01JxBnpesVDYWXpRSBLvoCW7pedu7H5ptavFT1XZkwshjpPfojWc+KMUUGGAuEI/mgucWjCtiuXiMfu7zHUxHkISXRJbgTlI6ORVc3EXxe4ephtUY/P4guGoC7L7rGCxDNCqgYMZ7TX1RcuYUR+Z8WYKUzuX2EXRfwaThFWzzIvwMVZ19qgoSdDOFQxOH8K9fjz98OP54dvx5ClbtSeiq6/5Al7Y4BWpyudvOJFICyHkABlo4pgrlWYGcqsfkLnJQELSd3Qrrzba9/8ShtKawLAQgPTHPmZfCMoylkqQTnHITdDUoGLE6Wud4jiwAV7trKQEEZDKYvPBSUTLFhN2kak3Yc0zXVcDfm6ruDV7koLjTMjLlS3rEUjIQpWcGpVECDFLBTiztDH4W2x3DHwdyZN+Gkh+/NVXQ+q5EvBVSesUk1SFTqrTMcWOYFAbQax6kCYsZ7IXyOJxpXh4Xqaqr7iajnp+1dtvR6JrPA87IZ2mmE1jHvThdxRcPdA6teXGzwVGtF1px5QqWG0/VIpGmqKbiCWXAouQKuVeLR+DnNb+Cb675rKYJm1qav/ex/aH8pcmaelXVtH6a9aapaTU81LZrhbQNXZOG9MZ62M+w8KC81YEZsSsPpQuah2SlDtTFQaILpX8iw1+wSZeYne5GTYrZ+RX8PZ0qIN23r8i19fO2fsMofXavvLxZaEVoucztkef7m2UCvn5JzDhe3k90uRJHxjxx+ds21LCj6Jl9+49Ld7RGHGnj9rfnm435d1uevvj/XdtftusC0/Cf7n4V0qwMu1b6cv93b4WbqyH02MODHHS5fyDkrf4d5N6jS9/i3e27238AAAD//wMAah2nkDULAAA=", "base64"));
  res.end();

  return __filename;
};
