var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
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
 * referer: http://localhost:3001/cr/courses?nreserves=0&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/locations.. : 202 17885us, GET mod-inventory-storage-19.4.0-SNAPSHOT.455 http://10.36.1.15:9168/locations.. : 200 4022us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTW/UMBCG7/0V0V7pUH/b6a3aLVBRulUBcUAcxvYYRdomqyRbUaH+d7wfKYjtQrVSD5Wag6WM844neR9Pkp8HRTGaNQH7qqm7UXFcfC1+5liOVnF5OtIypFKbBIHHBIozD84TgrDJchEC2sBGh2tJjde0Ep3UNf0YoqGJ6+j7z0fj8dHk7OhkmKq6k9BXN6vpvl3QEK67vuoXy5rO1lUoRsRYQEDNHSivSvDEODAjXWSoMGh7vx5ezxfdRmhESNZ4C7lSDSpKCaXgFigmJQJxdMoNwlnlW2xvN0odrXNMEgRkarlkXpyQQAQjfSlULsQPynlbXWflR2pvqkCXTVX3qxwSFXNaRFBlykNMApCnEgwJozgaKnkacnR/iM/ixovHZSi+PZBjk2GYuqYeI/a4jK4dXj6qlrCnOMnDql7BBANmQfJPTB5LdSzFa2vsK5aPTZ1ZtZjHx6tWors83h3+RVYK0ahsAZiyzNa4xMBln8GVKaEQzknLt8j6gFVdnK+N2g3YhxfAnhFgUu0D2KDaDRh3CpGcyp763LqCQXDaI6jcs6xkwoSotwCb1rOqpi20TodIpC601XyJzmric0dFatqiWemKlrpm0Qbq7q+vutDcUHs7qbr5DG8vHl7o6UFVlqXEY4RS2vwMeN5zPpWUhT7krciljulhUIPQqvReAS+DBZVCyK8ALUCWZLhI3kZP/wPVe5SGdISoTc6hU/aChwheaGeVsoIk+zeoj8rwtKBqtg+og2o3qFa7fBM+AIXAszXeAfpscbLecOaESClug3r15extcfrp3cW0GE9298LpSy98Rr2QuX0QG1S7EfNCcZtft8CVMaCIR0AmHPC8qXKb1BGd3ULsspkvZtgWV4Sxqr8X42Y2o7BqfTtxu3zB7RnhZvfCzf4XtyRVFDYYQEcelOEeMH/ugY6EjlvLyW7/NXw8HU8vJsWb8+n0ajdg4gWwZwSYkPsANqh+A7YuZdQ3Pc6uKDTt+ibNwd0vAAAA//8=", "base64"));
  res.write(new Buffer("AwDKcCygww4AAA==", "base64"));
  res.end();

  return __filename;
};
