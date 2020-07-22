var path = require("path");

/**
 * POST /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 143
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves : 202 6701us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves : 201 68730us");
  res.setHeader("location", "13f34ec9-6019-40d9-8c25-f703eb97db3b");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTyW7UQBCG73mK1lw4kIp6X+aWASECUYhQOCDEoZfqxMJjW7ZHaITy7vTYnslyiw+W1V1f1V9/lf+dEbKq0oqsyYqJLCRGB5oyB5ImBzZyBdlQgcGZFERYnR+A2O76Aa+rYaya+6uZjlmgZZaBNlGA1EqAQ4yQAo9KYpIuq5muRtwuUNLZRBY8eC7MAUJwJRayMOhYiFqGdCzZVZiuCnoA/5Wjchh8H9uEUyqphLNGUyWFFRNTAkp41/a+31+30Y9V2yx1c0xaRixinVMgbaZgJUWwLmfPubXCsGOODvutb7AZX+VQImandIbIUgbJaAAb0AM32TAeozeRnnRUYz3L3PRVuseRfGkbHN4NZOPDfk3GBySp8n2FwxGJbTP2VdiNbT8cyF9L0+Wq8ds52acK61RGcE4+Y43Ngr6Eb0rw3b7DRTUPTkYtGOToy5Ct4+CNoFBGjIqX9pH71ZTmkfw+OrALdTX3/krJdDM8YD/lvqxzj4lcXpCvTdvlJzld7eOs+Ab/kp9t/+fpLvkRv+XblyVWnDL9Wkb0dX2z24al2u33Mmx9cSWVtWRjpCMTdLKv209hH8oHOS1E1Qyjb+LRDZNDUslK0DwxkMUZcFEq0DEwI5yzYdm/gj60k9fDcYWCCYZmBsE6C9JxCd45BhRlKP7yEFQ+dPA4re+zRfTNs3GgDYIxr0EEXgSIXMbBtYOUnGA0Bp4ozj/AFkdfvPLP1j/2WMxLH8trMY2XQRrg/I6JtXBrzi+Mk+9peU6+zMxm/2PAfhHhVC5Nl/3lNHBQNBnwIsWyzkFI6TM6dTJw16U311yYt9c82Hf2+B8AAP//AwD0t3ucpAQAAA==", "base64"));
  res.end();

  return __filename;
};
