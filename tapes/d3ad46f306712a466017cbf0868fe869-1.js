var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
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

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/locations.. : 202 6199us, GET mod-inventory-storage-19.3.0-SNAPSHOT.448 http://10.36.1.150:9168/locations.. : 200 2939us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTU/cMBCG7/0V0V7bKf62ww3t0haVsgioeqh6GNvjKtKSrJIsKkL893o/gqouW9BKPSCRg6WM9x1P8j6eeO/eFMVo1gTsq6buRsVh8b24y7EcreLydqRlSKU2CQKPCRRnHpwnBGGT5SIEtIGN3q0lNV7TSnRU1/RriIYmrqOfvx6MxweTk4OjYarqjkJf3aym+3ZBQ7ju+qpfLGs6WVehGBFjAQE1d6C8KsET48CMdJGhwqDtw3p4PV90G6ERIVnjLeRKNagoJZSCW6CYlAjE0Sk3CGeVb7G93Sh1tM4xSRCQqeWSeXFCAhGM9KVQuRA/KOdtdZ2Vl9TeVIHOm6ruVzkkKua0iKDKlIeYBCBPJRgSRnE0VPI05Oj+EJ/EjRfPy1D8eCTHJsMwdU09RuxxGV07vHxVLWFPcZKHVb2CCQbMgmBXnB1KfSjse2HMW5avTZ1ZtZjH56tWovs83r/7i6wUolHZAjBlma1xiYHLPoMrU0IhnJOWb5H1Bau6OF0btRuwL6+AvSDAZLkPYINqN2DcKURyKnvqc+sKBsFpj6Byz7KSCROi3gJsWs+qmrbQOh4ikbrQVvMlOquJrx0VqWmLZqUrWuqaRRuoe/h91YXmhtrbSdXNZ3h79vhC/x9UZVlKPEYopc3vgOc951NJWehD3opc6pgeBzUIrUrvFfAyWFAphPwJ0AJkSYaL5G309BSo3qM0pCNEbXIOnbIXPETwQjurlBUk2b9BfVaG/wuqZvuAOqh2g2q1yw/hA1AIPFvjHaDPFifrDWdOiJTiNqgX304+FsdXn86mxXiyuxdOX3vhS+qFfK9eyJ9CzAvFbf7cAlfGgCIeAZlwwPOmym1SR3R2C7HzZr6YYVtcEMaq/lmMm9mMwqr17cTt/BW3F4Sb2KujiSc7WpIqChsMoCMPynAPmI97oCOh49Zystv/Gi6Px9OzSfHhdDq92A2YeAXsBQGm9zrb6a2z3bqUUd/0OLug0LTrhzRv7n8DAAD//wMASj9sz8MOAAA=", "base64"));
  res.end();

  return __filename;
};
