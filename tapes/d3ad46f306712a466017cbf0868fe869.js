var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 14 Jul 2020 14:59:49 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.111:9178/locations.. : 202 6583us, GET mod-inventory-storage-19.3.0-SNAPSHOT.447 http://10.36.1.111:9168/locations.. : 200 3011us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTW/UMBCG7/0V0V5hqL/t9FbtFqgo3aot4oA4jO0xirRNVkm2okL973g/UhDbhWolDpWag6WM9x1P8j6eeH8cFMVo1gTsq6buRsVR8aX4kWM5WsXl7UjLkEptEgQeEyjOPDhPCMImy0UIaAMbvV5Laryhlei4run7EA1NXEc/fDocjw8np4fHw1TVHYe+ul1N9+2ChnDd9VW/WNZ0uq5CMSLGAgJq7kB5VYInxoEZ6SJDhUHbh/XwZr7oNkIjQrLGW8iValBRSigFt0AxKRGIo1NuEM4q32J7t1HqaJ1jkiAgU8sl8+KEBCIY6UuhciF+UM7b6iYrr6i9rQJdNFXdr3JIVMxpEUGVKQ8xCUCeSjAkjOJoqORpyNH9Jj6NGy+elqH4+kiOTYZh6oZ6jNjjMrp2ePmqWsKe4iQPq3oFEwyYBa6umTyS8kjrN9KwVyxfmzqzajGPT1etRPd5vH/9B1kpRKOyBWDKMlvjEgOXfQZXpoRCOCct3yLrI1Z1cbY2ajdgH18Ae0aACbsPYINqN2DcKURyKnvqc+sKBsFpj6Byz7KSCROi3gJsWs+qmrbQOhkikbrQVvMlOquJTx0VqWmLZqUrWuqaRRuoe/h91YXmltq7SdXNZ3h3/vhC/x9UZVlKPEYopc3vgOc951NJWehD3opc6pgeBzUIrUrvFfAyWFAphPwJ0AJkSYaL5G309C9QvUdpSEeI2uQcOmUveIjghXZWKStIsr+D+qQM/xdUZfYBdVDtBtVqlx/CB6AQeLbGO0CfLU7WG86cECnFbVAvP5++K06u359Pi/Fkdy+cvvTC59MLRen2QOxBtRsxLxS3+XObdcaAIh4BmXDA86bKbVJHdHYLsYtmvphhW1wSxqr+Voyb2YzCqvXtxO3iBbfng1s+Ye3T0QbVX852UkVhgwF05EEZ7gHzcQ90JHTcWk52+1/D1cl4ej4p3p5Np5e7ARMvgD0jwLjaB7BB9QuwdSmjvulxdkmhadcPaQ7ufwIAAP//AwBjZxNwww4AAA==", "base64"));
  res.end();

  return __filename;
};
