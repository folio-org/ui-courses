var path = require("path");

/**
 * GET /coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 202 7229us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/574e947b-5cdd-4876-b477-45ff145a5959.. : 200 14186us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWy27bRhTd5ysIbZuRZ4bz1M52itbIowXirIos5nFps6VIYUQZMQL/ey9JyaRl2ZXrAK0WhMDLc+ae+5zvb7JsVsZZtshmUguwQnsiQ4xEGK2IF1oTIYuCCemklXb2tgPUbgk95NSleOPSX5lPALGsrwZ7hHVI5aotm7r/7PIasuASZK6OWTF8mTVF1m78pioj1K1rYb3Drlxql/juYnCLSaWMYIFIFoCIKAJxjlpCwXHmKbVUuH3ob/5PCG0H/46GUeLRXFORPyPpdfY5lFCHrZcHNF7Uodr0wq6gqZqr27fZCtrU/+11r1zloKnb/s2OZQmti651o6v4MiTAeMR3+OipOeWUUE24uaT5IpeLXMxzSX+i+NsSIWqzik+hGFtQs8j5nOv8MOrs9ssa0jbikHsTlJbEB02J9M4QQ3NPvC+8c5FG7+ysJ7jD510f+9Bs0ho+lOsWQ7DlscHKAI4SJWROBAdGfFSRUEcDtSpq78XsMfqp5B1Nh5AEV0iW3E5SOj1jlO2s8K2FVLtqa/z2wFg1wXVZ3RqLEJUIeJayVmJXFJQYQYEYWxSOc2Ny/Qi6r2DU8AK2aQl+dGWdfSg9CrodzaGJg/n9l5Pz85N3FycfR2O5Pg1tedN/0KYNjIYao9xuJhLRAaA0OOIkM0R4YYkHyghVuYnUCReknpzqlqvNegtVPBRaeU1CcKgn5jmxnGkCsRAcdTojzAitBgVbrIzaYF0BCY6K7lh0ABwQHlTuLRfojB+xq1QuEfsZ0k0Z4PemrPsAz3InqJEcB5Yt8BELThwrLFHAlWBOgWXFyLKewC/iumP440iO7OtQ8ttcYwUtdyViNePcCsJpjuNSFBr7RSnCmXJgJQ1chdkE9kx5HM80LY/LVNZle5t1LT/R2uLg2hsHyKzGL6DeHxd4FJ090Dm05uXtCnZdzaSgwniSK2u6NsQZKrF4QhHAF1QAtfdtOIKf1vwCvqnmixrna1rj9L237Y/kT03W1FVZ4/JplqumxsXwUFvXCmkT2iYN7m3rYd9DkwdulWIEGONd0wYcPAaXiKTe6pyhp/6Ah7+WVdUtvTOocDCMH3iX7juX8VzIaUe/Yoo+uVCeXym4HIRdSD5Xlj1cDiPu5ethwvH8Ynr67NetpmE5dbl+nE9qbASLCeSeEQFOEIRrwnQumM0ZaMMP5POXefZ+np1fwxqbuJ0W3jSjShtL/xcZlXPB/6uMHj77B2U0+/ovb0+Dc0LPmbF796BXh+Wfg3Lw3B97//q0WXpIw9X8/k6DSy90M/HT/a29gtX1YHocwSPiZ+aMq6mO10bviNg9PvM1kbt7c/c3AAAA//8DAPknWc36DAAA", "base64"));
  res.end();

  return __filename;
};
