var path = require("path");

/**
 * GET /coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de
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
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de : 202 8101us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de : 200 38622us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTXPbNhC951dwdG1gAyAAAro5SQ+aJm5n4pw6OeBjYbOVSA5IeqLJ+L93+SFTluOO3FQHjgaL97BvufvA72+ybFWGVbbOVtQIXlgtiCqKgghdBOKCy0kheS6joIwHWL0dAJXdwQi5sinc2/R35hJAKKvbKR6g9alsurKuxm03d5B5myCzVcjitDOrY9b1rt+WAarOdtAesI1N3Q7XNlNaTCqlBfNEMg9EBOGJtdQQCpYzR6mhwp5Cf3d/ge8G+HcMLBLP5joW+SuS3mWffQmVn7P8gcZN5bf9KOwW6m19u3+bNdCl8e+ou7FbC3XVjSsHlh10NtjOLqniok+A9Qgf8DFSc8opoQXJ2Q3N17lcC3mRG/ELxd9MhKi+CS+hGF/ndM3MBWPsx6h3+y8tpLnijgrtFFgiuJZEGpETTSUjTgnBbZRCGboaCR7w+TDW3td9auFj2XZYgpnHuqC1F4HoAIYI5TTR3DBCvY+Gqei0mRvqCfqll3c2HUIS3CJZsgdJ6eodo+wQhW8dpMpu5+C3J8Ft7e3wVudg9EEJD4woYyRORaRECwpEmxgt51rnxTPoqYJFwyvYjlvwky2r7GPpUNB+Cfs6TOHfvly+f3/5YXP5aQmW7ZXvyvtxQ5d6WAIVVrnrjyRiAkCpt8RKpolwwhAHFAurch2oFdbL4uhUu2v6doYq7mOhXEG8t6gn5DkxnBUEQhQcdaKd6AW6nRTMWBkKrWkOxFsqhmMxAbBAuFe5M1xgMm7BNqncIfYzpPvSwx91WY0FXuVWUC15IMJEfITIiWXREAVcCWYVGBYXlvYIvgntwPDnmRzZ16nl53eNHbQ7tIgpGOdGEE5zNE4RC5wXpQhnyoKR1HPlV0ewf2mP85mO2+MmlVXZ7bNh5I+0dmhcJ3aAzGrZAdWpXeBRh9GeE55G82bfwKzWMCkGgyC5MtgtHNBDJTaPjx5cpALwHlk9A7+s+RV8x5o3FfpratF9H2OnlnxdZ3W1LSu8fOpdU1d4MTzVNoxC6n1Xpym9uR++/kdzHmy2WEt6wZk+sdkZ9XqbPdfeXzj3/7X3637nIE03/6Nl4kz5oeTXjx8FW2juptDzCp5RP3ZB9ZNr6merd0btnp/5M5V7ePPwDwAAAP//AwAinH1pWQkAAA==", "base64"));
  res.end();

  return __filename;
};
