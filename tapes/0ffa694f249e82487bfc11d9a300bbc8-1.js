var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:07:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/reserves.. : 202 7005us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/reserves.. : 200 60408us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYTXMTRxC98yumdMkhHmm+P3wzBhIHDC5iUpVKcZiPHrxB2lWtVhgXxX9PryTbKzAGE6gUFemgknf3dfe8ftvzPO/uETJqYQHtG1iMyD75i7zDS3ixyv2fI+3AaZuBsswdVSYzGg2z1DoO3LEEXqfR3hqSmmW7gCfVoqvqV0drPGfKg7GC5oRBVLKJRq8jhVx8MSyZFPMlvupgtoFlU2ziMdAgpMW0GqhXkGmRFjyPyahrWGrmFeQjBPfQdfl4OYY2NRlW4ZSW3lnDtJJObnD4CELmTRvaiydNCl3V1JvsWqbitSk08Vyo4ixSFyFQYYvlIqVgE7slyrP4N6RuWMyAz7uERlgdZuslHNQ1vB3euVrc4xeTw8PJg6PJwfB2tThIXfVm9UjXLmF4q8YOdcvBghUDYCwh3brvclSeRmCcMiNdZkGFpO1W7jCbLxcbsBGpWBMtxeo1VVlK6gW3fYuVSMCDU24InlaxZ+uS62ydYxJoCkz1qbEICEBFMjJ6obCgOETP22qG6N9RsVWCk6aqV0yPZFDMaZGp8gW/chE08OKpAWEUDwZlU4ZxFoMAR3mj/S+LQl5uwry/0sAc2lmooe7+lZI+irJT0v9OScjndN2N+22VX0FHfmtqWPy0IPdDvMAOnAHJVWgrnNdXoNTUXVvFZde0W1N8u/GPKphmHM175FeYQr0tgasAT/Hx04s5bFgV0SskkNOSgqfKeVyHlYwi0aCFLwVEGF2ugry81vIyTqu1ij+qaHVvcQbtWo/T0kImB2PyuG7mW9TOpyGta38K5+TPpn09vJtDB8/KyXaikWDc3FRQCtPp0+UsbrKePMftwIyPlHaO3LfKkxVwQOn8YvXgIf4gg02j13yo0yU/tsSss1PUiMypQq6oT0pT3Ni4ld67eLVTIfisWXXgUvAl2mhZ4TQ6j28LipQG7/FtARWRcxGjLuu1bAQy3GxCPWgTuCg5yorKKLAM2ctNGE9z9pKzFEVmMPpUjI/HzOWQuUPYodIOV06AXBmLrSXMoAvYurCVL7WA3cwP8GvTRYEas1TwUyb3pd7Xdiyd/5nh5zrhcp6/HLUu4l5fyAcmB/2JsNkraiWOHJWFoN4FRi1ODOWzNNrr20xOYjKmGCQNBlFKaGyo5KYfejxGAaYIfoPJ4QxNFYuFisIMVQGxEbimrHdIIvviQd7B5PhtbnbmZrclfV9zU1I2CjmgxnvkxhVGHZJNHe4KQQjnpOVfaW7uFHqopONQ1eTJugm3C+p4J6j/3uMckAWgKroqkXOIpC8X9+c7+pqDumvqqlnukV/a6lXTVotPWJvBfmmA+axspl6DwNJdoA6HNS3W2uigmOz4LVFO4e2ayO9govZuXOQfoSa/hnbWO7c98qgN9esfepVfZRWPj07JCbqKrQZfm8TDMIsr07xHjsNiMSafd4tJMKaGj7XNRponV5k/byZPH2vO9Ng5xzUZkwPtSB+XPDolxw8PHjwcOJa2WiHOum6+P5mcn5+Pp00av2reTLCqXLWTrkkTSNWcofuYYBSLnkYJPz7rZtPrOFAv8U25Xscww3RdU4hTIE0hfcNw7C5IU0+vZ+KHPlbHIi0DnLM4mFAqPlEnQFHNLQtRBBak/6SPBVmK4TjKog+9zlTCQZDQJibujM04Gbj/RibQCPEVJvAK9WkTqNF24R6DkzjqiCYu9iZQFxqyKzbgvwkyXU71m01gYVHo0h9tBSRQK0aDDBatvSheJo6z8JLA3UnXzgz+qHv37qRrp6TdSdfupGt30vXtT7q43hdiX7CxcB+anA3q/sULTLRhIrogi8OR48AmqpUDGiJDEyZ1FICFC2u+yCbdkneDunvea6O1Vuaoa7owfQ6padeTQ957/w8AAAD//wMAYYGTu34cAAA=", "base64"));
  res.end();

  return __filename;
};
