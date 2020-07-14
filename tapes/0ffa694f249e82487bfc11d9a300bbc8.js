var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjZjNmI5YWI0LTE2YjEtNWNmMC1iZGM4LWI2NzI4YmM3YTUwNCIsImlhdCI6MTU5NDczODc4NywidGVuYW50IjoiZGlrdSJ9.pE0DFuVgWBOKlfXuIoKeSfTv9crEA98GpVjMrRMvJDQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Tue, 14 Jul 2020 14:59:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/coursereserves/reserves.. : 202 20291us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.111:9157/coursereserves/reserves.. : 200 64893us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWy27bRhTd5ysG2nRRjzQznGd2ipM0buLESN0CRZHFPO7YbChSoKg4RpB/76UoW1QeTpw2KIpaC0HizLnPw3vPu3uETFpYQfsGVhNyn/xB3uEjfFim/u9EWbDKJKAscUulTowGzQw1lgO3LIJTcXIwQGKzblfwrFx1ZX12NOA5kw60ETRFNCKjiTQ4FSik7LJmUceQrvBlB4stLOlsIg+eelEYdKuAOgmJ5sKA4yFquYPFZllCOkJwDx3Cx8fBt7FJsDEnVeGs0UzJwhZbHF5ByLJpfXv5rIm+K5t6610VMTulM408ZSo5C9QG8FSYbLiI0ZvIbrDyIvwJsRsHM6rnbUwjrPaLIYV5XcPb8cl1ck9/nR0ezh4ezebj43I1j135ZnOla9cwPqqxQ916lLBkAIxFLLfquxykowEYp0wXNjEvfVRmz7dfLNerLViLmI0OhmL0ispUFNQJbvoWSxGBeyvtGFyVoa/WVa2TsZYVQKNnsneNQYAHKqIughMSAwpj9LItF4j+BRlbRjhpynpT6UnhJbNKJCpdxq+UBfU8O6pBaMm9RtrksZ3VyMBR2nL/66yQV1sz7685sIR24Wuou7/FpI+s3DHpf8ckrGc1dONBW6Yz6MjPTQ2rH1bkgQ+X2IFzIKn0bYnz+hoUm7pry7DumnZviu83/nEJVcLRfECeQAX1PgWuDTzH66eXS9hWVQQnsYCc5ugdldZhHqZgFAsNSricQfjJVRbk1Y7L61CVA4s/imhztjqHduBjlVtIZD4lT+tmuVfaZeXjEPtzuCC/N+3r8WnyHbzIJ/uOJoJx/amAoq+q5+tF2Ho9eYnrQE+PpLKWPDDSkQ1wVNLl5ebiIf4go6XRc97X8ao+JoekkpVUi8SpxFpRF6WiuNi4KZyz4XpTIfi82XTgivA5mGBY5jRYh28LkpR65/BtARmw5iIElYdctgQZLxtfj9oENhQcaUWLIDCMoqeb0I6m5ArOYhCJweRzNj4eM1dD5hZmx0w73CgBci0s9lJYQOexdX7PX2wBu5ke4te2iwI5ZiiXp6y4X6j7TE6tFj8y/Owcrpfp61FDEPf6QD4QOahPhElOUlPgyJFJCOqsZ9TgxJAuFVo5dZPIiawIMfiCeo0oKRQ2tOC6H3o8BAE6C/4JkcMZiioWMhWZaSo9YgNwRVmvkERy2UFxC5Hj9mtzJ27uVtL3FTc5Ji2xBlQ7h7WxmVGLxaYWt4IXwtrC8G8UN7cyPWbSsS9r8mxows2EOr4j1L+vceZkBciKrozkAgLpw8X9fEtdM6+7pi6b9QH5qS3PmrZcfUbajPalBuaSNIk6BQJDt55aHNY0G2OChayT5TdYOYW3QyG/g4g6+GSSv/maPPHtolduB+Rx6+vX/+ksv0kqHh+dkhNUFXsN3onEQ78IG9F8QI79ajUlX1aLUTAmx9faZkvNk2vPXxaTp08VZ2pqreWKTMlcWdLbJY9PyfGj+cNHI8XSlhvEedct789mFxcX06qJ07PmzQyjSmU765o4g1guGaqPGVoxqGmkcNPzblHt7EC9xjdll8fYQzXE5EMFpMmkbxiO3RVp6mo3Ez/UsSrkwjDAOYuDCaniIrUCJFXcMB+EZ75wn9WxUOSsOY6y4HzPMxlxEESUiZFbbRJOBu7+ERGopsy4W4vAEWonAoduTrqm89VLiE07jDVx7/1fAAAA//8DAOoSI0IVEwAA", "base64"));
  res.end();

  return __filename;
};
