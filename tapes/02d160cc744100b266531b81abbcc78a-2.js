var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1c8edbab-ab5b-4d56-a396-0bc48cde3a3a"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses.. : 202 6676us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses.. : 200 12725us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRWwW7bOBC99ysEX7dMKJKiSN/Sdg9G27TYuqdFD0NylKgrSwJNBTWK/HspS7YVx8jarQ+yzZk3nPc4M9TPV0kys03n17ieJfPk3+RnXIlrpev/zhiolGXACQMjiMAMCGSWE2OVSx3QInd29nqA1LDCLegGvHsA/19iPKIr67udh8O19WUbyqbeOi7vMbHgMYHaJcXgmzRFEjrTVaXDOkCIee3RLfiwiquLIbk0k1KJ1JIstUiEE5YAUE0oAksNpZoKeA7+ZL6jDX2AgeqB7AXxpnT/joHvky+2xNrusz3BdlHbqttSvMOmau42r5MWg9/+3CrQQgXY1GG7coizwgAOAkxT7k/NY1THvYuP4agoo4TmhKVLyuc8m2fySlHxF42ffbCI61p3Pm6EPW6/H0cth3r5UK5DJLM7C6vQGTAETGaidpkkwLUk1FihrEMOfH8WT/AvHMf5ISPI410M6MGPCfmbNylND3b8EdDXUI3mH0fmqrHQn9RoLqyTwmJKpNYZEaqgRAmKROmiAMaU4vkJ8HMuBzYXRZyW10co6+RDaSK1zdTBNm5weP/1+u3b63eL649Tc7m+saF82LoE3+HUVEflQzehGxNBSm3f3KkiwghNDNKUUMmVoyDAZvmTvWHVdusRLJktcmlyYi1EZo5zolmaE3SFYJExKKGm4GrgMqIzlytFORILVPRbxyQQkDArudFMxITMFN36chXRX9A/lBY/N2W9FXzGQVCVMUeELuLDFYxAWmgikUmRgkSdFtM460mAhRuH33lRkm+7tthXQKyt1a50dJ4ypgVhlOdEiCInikoZ+0sC6oxaJu3sCfDFsrkk2rRslr6sy7BJ+vZ+wjvEcXXU/DG6nPpgfTwe4oaHYbBPfmjk5abFkbtOM0GFMoRLHeuIoe2vCyC2sGgKKpBqMTsBf0mBi2JOFVjUcb76dZy+E+vxUL5tkqauyjpeRM2qbep4QTzn2TeM72xo/JDoWC3ffntEsyVlc6HmGb+SmXw2okfcm83XWKWjtEYBL1TsSYV5vKGEwjgXabyJeWYYOqdZLs8a8/+z94i7fO8XrorbbmXQD+8Gk7Ebe9D2B3G7f3GosL3fGU9peoai4orzo0vvz/U8Q81T+/6Zlr2Sj0ORzUIToPoHbeOHUZW+evwFAAD//wMABJuxTrsJAAA=", "base64"));
  res.end();

  return __filename;
};
