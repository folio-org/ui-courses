var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:48:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/processingstatuses.. : 202 152307us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/processingstatuses.. : 200 2592us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTT2vDIBjG7/sUkuvq0Pgnpudddipsu40dXvVNCaSmJKYwSr/7TNrQbaVjlHkQ9PF5ef35uL8jJNt2rcO+r8P6JUIceuwzsiRvZJ/EJNd+XGbGVrkBpyk456lUhaKmqoAKrYxiFrlRPFscLQE2OJme0UHToJ8Fj73r6m2s2/BNJxA8GQLsoG7ANjif32AEDxHGw8d20qbrECL6xzRNRXKWM8oKmvNXJpZCLZV+MKK4Z2mcCiXXsPV/d02mQ5oPix8YwPhcFs5QNFBRCVxTY3lBWallYbRAIeQFhlUgbeexu4ZhNYroF8QOkYQ2kg+M5B9hqPwWGLPrOgyenh7K0lNmpabSWEFLEDmVTLGKM1GCvszEUyAu3aJp1ylxvwQD610KxlciJ9twztPtSDS7BcnsOiMh72OFLLaptdR0eubp94i7wycAAAD//wMAYkKxF1wDAAA=", "base64"));
  res.end();

  return __filename;
};
