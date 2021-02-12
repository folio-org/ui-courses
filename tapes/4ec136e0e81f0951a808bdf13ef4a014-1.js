var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
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
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 10453us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYXW/bNhR9z68Q/LqwISmKlPLWJgUWrGuLpUUfhj3w4zLhKkuCJGd1i/z3XVm2rNhuFmcbMAx6SVLpniOey/tx0G8nUTSz5aJuoJlF59Gv0Td8gs+C6/4509p45YUkmY5TIqzixMSGEZHoJKFKiVjq2WkPKfQcVqCroq3LqC2j9zrXUBZtmZc3y02Yg8bWoWpDWayir9uFW0alj3RhAxRtlAcP2+BK1+0cH1/1B2KJlKlgliTMAhFOWKI1zQgFzZmhNKNC74Pfmd/Bth1BL28r8Ai+scTXSHwbXXcHtpi5IWBX3FVh84ULxU10A6ssnEYVYHa6P1Gwi6oDKUKeObTa6VaPj9zdVA26BXeJP1b0nHJGKCeMf6DxOafnXL2QafIDpeeUDmwIXFTue0Cmzrk8T9gLGsvvAl8tPzZQr+9AqVgBSxxR1EiSuIQSHceeeKGcyZjnzKrZmuJ+9ft+fSN9pb0JTYsp2dwoFRlILCxnHXQlZonJEkPA+cxLaqU1bnYI/8ilPp0SQTXcIGGtN/LgSwt1oXNmtzGbZzshfBSC+bkLFqoyDMUaa0HThDsiMo8/nOdEM58RCVwKpiVgsg4T7GvbqjuKdVy0F6G20SU0nyM2fm9L17+37sFzFxpb3kG9vAxNlevl2zHPItddkfd0hEQ/6jz/Qy/H+CrYz4vqTWn1ph3aegGjgNsyd9e3kPvXX6pQL99DHUr3UHN3jEU9EMSn4zeYJ0zZcCmfAD43syHgfvSlptXeX+ehWg+53052Ymb5+phrriS2PkukJ5Y5TwSjhqQGNOHKK8at1cpu22QAP3ZrRzGOb+1lUcCXg/f108ezi4uzy6uzl+PXoXlp23AHBxIeCmycdjHSKSgApVYTnTCc70ZkxADF0SDj1FEttE3Ug2/rebVo1mDJrVfSKIKnT7AQ45hknKmuzQS3wHQq0jE4Dwa7bLlJsVNpSmMgVlPRfRoPARoItzI2GRd4IPOgnOowR/R13yXvuy55Vjs0I4Irty6Ip7EcqBuswPlakM/wInkmCKexIkJ4RVIqJeFMasgSarkcjYsO+Fi9HMU2rpcPdShCu4xwxD8oKOyBuh0vAEow71yOY6BwOxH4QTrbU93P4Q/LCtbaaZxQ4IoR5wzWkQNPtNQp7gXrhafMGD+auFv4Yxk4inOcgXdFHgo4uypw19YNTo7xUNtZ0K9K3OPlCrDax6EgPSiy5bwqCzQPzb7+rpHqhW3LuhewGSv/xP5WaXbU/j4AfGT3vl3MDdQ9h5Dp5iPYFbbLyTDjr8t8MGGHxDxJShrvSnmSkC3sZCPj/nTHmMYOfSlNFeEpM0RIi4NL2pikOEO0F0Jj//yVMTXhUWP6Bn0o1kNU1XCLBqGsg43aMB/s3gFz6m3GGBfEOq6J8DjNMg043NBapS6lWcrdPvgRH/N0vrHMn3V7C3PcSPZJztR0LVAt6r4BdFXlAVyE+NsR/O8Y0uw4Q3oAOJnJyUxOZnIyk5OZnMzkZCY3wv9jZpJuBv6emRxePN9JJvGznOQA+76TVFzEiUksFnCGg4cKHDwm1iRRODq4TzIw2Z6TvNA5bq1FE8Vb1bvV8Cl81bUjOdxBHrngPdRYAKFfdX15tHCz3keTpTymrCdLOVnKyVJOlnKylJOlnCzl/9RSsjhRg/P6d/5/UtJnucoBtnWVfW5nbdnq/BewZd13bnxy/ycAAAD//wMANLNSf2MfAAA=", "base64"));
  res.end();

  return __filename;
};
