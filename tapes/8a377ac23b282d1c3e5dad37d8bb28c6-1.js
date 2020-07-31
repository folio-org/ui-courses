var path = require("path");

/**
 * GET /coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60?unused=1
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
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60.. : 202 7147us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60.. : 200 14614us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTXPbNhC951dwdG0gAyAIErrZSafjaeJ2xs6pk8MCWNhsJVIDUW48Gf/3LD9k0pLt2FV1gDhcvId9i/3g93dJMiv9LFkkMx2s0cKkDPICmXI6ZdYIZD6TwYTCK9B89r4FVLDCDnIK0d9C/CexEdGX1XVv97hxsVw3ZV11265uMHEQMYHKJ6HfmdQhabZ2uyw9Vg00uNlh1xCbFb07790SmdaFEo5lwpFbXjkGwA3jCFJYzg1XsA/9w/6Nrmnh38kwSnw111Tkr0R6k1y6Eis3ePmExvPKLbedsGusl/X13ftkjU3sHjvda1gC1lXTvdmxrLABDw2MrtJLF5Hi4T/S0lFLLjnjOUvFFU8XabZQ2Tw16hdOv4GIUNu1fw4l5CI1C6XmKedPo87uvmwwDhG3XBVWIzAli4xlRqWs4JlgVislIWRKGz7rCO5pve9i7+pt3OCnctNQCAaewhhAIBdQFJ4SymlmpZcMvAjKW2F96meH6Ocu79V0BIl4TWQRdpLi6ZngYmfFbw3GCpaD8dsj47J20N7qYAzOa+VQMG1MxlQROCsUR1aYEEDKokjzA+i+glHDG9imKfgZyir5VFoSdDeaXe178+9fTj58OPl4fvJ5NJabU9eUt92GJm5xNFQU5WY7kUgOIOcOGGSiYMoqwyxywbhOC89BgcvyyamwWm83A1RLF3Jtc+YckB6fpsxIQVfkg5KkEwpVjNBlr2DAZj4vCp4ic8BVeyw5gIBMUuexRipyxo7YdSxXhL3EeFs6/LMuqy7AsxQULzJJCWECLT5QQohgmEaplQCNRoSRZTOBn/tNy/DXKzmSr33KD3dNGbTapYjJhZRGMcnTnCkVcqoXrZkUGtBk3EntZhPYC+nxeqZpelzFsiqbu6Qt+YnWhhrXXjsgZj3uwGq/XdBRu9IeHO5L8+pujYNaIzLVNgiWakPZIpF6aEbJ44JDG7hCbtTsAPy85jfwTTWfV9Rf44a674NtvyVf1EldLcuKhk+9WtcVDYbH2tpSiFvX1LF3b8iHfQ9tcNT5UsOQxiBTnHLEGioSuppUcE9/Jn/Cw9+wjteYnLWtJvrk8gb+HXdZiA/lK9IsN9OyPqKVPjtVXp4rImsnRKbmxuSPJ8SIe/uMmHC8NJ1ooPEF5/Pc8IOzj5tP/YSiNfn6HwduHxhl5kruj86jw/KToDx37v87si+2K4ux/5p7GIPUJ11bRhcPH3pLXN/0psMIviKx+Fw8/mA5Nno/j90TZx4Tuft39z8AAAD//wMAoZGFQC0LAAA=", "base64"));
  res.end();

  return __filename;
};
