var path = require("path");

/**
 * GET /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves/de1875ec-0821-452f-9e5e-2425e21c8de2
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves/de1875ec-0821-452f-9e5e-2425e21c8de2 : 200 6037us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/jNhC+91cQBnpqaJMUKZG5ZZN9BLt5YNfbHoo9DF+JurJkSHLSYJH/3pFtWYqTDZJLgQI1DEHw8Ps4nPlmOP7xCyGT3E/IIZn4wHWmgqNMC06lEpGaoAIVUqgguNM+iMlBB3DVqm7Cp7xp8/LqdIPOTMaEVYIynwUqdQBqsxApyJBJoU1kjG3QeRsWWxBnzHNmIxWRpVQCMGoDV5RZo6zwJpqQbEDLunKhaXC/Ly20q2ZLoG0UGlxKwTmPPmeK6hiBJqnSiiGXVvxpggv7V3BtR/IDzUMUXsyIkBIWYQ36HBwURfC9wYfG1fmyzavygZ1A6cmqhBvIC7BF6NcvQgseWhjc6aJcB2iDP8HHmkQwTAtLKONzxg8VO1RqylT6G2OH29CuYaulfwVsjbrH5/06Sk0LdTuGMsokFWoTw1D6PVtKBes1scyDP8XcjmJqoXaV3wAMYzs3J7hsWdVQ332qHHRh6lWktFDaOhqcQw1yqylYBzRmNuWoSxGj/ynHfkqHpL6CdpzWi89/nL4nb+cfzi/I8cmwYHemj19nx8ezk9PZxWDMmyPX5jfrBW29CoOhxHppV6PTShYCY+gHKK6ptNKg/BlmK020ZyDBqWy0KyyWO+GnwsUstRl1DhSVPkmoETyjwUcpXOCgpR6gRW67QG2xymdasyRQB5hc3BYdCICF7tLEGiHRGTtgl3W+QOyXUN/kLlxWebkO8SQBybQSWCMm4sNHQYFHQ9MgUskhDYbHgaUZwU990zH8+UIO8m0j0m3al6FeQBnKdk860flU4slpagxGREdGNQaYYuuJIITWSbYr3EccP5fOK2jH0jmDvCSfNmF/Tjhn/wvn3xIOxrDYRP+INAHz3+aO3AZLOkdD3WvDVWVb53bVVvV2tx+PsntUtlWZV6sD8r7Or6o6b8Y53uHnd8vQhz0w42XmqcG7FB3WQHXCLXagLLM6xNRr/lOOefh7E7onV5yjV6OdhDUS88FpdGBQsAZDkyXYq5MQlEDVBgHbtn/wxNF+h5J8gHoRilAekHc1lN//k2cj3/paX9ki31T5XjrXluYaU7+u2NM5uaxxRBgpuAC3icoxLGyd+6twQM6gaaZkWNTdthfx8uEuEycYk8OiutpK73K3556b3YBwvlrYrTfzj4ozNdVac0Wm5Ehp0jGSd3Ny9vbo5G2v1lWdr9dft+3ycDa7vb2dFpWbXlU3M/TG5/WsrdwsuHzJMq5nyIFjGpPCTK/bRdGzhHKFFTB4P7AXG2+6YYVUkXSpwbbZkKos+r627k9Quj5JysYkYwH7JLYYlINxVIsgqeIZAyuAQWL2oR/qbbvtfmC7jxD9wuuq8Di79V0sJDGmHHuXNdBJTjqsf2eod1ynmceGwM1kN9WMJgUox3IKOKdmPKE8iwmVDt/ARE1FoqWyVnBspZOnGX42Pr6Y8uH4CN3hSF1Vi8FrnKjusLtct/Ma3He0j3YD7/MuW1B8QTfwpfnaBP/w5hgIHozM0aY6KmOp6a4xKVOsVpN4fLDUeK4sdvjJ0wzP3JIvJx0ffFM1xFcLvC5HJbU3Pp9XZOcJAfwWxbD4qdn5RdOznBqT7U3PL5qfx8At7v7hTVO1UFzCVWhOy34iVmn2yNrnTIphLnFYXthOOvNmdP11N7TA3QKNb6DJNyZsI6EmVyvsWbdV/X1QzuOQPBcOnuFfgkOWTpWSD8LRg97coaN1Lx9pnfcpQ1lLrOkEhyLjEkcTyEB7n0nnd39rngnlZlOeTBnXDzfdgl6/aXf8X+7/AQAA//8DAE37+6bSDgAA", "base64"));
  res.end();

  return __filename;
};
