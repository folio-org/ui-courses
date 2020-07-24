var path = require("path");

/**
 * GET /coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/instructors/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/6d973b67-b0ed-44df-a169-67b46365264a/120c49a6-6993-4923-9898-447068114042/edit
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a : 202 6357us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a : 200 12731us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWTW/bOBC991cIvm7p8EsU6VuSLnaDttkFmp4WPVDkMNGuLBmUHDQo8t87kuxIsZ3WaQp0czACDd/jvPnkl1dJMiv8LFkkM+VNJnKVkZyCJ1L6QCxThqgsl0qolCtpZ687QGWX0ENObfS3Nv6X5BHAF9X1YPfQuFis2qKu+mNXN5A4GyGxlU/CcDKpQ9Ku83VZeKha20Kzxa5sbJf47WJwi6VKackcSZkDIr10xFpqCAXLWU6poVu3Ruhf+b/g2g7+BQ2jxKO5piJ/R9Kb5IMroHIbLw9ovKhcue6FXUNd1td3r5MVtLH/t9e9sqWFumr7L1uWJbTW29aOruJHFwHj4d/gT0/NKaeEZoTLKyoWki5YNlcm/Y3i34YIUeuVfwrF1CLlC8HnQpjDqLO7jw3ETcS9FYamMpDMSSCpskByKxwJiqbUMYvBsrOe4B5/7/vYu3odG3hXNC2GYMODh4MI2hNuKSUy54rkgXoScpczq53mXsz20U8l72g6hES4RrJot5Li6RmjbGuFzy3EypYb4+dHxrJ2tsvqxhicV9IBI8qYlEgdKNGSAtEmBMu51iLbg+4qGDU8g21agu9tUSXvihwF3Y1mV/vB/Pbjyfn5yZuLk/ejsWhOXVvc9gfauIbRUGGU2/VEIjoAlDpLbMo0BlYakgNlhCqhPbXSujSb3GqXq3WzgSruQqbyjDhnUY8XghjOMgI+SI46rZZ6hJaDgm15+ExrKoA4S2V3LToAWGvcKZEbLtGZfMSuYrFE7AeIt4WDv+ui6gM8E1ZSnXIcWCbgjw8cp1bAqQU4r5hVYFgYWZoJ/MI3HcM/R3Ikn4aS3+QaK2i5LRGTMc6NJJyKDAdnyIimShHOsHUMli1XbjaBfaM8jmealsdVLKqivUu6lp9obXFw7YwDZFbjCah2xwVeRWePdA6teXW3go1aw1JJpc6JUAarhQPO0BSLxwUH2I8SqJGzPfDTmp/BN9V8UeF8jQ1O3wfb7ki+rJO6KosKl0+9XNUVLobH2rpWiGvX1nFwb1MPux4yTp00VnVNK7BGOBa57nyVGVWaMXSfH/Dwz6Isu6V3BiUOhvFAbuND5zIuZDrt6BdM0ScXyrdXSrccsgVjuFLY4+Uw4p6/HiYc31lMT979stU0LKcu13v5zEwOmTMem1w7IilLcd6BQhLHlOSS0XCo4v6YJ2/nyfkNNNjE7bTwphlVmTb0f5FROU+5+UUZPXz3T8po8ukHX0+Dc1TNudp9Pb04LN8PysF7f+7763K9zCEOT/OHNw0uPdfNxMuHV3sJq5vBtB/Bo+JnlJzqeGn0jord7p0vidz9q/uvAAAA//8DAElXL/n6DAAA", "base64"));
  res.end();

  return __filename;
};
