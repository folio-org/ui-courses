var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby copiedItem.title name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=title%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:17:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/reserves.. : 202 93131us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/reserves.. : 200 40795us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYyW4bRxC9+ysavOQQNdnb9KIbJduxYssWHDlAEPjQS7U0MTlDDIeWBcP/niKHy9CWZAlBkAXiYUBOdy1d9frVAz8/IWTQwByajzAfkEPyO/mMr/BlmZY/B9oIYZJT1EgpqUpCUGc9o4bboFySunDF4KAzifWimcOrct6W1cVJZx+ZDDF4Sb1GKyUKToPkmjIteQgCdBZ8Y1+2MF2bccYSZyFTkZmmyqNtAF5QFlwRRHLZgdyFnZWQTtB4adqlj6+Db2KdYOXOMfys9+MSbp3VjW+uX9XRt2VdraMWMmZX6EwjT5kqTIDaAJ4Kkw0XMXoT7/LyJvwBse0nsavjg1yjWeWnXerjqoJP/ZXtoV6+Gx0fj56ejMb95XI+jm35cbWlbRbQX6qwM+2id2DFABiLnvqCW6qwo1hmxpfdsYl55WNh9mL76WwxXxtrEbPRwVDMvkBoID6c4IZCykpE4N4q2zeelGFZrU2tk7GWSaDRM7UMjUmAByqilsEJhQmFvvWsKado/QsitYxwVpfVqtID6RWzhUhUuYyPlAX1PDuqQWjFvQbHc9/PvOfgJK0xfz8v5P3azZctBmbQTH0FVfsVknJMWmENqHYOa2MzoxaLTa3L2QthrTR8cLuXu5D0INd9JJ36siKvuibcDajTR0D9U4DCek7WF5/MAVHRlpFcQSDLdKHZYSbWVduUYdHWzR5xf80ebV2V9eKA/NSUF3VTzvc7v/Vxfj2DTRuAuaRMoq4AgalbTy2SNc3GmGAh62T5HV7O4VNXyFv2vMbcetFEcAo7xGmO3iGcHRbKSEaxk1AIxDQIP9iW6cZD/uor8sI3U5hAdUCeN7768J8+JXm/Y4ZFmJQdJ3zT5NXa/BJBsbrdJ+fkDCf5XoNnEx+7Gh37aWjKdAEH5NTP50PS35Z8C2/y2X6sQRSMqf62pl5D82wb+YaUo59MXi+mYZ3X+cuCs2JoreUFGZJxYcnSL3l+Tk6fjZ8+2yF60ZQri8u2nR2ORldXV8NJHYcX9ccRZpXKZtTWcQSxnDFUHyP0YphgSrjhZTud7PxAtcCbsjtHP8Kky8mHCZA6k2XDkHbnpK4mO05c8Zqv4qZ5RcjSMECeRWJCqLhIrQBFC26YD8IzL923xi+aNWEvX7DtR4jd1st6klAqbfgPZM6aI+sF55eQVBE5IzqaIrfaJCQR7rqKr/liMIXWY/P8nvCJDWA/01N8dNjDKlFmqFDnTB4qdsjtUBnx474mWszS/a26JJ70buRmOlmZuGMcqDPCUAU4p2wOnMqCqQKckCxsCnCjXuRMOUDRiYdOQFU0kS4l33IGuKxZ1DGkG/Ri0tlEHpDyhcSwusAEFCSKjUOmDVGrndk99KIqpLNGs0JJK3c1etSNj2P+79WND0PSg3TjI5L+l0jaCcaj1Xxvyc91BfMf5uTIh2vswCWQVPqmhJ0yuKd4fF7Caj4dkBdLafVvUTrjSW4gkfGQvKzqWb5Z77yGK/Jb3Xz4vswRjOt76JiztzgO9PBEFdaSI6McWRn2Sjq77pQWfiHyVjFhckhFsopqkThVWCvqoiooDjZupHM2bCfV98UE07eKiRxMMCxzGqzDi4V4pt45vFigArZHhFDkfTHRm0u+6nUUbJAcEUhlEJixXCJTaJQlyUnOYhCJweA2H98y0oaPHuC2D8rjlWgg2/+s/pIe4vpQ8UNph1Lor/TQ2uro+h0G2qgMFHqoCTI1UQEtNJJF8DJSFCYFixzZA7F9H0V1R9y11cPj7jRZB+JBW7d+8hZi3XQkI558+RMAAP//", "base64"));
  res.write(new Buffer("AwCsCJzf7xMAAA==", "base64"));
  res.end();

  return __filename;
};
