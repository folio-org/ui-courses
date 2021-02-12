var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/departments.. : 200 3225us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPU/DMBCG9/4KKys1OjtOnGREMHRggTIhhovvQiPlS4kzVFX/O25KhQR0QCwn3fmeV6dHPqyEiIgHHH3LnZ8iUYhXcQjTMK/p1EYqSdPMKCcT5VgaMk4iQi6BUasSIAeD0fqMdNjyAj2ExJ14djV3jqfLM/Hkxnrwdd8tW9sdi8nPtBd9JXxohgY79pf1lj0Sejztnm8KQzcyeqb7UJYMDVpJ0FLpLcSFhkLb2zRLbgAKgM+kgM0DXcOULRJzwjKbX8Hu9i8Tj5uzEGtjyyohaaFMZUIJSIzjSlbGUpmrSitnoyXgGOpx/d1n5XKltJGONEpTIcsc2UgDcZpRBnmm6YfPRwx6WvS1uypz07lmprp7F2Uf3A/zyAI7EjgMTc0kAr2b/q82/4vaX7AvMeLtFBH53mPzxK4fafl/enX8AAAA//8DAIoS5hSXAgAA", "base64"));
  res.end();

  return __filename;
};
