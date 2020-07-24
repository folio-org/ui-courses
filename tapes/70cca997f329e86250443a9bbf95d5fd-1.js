var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3
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
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a/edit
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:38 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3 : 202 6341us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3 : 200 10936us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTP2/bMBDF93wKQWt7DUlRFJktfxajTVugyVRkOJHHgoUtGRQdxAjy3UvZkmsYCOBo0KDH392949PrRVGUwZXFVVHWzPrKawcCGQPZCgWtZw58a1uO2mrhqvLzCET6E4YUMS72ZLy+4YzvNXpJFDtcTtLLkbTsLabQd5PkrVPSEgdlTA1SewZaMgJtvEchtK6aE/BH+5dsGuHX/Pn/5GdXykiHK9pB9xi64ltos43tLNre7cWvj5e3t5d3i8v7WQrDtU3heSenuKH5czekkDZHtnJjYswiYM11XqM00BLjwFSlHUOJtm4O/XC13gwTqIT1jWobsBazC1dVYARvgJyXIrtDLfUMLvdzT2TtGq1ZRWCRybFlbk5IIKyqWiNkHqSdyXUMq0z+ovgcLP3sQ7dbaFmhZLoWDqTx+eW8AOTegCKhJEdFhvu5xnAEL9ww8r/PrFA85RJvu1vNOVnNUTANF8JIEKxqQErfgGZKgeAKyeRgCmXLA/RuDM6tchyDhxi6kLaFYIId/CWM6Q7T/sSoQN6rULNOnTtRcxNWHpzZfhMHetiuafJneC2Z1C1UyuRMCLI5HTki1lvK/5gkZmR5gr7n8uxaxy4XXbGmOPTdrDgabAzrMbe7A9/7ou+WoaPC9qt131GOxcHPGPK4samP+6GmG3/aiStK6DDh0aQ2Ul7P6Y4aEPKBq6u6uWLqi1D1J5afw6+wZ262jzld09ocVobV0kNjJUGdbxFarCx4xfJt8pxxgTO/WbsP95yYj/ccN3Px9g8AAP//AwC6GI+LPQUAAA==", "base64"));
  res.end();

  return __filename;
};
