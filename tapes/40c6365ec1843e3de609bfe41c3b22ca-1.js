var path = require("path");

/**
 * GET /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60?nreserves=2
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves.. : 202 6795us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves.. : 200 32737us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxX227cNhB9z1cQC/Sp4S5JkRLpN8eXxEh8QbxpCxR5GN5sNVppIWntGoH/vaO9Sr7BfipQdGGstSJnODxz5nD48x0hozo0ob4JzYjskT/JT3yFL3Pf/RxJ79LIvaeQWE1lpoFq7jhl3EUuUw4piNH7lYmrFnUTvuRNm5dXJyt7bQwEYBkNXHsqnUupFV5Q8DxKb7n1id/Y522Yrc04Y54zG6mILKUSgFEbuKLMGoX2JpqQbMzmdeVC0+Caly20i2azso1CA64HzuHKKlNUxwg0SZVWDL1pxZ9zcW7/Cq7t3KzQ2OHxBq9oVMIsLM2+BgdFEfxuyIfG1fm8zatyMINA6cmihBvIC7BF2FnMQgseWuiH1aFeB2iDP8SvpSPBBKMIeMKnLNlL1J5UY5nIXxl+ts7QbjH3r7dbm90v/9+vUWtaqNsH9pIKtUE1lA+9p1SwHVvmefAnmPMBzhZqV/mVkRnEPMKp86qG+u5L5aADbp3pTGmhtHU0OGSm5EhUsA5ozGzKmRYiRv+Cl8fJ3qX7Ta77CT//+vvJR3I0/XR2Tg4O+1O2u/v8bXJwMDk8mZz3h/Nm37X5zXJKWy9Cf6jEymoXvZ1LFgJjGA8ojtVppcEyYVidaaI9AwlOZYO1YTbfFkgqXMxSm1HnQFHpk4QawbFSfZTCBQ5a6r5xkdsOtrW18pnWLAnUASYdl8YgAgQqXJpYIyQGZPvW8zqfofUlKk3uwkWVl0vIRwlIppXAWjIRv3xEbeDR0DSIVKK8BMNj30/Tc3Di15r1Oi/k+4bGWzLMQz2DMpTtA0pF51OJGNDUGMRGR0Y1gk21wWIXQusk65X5Iy8vUepNrvuUOoW8JF9WSXiZUKf/E+rfIhTiWayysU+agKxoc0dugyVduKHeccZVZVvndtFW9eDgHeZ8v2yrMq8W78nHOr+q6rwZZn7rY3o3D5s0BGa8zDw1KggMvTuyE25Rs7LM6hBTr/kLXqbh7xWQz8w5w9h6qwlrJGaI0+jAIJ0NApUlqPVJCEogp4OAJ9K2YeMWwCe3/xuU5BPUs1CE8j05rqH88R/af4Si2QJAvu/kZGGLfCUkj5ixHGuukUlLSTiZkgts3wasmBfgVvAdwMzWub8K78kpNM2Y9Kd1p/95vBiuNXKCMdmfVldrPl9sV34i5K53OVvM7Dqui69Hxyd/TD8rztRYa80VGZN9pUnnnRxPyenR/uHR5bdjnLUriUWdL62v23a+N5nc3t6Oi8qNr6qbCUbo83rSVm4SXD5nGdcT9JVhVyGFGV+3s2Ln56YqFmsC4eNY9Itufrfa5nzc0+9Q4vx6B0L3ux9WsXw77doxUkXSkQHFviFVWeyUeKmmULoNMZSNScYCqjvKIdLQOKpFkFTxjIEVwCAxj40/1etjonvBth/R28R1VXjsVDeqG5IYU45aaw10dJcOlcoZ6h3XaeZRurgZDfq2XgcEZZ/KQeqQ8YTyLCbYq+MTmKipSLRU1gqOB8DoOR/Pt8xvcDtsmaHbJqmrajaMv8siquF1O63B/cA5g1XB+7zLJBSXGBA+NN+a4B+efjsng0tDtKmOylhquiNZyhS1wyQev1hqPFcWT6jRcz5ePPXf4rgPw6pAia9mePwP6vfBBeKsItt4COBfUfSnP317eOX9IWHs4f3hlTeIreXW8P7xmVm1UFzAVWhOys19QKXZE+ObTErR770cFiMqWTdh1bT/0mvN4G6Gwx+gyVeDqGChJlcLFM3bqv4xZNZTIL0EEMc9sj2WjTlLhgBtrD7cYcz1ml2WSW3TgGogtKLKyIRqpji1qZQCopKp6Xl4Ad7VulyNhTQP1l1bvX3dd5vkrHV9BTteS6t61RXxd/f/AAAA//8=", "base64"));
  res.write(new Buffer("AwDRqWcXLxAAAA==", "base64"));
  res.end();

  return __filename;
};
