var path = require("path");

/**
 * GET /coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?unused=0
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
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42.. : 200 6779us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTY/bNhC951cIvjb0khQ/fdskPRhNtgWyOQU5jMjRrlpbMihpESPY/96xLK9lb7fwNuhFMDR8j/Oeho/+8SbLZlWcZYtsFoxEq4VgsUDFlELNnPaSeWttVNxjVHL2dgeoYY0D5BpSfID0V3bftwXUMW33CyK2IVWbrmrqYd3tPWYBEma0JisRY1XfZU2ZdX3Rr6qIdQcdtgfsBlK3pnfLfV9CG+OUCEyLgExFFRgA94wjSFFw7rmCc+jvxZ8Yuh38BxWOGi/mmqr8lUjvs8+hwjqMXf6DxmUdVv0g7A6bVXO3fZttsEvDz0H3BlaATd0Nbw4sa+wgQgfHVullSEh+xA/0GKgll4LxnHFxy8VC84XWc3r1C+cLzkcmgvWb+BJM2IVyC2HnTpkXYO+2X1pMo+elKkKMhjPwSjGde818yAPLwYKL0aoQcTYQPNLzcXA/NH1q8WPVdmTCyGO95bLQkvFoyW+HwAqLJQOFVknnSz52cop+6fNdTEeQhHdEluAgqb1+J7g4VPF7h6mG1Vj8flJcNQF23/VgRohGBRTMePJBuZIzpzgy2q8EKZ3L7TPouYKjhlewTYfwE1R19rEqSND2WA5N3Jd/+3L1/v3Vh+XVp2Oxaq9DVz0MC7rU47FQk8tdP5FIDSDnARho4ZgqlGcFcpoek7vIQUHQdrIrrDd9O0KNDKU1hWUhAOmJec68FJZhLJUkneCUO0JXewUjVkfrHM+RBeBqty01gIBMBpMXXipqpjhiN6laE/Yzpocq4B9NVQ8Gz3JQ3GkZmfIlPWIpGYjSM4PSKAEGvSiPLO0EvoztjuHrhRzZt/3Ij9+aJmh9GBFvhZReMclzS9lZWua4MUwKA+g1D9KE2QT2L+NxOdN0PG5TVVfdNqMzPznabUfRNc0DzshnaY4rsI5nddqKz0507o/m7XaDo1ovtOLKFSw3nqZFIqWopuEJZcCi5Aq5V7Nn4Jc1v4JvqnlZU8KmlvL3qXYeyjdN1tSrqqbrp1lvmpquhlNtu6OQ+tA1ad/eOA/f/mM8U85qtdD53Gt9nrMj7PU5e2HAa70Qfq6N+38D/qZfF5j21/9TaNKpCjvTb57+Gaxwc78vPffwAgfVXBp/IuRn/bvIPSVPr8ef8u7xzePfAAAA//8=", "base64"));
  res.write(new Buffer("AwAbkPUxYAkAAA==", "base64"));
  res.end();

  return __filename;
};
