var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:55:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/copyrightstatuses.. : 200 3333us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUu27bMBQG4D1PQWhtGPB+0Za4S5cgaNqp6HB4a4TqYkh0ACPwu5eSmwx1NMT1QkDS+Q/ID9R5uUKo8sN2Pza/nvJjhryb4lShGv1AL+Vb+dqE+bEiQjLKNcHGqIgFDRFDchFLCcbZFLVhUF0fIz10cQndti1aOk9ojFMcn2N4rQlx8mOzzc3QL6UPkMehRx3sUT9kNO8JQUbQtq+JLmYIkGEuP+5t3vsYIcfwuSxLG0YYxYRhyr4RXjNSM32jlPpESE3I304lttuGtRjVtZQ14TdMkZXY3f57OcyXI4zWXEcqA9bEKSyDJBg4TzgJHZyliVGvq6XBoayH639dQVoTvMeM64RF0AIbIQS24ItsskGAOXHdbNDdfk1yM5M0zxFthq4b+qkw5rFxu7kAtY2P/RT/35SLD5i+E1sXAWqkEj5h4wzHQoSC4aXBTlueaOBBS/G+CL7fnIXSDz325X0cfQPt5YykPcvoLbZu5IyLTpCE7fwPiiDLrfHl+pFAFVFaWAZu1Qg/3l6CaXqCsQyBtvkdL0cm5Flkb7F1suSUSdI6bAUpZEIBNpaHshBlA5XOEH5C9rBz5WgoDB00/Rra/YDeRujFZpZk590ddgKBfs4tqjxkaL9GP4xhGfDy6vAHAAD//wMAHD5Huv4FAAA=", "base64"));
  res.end();

  return __filename;
};
