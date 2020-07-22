var path = require("path");

/**
 * GET /inventory/items?limit=20&query=id=("d6f7c1ba-a237-465e-94ed-f37e91bc64bd")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:12 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/inventory/items.. : 202 6875us, GET mod-inventory-16.1.0-SNAPSHOT.265 http://10.36.1.174:9173/inventory/items.. : 200 60306us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpdGVtcyIgOiBbIHsKICAgICJpZCIgOiAiZDZmN2MxYmEtYTIzNy00NjVlLTk0ZWQtZjM3ZTkxYmM2NGJkIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQnJpZGdldCBKb25lcydzIEJhYnk6IHRoZSBkaWFyaWVzIiwKICAgICJjYWxsTnVtYmVyIiA6ICJQUjYwNTYuSTQ1ODggQjc0OSAyMDE2IiwKICAgICJocmlkIiA6ICJpdGVtMDAwMDAwMDAwMDEwIiwKICAgICJjb250cmlidXRvck5hbWVzIiA6IFsgewogICAgICAibmFtZSIgOiAiRmllbGRpbmcsIEhlbGVuIgogICAgfSBdLAogICAgImZvcm1lcklkcyIgOiBbIF0sCiAgICAiZGlzY292ZXJ5U3VwcHJlc3MiIDogbnVsbCwKICAgICJob2xkaW5nc1JlY29yZElkIiA6ICJmYjdiNzBmMS1iODk4LTQ5MjQtYTk5MS0wZTRiNjMxMmJiNWYiLAogICAgImJhcmNvZGUiIDogIjQ1Mzk4NzYwNTQzODMiLAogICAgImNvcHlOdW1iZXIiIDogIkNvcHkgMyIsCiAgICAibm90ZXMiIDogWyBdLAogICAgImNpcmN1bGF0aW9uTm90ZXMiIDogWyBdLAogICAgIm51bWJlck9mUGllY2VzIiA6ICIxIiwKICAgICJ0YWdzIiA6IHsKICAgICAgInRhZ0xpc3QiIDogWyBdCiAgICB9LAogICAgInllYXJDYXB0aW9uIiA6IFsgXSwKICAgICJlbGVjdHJvbmljQWNjZXNzIiA6IFsgXSwKICAgICJzdGF0aXN0aWNhbENvZGVJZHMiIDogWyBdLAogICAgInB1cmNoYXNlT3JkZXJMaW5lSWRlbnRpZmllciIgOiBudWxsLAogICAgIm1hdGVyaWFsVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMWE1NGI0MzEtMmU0Zi00NTJkLTljYWUtOWNlZTY2YzlhODkyIiwKICAgICAgIm5hbWUiIDogImJvb2siCiAgICB9LAogICAgInBlcm1hbmVudExvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMjciLAogICAgICAibmFtZSIgOiAiQ2FuIGNpcmN1bGF0ZSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9hblR5cGUiIDogewogICAgICAiaWQiIDogImU4YjMxMWE2LTNiMjEtNDNmMi1hMjY5LWRkOTMxMGNiMmQwZSIsCiAgICAgICJuYW1lIiA6ICJDb3Vyc2UgcmVzZXJ2ZXMiCiAgICB9LAogICAgInRlbXBvcmFyeUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAyMC0wNy0yMVQwMzozNDo1Ni41MjkrMDAwMCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAyMC0wNy0yMlQwMjo0OToxMC43MjMrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIKICAgIH0sCiAgICAibGlua3MiIDogewogICAgICAic2VsZiIgOiAiaHR0cDovL2ZvbGlvLXNuYXBzaG90LW9rYXBpLmF3cy5pbmRleGRhdGEuY29tL2ludmVudG9yeS9pdGVtcy9kNmY3YzFiYS1hMjM3LTQ2NWUtOTRlZC1mMzdlOTFiYzY0YmQiCiAgICB9LAogICAgImVmZmVjdGl2ZUNhbGxOdW1iZXJDb21wb25lbnRzIiA6IHsKICAgICAgImNhbGxOdW1iZXIiIDogIlBSNjA1Ni5JNDU4OCBCNzQ5IDIwMTYiLAogICAgICAicHJlZml4IiA6IG51bGwsCiAgICAgICJzdWZmaXgiIDogbnVsbCwKICAgICAgInR5cGVJZCIgOiBudWxsCiAgICB9LAogICAgImVmZmVjdGl2ZUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfQogIH0gXSwKICAidG90YWxSZWNvcmRzIiA6IDEKfQ==", "base64"));
  res.end();

  return __filename;
};
