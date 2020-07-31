var path = require("path");

/**
 * GET /coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de?unused=1
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

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de.. : 202 6903us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de.. : 200 22278us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWS2/bOBC+91cIvrZ0SIqkSN+SdrEIts0ukPS06IGPYaJdWzJoOdugyH/v6OFIdpLWadYHwtDw+zjfcB789ibLZmWYZYtsRo3ghdWCqKIoiNBFIC64nBSS5zIKyniA2bsWUNkVdJBTm8KtTf9mLgGEsrru7QE2PpXrpqyrbtvVDWTeJshsFbLY78zqmDVbt12WAarGNrDZYdc2NSv8dt67xaRSWjBPJPNARBCeWEsNoWA5c5QaKuwh9E/3D/imhX9DwyjxaK6pyN+Q9Ca79CVUfvDyCY3nlV9uO2HXUC/r67t32Rqa1P3tdK/t0kJdNd2XHcsKGhtsY0dX8aNPgPEIH3DpqDnllNCC5OyK5otcLoSc50a8pfgbiBC1XYfnUIwvcrpgZs4Yexp1dvd5A2mIuKNCOwWWCK4lkUbkRFPJiFNCcBulUIbOOoJ7XO+72Pt6mzbwsdw0GIKBx7qgtReB6ACGCOU00dwwQr2PhqnotBkSag/93OUdTYeQBNdIluxOUjo9Y5TtrPC1gVTZ5WD8umdc1t62tzoYow9KeGBEGSOxKiIlWlAg2sRoOdc6Lx5BDxWMGl7ANk3BT7asso+lQ0F3o9nXoTf/8fnk/fuTD+cnn0ZjuTn1TXnbbWjSFkZDhVFuthOJ6ABQ6i2xkmkinDDEAcXAqlwHaoX1spicalfr7WaAKu5joVxBvLeoJ+Q5MZwVBEIUHHViO9EjdNkrGLAyFFrTHIi3VLTHogNggXCvcme4QGfciF2ncoXYS0i3pYe/6rLqAjzLraBa8kCEibiEyIll0RAFXAlmFRgWR5bNBH4eNi3D30dyZF/6lB/uGjNotUsRUzDOjSCc5tg4RSywXpQinCkLRlLPlZ9NYD9Ij+OZpulxlcqqbO6ytuQnWhtsXAftAJnVuAOqw3aBR+1Ke3C4L82ruzUMag2Tom0QJFcGs4UD9lCJyeOjBxepAJwjs0fg5zW/gG+q+bzC/po22H0fbIct+aLO6mpZVjh86tW6rnAw7GtrSyFtfVOn3r0hHw49LCyTzquCqMAwPRhEYpyIBC9FadsmKqNPePg71OkasrO21aSQXd7Y/8ZdzqaH8mW5LMy0rF/RSp+dKj+eK+2EKBZSzgUr9ifEiHv5jJhw/GQ66QVl85yKR2e/bj71EwrX7MsvDtwhMHTOmT4Yna8Oy8+C8sy5/+/IvtiuHKT+NfcwBrFP+raMLh4eektY3/SmxxE8In5sTvXe0+O10Tsido/PfE3k7t/cfwcAAP//", "base64"));
  res.write(new Buffer("AwC4knlcLQsAAA==", "base64"));
  res.end();

  return __filename;
};
