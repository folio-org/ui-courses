var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3"
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
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 35912us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 13329us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTW/bOBC991cIum6ZkBRFib6l7R6MbbOLNj0tehiRw0RdWRJoOahR5L/v6MO2EjtFjKA+yDaH73HecPion2+iKLbNJqxxHUeL6N/oJ43QWOn6v7F2JksKnbGCo2NKOc9AaMN0Viid6FRqBfHbEVLDCgfQFQR3D+G/qAiIrqxvdzMcrm0o265s6mHizR1GFgJGULvIj3OjxkfdpthUpcO6g47y2qNbCN2KRpdjciLVOlfCslRYZMopywC4YRxBioJzww/JHcB/F9/Rdj3BKPUg9gy+udw/ifgu+mJLrO0+2xNql7WtNoPEW2yq5nb7NmqxC8PPoQItVIBN3Q0jB54VduCgg3nK/a4FpOq4D/QY6CWXnPGMSXXDk4XiC5FdaJP+wemzJyPcpnXP4YRepHKRyIskMc/h3m2/rjFMO+AgMTxVnmVWIUs1ICsgscxrnnIrgAoH8UTxMHw/TPsx9tzHct1RQSY2gvjE545J4JypQmpWeO6YL2whILe5dEl8Cv/8lp5BSaCAt0QYYCcvXL0TXBzi+KPDUEM1hX88CVeNhX63p7C3TiuLgmljUqZyz1muOLLceA9S5nmSnQAfazmoOYtx3qKfoKyjj2VB0rbzCbZx44S/vl6+f3/5YXn5aR4u11e2K++HKV3Y4DxUU+W7zUwuJYKcW2CQipxKrQwrkAvGdZI7Dgpsmj1aG1btZj2BtbQ+00XGrAVS5pKEGSkyhs4rSYohV/kcXI1ado3jsjznCTILXPVLUxJIvSitTgojFSVUzNFtKFeE/oLhvrT4T1PWQ8HjBBTPU0lGZzw9nJfkdp7cDsnnBGg0ws951jOCpZsM9GUs0bfdsdh3APXWatc6JhNSGsUkTzKyXZ+xnGvNpKAjZqippbbxI+Av2+Yctnnb3ISyLrtt1FvEI90dWd4TAyF2PZ+D9VOLoQV5fKR6PMg32xYn7Uakiqu8YIk21EcSyYVTaivrLdLZVciNik/Af1WBszjnFVjW5NFhTQ4+iz419usmauqqrOkya1ZtU9Mlc6yzPzBhY7smjIlO3fLtFTbf23W24PpC6mObn3Dn2/XLr4pn1/4dV8X1ZlVgGN8vZrZLZ9D2G3G9f/mosL3bBU/V9EUVNVo9VvX6er6omsfrvq6WfSUfxiaLu6aD6jPaJoxWJd48/A8AAP//", "base64"));
  res.write(new Buffer("AwD+OzzF/wkAAA==", "base64"));
  res.end();

  return __filename;
};
