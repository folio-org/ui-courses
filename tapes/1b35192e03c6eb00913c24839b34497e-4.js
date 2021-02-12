var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/processingstatuses.. : 200 3007us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUS2/bMBCE7/kVhK/1Bss3pZuDXnJK0cep6GFFrlwBjmRIcoog8H8vLcd1W8cF4ha9EJCGs6S+GejpSojZuu8iD0PTLj+MNG4GHmaiFJ/FUxaz3KTd4ywaNIVSEYxjCYathopcDVq7kNBxDKhm872lpXueTIvFQrzjNuXZBy3xEPtmPTZdO2254SyKSCOtuuWGk+ib5ddRtN23g+OeR0pZ323f3ym/jD3TyOltXqYxCpUEVCDVR+lLa0qL1zaEN4gl4vOko+3m8dPA/e3+y7zXnqVN4LFyYJNFIK1rqI1PVSFrJaM/Ttis0yUHP9tef/A0YJvX7fy3RKQNlooiAVbGgQmVhoK0AoMWa4m6ICdPErltD6z/kMl7jtw85CyqzS6JUTzy+FNElwaDulRYKn/t8Ryf81iNv3bW/QesFJIyPgbgQDUYkg5CJT1g4YwPTrPW5gTrXSu6PnF/jujdTuQ0/4UoPVCzomrFfw9UvgboC7bzOEJVq0DRAcWYwFhvIdQ1gXa5flixDPa0ZblAtFodm/JCwSZdUJvEpv2HIJS5CMQP2xGE+LIbMRu7XPt83xzv9F80V9vvAAAA//8=", "base64"));
  res.write(new Buffer("AwDRw3uTNgUAAA==", "base64"));
  res.end();

  return __filename;
};
