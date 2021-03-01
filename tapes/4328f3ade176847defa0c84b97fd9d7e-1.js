var path = require("path");

/**
 * GET /coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?unused=1
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42.. : 200 5858us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/bRhC951cQujYr7y73g6ubnRSF0cQtYOdU5DDcHdpsJVJYUm6MwP+9I5Iyadly5LgXQuDsezvvcT70/V2SzMowSxbJzBuJVgvBQo6KKYWaZdpJ5qy1QXGHQcnZ+y2gghV2kFOI4RbiP0keEUNZXffxgI2P5bot66o7dnWDiYeICVQhKfqTSV0k7SbfLMuAVQstNjvsGmK7onfnfVpCG5Mp4ZkWHpkKyjMA7hhHkCLn3HEF+9A/8r/Rt1v4dwqMEo/mmor8lUhvkktfYuWHLJ/ReF755aYTdo31sr6+e5+ssY3dz073GpaAddV2b3YsK2whQAtjqvTSRyQ/wkd6dNSSS8F4yri44mKh+ULrOb36hfMF5wMTwTbrcAgm7EJlC2HnmTIHYGd3XxqMg+eFyn0IhjNwSjGdOs2cTz1LwUIWglU+4KwjuKfnfee+rzexwU9l05IJA491lstcS8aDJb8zBJZbLBgotEpmruBDJo/Rhz7f0XQEiXhNZBF2kuLpmeBiF8VvLcYKlkPw26Pgsvaw/a47M3wwyqNgxpEPKis4yxRHRvcVIGWWpfYJdF/BqOEVbNMi/AxllXwqcxJ0N4Z9Hfrw719OPnw4+Xh+8nkMls2pb8vb7kAbNzgGKnK53UwkUgLIuQcGWmRM5cqxHDlVj0mzwEGB13ZyK6zWm2aAGukLa3LLvAfSE9KUOSksw1AoSTohU9kIXfYKBqwONst4iswDV9trKQEEZNKbNHdSUTL5iF3HckXYS4y3pcc/67LqDJ6loHimZWDKFfQIhWQgCscMSqMEGHSiGFmaCfw8NFuGv47kSL72JT98a6qg1a5EnBVSOsUkTy2NzsKyjBvDpDCATnMvjZ9NYC+Ux/FM0/K4imVVtncJ9fyktZuWRtd0HnBGPksznsAq7MXpKj57pLNvzau7NQ5qndCKqyxnqXFULRJpimoqHl94zAuukDs1ewI+rPkVfFPN5xVN2NjQ/H2I7Q/lizqpq2VZ0fqpV+u6otXwWNu2FeLGt3Xs0xvqYT9Djx5AADDMqStUTpVOdSKZKKidC24oRflMhr9hHa8xOduOmhiSyxv4dzyVQ3xoX5Fq66Zt/YZRenCvvLxZaEVotdDZ3Jr9zTICX78kJhwv7yetF1zOrcyeXv62DdXvKHomX39y6Q7WpHOn9f72fLMxP7Ll0MX/79q+2KxyjP1/uodVSLPSb1vp4uHv3hLXN33oqYdHOKjm0rhHQt7q3xHuPXPpW7y7f3f/HwAAAP//AwB24EuuNQsAAA==", "base64"));
  res.end();

  return __filename;
};
