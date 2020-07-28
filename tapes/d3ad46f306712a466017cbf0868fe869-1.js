var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:48:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/locations.. : 202 26497us, GET mod-inventory-storage-19.3.0-SNAPSHOT.453 http://10.36.1.132:9168/locations.. : 200 2764us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTWvcSBCG7/kVYq5Jrfv7wzcz4+yaJB7jJOQQcqjurg6CsTRIGhMT/N+350Nm2fEkZiAHg3VoULXe6pLep0vSz1dVNVm0EYe6bfpJdVp9rX6WWInWaX060TJmr02GyFMGxVkAFwhB2Gy5iBFtZJM3W0mDN7QRnTUN/RijsU3b6LvPJ9Ppyezi5GycqvuzONS3m+mhW9EYbvqhHlbrmi62VShGxFhEQM0dqKA8BGIcmJEuMVQYtX1YD2+Wq34nNCJma4KFUqkGlaQEL7gFSlmJSBydcqNwUYcOu7udUifrHJMEEZlaL1kWJyQQ0cjghSqFhFG57OqbovxI3W0d6aqtm2GTQ6JiTosEyucypCwAefZgSBjF0ZDneczR/0d8kXZePC1D9e2RHLsM49QNDZhwwHV06/D6UXWEA6VZGTb1CiYYMAvCfWLyVKpTIf/yyr1m5djVWVSrZXq6aiO6L+P9m/+RlWMyqlgAxvtijcsMXPEZnM8ZhXBOWr5H1gesm+r91qjDgH14AewZAcaPAoz/FjDuFCI5VTwNpXVFg+B0QFClZ1nJhIlJ7wE2bxZ1Q3tonY+RRH3s6uUanc3E556q3HZVu9FVHfXtqovUP1xf97G9pe5uVvfLBd5dPr7QnwdVWZYzTwm8tOUZ8LLnQvZUhCGWrcilTvlxUKPQyoeggPtoQeUYyytAC5CeDBc52BTod6CGgNKQTpC0KTl0Ll7wmCAI7axSVpBkvwb1SRn+LKiSHQPqqDoMqtWu3ESIQDHyYk1wgKFYnG0wnDkhck77oF5/ufi7Ov/0z+W8ms4O98L5Sy98Rr2Q+WMQG1WHEQtCcVtet8CVMaCIJ0AmHPCyqUqb1Amd3UPsql2uFthV14Spbr5X03axoLhpfQdxu3rB7fng5rw9ArcH1S++7aRKwkYD6CiAMjwAls890InQcWs52f2/ho/n0/nlrHr7fj6/PgyYeAHs+QDm5VH9TO71s20pk6EdcHFNse22N2le3f8LAAD//wMAM7OyH8MOAAA=", "base64"));
  res.end();

  return __filename;
};
