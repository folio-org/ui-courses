var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:18 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/copyrightstatuses.. : 202 7078us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/copyrightstatuses.. : 200 3470us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUQW/bIBQH8Hs/Bcp1fRW2wUBubXbZpZrW7TTt8B7gBNUxkU0qRVW++3CyblJTa1saH55kw//J/AQ8XzE2s3Gz68NylR4Spu3ghxmbs+/sOY/l0eDG1xkXsiwqxUHr2oMonAdsyIOUqMk0XukSZ9fHSIdrfwjdti07dB5Y7wffP3n3Msf5wfZhk0LsjlNtCk++3TFqo30M3ZKllWebPi5zcmCxYYNdxRb7YRU2L03WPqHDhGOH4++Oy+k9Ju8+5nLoXPKSA1dQ6q+8mldyXomb0pgPPD+/GuXUduOmUkUxl2pe6JuiLN9O3e2+5dV9Okr5irStlQSymUsSatC8IiBqCNFxR2hmhwb7XPfXr6FRGu2shbJSDQinBGghBBi0mboxTqA+gV4s2N1uinYxgmRctojrdewGhin1gbbjBNYG67vBv19Uqn8XPU1Ne2ChZS1sA5p0BUK4TGGlBlKmagpXOSXF2x5wvziLpIsd2Pzd9zZgezkh/R977jQ1LUSaPAnegBkPpHAy7xhLNXBX1LxWwpRIk0LwcHsJpGGFfb4R2vDoLwjGzwLjfwNrqNaNNARG8AwmagRtKpcLr40rJOXzegL2eUt5YczFNYZuiuw+st+3aeZi2LbvZ1DFOQwvqT8M7MfYYZZiwvaLt7F3h5teXu1/AgAA//8DACvdFyIHBgAA", "base64"));
  res.end();

  return __filename;
};
