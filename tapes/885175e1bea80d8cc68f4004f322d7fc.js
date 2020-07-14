var path = require("path");

/**
 * GET /coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjZjNmI5YWI0LTE2YjEtNWNmMC1iZGM4LWI2NzI4YmM3YTUwNCIsImlhdCI6MTU5NDczODc4NywidGVuYW50IjoiZGlrdSJ9.pE0DFuVgWBOKlfXuIoKeSfTv9crEA98GpVjMrRMvJDQ
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

  res.setHeader("date", "Tue, 14 Jul 2020 15:00:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves.. : 202 12374us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves.. : 200 20478us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/bOBS851cQvm5okxQlkrkFSbsbNGmDXbeXRQ/8eEy4K0sGJSUtiv73PluOLXfboD0tFlgfDFjkvPc4Mxrz0wkhswwd5AfoZuSM/Ek+4SN8mMLm56xSQqhgJFVFUVAZhKBGW0YV106aUFSlKWenI8S3Q+7gOnV9au6uRrxnhfPOFtRWiJKi5NQVvKKsKrhzAqoo+BM+9bDawThjgTMXqYisotIi1gEvKXOmdCKYaKA4tF0nCFcI3kDH8fGxs9m3AbblDMPPbj8u4dZ1m23+eN1626e22XUtCx9NWUXqeYhU4gBUO7BUqKi48N4q/1yVN+4v8P10iAOPP1UaYY1djaOfNw18mK7sD/Xq7eLiYnF5tTifLqfu3PfpYbulzwNMlxpUph8mB5YMgDFvqS25phIVRZoZ36ijA7PS+lId9bar9dDtwJXwUVVOUZy+RGugP4zgikKIUnjgVks9BdfJbdh64joorVkB1FsmN61xCLBAha8KZ4TEgdwUvc5pheg/0KnJw22bmi3Ts8JKpksRqDQRv0IU1PJoaAWiktxWYHic1ukmBa7CzvM/VoW835X5vPfAGvLKNtD0Xzkp+lBJ5IBWxiA3OjKqkWyqTYxWCK0LxWffr/Kck36q9NRJNzY15HoU4XlD3fxvqH/LUMhnvXvxSQfoij558giObMaFfPCMb5s+Jzf0bT4K7q/To2+b1A6n5Nec7tqcumPl9zWWH9fwJAMwE6QK1JQgcHRtqcawplEp5TTEKmj+TJUlfBiJ/M6e1zjbpJtwRqJCnEZvDdrZIFGqYBSVhFKgp0HY2Z6mbx7ynW3IbzavoIbmlLzMtvn7P31K8v6QDIOr05gJ/xB5u9bdoym2b/fVktziP/mRwOva+pGjC7tyOYU7OCU3tuvmZLot2B7exNvjXjMvGJPTbbndWfN23/kbI3tb16+HldvNtXxVclbOtda8JHNyXmqyqUteLsnNi/PLFwdHDzltEfd9vz5bLB4fH+d16+d37cMCpwopL/rWL8CnNcPbxwKrKCaYFGZ+36/qQx1oBnxTDueYdqjHmayrgbSRbATD2O1I29SHTNzmmm38k3ili4VigDmLwYRWMZ5qAZKWXDHrhGW2MAfwfVsHvP88hRoUMVYco8wZu/GZ9BgE3tDgua5UwGTgZqRxFwKzFfQWFbFHtxmfAUUKl/g1GgqPTpmiXC5ZcVaUZ8gxU+aX44vOsA4/jhqHONmrOevb3ta/g2/zGGv85PMXAAAA//8DAHnllcAwCgAA", "base64"));
  res.end();

  return __filename;
};
