var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 244
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/create?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings : 202 7218us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings : 201 4594us");
  res.setHeader("location", "9c95cea0-6453-42e1-bd6d-0a0c096d7bb4");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSQPW/CMBCG9/6KKGt71dlx/MFW1KVTFzpVHc7nc5UKCEqCBEL89yYQ1K7c4OFePffo9emhKMomlcWiKAOHmoUQrKkrMFoUxGQTICFjsMnFaMqnCejku+mHjrq3K9m9LBWqayaHQbotrefo8C9at0xD027nKHOyhkeLDaEG4zOCNyjgQ86ktfeVm8Hx4uYGBae0DgY0Vg6MyQ48WgtaWZJQI2vLV4jbfdfL6riTGQ2qNmh8hMoGP/VjoJoJOLPEjEYwzP2a7dhuz0Pbvccf4aGf+M/i6xJuZKBEA02707iYVJ3QIOl1fC4mjRoBHWi/UmphwsK4Z+XDI45zMfwxy+NHL7d/lCp6tq6GyA6hjuTHclWEGHMkSpgihRu/36W7nTNzv3PEzw/nXwAAAP//AwBqvtmCLQIAAA==", "base64"));
  res.end();

  return __filename;
};
