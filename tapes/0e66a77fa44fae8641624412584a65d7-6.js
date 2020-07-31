var path = require("path");

/**
 * GET /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves.. : 202 9434us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves.. : 200 68041us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYS2/bRhC+51csfOmhXmlf5O76Jjtx4yZOjMQpWhQ57GPWZkuRAknZMYL89w4lWaJqJ7GTtAFa6yBQy3nPtzOf/f4RITsNtNBcQLtD9sjv5D0e4WER+587KoY88Ripk95QpY2jhgdOGQ+Jq5y73Imd3aVKqOdNC8+Ltiuqs6OlvrHWgWOaAjeRqhBy6kUU1EWeVPTcRxmv9YsOpis1zljkzCcqEsupco5RDzyjzNsM9W2yIDduZwXEI1TuVZfh47F3TagjLMxZhp+VPL5C0VnduObqeR1cV9TVymsKMVcBOM2tzagyiVGjGFBjU3JCGCM1/4SVl/4PCN0wiE0d72Ua1So3XYZ+7IqKPC9872gosM7t2ZvxwcH48dH4ePi6aCehKy4WIl0zh+GrChvUzQd5YyDAWHDUZRyb7JXFajNsci5NZE65kOkt3246m7cr5VyEpHOvaQgOM4tSUis4NjwmJTBjZ5QZKpfLXFbaWdTGMAk0OKZ61xgEOKAi5NJboTAgP9SeNcUUtV8jYIsAJ3VRLQq+I51iJhMIMZvwKyaEGE+W5iByhSgFy9PQTjswcBRX0L+bFfJ2ZebDGgozaKaugqr7KkDdsPIAqP8roLCe5bIbE9ICoqIrArkET/pwodlgJtRV1xR+3tXN1vze7vmk6uqqqOe75KemOKubot3u/NrG6dUMrtsAzEalI7UZCAy9n/ySe5q01t5AyqPhn7ByCu+WhfyIzAuMbeBNeKuwQ5ym4CzC2WKhtGQUOwmZQEyDcLe07RqN6wLemv4vriJPXTOFEqpdcti46s//UP7Jle26AOTtZpzMfVksB8kNZCzeteeIpMVIODolJ8gCtlAxK11Ylu/ATX1TxDPYJceubUdkKBZdBy/TybavnSAYU0Oxpl7h+WTt+ZaQgyvLF/OpX8V18urJ4dGvp88yzrKRMYZnZEQmmSG9dXJ4So6fTB4/ef3mEKU2V2LeFAvt866b7Y3Hl5eXo7IOo7P6YowRxqIZd3UYQyhmTHMzRluaCaaEHZ1303Jj56Iu5ysA4eNIDC/d7GqZ5mw0mN9QoXyzKUL/exhWuTg9db4EUifSgwGHfUvqqtxM4sU0dVW4Bkbmk9QMcLrjOEQY2kCNAEUzrpnzwjEn7U3lp81qTfQHbP0RgyTO6zIiT7ueuiBTyjnOWm9dD3cVcFIFS2PgJtcRRxe3y5atptSQ/7hqCGVQBjSXlOskkfLhk7PJUCGNyrwXHBfAzsds3Fx51wvvHmaHd/8VuD5N0tT1dDv+KXQO0eu2nIUGENDxMX4tvSI0KNJXyU95tqfYHtMjzuSP24RypbV/9QbXwKoMninjc8CeCZPRzCpJDcs49blSwqVM5XZgYT6LX+B3pXV/v8tCPBpMzOsyOxMVLidPs2T7QeQSNVmeaAQlvU4OdAj/AOGPedKBe1zWQmqq8gyoVRApgh93pA+58nHj9rOEX2XSGp2zTEkjN/V6IP4PPO1fIf6ZDMn21ybwmKjCP2Wp8XgnhU6aCyyYDoNrfC/ify/T2ySwgnefRtLkAUnfn/HvL7hWR36uK2h/aMm+81fYgXMgsXBNAe2QiNyF/R8WsFj1u+Rpz4C/ISH9KtY5KVMDkUxG5FlVz7ZKu+GeL+CS/FY3W3z9dsopGM/vxClxK+SjI5UZQ/a1smSheJPbHeADkTep1ao+OvmYRaNoLiKnCmtFbVAZzYPnWlpr/HphfZ6XsUEAf+NlyWuvWcL9bSxeLMQz0h6LFwuUx/YI77N0N14GxkuOCKQSyRJVskemyJHhRSs5C7ilGXwBL7uH2SEoDxbcgaz/9/gtqFk2yo3+DtTsNr/fgJotQbzT1Z0rX0Gom+WQEY8+/AUAAP//AwA2LmQptxUAAA==", "base64"));
  res.end();

  return __filename;
};
