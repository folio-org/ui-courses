var path = require("path");

/**
 * GET /coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc?unused=1
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

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 202 7290us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 200 13507us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRWTW/bOBC991cIvrZM+CWK9C1pF4tg2+wCSU+LHobkKNGuLRm0nG1Q5L93ZMmRYjets/FBMDR8M/Me50Pf3mTZrIqzbJ7NJFghc1BMgtdMYw4M8qCYDzaKCLwsYpi96wA1LHELOYMU7yD9m/mEGKv6prdHXIdUrdqqqbfHrm8xC5AwgzpmZX8ya8qs3fjNoopYt9DieoddQWqX9O6iT0vkxlgtAstFQKajDgyAO8YRpPCcO65hH/qn/wdD28G/kWGkeLSvKcnfyOltdhUqrMOQ5Q84XtRhsdkSu8Fm0dzcv8tW2Kbt3y3vFSwAm7rdvtl5WWILEVoYU6WXISHpET/Qo78YLjnjBZPimqu5yue5ObFcv+X0GxwRarOKx6O2oAd6PmyVC80mrfFjtW6JwE73YDF68Ax87kmr3DBQzjDug7YhogI16P4E/az0x7ojSMIbcpYgDamks3PBxc6KX1tMNSwG49cnxkUToLuTwViGaHRAwYxzOdO25Mxqjsy6sgQprVXFAXSfwcjhBd6mBfQJqjr7WHkidD+aQxN78x+fT9+/P/1wcfppNFbrs9BWd9sDbdrgaKhJ5XYzoUgJIOeha1ZhmfbaMY9cMG6UjRw0hLyYRIXlarMeoEaGsjC+YCEA8YlKMSdFwTCWWhJPsNqO0EXPYMDmsbCWK2QBuO7CUgIIyGQwyjupKRk/YlepWhL2CtNdFfCvpqq3As8UaG5zGZl2JT1iKRmI0jGD0mgBBp0oRy/rCfwirjsPfx/pI/vSl/xw11RBy12JuEJI6TSTXBVM67JglhtDfWMAXc6DNGE2gf2kPI73NC2P61TVVXufdQ074drS2NlrZvJsxhNY7zc7hdq19pBw35rX9ysc2DqRa66tZ8o4qhaJoRvywEIZ0JdcI3d6dgB+nvML/E05X9Q0HdOaZuejbX+gXjZZUy+qmlZHs1w1NY31p9y6Vkib0DapT2+oh4MMqTYElQITWhmqERcZ1WfJQhGFtAqt4e4HGf6OTbrB7LwbNSlmV7fw33jKQ3psX6Hywk3b+hWj9Nmd8LOtIK+5nGs7z+2JFfnTrTDizu8/U/sMCXkLqrQ0JCwWtAy1RUqN06pXuZcYo5OFmfp4drf0sd2c5yeam4PYA+7lsQcXD/2FZ1/+17p8FEadmHwvudfL8itRnon7Okn2V/blZukx9d9ij2uQ5mTo2ujy8TNtgavb3nSo4BH66ROlnnxuvFa9I7Q7jPka5R7ePHwHAAD//wMAbpFAuusKAAA=", "base64"));
  res.end();

  return __filename;
};
