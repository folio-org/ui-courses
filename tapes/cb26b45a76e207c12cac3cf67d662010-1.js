var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
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
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:56:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 6533us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 19110us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTW/cNhC951cIe62Z8EsUmZtrF6jRxAmQFD0UOQzJoZe1VhIorZtF4P9e7rd2s0bXzqHdg4Dl8I1mhm/eUN9eFcUk+knxtphoQYW0FIgNFSNSmpJYJTnhaIwOFWdY+snFEtDADFeQK6jdvJ73BaNsbfLYuxS7IbbNasfP0EdX+BgCJmyGCEtLAY0vYjPgXVr930I7SMMs77pZB8SCM4xxSZznQGQAJAZQEkmF0l5To7k/hn6wf6EblvBv2bBP7mxf4/TewzDFWQ7R9VvbcX43javnPjZ3hW2HadHNE66yg66rI/oio6c78AwH8DDAPry86BLCgP46P1YeOeWU0Ipw+ZmKt5K+ZdVrpcVPNP82jjJq3vnzUSvQY34+rqrl2nnq8V3shxz3ptaOCussCAIKKJG8ZMQKpghVglnLUQW+OeED9FPlPttdhiS8y84SpE0o+HXA1EC927BdOLLzrb3H9BAddm3cUUeApLrknkgT8sMHToAFQxRyJRkoNCycgh/ns8/oGR4POiQmV1xjf1+wvdW1fm11frTqY+/aB0yL69h3NSxuxz7m9bpzVq4IKX6Fuv4bFnt0F939vHvXOthyc0hz3Jmnbe0/TbEOv3ztYlp8xBRbP85zGcA87cDiYr++7NT0sKv/H4j3/WRjfty9oR8ghE917Prlrj+LL69G9km9CWzjoxQumFIF4pgPRDJqibYIhFdZe7hzULkt2XfQp8/mGd7GZ3PZNPj1xKn89vubq6s31zdvLvfG2F+6IT7gd4WNTW6EYT7KTVJESh0QKJkm0kpDLFK25L72FCS4shq9FWbdvN9AFXehUrYiOeYyk0wIYjirCPoguUMGWuo9tI42d81iW1JfaU0FEgdULl+bA8Asc9wpYQ2XORg7okuKs4z9tOb+xyX3X0DzfgS/8ZuDP8/HET8yw2ZbKfIMbYU+H98qEQXEUFERXwUGpShZUNtEVrCnefEMTweyH90UsJ5BX3DKzGRM8TSMJJcZwihhYr8DG39k51mVJweprgX086LDTcKhzNRA1MQy7fJE4pZY6jLW0mCE12VFdwnvwU+n/Qx/47Q/NHVscKRHR6Puts0zm3SY+qxDrp11bZMH7mFuy25Icze0aR3ehhLHEXLMLQs8EGO9yeNBemIdBqKqUAauNHo7nnWZZltdLyujGUMiKpM73VGTOz3nBxSodkYGFCc73cOsvyiupilPGigux03/A7Nw5eHUUD9rrOvXVByN9bMG+wi3FeHNGXzPBMWcApPvOtxmPamoI1oqQZQ0EoJnVKM6WWdbgVeQC1sJL7KiIs1ikrmugxPeSiwrdCfq/BkWdZsuivfxHv8nNWbly2q8w/1bjY1zWmssSVC+WtY4yz1jggiaB4EOFtVYs8c15oBWeMziWCoiQWca8zKXnGd9QotMVfIUl+EOks81Bn+Hhx373xZa85cVeos7LHTx5UcvzbpSL7g071AnL82385nFtP6i4EKW6ytxn5Uuq+Tt/rshbr5pvg/+rNCNOSDtWYHvMMuQXz3+AwAA//8DAJoCnNjaDQAA", "base64"));
  res.end();

  return __filename;
};
