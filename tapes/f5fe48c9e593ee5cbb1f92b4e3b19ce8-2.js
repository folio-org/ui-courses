var path = require("path");

/**
 * GET /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b : 202 15471us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves/e6dc7d65-ae36-4635-a5a9-b6cc4754c52b : 200 57100us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/jNhC+91cQBnpqaJMUKZG5ZZN9BLt5YNfbHoo9DMlRoq4sGZKcNFjkv3fklxzngeylQIEahiCY/L4ZfvPg+McvjI2KOGKHbIRpDFlMDQdMUq7ThN4MOO7TEHRmdDDKjw56QKgXTYufirYrqqvTFTpNAwaLmjtAQmfKcSul40meaIkC0ywkK3TR4WwNkkJEKXzOVS4IBCC4R2m48M54FV3ucA2aN3XAtiV7XzroFu2awPpcWQgphxAi1yYz3OY58CQ11gjiskY+TXDh/8LQ9SQ/aHlQ4dWMBKlghkvQZwxQlhg3CxHb0BTzrqirB+sMqsgWFdxAUYIvcbN/hh1E6GBwp1e5QegwntBjSaKEElxkXNmpSA4Tc5joceLkb4I+ayJCLebx9agl6J6e90uN2g6abg+puTIrBbHaZ025EpuMmBcYTymyO4p6aEIdVwC34+WIts3rBpq7T3WAXqR1NDNjlbE+cAxBci295eAD8DzzqRRWqTyPz3LsB3QI6U/Q7gb14vMfp+/Z2+mH8wt2fDJs2J7p49fJ8fHk5HRyMSwW7VHoipvlhq5Z4LBQUbV0i53TaoEoBPkBRlquvaZSQyFJ1sRGARqCyXaswmy+TftUhTxLfcZDAMN1TBLulMw4xlyrgBKstgO0LHwv1BprYmatSJAHoOCSWXIAAbkKaeKd0uSMH7DzppgR9gs2N0XAy7qolhKPEtDCGkUV4nJ6xFxxkLnjKapUS0jRyXxgaXfgp7HtGf58JQf7tkrSddjn2MygwqrbS508xFTTyXnqHClic8EtCcyto+JVytok25btI47nU+cnaHdT5wyKin1ayf5S4pz9nzj/VuKQhuVK/SPWIsW/KwK7Rc96R7HZ5Eaoq64p/KKrm7W1H4+ie1R1dVXUiwP2vimu6qZod2O8xU/v5riRHYWLOovcGVTksAVuE+mpA2WZt5in0cpnOab490q6J3eck1c7lpR3muIheR7o6tbWkTRZQr06QTSKshYVrNv+wRNH+x0q9gGaGZZYHbB3DVTf/5NnY982tb7wZbGq8r1wLlfaawr9smJPp+yyoQFhJ4NLCCtVjmHmmyJe4QE7g7Yds2FTf9le5JcPrYyCEkIPm5p6nXqXW5t7bvbjwfli5tfeTD8aKczYWisNG7MjY1nPyN5N2dnbo5O3m2xdNMVy/3XXzQ8nk9vb23FZh/FVfTMhb2LRTLo6TDAUc5FJOyGOjC5urdz4upuVGxasFlQBg/cDe7nyph9VWJ2zPjTUNltWV+Wmry37E1RhEyTj8yQTSH2SWgylgwvcKhoLjcwEeAUCErcP/dCs223/g9h+lNpsvK7LSJPbpothkueppN7lHfQppwPVf3A8BmnTLFJDkG60nWp2JgWodtMJtcVMJlxmecJ1oDdwueUqsdp4ryS10tHTDM8Nj6+mfDg8Qn841tT1bPCaJqo76i7X3bSB8J3Wd6xBjEUfLSi/kBv00n5tMT68OQaCBwNz7lObG+e5668xrVOqVpdEeojURWk8dfjR0wwv3JKvJ909+KpqWKxndF3ulNTe8Hxes60nDOhblsPmpybnV87OKtubnV85PW9xa9j9w3um7qC8hCtsT6vNPGzS7NHqJmJaDVNJoOKiZtIvrwbXX7cjC9zNaPENtMVqiZoINuxqQR3rtm6+D3nzWJCXxJDy0JhD6caZVrtibDBv7sjPZlt23oaU/hD5kAluPFhOgfXc+9wDRBE9bEv7BSFXNlVGf0P0A5trzM/b7A//y/0/AAAA//8DACtjS1bMDgAA", "base64"));
  res.end();

  return __filename;
};
