var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves/5b839674-34d7-40b9-aa7b-690a4668c09c
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
 * referer: http://localhost:3001/cr/reserves/abd88c4d-8de9-46b8-8291-0ccf916fb89e/09427a84-6777-487d-bdb3-75235f4012de/5b839674-34d7-40b9-aa7b-690a4668c09c/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves/5b839674-34d7-40b9-aa7b-690a4668c09c : 202 7037us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves/5b839674-34d7-40b9-aa7b-690a4668c09c : 200 32497us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWXW/bNhR9768g/LrQJilKIvOW5WM12rRB6wwDhj5ckpeJNlkyJDlpEPS/78qWLS9JgQZ7K6YHwRZ57tc5OuLjG8YmRZiwYzZJnUlslmue6JBzLZzlALnjmRWgs8x4Yf3kqAf4et20+L5ou6K6mW/R4IIxXgduAlquM2e4UVZy4X20MovOWNyiiw6XA0gKEaRwkasoMq4BBHcoU065U6eCjRaTXcpVgWFO0B74SI/ooYPG1wE3oayga7OXFmjbqm6geXhfe+iKuhryRR8y7VFSTzbl2kTBjRbIjY0RlDImyeV3Y3x0f6HvxvTj5F4RlkAVLLclX0JRsfeF65OMy/uO3l3PTk9nZ/PZ5bhYtCe+K+42G7pmjeNCRWR064NeqQAUwgOHVBqunbY0W0GEZIkJxCj4ND/ICsvVuh2gmfIxz1zOvQfqJyQJt0rmHEPUivoEo80ILbcdDNg05MaIBLkHofu0VAACcuWzxFmlqRg3YldNsSTsZ2zuCo9XdVFtBjxJQAuTqsC1jXQLUXGQ0fIMVaYlZGhlHKO0B/B5aPsIf/5gDPZlE+TbQPoKmyVUWHX/QTjPYvwvnJ9fODTDcjv9E9Yi8d8Vnt2jY32h2Oy04euqawq37upmyPb4jN2Tqqurol4fsd+a4qZuivaQ4z1+8bDC3dhR2KDzwG2Kigo2wE0iHY95njuDMQtGfjfGAr9uR/fijg9U1UEm5awmPiSPHsjljaXR5IngxBumilSLCp6RtNPcMLAXWv4dKvYWmiWWWB2xiwaqv3+CniOU7dA0+7Izh7Uri60tPOF/s9LeklY2r/h8wa4abA+4X5Xgt+M6haVrinCDR+wS2nbKxk0BOvwYr/6dZeKVEHrc1NSDVq/2OZ+U6aEsP6yXbqjm6tP5xfyPxbtUinRqjJEpm7KT1LA+LrtYsMvzk7Pzz9cXtGsn9XVTbLC3Xbc6ns3u7++nZe2nN/XdjCoLRTPraj9DX6xELs2MIuVCCa3s9LZblrsod3W5HkRCP6dqfJFWD9vWVtO982JFe5ux7f7/WE65ebYAVyKrI+sJJ5NuWV2VOxfduCFUfkd96mKSCyRXJkMjkVlPhxrUPJW5AKdAQGKfQt82g7n3D8T+UvvSb+sy0Llp55mYxJhJckpnoRey9uQ23vLgpcnyQPYjbU/PxmkOTyVQHYoUtcFcJlzmMeHa0y+w0XCVGJ06pyQZ9+TlCE8/T7uP0w+HPHyTPyH0zbGmrpdj1UvsgJQJB0l8gyTVcEa3bTYin4ucJ3Ih1XFijkU+TVP5y+GxbsD8+nBNxj007oQ2LkNiR5mUp1Yn3IhUcpdprSCmmo6vew2swqtzDpjX5+ybf/PtHwAAAP//", "base64"));
  res.write(new Buffer("AwA+QKFVYQsAAA==", "base64"));
  res.end();

  return __filename;
};
