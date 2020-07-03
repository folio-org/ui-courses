var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjJlNjMxOWI5LTFmZWEtNTQxZC05MWYwLWQxN2MwODdlZGJkNSIsImlhdCI6MTU5Mzc0Mzk4MCwidGVuYW50IjoiZGlrdSJ9.5_DoxBQWjfNC8vC1SXXnZ5ezBn1Ko65ahXmdG7XdneE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 03 Jul 2020 02:39:48 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/coursereserves/reserves.. : 202 238538us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.169:9157/coursereserves/reserves.. : 200 1071335us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWy27bRhTd5ysG2nRRjzQzHM7DO8VJGjdxYqRugaLIYh53bDYUKZCUHSPIv/dSlCUqDydOGxRFrYUgcebc5+G9590DQiYNtNBcQjshh+QP8g4f4cMi9n8nuQGT6wiURW6oVJFRr5im2nDghgWweZgcDJBQr5oWnhdtV1TnxwOeM2lBaUFjQCMy6EC9zT2FmGxSLKjg4w2+6GCxgUWVdODeUScyjW5zoFZCpCnTYLkPSu5goV4WEI8R3EOH8PGxd02oI6zNyTyzRiuWy8xkGxxeQciyblxz/bwOrivqauM9z0KyuUo08Jio5MxT48FRoZPmIgSnA7vFykv/J4RuHMyonncxjbDKLYYU5lUFb8cn2+Se/To7Opo9Op7Nx8dFOw9dcbm+0jUrGB9V2KFuNUpYMgDGApY777vspaUeGKdMZSYyJ13I9Z5vt1iu2g1YiZC08ppi9DmVMcuoFVz3LZYiAHdGmjG4LHxfrZtaR20My4AGx2TvGoMAB1QElXkrJAbkx+hlUywQ/QsytghwWhfVutKTzElmchGptAm/YhLU8WSpAqEkdwppk8Z22pGB47jh/tdZIa83Zt5vObCEZuEqqLq/xaSPrNwz6X/HJKxnOXTjYVPEc+jIz3UF7Q8teej8NXbgAkgsXFPgvN6CQl11TeFXXd3sTfH9xj8poIw4mg/IUyih2qfA1sALvH52vYRNVYW3EgvIaQrOUmks5qEzRrHQkAubEgg3ucmCvN5xeeXLYmDxRxGtz9oLaAY+lqmBSOZT8qyql3ulXZYuDLG/gCvye928GZ9G18HLdLrvaCIYV58KKLiyfLFa+I3X01e4DtT0WObGkIdaWrIGjkq6vF5fPMIfZLQ0es67KtzURycf82gkVSJyKrFW1AaZU1xsXGfWGr/dVAi+qNcduCF88tprljj1xuLbgiSlzlp8W0B6rLnwPk9DLhuCjJeNq0ZtAuMzjrSimRcYRtbTTShLY7QZZ8GLyGDyORsfj5mbIXMHs2OmHa2VANkKi70UFtA5bJ3b8xcawG7GR/i16aJAjmnKxBnLDjN7yPKptvxHhp+dw9Uyfj1qCOJBH8gHIgf1idDRSqozHDkyCkGtcYxqnBjSxkzlNr9N5ASW+eBdRp1ClBQ5NjTjqh963HsBKgn+CZHDGYoq5hMViSkqHWI98JyyXiGJaJOF7A4ix+7X5l7c3K+k7ytuUg==", "base64"));
  res.write(new Buffer("iEpiDaiyFmtjEqMGi00NbgUnhDGZ5t8obu5kesykE1dU5PnQhNsJdXJPqH9f48xJC8iKrgjkCjzpw8X9fEddM6+6uirq1QH5qSnO66ZoPyNtRvtSAbNR6khtDgJDN44aHNY0aa29gaSi4bdYOYO3QyG/g4g6+GSSv7mKPHXNolduB+RJ46o3/+ksv0kqnhyfkVNUFXsN3onEI7fwa9F8QE5c207Jl9ViEIzJ8bWm3lDzdOv5y2Ly7FnOUWoYY3hOpmSeG9LbJU/OyMnj+aPHI8XSFGvERdctD2ezq6uraVmH6Xl9OcOoYtHMujrMIBRLhupjhlY0ahop7PSiW5Q7O1Ct8E3Z5TH2UA4xOV8CqRPpG4ZjtyV1Ve5m4oc6Nvcp0wxwzuJgQqrYQI0ASXOumfPCMZfZz+pYyFJSHEeZt67nmQw4CALKxMCN0hEnA7f/kAi0uf0GEbhF7UTg0M1JV3eufAWhboaxJh68/wsAAP//", "base64"));
  res.write(new Buffer("AwBmkSqNFRMAAA==", "base64"));
  res.end();

  return __filename;
};
