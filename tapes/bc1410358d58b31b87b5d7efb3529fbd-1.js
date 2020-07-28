var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="9c95cea0-6453-42e1-bd6d-0a0c096d7bb4"
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/574e947b-5cdd-4876-b477-45ff145a5959/77ff3d3b-5cc0-4e14-bad3-38aae25c1cf9/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7063us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 13819us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTW/bOBC991cIvm6ZkBRJkb6l7R6MbbOLNj0tehiSo0RdWRJoKahR5L8v9WFbiZ0iRlAfZJvke5w3nHnUzzdJsnB1Fza4WSTL5N/kZxyJY4Xv/y5kJtCIzBLpvCdCZ4pYkWVEyDxnQoI00izejpAK1jiAriD4ewj/JTYg+qK63a3wuHGhaNqiroaFN3eYOAiYQOWTfFyb1HnSdrYrC49VC22Ma49uILTrOLoag2NSKS2YI5I5JMILRwCoIRSBM0upoQKOwX/b7+janmCUehB7Bt9c7p+R+C754gqs3D7aE2pXlSu7QeIt1mV9u32bNNiG4eeQgQZKwLpqh5EDzxpb8NDCPOT+1ALG7PgP8THQc8opoRnh+oamy1QuU3GRSvoHjZ89WcR1jX8Ox9iS6mXKL3iWPod7t/26wTCdAKZWO5VJYl1GibSgiaapJdbmFsBTb8EsJoqH4fthOo+x5j4WmzYmZGIzzkiHQIkSMiWCIyPWK08oUEeN8pm1YnEK//yRnkEZQQFvI2GAnbxw9Y5RdpjHHy2GCspp+seT6bJ20J/2NJ07r4SLOypjZOydnBItKBJt8hw41zrNToCPtRzUnMU4L9FPUFTJx8JGadv5Alf7ccFfXy/fv7/8sLr8NJ8uNleuLe6HJW3ocD5Vxcy33UxuDAQpdUBAMk2EFYZYpIxQlWpPQYCT2aO9Yd10mwmsuMszZTPiHERlPk2J4Swj6HPBo2LQQs/B5ahlQkuf6Vh3SBxQ0W8dg0BAwp1KreEiBmTn6CYU64j+guG+cPhPXVRDwhcpCKolj0Zn8vjwOSfAckMUciUYKDQsn/NsZgQrPxnoy1iSb7u22FdArK31rnRMxjg3gnCaRrMVeRb7SinCmQI0kjqu3OIR8Jdlcw7bvGxuQlEV7TbpLeKR7jZa3hMDiexqvgarpxYTN6SLI9VjI99sG9y5AJOCCm1JqozuWza6sIxl5XKHNqcCqZm17AH+qwycxTnPwKqKHh020cFns0+N/bpO6qosqniZ1eumruIlc6yzb5jQubYOY6BTtXx7hc1HuxZmKbILps2RXU+48+36xVfF83v/jqviultbDOP7xcx2Yw+6/iCu9y8fJTZ3u8lTOX1BRvUF4+qxqtfn8wXZPLXv63LZZ/JhLLJFW7dQfkZXh9Gq2JuH/wEAAP//AwCwytpW/wkAAA==", "base64"));
  res.end();

  return __filename;
};
