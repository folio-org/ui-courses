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
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:51 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/configurations/entries.. : 202 26619us, GET mod-configuration-5.5.0-SNAPSHOT.76 http://10.36.1.179:9131/configurations/entries.. : 200 5219us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQSs7PS8tML1ayUojmAgAAAP//", "base64"));
  res.write(new Buffer("lJDPSsQwEMbfZa42miZpk/a2siBeVrD2IBQkTaZQ7B+JqbKWvrvJdh9A5zAww2++b2ZW6C2UwLrOsoK3xHYFJUKInCipGGEqFzblHTW8gwTG2S4DBv7p+SGUu9BJj7E1zEYPWKH3/RTEE8BJtwMGde8WTOBLD0vk1uaKNlA2ASJ11UDSgO9H/JmnvX0Y0fVG353w++11du8XwizO4WTOF6Kujg1scSf02mqvoVzBONQe7TGkeBRllFBJUvlCeSmKkue3meA3NETcfofvz/Unusf4Bam6liqWklxmSDJJDVE5SpJRQRlTJqNpGgaXD/t3lyv8X5dt+wUAAP//itUBxVVJfkliTlBqcn5RCijCDHW4AAAAAP//UlAqSi0uzSnxzEvLB4pUoykx1FFKS0xOLQEyo2N1lFIyE9Pz8otLMpPBArVctQAAAAD//w==", "base64"));
  res.write(new Buffer("AwCzUThqAwIAAA==", "base64"));
  res.end();

  return __filename;
};
