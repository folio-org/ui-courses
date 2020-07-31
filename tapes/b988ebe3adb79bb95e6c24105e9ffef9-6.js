var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves.. : 202 7026us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e/reserves.. : 200 69422us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYS2/cNhC+51cQvvRQc5dPkfTNduLGTZwYiVO0KHLgYxir1UoLSWvHCPLfO/vwrrZ2UrsxWqD1HgSJ4rw/znzaT08I2Wmhg/YCuh2yR34ln3AJF8s0f9zRwUpXGEWlSoYqFhz13gRaOOZVUdjIXNzZXYrEZtZ28LLs+rL+cLyU9yFZG1WiNoGjqgiWWuE4ZTFmx4scrINr+bKHyUqMM5Y4C5mKzAqqvGc0ANcU7esgkssO5MbstIR0jMJz0aX7uBx8G5sEC3WO4W+1H1/h1mnT+vbqZRN9Xzb1ymqOqVAROEbnNFU2M2oVA2pdzl4Ia6XhX9HyOvwGsR86scnjvVSjWO0nS9dPfFmTl2WYGxpuWMf24t348HD89Hh8MnxddvuxLy8WW/p2BsNXNRaonw3iRkeAseip19xSFZTDbDMsUiFtwjr7qM2WbT+ZzrqVcCFiNkUwNEaPkSUpqRPcUEhZCYzYW2WHwtUylpW0TsZaJoFGz9TcNDoBHqiIhQxOKHQoDKWnbTlB6bcI2DLCaVPWi4TvSK+Y1SJR5TJeUhbU8+xoAaJQ3BfgeB7q6QYKjtMK+nfTQt6v1HxeQ2EK7cTXUPffBKgbWh4B9X8FFOazWlZjn3SAqOjLSC4hkLm70G4wE5u6b8sw65t2q39v13y/7pu6bGa75Ie2/NC0Zbdd+bWOs6spXJcBmEvKJOo0CHTdemolDzQbY4KFXCTLv6LlDD4uE/mFPa/Qt4E1EZzCCnGao8c5YR0mykhGsZKgBWIahL+lbNdoXCfw1vB/8jV57tsJVFDvkqPW17//h+LPvurWCSDvN+1kFqpy2UhuIGPxrjtHJC1awvEZOUUWsIWKaeXjMn2HfhLaMn2AXXLiu25EhtuS7+F1Pt22tRMFY2q4rW1WeD5dW77F5eir6tVsElZ+nb55dnT889kLzZkeWWu5JiOyry2ZaydHZ+Tk2f7TZ2/fHeGuzZGYteVC+rzvp3vj8eXl5ahq4uhDczFGD1PZjvsmjiGWU2a4HaMuwwRTwo3O+0m10XPRVLMVgPB2JIaHbnq1DHM6GvRvqHF/u0nC/HnoVrVYPfOhAtJkMgcDNvuONHW16cSLburreA0MHbI0DLC7YztEGLqIBAo=", "base64"));
  res.write(new Buffer("FNXcMB+EZ166m8LP29WYmC+w9U8MgjhvqoQ87brrgsy54Nhrg/NzuKuInSo6miK3hUnYurhblmzVpYb8x9dDKIOyYLik3GRJVcQ777KlQlqlQxAcB8DOl3TcHHnXA+8eaodn/w34eZikbZrJtv8T6D2i128Ziy0goNNTvCytIjQoM1TyMy72pN1jZqQ1/36bUK6kDq7e4RhYpSEwZUMBWDNhNdVOSWqZ5jQUSgmftUIKPUDHNP0Nuyup+9tdJuLJoGNep5lJzZxFmg7OMkxzUjSkFBB+WWWPXJ77awcekvCnIpvIAw5rIfE7o9BAnYJEEfw4I0MsVEj3IPxKS2dNwbSSVm7y9Uj8H3naP0L8tUS06yLTyFOmCj9lqQ14JoXJhgtMmImDY3wv4n8v1dsksIaPX0fS/iOS/n3Gf7DgWj35samh+64jBz5cYQXOgaTStyV0QyJyF/Z/VMJi1O+S53MG/ICE9JtY536VW0hkf0Re1M10K7Ub7vkKLskvTbvF12+nnILx4k6cEqdCMTpW2lpyYJQjC8Gb3O4Qb4i8Sa1W+TE5JJ2sooVInCrMFXVRaVrEwI10OELXA+uveRkbOPAnXpaDCYZlnN/W4cFCPCPtmc9TUAHLI0LQ+W68DGyQHBFIJZIlquQcmaJAhpec5CwGkdh6Mt+Dl91D7RCUhwvuQNb/PT4ENdMjZ8S/QM1us/sA1GwJ4p2+6X31BmLTLpuMePL5DwAAAP//AwCrZsSPtxUAAA==", "base64"));
  res.end();

  return __filename;
};
