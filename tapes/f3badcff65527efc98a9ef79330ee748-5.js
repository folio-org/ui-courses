var path = require("path");

/**
 * GET /coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a?unused=0
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

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a.. : 202 6231us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a.. : 200 13397us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTW/bRhC951cQvDZr7xeXXN2cpAehiVsgzqnIYbg7a7OVSGJJGhEC//eOKMqk5biQG1QHQuDsezvvcfaR398kSVr5NFklqfE2V6XJWcnRM619YCCMZSYvtVEmk0ZD+nYPqGGLI+QKor+H+HdyN3Ql1D7uDgs8di5WbV819bju5g4TBxETWpMERF/Vt0kTkn4oh03lse6hx+6IbSH2W7q3PvQlMmMKLRzLhEOmvXYMgFvGEaQoObf82NcM/b38C12/h3+nwqzxbK6lyl+J9C757Cqs3dTlDzSua7cZRmG32Gya293bpMU+jn9H3S1sAJu6H+8cWbbYg4ce5lbppotIfvgPdBmpJZec8ZxJfcPVSvOVyC+MzX7h9JuICDW0/iWUMKtMrpS8UMr+GPVu96XDODnuQVme6cByp5FlBpCVoBwLhmfcCSCzIB0JHuj6MHrvmiF2+LHqerJg4qHFQYXCMwmcM11Kw8rAPQulKwUUrpBepc/RLz28s+kIEvGWyCIcJXVX7wQXxyp+6zHWsJmK354UN42D/VOdisF5ox0KZqzNmC4CZ4XmyAobAkhZFCp/Bj1VMGt4BdtyBD9BVScfq5IE7eaya/yh/NuXy/fvLz+sLz/Nxaq7cn11Py7o44BzoSaX+2EhkRpAzh0wyERBxmrLSuSCcaMKz0GDy/LFrrBth26CGulCbsqcOQekxyvFrBQ5Qx+0JJ1Q6GKGbg4KjuPh86LgCpkDrvfbUgNIsyadUaWVmpopZ2wbqy1hP2O8rxz+0VT1aHCqQPMik5RYNtDFB0mxFSi2kAJLgEErwszSLeBr3+0Z/jyTI/l6GPnpWdMEbY8jYnMhpdVMcpVTcoacFdwYJgUdHUtjK41LF7B/GY/zmZbjcROruup3yf7IL7T2FFwncUDMZl6B9Wlc0FY8faLzcDRvdi1Oaq3INNdFyZSxNC0SKUMzGh4XHNJ51MitTp+BX9b8Cr6l5nVN+Ro7St/H2mkkXzdJU2+qml4+zbZtanoxPNW2PwpxcH0TD+1N8/D1P4bzPmbzFTcX0pyG84R6fcyeG+/5SosLIfj/Gu/Xw7bEeHj1P0YmnSm3t/z68atgg+3dofTcwbP8s0Yvdfyse2d4xy/yvHiy58849/Dm4R8AAAD//wMAswfZq1oJAAA=", "base64"));
  res.end();

  return __filename;
};
