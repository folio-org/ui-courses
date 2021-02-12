var path = require("path");

/**
 * GET /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves/0b285e71-198c-4c4c-a93d-2c3a30aec74e
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/0b285e71-198c-4c4c-a93d-2c3a30aec74e/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves/0b285e71-198c-4c4c-a93d-2c3a30aec74e : 202 13996us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves/0b285e71-198c-4c4c-a93d-2c3a30aec74e : 200 56698us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTXPbNhC951dgdK0hASBIAL65dtJ4YieeVumlk8MCWNhsKVJDUnE9nvz3LiVKVB1nJp6e2qkOHA2x7+3Xw3IfXzE2K+OMnbKZ8MrmaCSXzgaugw4cXBa5ChlkAjAYjbOTARCaTdvhVdn1ZX17uUMXyjl0heMuaM01FMBtyBLPhRSZgcL6mHbossfVCJJCRCl84iqJgkAguEeZc+Fd7lV0yWG2d7kuMV4SdAA+0it66aENTcQtlRP029rSAZmtmxbah6smQF829egvhVjogJIXzuVc2yS41QK5dSmBUtZmRn6T44P/HUM/uZ8q9wJaAtWw2oV8DWXNrko/OJmODxm9+7g4P19cXC6up8OyOwt9+Xlr0LcbnA5qaka/OcqVAkAhAnDIpeXaa0e1FZKLIrNRgIaQmyOvsFpvukMvQzKFNzwEoHxilnGnpOEYk1aUJ1htJ2i1y2DE5tFYKzLkAYQe3FIACEgqKjLvlKZg/IRdt+WKsL9g+7kMeNOU9bbAswy0sLmKXLtEj5gUB5kcL1AVWkKBTqaJpTuCX8ZuYPjtOznYpy3Jl7Hpa2xXUGPd/wPhfMXxv3D++8KhGla76p+xDqn/fRnYPXo2BIrtXhuhqfu29Ju+aUdvj19196zum7psNifsp7a8bdqyO+7xAb98WOO+7Chc1CZyl6OigC3N3kx6nowx3mIqopXf5Fjin7vSPWvxnqI68qS809QPyVMAR4J1VBqTCU59w1yRalHBbCzMM6n9CjV7C+0KK6xP2JsW6j/+lbmxT/u7vvFVubvlT9q5PenuqPXbG3u5ZDctdketXFcQdlU5h5Vvy3iLJ+waum7OJqMIPX5IN3/3MgtKCD0Ztc0ovZuDzydhBqiq95uVH6NZvsulyOfWWpmzOTvLLRsY2Zslu359dvF6r9ZNW27t7/p+fbpY3N/fz6smzG+bzwuKJpbtom/CAkO5FkbaBXEYoYRWbn7Xr6o9C9YbugFT9BN7tYsGfIWsSWxoDY3NjjV1tZ9r2/kEddg3KfcpMwJpTtKIITm4wK1CzXNpBHgFAjL3FPq2Hcft8EIcfkrtDe+aKtIms59imKVUSJpd3sEguWERksHxGKQtTKSBIN1Q4e3dP94ToD6WE2pL21TGpUkZrVP0D1yyXGVW594rSaN09jzD0w/G/nPx3ZTHd+5nhCE51jbNaop6hT2QuODISWiR1BYv6LHzJhQNfcWlWkpzmqtTnc9dYX8Q4nTatEbQjw8faZaOmRuTGdriIjfCFzyPueCQ0SqY6Bp7mp1KBnMQwTq+3OkIernTIf1XX/4CAAD//w==", "base64"));
  res.write(new Buffer("AwAO5oYb9QoAAA==", "base64"));
  res.end();

  return __filename;
};
