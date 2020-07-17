var path = require("path");

/**
 * GET /coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAxNCwidGVuYW50IjoiZGlrdSJ9.pYJZcQSjLyze0JsznKIdSEhBxrVih9tUNehad7VLNF8
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves.. : 202 10858us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves.. : 200 22804us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/bOBS851cQvm5okxQlkrkFSbsbNGmDXbeXRQ/8eEy4K0sGJSUtiv73PluOLXfboD0tFlgfDFjkvDd8Mxrz0wkhswwd5AfoZuSM/Ek+4SN8mMLm56xSQqhgJFVFUVAZhKBGW0YV106aUFSlKWenI8S3Q+7gOnV9au6uRrxnhfPOFtRWiJKi5NQVvKKsKrhzAqoo+BM+9bDawThjgTMXqYisotIi1gEvKXOmdCKYaKA4tF0nCFcI3kBH+vjY2ezbANtyhuFntx+XcOu6zTZ/vG697VPb7LqWhY+mrCL1PEQqkQDVDiwVKiouvLfKP1fljfsLfD8lcZjjT5VGWGNXI/XzpoEP05X9oV69XVxcLC6vFufT5dSd+z49bLf0eYDpUoPK9MPkwJIBMOYttSXXVKKiOGbGN+rowKy0vlRHve1qPXQ7cCV8VJVTFNmXaA30hxFcUQhRCg/caqmn4Dq5zbSeZh2U1qwA6i2Tm9ZIAixQ4avCGSGRkJui1zmtEP0HOjV5uG1Ts530rLCS6VIEKk3ErxAFtTwaWoGoJLcVGB6ndbpJgauw8/yPVSHvd2U+7z2whryyDTT9V06KPlQSZ0ArY3A2OjKqcdhUmxitEFoXis++X+U5J/1U6amTbmxqyPUowvOGuvnfUP+WoXCe9e7FJx2gK/rkySM4sqEL+eAZ3zZ9Tm7o23wU3F+nR982qR1Oya853bU5dcfK72ssP67hSQZgJkgVqClBIHVtqcawplEp5TTEKmj+TJUlfBgH+Z09r5HbpJtwRqJCnEZvDdrZ4KBUwSgqCaVAT4Ows/2YvnnId7Yhv9m8ghqaU/Iy2+bv//QpyftDMgyuTmMm/EPk7Vp3j6bYvt1XS3KL/+RHAq9r68cZXdiVyyncwSm5sV03J9NtwfbwJt4e95p5wZicbsvtzpq3+87foOxtXb8eVm7Ha/mq5Kyca615SebkvNRkU5e8XJKbF+eXLw6OHnLaIu77fn22WDw+Ps7r1s/v2ocFsgopL/rWL8CnNcPbxwKrKCaYFGZ+36/qQx1oBnxTDueYdqhHTtbVQNpINoJh7HakbepDJm5zzTb+SbzSxUIxwJzFYEKrGE+1AElLrph1wjJbmAP4vq0D3n+eQg2KGCuOUeaM3fhMegwCb2jwXFcqYDJwM45xFwKzFfQWFbFHtxmfAUUKl/g1GgqPTpmiXC1ZcVbIs7Kal7r45fiiM6zDj6NGEid7NWd929v6d/BtHmONn3z+AgAA//8=", "base64"));
  res.write(new Buffer("AwCpXhvaMAoAAA==", "base64"));
  res.end();

  return __filename;
};
