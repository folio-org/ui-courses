var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves/5b839674-34d7-40b9-aa7b-690a4668c09c
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves/5b839674-34d7-40b9-aa7b-690a4668c09c : 202 9340us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves/5b839674-34d7-40b9-aa7b-690a4668c09c : 200 30092us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/bOBC+91cQBva0pU1SpETmlubRBm0eaNzdBRY9DB9KtJUlQ5KTDYr89x1ZsiU7SZFe9rBYIzAUk983w5lvhqPvbwiZZH5CDshEWR2ZOJE0kj6hkllDARJLY8NAxrF2zLjJ2xbgylVVh09Z3WTFzVmHBuu1dtJT7YOhMraaamE4Zc6lhsep1SZ06KwJix7EGfOc2ZSKlMVUAjBqA1cUbSsrvElNiDrQsipdqGu0d91As6p7Am1TocHFFJzzVKpEUZ2mQKNYacWQSyv+PMGl/Su4piX5jstDFF7NiJACFmEN+hwc5HnwmwUfaldlyyYri511AoUnqwLuIMvB5mGzfxEa8NDA4E4b5SpAE/wxfq1JBBOMsoRGfM6ig0gdSDWVkfyV4acnQtRq6V+PWoMe8ftxHaO6garZQ0oqVBfBUOyzxlSwjSKWWfBnmNlRRC1UrvQdwIy8nOC2ZVlB9fCpdNAGqc9morRQ2joanONUctQQWAc0TWzMmRYiTf2LHPsJHVL6E7TjpF5+/v3sPTmZf7i4JEfHw4btmT5+mR0dzY7PZpfDYlYfuia7W29oqlUYFgqslmY1Oq1kITCGfoDimkorDYqfYcXEkfZYcuBUMrIKi+VW9rFwaRLbhDoHikofRdQIntDgUylc4KClHqB5ZttA9VjlE61ZFKgDTC6aRQcCBCpcHFkjJDpjB+yyyhaIvQ7VXebCVZkV6xBPIpBMK4EVYlL88qmgwFND4yBiySEOhqcDSz2Cn/m6ZfjzlRzkayfSPu3LUC2gCEWzJ53U+VjiybFbGYyIThnVGGCqDRavEFpHybZsn3C8LJ2foB1L5xyygnzqwv4j4Zz/L5x/SzgYw7yL/iGpA+a/yRy5D5a0joZqow1XFk2V2VVTVr2170+ye1g0ZZGVq7fkfZXdlFVWj3O8xc8flmET9sCMl4mnRgWBDmugOuIWO1CSWB3S2Gv+Isc8/N2F7tkdF+jVyJKwRmI+OE0d4DWsDYYmibBXRyEogaoNAp4kaaO5PmDPHPk3KMgHqBYhD8VbclpB8e0/cOYU8ro/NPm6aQ4rm2ddW9jL/3qlvkWtrEv8bE6uKpwoRsw5uC5cR7CwVeZvwltyDnU9JcOm9na+TK92rUycYEwOm6qy1+rV1uaem+08cbFa2N6bq88np2d/zD8qztRUa80VmZJDpUnLS07n5Pzk8Pjk+ssp7tpIfVVla+xt0ywPZrP7+/tpXrrpTXk3Q898Vs2a0s2Cy5Ys4XqGTAne+lKY6W2zyDcsd2W+6kWCj1MxFNLyoTvacrrtvKHAvdVw7Pb/wZ18/du8HYxImZI24dika1IW+aaLrrshFG6TemXTKGEBuzI2NBSZcTh1BkkVTxhYAQwisw/9UPXNvf2BbT9i6/ptmXucEzc9M0RpGnPslNZAK2TpsNs4Q73jOk48th9uJtsZajSXQDEWaZA6JDyiPEkjKh0+gUk1FZGWylrBsXFPnmd4aVR9NeXuqArt4UhVlovB6zZb2Mtum3kF7huuj6yB91mbMciv0Q18qL/Uwe/eUwPBznie2linylhq2ktTyhh7gInwHcGw2HiObxwsmjzP8IM7+fWk44N3JUd8ucDLeVSPe6P6RUm2nhDAvzwfNj83p79yUo8Y253UXzmrb3E97HH3VisbyK/gJtRnxWb6VnHyZHWTMSmGGchhcWEnape7MfmX7YAEDwtcfAd11i1hBwoVuVlhu7svq2+Dbp4G5EfB4OIg0gcsmSrFx8HYYN49oJ9Vrx3LpLZxwKoWWlFlZEQ1U5zaWEoBqZL4XrrtHS8HsrPJ5RTlsWOzx/y8zfbwbx7/AQAA//8=", "base64"));
  res.write(new Buffer("AwBH/q8OOg8AAA==", "base64"));
  res.end();

  return __filename;
};
