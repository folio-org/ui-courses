var path = require("path");

/**
 * POST /coursereserves/courses
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 283
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses : 202 6295us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses : 201 6615us");
  res.setHeader("location", "6d973b67-b0ed-44df-a169-67b46365264a");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSQwU7DMAyG73uKaFcwcto0bXdj4oKEdhoP4MQOq9i6KW2R0LR3J2034LoccvDv77d/nxdKLRteqpVaWq7L3NkSHAqDMRyAtK3Bls7Y3BaZNbR8HIGWDjIhzxT5i+KnclGEm/Zj1lk6H5tT3xzbqW27E+UpiqKWVZg71TGofnDDvmFpe+qlu7Eniv0h1V7ntXRhbWW0h0J7AcPGAxHWgEKZdog13tbyxyF28tZ0ffK/0gX6kIeKISNEMC6z4AIyBOedpspXGef/6c1wcBLncGuNetY68WOYzW/uvZx2s3SQnph6GuvnVBidoqQ8/JK+qTvDDAFLyMxW21VRrtA+1dY8YHqTyR+z/n7vJF53Z8prLEyA0huBwpKAo9xDsJhiaUoHoBs/nPjumVfm/pkJvywuPwAAAP//AwCvMrcFPAIAAA==", "base64"));
  res.end();

  return __filename;
};
