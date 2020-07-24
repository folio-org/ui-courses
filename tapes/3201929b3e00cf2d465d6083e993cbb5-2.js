var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves/c7946c2c-1180-4727-b97d-6c66f76d064d
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves/c7946c2c-1180-4727-b97d-6c66f76d064d : 202 6455us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves/c7946c2c-1180-4727-b97d-6c66f76d064d : 200 25365us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/bOBC+91cQBva0oUtSJEXlliZ9BG0eaN3dw6KH4SvV1pYMSU4bFPnvO7IlS3YecC8LLLCGIQgefjPDb57++YKQSe4n5JhMXJpJ7YSjnBtGZSpSarPUU+20jqn2TEs/OWoBrlxVdfiQ101e3Jxv0Iq5mETjqQCGaCs0tZF5Gq2zHIwzwicbdN6ERQfKAvDomaVMqIzK4C3NFCQ0WBEzYDoJgm1Ay6p0oa7R3qcGmlXdKTA2CgNOU3DOU6lSRU2MQBOtjGI2cKP44wqu7N/BNa2SnygeWDhYI0IKWIQ16GNwMJ8H3wt8qF2VL5u8LHbkBApPVgXcQj4HOw/9+UVowEMDgzsty1WAJvgzfKyVCCYYZSkVcsaSY8mOeTpNk/R3hp9OEaJWS384ag26x+f9mqO6garZQ0oq1IbBUOxr1bQPjyuXefDnGNkRoxYqV/oN4IRLk6RJIhOm+1vj6WVZQXX3oXTQctUFNVVGKGMdDc5xKrk1FKwDGlOrOTNCxOif1LEf1yGyv6B2HNurj3+evyWvZ+8ur8jp2XBge7X3n1+enr48O395NQjz+sQ1+e36QFOtwiAosGia1ei2koXAGPoBihssHJlRGxhHdhPjGUhwKh1ZhcVym/1aOCxMm1LnQFHpk4Rmgqc0+CiFC1h20gzQeW5bovp69akxLAnUAcYYzaIDAQIVTic2ExKdsQN2WeULxH4K1W3uwnWZF2uKJwlIZpTAQskiPnwUFCs6ozoILTnokPE4aKlH8HNftxr+OlAH+bLJ1S7sy1AtoAhFs5c60Xkt8eZUZxkyYiKjBgmmJsMaFsJgDm6r94GOp1PnF9SOU+cC8oJ82ND+XOJc/J84/1biIIfzriOROmD8m9yR78GS1tFQ9bnhyqKpcrtqyqqz9vNBdE+KpizycnVE3lb5TVnl9TjGW/zsbhl62gPLvMSRmqkg0GED1CTcYgdKU2tC1N7wJ3XMwo8NdY+euESvRpaEzSTGg9PoAAeryZCaNMGWnYSgBGZtENB1/6NHrvYHFOQdVIswD8UReVNB8e0/eTfypa/1lZ3nmyrfC+daUn/F0K8r9nxGrivcE0YZPAe3YeUUFrbK/U04IhdQ11MyHGpn7lW83rUycYIxORyqyi71rrc299xst4TL1cJ23szeK87U1BjDFZmSE2VIq5G8mZGL1ydnr4dsXd6tAdveFooVZvPgye00ZcdFOcUO1h9pGwoUrmdV2ZikLGBjw56A8cscNSJIqnjKwOJSB0m2D31Xdf2x/YFtP0L0B7+Wc48bV992QhKj5thsbAZtjkiHBesy6h03OvVYwTybbLeR0WiHYhz/IE1IeUJ5GhMqHb5BFg0ViZHKWsGx900e1/DU0newyt2lD9rLkaosF4PXbSywHXxtZhW4bygfWQPv8zYkMP+EbuBL/bkOfrfVDwp2Ft1otYkqw/24nTtSaiyvLPH4YDrzXFlsyZPHNTwz1g5XOr74Js2JLxc430Y1sLf0XpZk6wkB/M7nw+HHNt4Dd17Nze7Oe+DWu8V1sPvdwVA2ML+Gm1CfF/0eq3T6QNpHTIphjXC4RGD1t+LNpvnbdseAuwUKX0Gdb0RY9aEiNytsMd/L6tuQNw8JeY4Mro9VeizkFAfdmIwe8+oO/ay63PFYukzJSFMnA1Uah7WFxNGoGf5r4zi9sWF2+GeI3NhMBP59UDs2O8yv22wv/+L+HwAAAP//AwBa+ZsxhA4AAA==", "base64"));
  res.end();

  return __filename;
};
