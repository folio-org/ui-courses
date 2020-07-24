var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
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
 * referer: http://localhost:3001/cr/reserves/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/6d973b67-b0ed-44df-a169-67b46365264a/c7946c2c-1180-4727-b97d-6c66f76d064d/9ea1fd0b-0259-4edb-95a3-eb2f9a063e20/edit
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/processingstatuses.. : 202 11450us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/processingstatuses.. : 200 2663us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTy07DMBBF93yFlS0dZMfPZInYsKrEY4VYTOxJFSkkVeJUQqj/jttSUSigqsILS/b1HXmOr98uGMuWQ+9pHJtucR8xTiONGSvZE3tLYpKbsFlmrqpzh94Aeh9AaavB1TWCNNppXpFwWmSznaXDF9qa7shj21LYC4FGPzTL2PTdF51hF9jU4QqbFquW9udfKGLAiJvDu+ukTT8QRgo3adoWyXnOgVvI1QOXpeKlsFdW2kuexkeh5JqW4XTX1rRO83r2DQO6kCvrHZDDGhQKA64SFnhhlHVGkpTqCMO8Y/0QaPgNw3wjUpixaoqs6yN7pcj+EYYW58DYu36HIdLTY1EE4JUyoFwloUCZg+Ka14LLAs1xJm475lMXbb9IifsjGNSsUjAOiXzYps88nY/E8NORCFPqvFTFlTL6Z9f16+NIw+2OSkBZcK1qsF4RaIMEFUoPtUlYvEDCHA+gsudNtSz2qbnUdgrK9v/Ji/U7AAAA//8DALa5RX+eAwAA", "base64"));
  res.end();

  return __filename;
};
