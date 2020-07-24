var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:56:44 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes.. : 202 9882us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes.. : 200 3332us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTPUsEMRBAe39F2FZHJ9lkv0qxsVEQrcRikkxw4S5ZdtdC5P67uT0PRD0UNUUgk3nD5DF5ORKicOlpnPj2eeCpEJ24Fy85muO93x6LYLAqmRuwsnGgUVmw6FqQFkNb+sbUaIuTHRJpzQt0HVd95H3Y8+TGfpj7FJfbqyT6CAOPU4rCpfWQIsd5n73mmTzNtE3dtbJtcmSa2V/kbSmhUCFgDUrfYtlp7GR92qA8xrzeCmXqafA/pxZok/fNyQcFWBpkVUvw3jagPQegihqg0gUdUFob/AEFZ5dR7B56SMZ5mh9FWpIFRf+VmenvaqT6jZo9dVhNK41G3VgoqzarUeyAjCNwwbENqBlb/UnNt07ygLwZ+cfpkO3PFciqM6qT1WlTm6+p8+e7icfLnQVPZYtGB6idZjAVMdg8HBAqNOgkMSl6J1E8bKsVc5ppdcMujX75eeXR5hUAAP//AwB9CRv2kQMAAA==", "base64"));
  res.end();

  return __filename;
};
