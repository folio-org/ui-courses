var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby copiedItem.title name
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
 * referer: http://localhost:3001/cr/reserves?sort=title%2Cname
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:43 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/reserves.. : 200 9000us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYTW/bRhC951csdOmhXml3udwP3xwnadzEiZG6BYoih/2YtdlQpEBSdowg/70jURapxHbsokU/YB0Ei9w3Ozvz9s2DPz0hZNJAC80FtBOyT34jn/ARPizi6udEaSF0tJLqLMuojEJQaxyjmhsvbcxUbvPJXg8J9bJp4XXRdkV1dtTjA8t88C6jTiFKipxTn3FFmcq49wJUEvwaX3Qw38A4Y5Ezn6hITFHpEOuB55R5m3sRbbKQDdsuCohHCF5B+/TxsXdNqCOsw1mGn816fIVLF3XjmqvXdXBdUVebXfMsJJurRAOPiUpMgBoPjgqdNBchOB3uivLW/w6hGycx1PFBoRFWuXmf+kFVwcfxm+2hXv08OzycPTuaHYxfF+1B6IqL9ZKuWcL4VYWd6ZajA0sGwFhw1OXcUIkdxTIzvuqOicxJF3K9s7ebL5btBqxESFp5TTH7HKmB/LCCawoxSRGAOyPNGFwWflWt61pHbQzLgAbH5GprTAIcUBFU5q2QmJAfoxdNMUf0T8jUIsBJXVTrSk8yJ5nJRaTSJvyKSVDHk6UKhJLcKbA8jeO0owBHccP5+0Uh7zdhPm85sIBm7iqoui+YlEJUEmtAlbVYG5MYNVhsamxKTghjMs0nt0e5i0kPCj1m0rErKvK6b8LdhDp+JNQ/RSisZ7m5+KQFZEVXBHIJnqzShWbgTKirrin8squbHeH+Uj26uirq5R75oSnO6qZodzu/jXF6tYDrNgCzUepIbQ4CUzeOGhRrmrTW3kBS0fA7opzCx76Qt6x5g7mNdhPeSuwQpyk4i3S2WCidMYqdhFwgp0G4ybZMNx7yF1eRl66ZQwnVHnnRuOrDf/qU5P2gDEtfFr0mfNXk9bv2HEmxvt1Hp+QEJ/lOgxelC32NDt3cN0U8gz1y7Np2SsbLouvgbTrZ3WsSBGNyvKypN9Q82e58Q8rBleWb5dxv8jp9lXOWT40xPCdTcpAbsopLXpyS4+cHz54PjF42xRpx3nWL/dns8vJyWtZhelZfzDCrWDSzrg4zCMWCofuYYRTNBJPCTs+7eTnEgWqJN2U4x3iHss/J+RJInciqYSi7LamrctDEta65Klw3L/cp0wxQZ1GYkCo2UCNA0pxr5rxwzGX2a/DLZiPYqwds+xFiWHpelxGt0rX+QZaS4qh63roVJWVAzQiWxsCN0hFFhNu+4hu9mMyhc9g8t2N8QgPYz/gMv3ruMYECLCgXpyzbF2xfmKlQ5nvG9semaLmID4D1aTwZ3cmt0zFgch2BooPDEaAiWjfFNNWGAzcsgM3DXY6RM2kBbSceG4PIoANdmb7VFLBJsaCCjzc4xqiSDtyj6ItM47Y5UCshUmwdaq0PSg6wezhGmWfWaMVymZlsKNKjc3wc9H+vc3wYkx7kHB+Z9L9k0mAZn64nfEd+rCtov2vJU+evsAPnQGLhmgIGb3BP+/iigPWE2iMvV+bq3+J1DsrUQCQHU/KqqhfpZsfzBi7Jr3Xz4dtGRzCu7uFkTt7hOFDTI5kbQ55qackaOCrp4qr3WvgHyW61Ezr5mEcjqRKRU4m1ojbInOJg4zqz1vjtpPq2nWDqVjuRvPaaJU69sXixkM/UWYsXC6TH9gjv87RrJ0ZzyVWjjoLxGUcG0syjJ5DZiplCoTGJNuMseBEZTG6L8bUiXevRA8KOSXm4Ng1k+1+rv8YRMSn/jCMaYIMj6ik06erOle8g1E1/xcWTz38AAAD//wMAJVeE4G8TAAA=", "base64"));
  res.end();

  return __filename;
};
