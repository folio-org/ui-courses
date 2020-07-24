var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/processingstatuses.. : 202 6336us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/processingstatuses.. : 200 3345us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTUvEMBRF9/6K0K3zJN9JuxQ3rgQ/VuLiNXkdCrUd2lQQmf9upuMgOg4I2kWguT2PcHL7dsZYsRmHQNPU9uu7hGmeaCpYxR7ZWw5z3MbdayGMN1iWEXitLWhfKyhRSdDc8EZwVaIVxWqP9PhMC3Tds4AJu2Gdpx/SSFMY201qh3756JYCtS8UWT0n1g+JvVI6YDPFA/ZMCWPe3TH7o+XNMBImild5WWZJLjlwB1Lfc1VpXgl34Sw/5/n5GJSpeRNPUVJUwldSX5Sl+5m6fH2YaLzeW4moSm50Ay5oAmORoEYVoLFZSxBIKLFYBmzzul19k4o+Su2CB/LYgEZhwdfCAS+tdt4qUkofSb3p2TBGGk/5vNmFFFdffOILth3WHf1dpxG/13lMnZbh60Z6DBYwhAjaOAO+aRCUzdXjNQlvjhuWy4Nd99mSH8q15Az7yOb+HzWoE/34HfWpgT3tJhRpyIXPp81Xu/x/6mz7DgAA//8DAEqTnNqeAwAA", "base64"));
  res.end();

  return __filename;
};
