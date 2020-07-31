var path = require("path");

/**
 * GET /coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60?unused=9999
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
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:01 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60.. : 202 7000us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60.. : 200 15674us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWS2/bRhC+51cQujYr74vLXd1spyiMJG4BO6cih30MbbYSKSwpN0bg/97hQyYtya5ct2h9oAUOv9n5Zr6Z2e/vkmRWhFmySGYqd0YxI4jNNBDplSDOMCAh5bnJdZBW0dn7FlDaFXSQUxvDnY2/Jy4ChKK86e0Bah+LdVNUZffZ9S0k3kZIbBmSvP8yqfKk2bjNsghQNraBeotd29is8N1FHxZLldKSeZIyj2EF6Ym11BAKljNHqaHS7kJ/dr+Bb1r4dzSMFI/2NSX5Izq9Ta58AaUfojzA8aL0y01H7AaqZXVz/z5ZQxO7nx3vtV1aqMqme7P1soLGBtvYMVR86SNgPsIHfHSuOeWU0IwIdk3FQqQLmc6FkT9Q/BscIWqzDs+hGF8Is5ByLig9jDq7/1JDHDLuqNROgSWS65SkRgqiacqIU1Jym6dSGTrrHDzg86HLva82sYZPRd1gCgY/2hgLFkMApgMKyivieODEBpbL4JgLIsz20c8V72h3CIlwg86i3VKKp2eMsq0VvjUQS7scjN+eGJeVt21VB2Pug5IeGFHGpETqnBItKRBt8txyrrXI9qC7DEYOr/A2leBnW5TJp8IhofvR7KvQmz9+OTk/P/lwcfJ5NBb1qW+Ku+6DJm5gNJSY5WYzoYgBAKXeEpsyTaSThjigjFAldKBWWp9mk1Ptar2pB6jiPs+Uy4j3FvkEIYjhDEsUcsmRp9VSj9Blz2DApiHTmgog3lLZHosBgAXCcfI4wyUG40bsOhYrxF5BvCs8/FIVZZfgmbCS6pSjIEyOj5CjIFhuiAKuJLMKDMtHL/UEfhHq1sOvR/pIvvaSH2qNClptJWIyxrmRhFORESnzDPtFKcKZsmBS6rnyswnsBXkc72kqj+tYlEVzn7QtP+Ha4ODaGQfoWY1fQLk7LvCobWsPAfeteX2/hoGtYalsBwQRyqBaOOAMTVE8PvfgciqBGjnbAz/P+RX+ppwvSpyvscbp+2jbHcmXVVKVy6LE5VOt1lWJi+Ept7YV4sY3VezDG/SwG6ESHoXKFQmiFblDjWqGurXKcMtTj/OSH4jwp3nycZ6c30KNRW+mgTobH3tXZdrQaU+/YY4+u1JeXiosbddDms1TJp6uhxH3+gUx8fHSanrp7Lctp349tdXeq6jLPX4uDAG82BBJseudwbGHzSYYDfjPZIcqClW8geSsXR4xJFe39o/DRWUizcz/oqhybkz2HxRV0gWl88zQf6uoyde/eYXqEyPNXPLdy9Cb0/LXSj947j97CbvcrBzE/n7+eLHBzefbwXj5eHVfwvq2N+1n8Ahh0Tl7egV9a/aOmBL7Z74lcw/vHv4EAAD//wMAF5Onn/8MAAA=", "base64"));
  res.end();

  return __filename;
};
