var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="1049e672-dcde-4c7c-b95b-edf9f60c6cbd"
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
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses.. : 202 6835us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses.. : 200 68928us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYXW/bNhR9z68Q/LpwISmKkvLWJgUWrGuLpUUfhj3w4zLhKkuCPrJ6Rf77rixbVmzHs7MNGAblwXEknkOey/txkG9nQTAzRVvVUM+Cy+CX4Bs+wWfedn/OlNIudkKSVIUJESbmRIeaERGpKKJxLEKpZuc9JFdzWIJu8qYqgqYIPqhMQZE3RVbcLdbLLNSm8mXji3y5+rZp7SIoXKBy4yFvgsw72CwuVdXM8fFNfyAWSZkIZkjEDBBhhSFK0ZRQUJxpSlMq1C74vf4NTNMR9PI2Ak/gG0t8g8T3wW13YIORGxZsi7vJTdZan98Fd7CMwnlQAkan+4qCbVDuCRHyzKFRVjVqfOTupipQDdhr/FjSc8opoTEJ2UcaXobRpYi+D1PxHcWfgQxxbWmfwzF+GdJLln7PGHsO93rxqYZqdQOaikRLUETwJCJRKkKS0IgRLYXgykVCpnS2onhc/n5c3UefZ2993WBA1vdJRQoS08oaC12CGaLTSBOwLnWSGmm0ne3DH7jS4ykRVMEdElZqLQ++NlDlKmNms2b9bGsJHy3B+Dx4A2Xhh1QNlaBJxC0RqcMP6zhRzKVEApeCKQkpc/sJdrVt1J3EOk7ZK1+Z4BrqLwEbvzeF7d8b++S59bUpHqBaXPu6zNTi3ZinzVSX4j0dIcEPKst+V4sxvvTmS1u+LYxaF0NTtTBacF9k9vYeMvfma+mrxQeofGGfau6O0VYDQXg+foNxwpANl/IZ4Es9GxY8jnaqG+XcbebLVYv79WxrzSxbHXPFFYXGpZF0xDDriGBUk0RjxvPYxYwbo2KzKZMBfOjWTmIc39qrPIeve+/rx08XV1cX1zcXr8avff3KNP4B9gTc51g4TTvSKSgApUYRFTHs7lqkRANlhMowsVQJZaL4yd5qXrb1Ciy5cbHUMcHTR5iIYUhSzuKuzAQ3wFQikjE48xqrbLEOsY2ThIZAjKKi2xoPAQoINzLUKRd4IP0knSo/R/RtXyUfuip5UTnUI4Ibu0qI41j25A1m4HwlyKV4kTwVhNMwJkK4GNuilIQzqSCNqOFy1C464KF8OYltnC8fK5/7ZhF0HX72tAaqZqv/I7scr4F8e0LghptePhy+78MfFyWstNMwosBjRqzVmEcWHFFSJURh1gtHmdZu1HE38EMROIlzHIH3eeZzuLjJcdJWNXaOcVPbGs+vC5zixRKwnMY+Jz0oMMW8LHK0DvWu/q6QqtY0RdULWLeVf2J6S05Pmd67uAOT910711D1FEIm6z2wJkwXkaHD3xbZYMD2STlOSBw+FXKcjDXqbC3i8XzLkoYWHSlNYsITpomQBpuWNGhCsH8oJ4TC2vkrS6r9QUv6Fh0o5kJQVnCP5qCovAkaPx+M3h5b6kzKGBfEWI7OyGEnSxVgY6OhTGxC04TbXfABD3M831jmT6q5hzlOI3OUJ9Vd+pdt1Se/KsvMgw0Qfz+C/x0rmjxrKY/DTTZyspGTjZxs5GQjJxs52ci18P+UjaTrdr9jI4cXL/eQSfoSD7lGPe8hYy7CSEcGkzfFpkMFNh0dKhLF2Da4i1LQ6Y6HvFIZTqy2DsKN5u1M+Oz/UJUlGTxAFljvHFR4+b4fc31qNHC3mkWTmTwlpSczOZnJyUxOZnIyk5OZnMzktv7/gZlkYRQPrutf+Z9kTJMX+MkBtfGTfVxnTdGo7GcwRdVXbXj2+CcAAAD//wMATK+K+VEfAAA=", "base64"));
  res.end();

  return __filename;
};
