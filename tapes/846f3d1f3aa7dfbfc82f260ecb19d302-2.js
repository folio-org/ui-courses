var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/reserves.. : 202 11256us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/reserves.. : 200 51693us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWy24bNxTd5ysIbbqoKfE1fHinOEnjJk6M1C1QFFnwcWlPI80Io5EdI8i/945GlkZ5OHHaoChqLQSJ5LnPw8vz7gEhowaW0FzCckQOyR/kHS7hYpm6v6PCgi1MAsoSt1TpxGjQzFBjOXDLIrgijg56SKxXzRKel8u2rM6PezxnyoE2gqaIRlQ0kQZXBAopu6xZ1DGkG3zZwnwDSzqbyIOnXkiDbgugTkGiWRpwPEStdrBYL0pIxwjuoH34uBx8E+sEa3OqkM4azQolrdzg8AhCFnXjm+vndfRtWVcb74WM2RU608hTpoqzQG0AT4XJhosYvYnsFisvw58Q22Ewg3rexTTCKj/vU5hWFbwd7myTe/br5Oho8uh4Mh1ul8tpbMvL9ZG2WcFwq8IOtatBwooBMBax3EXX5aAcDcA4ZVraxLzysTB7vv18sVpuwFrEbHQwFKMvqEpSUie46VqsRATurbJD8KwMXbVuap2MtUwCjZ6pzjUGAR6oiFoGJxQGFIboRVPOEf0LMraMcFqX1brSI+kVs4VIVLmMXykL6nl2VIPQinuNtMlDO8uBgeO04f7XWSGvN2bebzmwgGbuK6jav8Wkj6zcM+l/xySs56zvxsOmTOfQkp/rCpY/LMlDH66xAxdAUumbEuf1FhTrqm3KsGrrZm+K7zf+SQmzhKP5gDyFGVT7FNgaeIHHz64XsKmqCE5hATnN0TuqrMM8jGQUCw2FcDmD8KObLMjrHZdXYVb2LP4oovXe8gKano+z3EAi0zF5VtWLvdIuZj72sb+AK/J73bwZ7ibfwst8uu9oJBjXnwoo+tnsxWoeNl5PX+FzoMfHqrCWPDTKkTVwUNLF9frgEf4gg0ej47yv4k19TA6pSFZRLRKnCmtFXVQFxYeNG+mcDduXagB+2mxucbfAdp9BABf1ulk3dyMHEwzLnAbr8GIhn6l3Di8WqIDtESEUuU97w6Xhu+SrQUfBBsmRgVQGgRHLjplCO5qSk5zFIBKD0edsfDyRbubRHcwOSXm0Fg1kq0H2UphD67HLfs9fbAAbnx7h16bhAuloqORnTB7K4lDpMVPqx66eO4erRfp6VB/Egy6QD/QQShlhklPUSJxOKglBnfWMGhwuyiWpC1fcpocikyEGL6nXiFKiwIZKrrv5yEMQoLPgn9BDnKH+YiFTkZmmyiM2AC8o68SUSC47kHfQQ26/Nvc66P71+r46KMekFdaAauewNjYzarHY1OID4oWwVhr+jTroTqaHTDrxZUWe9024nVAn94T69+XQlCwBWdGWkVxBIF24+JTfUQJNq7auynp1QH5qyvO6KZefUUGD91IDc0mZRF0BAkO3nloc1jQbY4KFrJPlt1g5g7d9Ib+D3jr4ZJK/+Yo89c28E3kH5Enjqzf/6Sy/SVWeHJ+RU1QVew3e6ckjPw9rfX1ATvxyOSZfFpZRMKaGx5p6Q83Trecv686zZwVnxdhaywsyJtPCks4ueXJGTh5PHz0eKJamXCMu2nZxOJlcXV2NZ3Ucn9eXE4wqlc2kreMEYrlgqD4maMWgplHCjS/a+WxnB6oV3pRdHkMPsz4mH2ZA6ky6huHYXZK6mu1m4oeStwhZGgY4Z3EwIVVcpFaAogU3zAfhmZfuqyWvEJ+VvCBz1hynXnC+o6SKODMiKsrIrTYJhwh3/5BeFNZ8g17conZ6sW/8qK1bP3sFsW76CSgevP8LAAD//w==", "base64"));
  res.write(new Buffer("AwA1UI3FaxMAAA==", "base64"));
  res.end();

  return __filename;
};
