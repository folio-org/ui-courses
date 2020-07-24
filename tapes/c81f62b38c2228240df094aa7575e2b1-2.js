var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/departments.. : 202 10354us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/departments.. : 200 8882us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPWvDMBCG9/wK4bVROH3YsTyWdsjQpR9T6XCRzrHBloWtDCHkv1dx2lLaDoFqOKRXeg7xcMcFY5mjgGPsyccpYxV7ZceUprx152MmamuEkJpbJ5HrGokbJM01qKJ0JZhSumx5QTz2NEMPGBvqMbZ2+rxzNNmxDbEd/Pxk4223d63fse0QGxb2IzH0jmEIXUuOJbr5gnuK6DDimbx8L4V2JIzk7lKZO0qQwGHNpX4GVWmoxHpVlOoG0vpolKh9cNdTM3RK9bT8qSUvilILy3NhiWunLUcEw4FQii2AAY2/tNwn0Q17si15S1eY2dHQDbvDkgWK47ydFQXskAYf5+T/ikx+vSJRVLmslFwpZf6mbg8vE42biyWHykCua762mnhepOHZorK8LiAHKzDJwm+S2du5WxaHiN0j2WF080jKxekdAAD//w==", "base64"));
  res.write(new Buffer("AwCxt6TZqgIAAA==", "base64"));
  res.end();

  return __filename;
};
