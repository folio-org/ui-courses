var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 6840us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 82932us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS3PbRhLH7/4UKF1XE88bM77JdqqiWttxrZzKYWsP8+iRsAYJFgh6zaT03bchkiD4kkHF8ca18EGWgOnGdE/Pv38DSr8/y7KLUC3qOcwvshfZP7Pf8QpeK2L744VzPuVJamKdMESGnBMvPCNSOaVonkuh3cXlymTqJvBgdD1t6iprquy9Kx1U06Yqq9vlZliEeaiLWVNU04fRN80iLrMqZW4aCpg2WVkk2A6eubqZ4OXr1YSY0tpIFohiAYiMMhDnqCUUHGeeUkulOzT+2f8bQtM6WIW3DfAMf/0Qf0THd9lNO+GAmesG7Ad3PQ3lIhbT2+wWHrJwmc0As9N+iwHHbHYkRehnAo2LrnH9KbcrVYNrIL7GLw/uOeWU0JwI9oGKF0K9kOoHYeXfKP7rnKHdYhZP2TH+QtAXzP7AGDtl93L5yxzq9Qp4Ko3X4IjkRhFlpSCGKka8lpK7pKS29GLt4v7h//v1eqzq7E0xbzAhm/Wk0oLGsoohQg==", "base64"));
  res.write(new Buffer("W2CBeKs8gZhs0jTo4OPFMftHlnS4SzSq4RYd1m4THnxuoJ66koXtmM21vSG8NwTz86kIMKuKrlSFk9QoHom0Cb/ExIljyRINXEvmNFiWjjs4jG0b3Vle+yX7qqhD9hrmHzPWvx+quLof4s71WMxD9Qnq5etiPivd8l3fz6J0bYmv3BGS/eTK8j9u2befFeHjYvamCm6zGZp6Ab0Bd1UZb+6gTD9+nhX18j3URRV3Y26nsag7B+KyfwfzhCnrFuVXgI/zi27Afe9J88aldFMWs7XE/evZ3piLcj3NtS8lQrJKJxJYTEQy6onxWPE8TznjIbg8bLdJZ/zYqp3lsb9qV9MpfD66Xn//5fmrV89fXz+/6t8u5lehKT7BkYQXU9w4zaIXp6QAlAZHnGKo7l5a4oEyQrUwkTrpgsp3nu0ms8V8bax5SLn2OcHZKyxEIYjlLG+3meQBmDPS9I3LwuMuW25SHHNjqAASHJXto3ES4IDwoIW3XOKE/E451cUErW9Wu+R9u0uetB3mPQfXcV0Qw7wcqRuswMk6oGRxIbmVhFOREylTjrKoNeFMO7CKBq57ctEaPlYvZ3nr18uHupgWzTJrFf5idw/UzZ7+o3fdHwPT/Q6BD9xqeTf5lQ5/WM5gHTsVigLPGYnRYx1FSMRpZ4jDqpeJMu9TT3G35o9l4Cyf/Qz8PC2LKTy/nmKnreeoHH1R22vPLyvs4tWDwUM3LqZkZZSFajKrpogO88P4241UL0JT1asANrLyNbq35vSc7n1o90jnfbeYeKhXLqQ2m2fgnghtRjqFv6nKDsCOhTIskFzsBjIsjI3Vs00Q95d7SCoiEik1OeGGeSJ1QNHSASEE9cMlKR3unS8hqS8eRdI3SKBYC9mshjuEg6ouQtYUkw70jmBpCpYxLkmIHMkooZJZByhsVGgTDbWGx0PjRxhmuL9+mG9dcwcT7EZhEJP6tvxni3pV/G42KwuIGdrf9cz/CIqak0g5zG7EyBEjR4wcMXLEyBEjR4zcBP6Xwki6kfsDjOxuPJ0hjX0KQ26sTjMkleBEWxAgW7wClC1vTUQNkjIHkaxThwz5ypXYsRZz3BRdaPuVcBU/uWlAiIpFSlDjwherFrcqiwZu131oBMlzyvnbgWSApDgkT7xoJVwqSqzVlLAcv+XaWdvxzVCQPMPlYyC57WMnQbI3ZATJESRHkPw/BknnlHUxJWKBeyJzEYnBC8Rzr6j2MleODwfJs7z16+WnosQ0DeJIRph9nCMFYXIAR1qmZPshFRHaYhlxCFhQWFUhBfAJez+18lyOPMvn7punAQD5rtrgYweM35gXqX4aL27shvGizo39k1872icho/0iMuZcCuVVwPOORXmhEuXFC0dUjgLBk7LgN9V7BBnFaWT8tfjN1ZGU8AnKERu/U2wc3z8ecTBi43YaIzaO2Pg9YOP4/nF8//g1ePLbvH9kQuUddf0pPJlT8wSe7KxO86QRVEhPHfEonbg1ECq9lpxwsNaknDNQHTEc8iQ7zZMv3bwII0h+pyAZqPDBO9GqBMVzZvuLlYLptpehVnDQiZ/9/nG4y8dA8sscOWLkiJEjRo4Yudo+4HOIuKQPAWlHbIuAMU/MKaFY0r0PK76EkWd522kjRbhzUE7cw4d2O28X90mSWcIoYeI0SbYjOCr8AJJMCosGwBDPTMBexz3xNKC9p8mKaFROe+EPI8mzfB6S5BdePx5BxsHEeDhXDrjFHU/E+mix5chIfED01XlSiWsD0e/20u2fF7REZxgDInKL2hCoRW3AWB111AQrE4gT2hDdZH6ZvbqrsX+57GpXJv5Qp33wcRwfhmKkVvsAMRQlN5ZbMe/W5ViVaBa0s0hZ3KMO5TQQI7UgWlrpUmTUgD6ReZ+7qB2mOhdRoCoDRRHCPWFSENFLUDmcOKy5ZVnVl9nb4iP8pbJuaf7ErHeWw7JuQzDGgCJJx7zNOrYOxgQRFJuKSR70rvr3s84deBEBJVZpIp3BUucKF4GjuoEHpvPjHyxcuVtXR8y6i7ewv8P/96kXT069OJn6r3M2VeZgLw6aWGc38GzKhVSnzqZvXdGdwZ5+NmX5U86mLN8/m67yetFUjSv/AaGqVyignt3/FwAA//8=", "base64"));
  res.write(new Buffer("AwAp1m3rIDgAAA==", "base64"));
  res.end();

  return __filename;
};
