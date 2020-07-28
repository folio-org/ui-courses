var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:52:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 7258us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 3522us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTUvEMBRF9/6K0K3zJGk+msxS3LgS/FiJi5fkdSjUdmhTQWT+u5mOo+g4IGopgeb1XMLp7csJY8V66AONY9OtbhKmaaSxYEt2z17yMI+buH0shLYanYvAvTKgrJfgUJaguOa14NKhEcVih3T4SDN02bGACdt+ldP300hjGJp1avpufumaAjVPFJmfEuv6xJ4p7bGJ4h57pIQx726Z3dHyZhgIE8WLvMxZJS858ApKe8vlUuqlVGdKyFOer7egTE3reIwSYqnz7c6csd9T5893Iw2XOyskvQ2m0uBDxUF7tGC59OB97REjjx5dMQds8rpZfJGKNpaqChbIYg0KhQHrRQXcGVVZI0lKdSD1qmP9EGk45vNqO6S4+OQTn7Bp0bf0d51c/VznIXVchvV1aTEYwBAiKJ2t2rpGkCZXj3sSVh82LJcH2/ajJd+Ua54z7CKbuv/TIJ34hYZ36kMDe9gmFKnPhc+nzZ92/v/kyeYVAAD//wMA05lne54DAAA=", "base64"));
  res.end();

  return __filename;
};
