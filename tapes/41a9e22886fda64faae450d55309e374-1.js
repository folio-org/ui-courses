var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby copiedItem.title name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
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

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:44 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/reserves.. : 200 15962us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYyW4bRxC9+ysavOQQNdnrdLdukhzHii1bcOQAQeBDL9XSJOQMMTO0LBj+9xT3obVETBBkgXggqJmu7dXrqgd9fkbIoIEWmo/QDsgh+YV8xkf4sEzzPwecy5hVkagw0lKlRaDBZUMD+OR4sClJPThYmsR61rTwumy7sro8XdpHJkMMXlJfeEaV0JwGyQvKCslDEFBkwdf2ZQeTlRlnLHEWMhWZFVR5tA3ANWXB6SCSyw7kNuy0hHSKxnPTZfr4OPgm1gkW7hzDz+o8vsKj07rxzc3rOvqurKtVVI21Ol1kGnnKVGEC1GKhWHs2XMToTXzIy9vwK8Sun8QWx71co1nlJ8vUj6oKPvXfbIp69X50cjJ6fjo66r8u26PYlR8XR7pmBv1XFXamm/UKVgyAseip1xy7G5RDmBmfd8cm5pWP2uzE9pPprF0ZFyJmUwRDMXtNVZKSOsENhZSViMC9VbZvPC7DHK011slYyyTQ6Jmah8YkwAMVsZDBCYUJhb71tCknaP0jMrWMcF6X1QLpgfSKWS0SVS7jV8qCep4dLUAUivsCHM99P23PwWlacf5xXsiHlZsvGw5MoZn4CqruKyblmAqFGNDCOcTGZkYtgk2ty9kLYa00fHC/l4eYtJfrPpPOfFmR18smPEyosydC/VOEQjzHq4tPWkBWdGUk1xDIPF1otpyJddU1ZZh1dbMzuL+eHl1dlfXsgHzflJd1U7a7nd/4uLiZwroNwFxSJlGnQWDq1lOLw5pmY0ywkItk+QNeLuDTEsh7zrzB3HrRRHAKO8Rpjt4hnR0CZSSj2EnQAjkNwg82MN1Z5E++Ii99M4ExVAfkReOr3/7TVZIP28kwC+NyORNuNXnxrr1CUixu9+kFOcdNvtPg6djHJUYnfhKaMl3CATnzbTsk/WPJd/A2n+/GGkTBmOofa+oVNc83ke9IOfrx+M1sElZ5XbzSnOmhtZZrMiRH2pK5X/Ligpx9d/T8uy2jZ025sLjquunhaHR9fT0c13F4WX8cYVapbEZdHUcQyykz3I7Qi2GCKeGGV91kvPUD1QxvyraOfoTxMicfxkDqTOYNw7Hbkroab2fiYq75Kq6bp0OWhgHOWRxMSBUXqRWgqOaG+SA889LdNn7ZrAb2/AHbfITYHr2qxwml0nr+gcy54Dj1gvNzSqqIMyM6miK3hUk4RLhbIr6aF30J4qs+3UBZMFxSbrKkKuIv77KlQlqlUXZxHMWD+3zcXj7r1bOH2/79fIdaEcskTV1PdvOfQOeRfH4nWGwA+Zie49cyKhO4QCRl/IKbQy0OdTFEGL9l7LAv6lZmxzfvcSKv17AKMaWCYZoK+yVxYbooI5XeeJSuRkVcfVt6TNOfCbwy2z/wEopnvbm2UYsWrDYJKKpgXKNFQvlbMEON5cAti+B0fEh1c6YcFEYgddCJiibSuXCeb1KXCxaLGNIdqjsV2UQecHEKaTCsBuoUJIr0x30VYqG2Zo9Q3QrrtqZgWkkrt3g9qe8nsfT3qu/9mLSX+n5i0v+SSVvZfbxQSR35oa6g/aYlxz7cYAeugKTSNyW0vY3zKAn+ooTFlj8gL+cC9d+iF4/GuYFEjobkVVVPd6DdqsY3cE1+rpsdOX23WBSMF49Qg+fvcB0Uw1OlrSXHRjmyMOxBOr1Z6lX8QeRtVbXCx+SQdLKKFiJxqhAr3K9KU1xs3EjnbNhsqj+WZKyXwFeSLAcTDMucBuvwYiGfcaM7vFigArZHhKDz4yQZ2CA5MpBK1ElUyTkzRYHiLjnJWQwisbUU2UeS7eG2T8qThWggm//8/SVVxvihZodaD4Wz94ijR5ptFdGSQoOu7vz4HcS6WV5x8ezL7wAAAP//AwBmFEkDsxQAAA==", "base64"));
  res.end();

  return __filename;
};
