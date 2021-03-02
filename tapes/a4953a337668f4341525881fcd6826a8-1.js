var path = require("path");

/**
 * POST /coursereserves/courselistings
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 262
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings : 202 14189us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings : 201 4047us");
  res.setHeader("location", "bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJTRPU8DMQwG4J1fceoKRs73pSNiYWKBCTE4joMOtb3qmiJQ1f9OyrVCYmOJFL955MQ5XHXdYsiLbtktUg6FgrWAyRiwpRD07AOgpEzJsyeUxc0JTPI27OpE08Ms5bPKtKGVmuPL9k+q53Qn08fAsh2HTT2fMGSxdzqDjaUtuWggVSJ40d4q8hJVmfFqZKrDuDlDZ7hE5wuwygWswgR9EgIdSlCamQLjDNsV1mdUYst0tKDRBLC2BOjRe9DKk0SHrD3PiMf9tJOnr61cqENvRHpIqmewqBMk5AgqYYkm9y5gmumwaQPacx2nx/QuXHcn/9K9/oRrqZSp0ql2aIVTq0moSr5vy08njVoBGkD1pMLShSX6Wxf9NeIS5yf9oruv5zbUyxVt4pw9AsX2lc5EB5ENg6FAfc7BcpaL32/z/5ue0f+bNn68On4DAAD//wMAi95ur3ICAAA=", "base64"));
  res.end();

  return __filename;
};
