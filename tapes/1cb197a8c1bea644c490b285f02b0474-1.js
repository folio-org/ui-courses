var path = require("path");

/**
 * POST /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 142
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
  res.statusCode = 201;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves : 202 6339us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves : 201 61965us");
  res.setHeader("location", "c7946c2c-1180-4727-b97d-6c66f76d064d");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANRUTW/bOBC991cQvtZj8Ev8yC27bbfBNm0O3r0UPQzJYSqsLRmUvG1Q5L+XsuXEDdpD0VN1EARy3puP9zRfnjG2aNOCXbBFtF6bKCMI4ThoKy0EbxOYaEy2JnGj02I5AWK/LwO9aYex7W6vjuiGx6yySyCRV3SQBkLmCXKIQaCLTiZ1RLcjbWeQJxQ58QBcNh40pQC+QQUUZPbIjSLJTyl3LaWrCp2AX+pRPQxYYp/oQHUptFNWKa24OUDqfY3e9QXL3Zs+4tj23Zw2x2R0JAHG+wa0yxyc5gTO54xSukokThw7KlvsqBt/gWNsx81cJRuo0o1tZJ8osF1pt1ROYbHvxtKG/diXYYp+P/dZrzrczgTd2Hdtv1+yv0p725d2mNHf4td3O5oLNcR90lVH35AEnRyCUyJAttYGR9kkJ37IsabP44HluxFva1VnmWTwOholIEesajovAa3iwBVRI+tcSOLiQHO//E5r/2LHXmPZ0oa6JXtVsPvvt+yNfThZZx827dE0T+Q83Awfq/QT9/XVmt0UGs6k3G0wHqfyJ25DadMtLdk1DsOKPQYlHOldvvk2yyJKzvVjUOln69085HxSZsTN5u1+G+Zq1n83gjcr55xo2IpdNo5NjOzVml2/vHzx8tGtu7sD4MHm1O2rmx8r+X9l+UXXr+o/cgppu2HELp6m2oSsLKf668SIVT8fwUnS0AjLMdRNgso/hb4u876aDvjDI+Up8GO/SXUvDXMOUjkboVRdZjh5REdAET2kKJyxSacs/DSS+8OeOVsZ2J3rT9qRFQqEzQp0rF/oswOpnG5CkILjceiLLY1YlcGzPRULVanSi/o6knFZnWNB6rUwF429kHpltHg+9fEw3iPmj7t/BipzEamOgzc6g42aoDFIEFBFyIbX9SuQsJpwxu936adzzpifzzmN79n9VwAAAP//AwCTh+4tTQYAAA==", "base64"));
  res.end();

  return __filename;
};
