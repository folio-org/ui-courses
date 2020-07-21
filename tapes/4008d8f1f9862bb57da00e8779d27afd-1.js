var path = require("path");

/**
 * GET /coursereserves/courselistings/2fd794bc-b36a-4b38-9c84-14e8685f87fe
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef/edit?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courselistings/2fd794bc-b36a-4b38-9c84-14e8685f87fe : 202 8048us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courselistings/2fd794bc-b36a-4b38-9c84-14e8685f87fe : 200 13602us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQduWDUlRfGSXx8Zo0xZosiqyoIbDgoUtCRQdxAjy76UsyTUMBHC00EKXZ2bu8Or1oijK4Mriqii5d8qIBkhTSUtEU2liQAvCBGqpa6+Vx/LzCET8E4YUbVxNZLy+YZRNGr4kjK1dz9LLkbTuwKbQtbPkwUkByIg0piZCe0q0oEi08d5yrnWlTsAfzV+ENMKv+fP/yc+ulJHWbnAP3dvQFt9Ck23sFhE6N4lfHy9vby/vVpf3ixSGa0jheS+nuMXlczukkLZHtnJjpBQssTXTeY3CkAYpI1RW2lErLNTq0M9u+u0wg5KDV7JRBMBmF66qiOFMEXRe8OzOaqEXcD3NPZO1U1rTCglYKsaWuTlaJBxk1Rgu8iDNQvYxbDL5C+NzAPzZhXa/0LKyguqaOyKMzy/nObHMGyKRS8GsRMP8UmM4glduGPnfZ1YonnKJt/2t5pxsligYxTg3gnBaKSKEV0RTKQln0qKpKXAJ5QF6NwbnVjmOwUMMbUi7glNOD/6SjenOpunEqJC8Vy4XHVt3ouYmtDw4g24bB3zY9Tj7M6wWVOiGVNLkTHCEnI4cEfCAjacCqRHlCfqey7NrHbtctUWPcejaRXE4QAz9mNv9ge9d0bXr0GIB3abvWsyxOPgZQx63kLo4DTXf+NNe3GCyziZ7NClEzOs53ZHKF/FA6VVFr2r5hVb8E83P4VeYmJvdY07X8iuhcKC4ILUFTmpvVc61yKVqVkvBG9BNtfDb3n2458x8vOe4mYu3fwAAAP//AwDZ9FbdPQUAAA==", "base64"));
  res.end();

  return __filename;
};
