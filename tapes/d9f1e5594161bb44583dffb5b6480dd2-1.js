var path = require("path");

/**
 * GET /coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a?unused=1
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
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a.. : 202 6308us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a.. : 200 12554us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/bOBC991cIvrZM+CWK9C1pF4tg2+wCSU+LHkbkMNGuLRm0nG1Q5L93JNmR4iSt06wPhKHhezNvNB/69ibLZlWYZfNsZoIrVGkKVnIMTOsQGQjjmClKbZTJpdEwe9cBalhiDzmBFG4g/ZuVCTFU9dVgD7j2qVq1VVP31y6vMfOQMIM6ZHG4mTUxazflZlEFrFtocb3DriC1S3p2NoQlcmOsFp7lwiPTQXsGwB3jCFKUnDu+C2uE/ln+g77t4N/IMEo8mGsq8jcivc4ufIW130b5hMaz2i82vbArbBbN1e27bIVt6v/2ulewAGzqtn+yY1liCwFaGEOlhz4h5SN8oKOnllxyxgsm9SVXc83nojgyLn/L6bclItRmFZ5DCTPP5VzJI6Xc06jT289rTNuMB1CO5zqywmtkuQFkJSjPouE59wIoWTDrCe7ovOtz75tNWuPHat1SCrY8dDmqaAOTwDnTpTSsjDywWPpSgPVWBjV7jH7u5R1MR5CEV0SWYCcpnZwKLnZW/NpiqmGxNX59YFw0Hrq3ujVGH4z2KJhxLmfaRs6s5sisixGktFYVj6D7CkYNL2CbluAnqOrsY1WSoNvR7JswmP/4fPz+/fGHs+NPo7Fan/i2uukvtGmDo6GmLLebiUQKADn3wCAXlhKrHSuRC8aNsoGDBp8XE6+wXG3WW6iRPhamLJj3QHqCUsxJUTAMUUvSCVbbEboYFOzKIxTWcoXMA9edWwoAqdakN6p0UlMw5YhdpWpJ2AtMN5XHv5qq7hM8U6C5zSUNLBfpCFHS1Io0tZDmlQCDTsSRZT2Bn4V1x/D3gRzZl6Hkt++aKmi5KxFXCCmdZpKrggZnLJjlxjApqHUcla00fjaB/aA8Dmealsdlquqqvc26lp9obWlw7Y0DYjbjDaz3xwW54rMHOofWvLxd4VatE7nm2pZMGUfVIpFmaE7F46NH6keN3OnZI/Dzml/AN9V8VtN8TWuavve2/ZF83mRNvahqWj7NctXUtBgeautaIW1826QhvG097EcoJPfagemaVlGNSCpy28WqC26sEBS+fCLC37FJV5iddqMmheziGv4bb5WQ7ttXqLxw07Z+xSh9dqv8eK90G6KYC0F7RTzcECPu5TtiwvGT7US+7RHnxSPfr9tPw4aiM/vyiwt3CI6bI2n2F+6r0/LzpDzp9/9d2eebZYlp+Jq7X4M0J33XRuf3H3oLXF0PpscZPCh/zuipjtdm76Dc7ft8Tebu3tx9BwAA//8DAHIbc84tCwAA", "base64"));
  res.end();

  return __filename;
};
