var path = require("path");

/**
 * GET /configurations/entries?query=(module=ORG and configName=localeSettings)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/configurations/entries.. : 202 10887us, GET mod-configuration-5.5.0-SNAPSHOT.76 http://10.36.1.150:9131/configurations/entries.. : 200 5516us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//", "base64"));
  res.write(new Buffer("UlBQSs7PS8tML1ayUojmAgAAAP//lJDdSsRADIXfJbd2NJ3OOLu9UxbEmxWsvRAKks6kUOyPjFNlLX13p9t9AM1FIIcv54TM0DrIwTSyJqmdMAZZqJ3LBFFGAvepYmxq1RgNCfSjmzqO/NPzQxw3oyP1q9SNljouOIR2iOYJ8EB1x9E9+IkT+KJuWrm5uqAV5FWERFlUkFQQ2p5/xmGT73r2raWbI3+/vY7+/UzYyXse7OlMlMWhgmW9iQM5CgT5DNYzBXaH2GKSRIkCjZD4kmKu0xyza9zhFcZar9/g+1P5yf5x/YJi5ayRSmiyUuiGjCBW0UOn+lbJ2u7qLC5OH+7vKRf4vynL8gsAAP//itUBxVVJfkliTlBqcn5RCijCDHW4AAAAAP//", "base64"));
  res.write(new Buffer("UlAqSi0uzSnxzEvLB4pUoykx1FFKS0xOLQEyo2N1lFIyE9Pz8otLMpPBArVctQAAAAD//wMAlI6xJQMCAAA=", "base64"));
  res.end();

  return __filename;
};
