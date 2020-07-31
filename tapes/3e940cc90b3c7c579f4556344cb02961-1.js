var path = require("path");

/**
 * GET /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/edit?nreserves=2
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:18 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d : 202 7451us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d : 200 23648us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTP2/bMBDF93wKQWvLhqQoisyWP4vRpi3QZCoyHMljwcKWBIoOYgT57qVsSTUMBHA8aNDT7+7e3fPrRVGUwZXFVVEqrQGBNgSZckRYK4nhjhNwzAtnmHGVKz+PQMQ/YUgR4upAxusbRtlBw5eEsYX1JL0cSevOQgpdO0neOiksMiK1rolQnhIlKBKlvQfOlaqaE/CH+Ys2jfBrfv1/8rMrZaSFDe6hewht8S2YbGM3i7ZzB/Hr4+Xt7eXd6vJ+lsJwbVN43sspbnF+3Q4ppO2RrdwYKbVAoGaKCCM0MUgZobJSjoIAWzdLP9j022ECJbe+kaYh1kJ24aqKaM7yOZwXPLsDJdQMrg9zT2TtGqVohcQCFWPL3BwBCbeyMpqLPIiZyT6GTSZ/YXwOFn92od0vtKxAUFXzfHjt88P5fHjmNZHIpWAgUTM/1xiO4JUbRv73mRWKp1zibX/VnJPNHAXdMM61IJxWDRHCN0RRKQlnElDX1HJpywV6NwbnVjmOwUMMbUi7glNOF38JYrqDdPhiVEjeK5ezjq07UXMTWi7ObLeNAz7sepz8aVYLKpQhldQ5ExxtTkeOiPUWjacCqRblCfqey7NrHbtctUWPcejaWXE42Bj6Mbf7D753RdeuQ4uF7TZ912KOxeJnDHnc2tTFw1DTxZ/24gYTOEhwNKmNmNdzuqOGVOyB1VeVvhL6i+D0E82/5a9wYG52jzld09rM6FMiZJeqJrUWVT5ozYiRQnDwtZB64be9+3DPifl4z3EzF2//AAAA//8DAAxUKyw9BQAA", "base64"));
  res.end();

  return __filename;
};
