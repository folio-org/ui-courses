var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby copiedItem.title name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=title%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/reserves.. : 202 6902us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/reserves.. : 200 43908us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxY227bRhB9z1cs9NKHeqW9cS9+c5ykcRMnRuoWKIo87GXWZkORAkXZMYL8e0eiLFGJ7dhFi15gPQgWuWd2dubsmQN/ekLIqIU5tBcwH5F98hv5hI/wYZmWP0faCGGSU9RIKalKQlBnPaOG26BckrpwxWivh8Rm0c7hdTnvyvrsqMdHJkMMXlKvEaVEwWmQXFOmJQ9BgM6CX+PLDqZrGGcscRYyFZlpqjxiA/CCsuCKIJLLDuR221kJ6QjBS2ifPj4Ovo1NglU4x/CzXo+vcOmsaX179bqJviuber1rIWN2hc408pSpwgSoDeCpMNlwEaM38a4ob8PvELthEts6Pig0wmo/7VM/qGv4OHyzOdSrnyeHh5NnR5OD4etyfhC78mK1pGsXMHxVY2e6xeDAigEwFj31BbdUYUexzIwvu2MT88rHwuzs7aezxXwN1iJmo4OhmH2B1EB+OMENhZSViMC9VXYIrsqwrNZ1rZOxlkmg0TO13BqTAA9URC2DEwoTCkP0rC2niP4JmVpGOGnKelXpkfSK2UIkqlzGr5QF9Tw7qkFoxb0Gx/MwznwQ4CitOX+/KOT9OsznDQdm0E59DXX3BZNyTFphDah2DmtjM6MWi02ty9kLYa00fHR7lLuY9KDQQyYd+7Imr/sm3E2o40dC/VOEwnpW64tP5oCs6MpILiGQZbrQbjkTm7pry7DomnZHuL9Uj66py2axR35oy7OmLee7nd/EOL2awXUbgLmkTKKuAIGpW08tijXNxphgIetk+R1RTuFjX8hb1rzB3Aa7ieAUdojTHL1DOjsslJGMYiehEMhpEH60KdONh/zF1+Slb6dQQb1HXrS+/vCfPiV5v1WGRajKXhO+avLq3fwcSbG63Uen5AQn+U6DZ5WPfY0O/TS0ZTqDPXLs5/MxGS5LvoO3+WR3r1EUjKnhsrZZU/Nks/MNKUdfVW8W07DO6/RVwVkxttbygozJQWHJMi55cUqOnx88e75l9KItV4jzrpvtTyaXl5fjqonjs+Ziglmlsp10TZxALGcM3ccEoxgmmBJufN5Nq20cqBd4U7bnGO5Q9Tn5UAFpMlk2DGV3Tpq62mriStd8Ha+bV4QsDQPUWRQmpIqL1ApQtOCG+SA889J9DX7ZrgV7+YBtPkJsl543VUKrdK1/IHPWHFUvOL+kpIqoGdHRFLnVJqGIcNdXfK0Xoyl0Hpvnd4xPbAH7mZ7hV889rBJlhkp+yuS+LPaVHgtrvt/1RItZuj+qT+LJ4EZufI4FW5gEFP0bDgCd0LhpDGMsB25ZBFfEu/wiZ8oBmk48NAZR0US6tHzLGeCyZlHHkG7wi0lnE3lAyRfS4LYFUKcgUWwcKm2IWm1h9/CLqpDOGs0KJa3c1ujRNz6O+b/XNz6MSQ/yjY9M+l8yaWsYn67me0d+bGqYfzcnT324wg6cA0mlb0vYOoN7mscXJazm0x55ubRW/xanc1DlFhI5GJNXdTPLN/udN3BJfm3aD9+2OYJxfQ8fc/IOx4EeH6nCWvLUKEdWwEFJZ1e908I/iLzVTJgcUpGsolokThXWirqoCoqDjRvpnA2bSfVtM8H0rWYiBxMMy5wG6/BiIZ+pdw4vFqiA7REhFHnXTAzmkq8HHQUbJEcGUhkEZiyXzBQabUlykrMYRGIwui3G14p0rUcPCDsk5eHKNJDN/6z+Gj/ElPoTfmiD2vqhnkCjrul89Q5i0/YXXDz5/AcAAAD//wMAcfM1h2sTAAA=", "base64"));
  res.end();

  return __filename;
};
