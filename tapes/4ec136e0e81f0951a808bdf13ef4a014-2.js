var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7188us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 49361us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYTW/jNhC951cIvjZsSJGipNx2kwUadLu7aHaxh6IHfgwTdmVJoOR03UX+e0eWLSu24yZpCxSFcnAciW/IN3wz85BvJ1E0M9UiNNDMovPol+gbPsFn3nZ/zpTSLnVCklzxjAiTxkRzzYhIVJLQNBVcqtlpDynVHFagq7INVdRW0QdVKKjKtiqqm+VmmYXGBF+3vipXq6/bhV1GlYtUaTyUbVR4B9vFtQrtHB9f9QdiiZSZYIYkzAARVhiiFM0JBRUzTWlOhdoHv9e/gWm7AD29LcFnxBtTfIOBb6Pr7sAGMzcs2CV3VZpiYX15E93AKgunUQ2Yne4rErZRfSBFGGcOrbKqVeMjdzcVQLVgL/FjFT6mMSU0JXH2kfJznpxz8T1P6HcUf4ZgiFvU9jEcY+cJOxfye5qxx3Cvl58aCOsbAK4zI9OEaJNSkmiVkYxyTbR2WilLrVb5bB3ifvX7fn0fvc7e+qbFhGzuk4ocJMrKGgudwAzReaIJWJc7SY002s4O4Y9c6dNDIijADQYMaqD3tYVQqoKZ7ZrNs50l8WgJ5ufOG6grP0iVK0GzJLZE5A4/rIuJYi4nEmIpmJKQM3c4wD63LbtnRR1L9sIHE11C8yVi4/emsv17Yx88t74x1R2E5aVv6kIt343jLArVSbwPR0j0gyqK39VyjK+9+bKo31ZGbYqhDQsYLbitCnt9C4V787X2YfkBgq/sQ87dMRZhCMBPx28wT5iy4VI+A3xpZsOC+9FOTaucuy58vW5xv57srJkV62OuYyXcuDyRjhhmHRGMapJpUCROXcpiY1RqtmUygI/d2rMijm/tVVnC14P39eOns4uLs8urs1fj1755ZVp/BwcS7kssnHYx4ikoAKVGEZUw7O5a5EQDZYRKnlmqhDJJ+mBvNa8XzRosY+NSqVOCp09QiJyTPGZpV2YiNsBUJrIxuPAaq2y5SbFNM2wbQIyiotsaDwEKSGwk13ks8ED6gZyCnyP6uq+SD12VvKgcmlGAK7sWxNOiHNANKnC+JuRyvMg4FySmPCVCuBTbopQkZlJBnlATy1G76IDH9PKsaGO9fAy+9O0y6jr87GENhHan/2N0OV4D5e6EwA3pbI9134c/LmtYc6c4cyBOGbFWo44sOKIkzgWFqheOMhwNo467hR/LwLNijjPwvix8CWdXJU7a0GDnGDe1nfH8usIpXq0Aq2nsS9KDIlPN66pE69Ds8+8KKSxMW4WewKat/BPTO5GPTuGn4Y5M3neLuYbQhxAy2+yBNWG6jAwd/roqBgN2iMqTiEgqHxJ5Eo0BdbIhcX+6Y0m5RUdKsw7HNBHSYNOShpMM+4dyQiisnb+ypNoftaRv0YGiFqI6wC2agyp4E7V+Phi9A7bUmZyxWBBjY0WEw06WK8DGRrnMbEbzLLb74CMe5unxxjR/Uu0tzHEamSd5Ut3Jv16EXvyqrgsPNkL87Qj+d6woz18k5gE32cjJRk42crKRk42cbORkIzfE/1M2km7a/Z6NHF683EOy9CUecoN63EOmseCJTgyKN8emQwU2Hc0VSVJsG7FLctD5noe8UAVOrEUT8S3nXSV89n+oYEkBd1BE1jsHAS/f92Oul0YLN+tZNJnJ50h6MpOTmZzM5GQmJzM5mcnJTO7y/x+YScaTdHBd/87/JDl7iZ/kbNdP9nmdtVWrip/BVKGvWn5y/ycAAAD//wMABR/+qVEfAAA=", "base64"));
  res.end();

  return __filename;
};
