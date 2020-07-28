var path = require("path");

/**
 * GET /coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3?unused=0
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 202 7246us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 200 13593us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWwW7cNhC95yuEvTa0hxRFkXtzkh4WTdwCcU5FDkNyZKvdlQRKMrII/O/lSlpLXsfFuukeiAWH73HecPio72+SZFX6VbJOVpKD0LnVDARaJm3KmQHKGIIpNEGeepuu3h4AFe5ogFxh8PcY/k5sIPJldTvGPbUulE1X1tWw7OaOEoeBEqx8Uowrk7pIut7229JT1WFH7RHbYOh2cW4zpsUzpbTkjmXcEZNeOoYxJQaEglsAAxJPob/bv8h1B/j3GJglns21FPlrJL1LPruSKjdl+QONm8pt+0HYLdXb+nb/NmmoC8PfQXeDW6S66oaZI8uOOvTY4ZxqnHSBYj38hzgM1AIEMMiZ0DeQrtNsncqLNINfIP4moojqG/8SivN1xtdSXYDmP0a9239pKUwVp9Rqp/KMWZcDyyxqpiG1zNrCInrwFs1qIHiI48NQe1f3oaWPZdvFEkw8SjlymiQzSIrJXBimOTcsLVLJCUjlbmqoJ+iXDu9suggJdBvJAh4lhat3HPgxSt86ChVup+C3J8Ft7fBwqlOwcF5JR5wpYzImdQFMSyCmTVGgEFqn+TPoqYJZwyvYli34Ccsq+VjaKGg/h13tx/BvXy7fv7/8sLn8NAfL9sp15f2woAs9zYEqVrnrFxJjAgTgkGHGdbz40jBLwBmoVHtAiS7LF7virunb4xELV+TK5sw5jHp8mjIjeM7IF1JEnailnqHbUcGEzXyuY18RcwjysG1MgJCYcCq1RsiYjJ2xTSh3EfuZwn3p6I+6rIYCr1KUoDPhmTRFHHwhGPLCMEVCSY6KDC9mlnYB3/j2wPDnmRzJ17Hlp7OOHbQ7tojJuRBGMgFpzqQs8nhflGKCKySTgRPKrRawf2mP85mW7XETyqrs9snhyi+0dtG4TuwgMqt5BVWndhG3gtUTnePVvNk3NKk1PJMgtWWpMrFbBEUPzWLzuMKRLUASGLl6Bn5Z8yv4lpo3VfTX0Eb3fYydWvJ1ndTVtqzi41PvmrqKD8NTbYerEHrX1WFMb+qHr//RnA82m60BLlIlTmx2Qr3eZs+19xf2/X/t/brfWQrjy/9omfFOuUPJrx8/CrbU3I2h5xU8o378QkC21PGz1Tujds/3/JnKPbx5+AcAAP//AwBg945CWQkAAA==", "base64"));
  res.end();

  return __filename;
};
