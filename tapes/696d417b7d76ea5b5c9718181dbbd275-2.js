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
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves/0b285e71-198c-4c4c-a93d-2c3a30aec74e : 200 11453us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/jNhC+91cQBnpqaJMUKZK5ZZN9BLt5YNfbHoo9DB9K1JUlQ5KTBov8944sy3KcZJFcChRoEBhGht83w3nxy49fCJnkYUIOyYQ5YVTUnHJrPJVeego2CVT4BBIG0WsZJwcdwFeruomf8qbNy6vTHp0Ka6NNLbVeSiohBWp8klHFOEs0pMaFrEfnbVxsQJyxwJnLqMhYiiBg1EWuKHNWORFsZmPSg5Z15WPToL8vLbSrZkNgXCYM+JSC94FKpRU1WQY0SZVRDLmM4k8TXLi/om87kh9oHrPwYkaElLCIa9Dn6KEoYhgMITa+zpdtXpUP7ATKQFYl3EBegCvicH4RWwjQwhhOl+U6QhvDCX6sSQQTnDJBuZiz5FCwQ6GnWsjfGDtkbMOEsNUyvAK2Rt3j5/06S00LdbsLZZRJKlSfw1iGPVtKBRt6YpnHcIq13cmpg9pXoQdYxrZhTvDYsqqhvvtUeejStKmnVkYo4zyN3nMquTMUnAeaaZdyZoTIsvAsx35Jx6K+gna3rBef/zh9T97OP5xfkOOT8cD2Th+/zo6PZyens4vRmDdHvs1v1gfaehVHQ4nz0q52bitZjIxhHKC4odJJi+3PsFppYgIDCV7pHa+wWG4bPxU+06nT1HtQVIYkoVZwTWPIpPCRg5FmhBa56xK1waqgjWFJpB6wuOgWA4gQcdDTxFkhMRg3Ypd1vkDsl1jf5D5eVnm5TvEkAcmMEjgjNsOPkAkKPLM0jSKVHNJoeTayNDvw09B0DH++kIN865t0U/ZlrBdQxrLda53Mh1TizWlqLWbEZIwaTDA1FsdXCGMSvR3cRxzPt84raHdb5wzyknzq0/6zxjn7v3H+rcbBHBZ99o9IE7H+be7JbXSkCzTWQ2/4qmzr3K3aqt54+/GoukdlW5V5tTog7+v8qqrzZrfGW/z8bhmHtEdmg9SBWhUFBmzweUy4ww2ktTMxS4Phz3LM49996p48cY5R7XgSzkqsB6eZB4sNazE1OsFdncSoBHZtFLBZ+wdPXO13KMkHqBexiOUBeVdD+f0/eTfybZj1lSvyfsr3yrm2NNdY+vXEns7JZY0SYaeDC/B9Vo5h4eo8XMUDcgZNMyXjoe61vcguH3qZeMGYHA/V1ab1Lrc+98LsBML5auE20cw/Ks7U1BjDFZmSI2VIx0jezcnZ26OTt0O3rup8ff66bZeHs9nt7e20qPz0qrqZYTQhr2dt5WfR50umuZkhh8aHWwo7vW4XxcASyxVOwBj9yF700XRihVQZ6UqDa7MhVVkMe229n6D0Q5GUyxLNIu5JXDHYDtZTI6KkimsGTgCDxO5DP9Sbddv9gW1/hBgOXldFQO02bLGYZFnKcXc5C13LdVqVe0uD5ybVARcCt5OtqtlRClDutlOUBgVvQrnOElS8+A1sZqhIjFTOCY6rdPI0w3Py8cWUD+UjdJcjdVUtxqhRUd3hdrlu5zX472jf8QYh5F21oPiCYeCX5msTw8OXYyR4IJkzl5pMWUdt94xJ2Qn1TuYby1IbuHK44SdPM/zklXw56e7F+6khoVrgc7kzUnvy+bwi20gI4G9RjIef0s4vVM+pEnvq+YX6eQRucPcPX5qqheISrmJzWg6KWKX6kXWomRSjLvE4XrhOOnMvXX/diha4W6DxDTR5b8I1EmtytcKddVvV38fOeZySn6WD60MlDqWa2tQ8SMcAenOHgdaDQteJxn/RAtXMpVQFxSgk+H9ehg+Aw1dXcK+36+P5VPZOlZjKVD90ugG93ml3/V/u/wEAAP//", "base64"));
  res.write(new Buffer("AwD97Zfw0g4AAA==", "base64"));
  res.end();

  return __filename;
};
