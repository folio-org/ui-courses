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
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d : 202 6853us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d : 200 13000us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQduWCUmNKNK7PDZGm7ZAk1WRBUUOCxa2JFB0ECPIv5eyHnUNpHC90EJXZ2buzPXrRZbl3ubZKsulUho1rQgyaQkYI0jNLSfaMge2ZrUtbP5xAAL+9H0MOqxHsr++YZSNGr5EDI3eTNLLkbRpjY6+bSbJGSvAICNCqZKAdJRIoEikck5zLmVRnYBf619o4gC/ptd/Jj+7UkIavcUDdK99k332dbKxn0XT2lH89Hh1e3t1t766nyXfX5vonw9yDDucXzd99HF3ZCs1RkqNJrpkkkANitRIGaGikJZq0Kasln562+36CRTcuErUFTFGJxe2KIjiLJ3DOuDJnZYgZ3Azzj2Rpa2kpAUSoykMLVNz1Ei4EUWtOKRB6pnsgt8m8juGZ2/wW+ubw0LzQgOVJU+HVy49rEuHZ04RgVwA0wIVc3ON/ghe237gf5xZIXtKJd4OV0052c5RUBXjXAHhtKgIgKuIpEIQzoRGVVLDhckX6N0YnFvlOAYPwTc+7jNOOV38RR3inY7jF4NC0l65mHVs7ImamtB8cWbaXejxYd/h5E+xEijImhRCpUxwNCkdKSLGGawdBaQK8hP0PZdn1zp2uW6yDkPfNrNisTfBd0NuDx98abO22fgGM9Nuu7bBFIvFzxDysDOxDeNQ08WfDuIWo7Y66qNJTcC0ntMdVaRgD6xcFWoF6hI4/UDTb/krjMzN/jGla1pbPfgUqJNLWZJSQZEOWjJSCwCuXQlCLfyus//oCXTFxSWn8q+eE/P/PYfNXLz9BgAA//8DAK6k84Y9BQAA", "base64"));
  res.end();

  return __filename;
};
