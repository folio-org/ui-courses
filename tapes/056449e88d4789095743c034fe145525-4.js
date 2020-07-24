var path = require("path");

/**
 * GET /coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a : 202 11244us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a : 200 12216us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/cNhC951cIuja0SYqixL05SQ+LJm6BOKcihxE5tNXuSgIlGVkE/u8dfawlr+Ni3XQPwkLD9zjvafik72+iKC5dHG2iWDuTJYXOWMHRMaWcZyC0YTorlE50KrWC+O0AqGCPI+QKgruH8HdUBERXVrdT3WFrQ9l0ZV2Ny27uMLIQMILKRX5aGdU+6vqi35UOqw46bI/YBkK3p3vbqS2Rap0rYVkqLDLllGUA3DCOIEXBueHHthbo78VfaLsB/p0Ki8SzudYifyXSu+izLbGyc5c/0Lit7K4fhd1ivatvD2+jBrsw/h11N7ADrKtuvHNk2WMHDjpYWqWbNiD54T7QZaSWXHLGMybVDU82im9EdqFN+gun30xEqL5xL6GE3qRyk8iLJDE/Rr07fGkxzI47SAxPlWeZVchSDcgKSCzzmqfcCiCzIB4JHuj6MHpv6z60+LFsO7Jg5qHFPvG5YxI4Z6qQmhWeO+YLWwjIbS5dEj9Hv/TwzqYjSMBbIgtwlBSu3gkujlX81mGoYDcXvz0p7moLw1Odi946rSwKpo1Jmco9Z7niyHLjPUiZ50n2DHqqYNHwCrb1CH6Csoo+lgUJOixlW7up/NuXy/fvLz9sLz8txbK9sl15Py7oQo9LoSKXu34lkRpAzi0wSEVOxirDCuSCcZ3kjoMCm2arXWHf9O0M1dL6TBcZsxZIj0sSZqTIGDqvJOmEXOULdDcpOI6Hy/KcJ8gscDVsSw0gzZq0OimMVNRMsWCbUO4J+xnDfWnxj7qsRoPjBBTPU0mBZTxdnJeUWp5SCymvBGg0wi8s7Qq+de3A8OeZHNHXaeTnZ00TtD+OiMmElEYxyZOMgtNnLOdaMyno6BgaW6ltvIL9y3icz7Qej5tQVmV3iIYjv9LaUXCdxAEx62UFVqdxQVvx+InO6WjeHBqc1RqRKq7ygiXa0LRIpAxNaXist0jnUSE3Kn4GflnzK/jWmrcV5WtoKX0fa6eRfF1HdbUrK3r51PumrujF8FTbcBRCb7s6TO3N8/D1P4bzELPZhusLqU/DeUa9PmbPjfcX9v1/4/263xcYpjf/Y2TSmbKD5dePHwU7bO6m0nMHz/LPaLXW8bPuneXd6Z4/49zDm4d/AAAA//8DALgGzKRZCQAA", "base64"));
  res.end();

  return __filename;
};
