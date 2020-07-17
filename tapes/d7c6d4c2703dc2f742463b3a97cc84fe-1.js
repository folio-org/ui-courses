var path = require("path");

/**
 * GET /coursereserves/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:54:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f.. : 202 6767us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courses/9ddc9cff-cdaa-4aec-9de6-907124893d4f.. : 200 16096us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVTW/bOBC991cIvm6ZkBTFD9/Sdg/GttkFmp6KHkbkMNGuLRmUFNQo8t93LMuR4qQLZ+sDYXD4HueNZh5/vMmyRRUW2TJbuBC88zEyHwCYAvTMBdTMcSOksi4PKi7e7gE1bHCAXEEK95D+ye76toQ6pN3hQMDWp2rbVU09nLu5w8xDwozOZBExVPVt1sSs68t+XQWsO+iwPWK3kLoN7a0OeYlCa6uEZ4XwyFRQngFwxziCFCXnjis4hf5Z/o2+28N/UGDSeDbXXOXvRHqXffYV1n7M8gWNq9qv+0HYLTbr5nb3Nttil4a/g+4trAGbuht2jiwb7CBAB1OqtOkTUj3CB1oGasklZ9wwYW54vszVsiguTK5/4/QbiQjVb8P5qAH0QOvDUDnf9KnFj1XbkYCx7mB4jJgbBgodU0I66geTM5fnGCQPWpVjPzxB/6z0Z9MRJOEtkSVIYyrt1TvBxTGK3ztMNazH4PcnwXXjYf9NxmD0ROxRMO1cwZSNnFnFkVkXI0hpbW6eQU8VTBpewTZvoE9Q1dnHqiRBuynsm3AI//Hl8v37yw+ry09TsGqvfFfdDwe61OMUqKnKXT+TSAkg5x4YFMIyVSrHSuSCcZ3bwEGBL8zsVths+3aEaumj0aVh3gPpCTl9DikMwxCVJJ1glZ2g64OCEVsEYy3PkXngan8tJYCATHqdl04qSqacsNtUbQj7GdN95fGvpqqHAi9yUNwWMjDlIi0hSgYiOqZRaiVAoxNxYmln8FVo9wxfz+TIvh1afvzW1EGbY4s48jfpFJOculOpaJjlWjMpNKAruJfaL2aw/2iP85nm7XGTqrrqdtl+YGdaO7Kdk2EmZj2dwPp02Omq42iPCR9G82a3xVGtE4XiypYs1466RZLLQ0HN46PHMnKF3KnFM/DPNb+Cb655VZM7ppa88zF2aqjXTdbU66qmp6PZbJuabP2ptv0opN53TTqkN/bDt/9prcIui3xZmAuX2xNrHVHvdl+oA8dCGhtLbiV5gSmQFYZ7ZjUaVnDFyQp8wYU4y5z396olzy8c5y9b+uvvfdHer/tNienwcD9aJs2U35f8+vFNX+P27hB6XsEz6mcvtHJzHb9avbNqVxjx5M5fqdzDm4d/AQAA//8DAEolrTIYCQAA", "base64"));
  res.end();

  return __filename;
};
