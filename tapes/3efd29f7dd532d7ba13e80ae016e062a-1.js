var path = require("path");

/**
 * GET /inventory/items?limit=20&query=id=("d6f7c1ba-a237-465e-94ed-f37e91bc64bd")
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
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:06 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-inventory-16.2.0-SNAPSHOT.346 http://10.36.1.217:9140/inventory/items.. : 200 14860us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpdGVtcyIgOiBbIHsKICAgICJpZCIgOiAiZDZmN2MxYmEtYTIzNy00NjVlLTk0ZWQtZjM3ZTkxYmM2NGJkIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiTG9uZyBtaXNzaW5nIiwKICAgICAgImRhdGUiIDogIjIwMjEtMDMtMDFUMDk6NDI6MTUuODIxKzAwOjAwIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQnJpZGdldCBKb25lcydzIEJhYnk6IHRoZSBkaWFyaWVzIiwKICAgICJjYWxsTnVtYmVyIiA6ICJQUjYwNTYuSTQ1ODggQjc0OSAyMDE2IiwKICAgICJocmlkIiA6ICJpdGVtMDAwMDAwMDAwMDEwIiwKICAgICJjb250cmlidXRvck5hbWVzIiA6IFsgewogICAgICAibmFtZSIgOiAiRmllbGRpbmcsIEhlbGVuIgogICAgfSBdLAogICAgImZvcm1lcklkcyIgOiBbIF0sCiAgICAiZGlzY292ZXJ5U3VwcHJlc3MiIDogbnVsbCwKICAgICJob2xkaW5nc1JlY29yZElkIiA6ICJmYjdiNzBmMS1iODk4LTQ5MjQtYTk5MS0wZTRiNjMxMmJiNWYiLAogICAgImJhcmNvZGUiIDogIjQ1Mzk4NzYwNTQzODMiLAogICAgImNvcHlOdW1iZXIiIDogIkNvcHkgMyIsCiAgICAibm90ZXMiIDogWyBdLAogICAgImNpcmN1bGF0aW9uTm90ZXMiIDogWyBdLAogICAgIm51bWJlck9mUGllY2VzIiA6ICIxIiwKICAgICJ0YWdzIiA6IHsKICAgICAgInRhZ0xpc3QiIDogWyBdCiAgICB9LAogICAgInllYXJDYXB0aW9uIiA6IFsgXSwKICAgICJlbGVjdHJvbmljQWNjZXNzIiA6IFsgXSwKICAgICJzdGF0aXN0aWNhbENvZGVJZHMiIDogWyBdLAogICAgInB1cmNoYXNlT3JkZXJMaW5lSWRlbnRpZmllciIgOiBudWxsLAogICAgIm1hdGVyaWFsVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMWE1NGI0MzEtMmU0Zi00NTJkLTljYWUtOWNlZTY2YzlhODkyIiwKICAgICAgIm5hbWUiIDogImJvb2siCiAgICB9LAogICAgInBlcm1hbmVudExvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMjciLAogICAgICAibmFtZSIgOiAiQ2FuIGNpcmN1bGF0ZSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9hblR5cGUiIDogewogICAgICAiaWQiIDogImU4YjMxMWE2LTNiMjEtNDNmMi1hMjY5LWRkOTMxMGNiMmQwZSIsCiAgICAgICJuYW1lIiA6ICJDb3Vyc2UgcmVzZXJ2ZXMiCiAgICB9LAogICAgInRlbXBvcmFyeUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAyMS0wMy0wMVQwMTo0OToyOS43NTcrMDA6MDAiLAogICAgICAidXBkYXRlZERhdGUiIDogIjIwMjEtMDMtMDFUMTc6NTU6MDUuNDI4KzAwOjAwIiwKICAgICAgInVwZGF0ZWRCeVVzZXJJZCIgOiAiZjRiY2RkNjAtYTk0NC01Mzk1LTljM2MtM2E3YThkZDc0Y2RlIgogICAgfSwKICAgICJsaW5rcyIgOiB7CiAgICAgICJzZWxmIiA6ICJodHRwOi8vZm9saW8tc25hcHNob3Qtb2thcGkuZGV2LmZvbGlvLm9yZy9pbnZlbnRvcnkvaXRlbXMvZDZmN2MxYmEtYTIzNy00NjVlLTk0ZWQtZjM3ZTkxYmM2NGJkIgogICAgfSwKICAgICJlZmZlY3RpdmVDYWxsTnVtYmVyQ29tcG9uZW50cyIgOiB7CiAgICAgICJjYWxsTnVtYmVyIiA6ICJQUjYwNTYuSTQ1ODggQjc0OSAyMDE2IiwKICAgICAgInByZWZpeCIgOiBudWxsLAogICAgICAic3VmZml4IiA6IG51bGwsCiAgICAgICJ0eXBlSWQiIDogbnVsbAogICAgfSwKICAgICJlZmZlY3RpdmVTaGVsdmluZ09yZGVyIiA6ICJQUiA0NjA1NiBJNDU4OCBCNzQ5IDQyMDE2IENPUFkgMTMiLAogICAgImVmZmVjdGl2ZUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfQogIH0gXSwKICAidG90YWxSZWNvcmRzIiA6IDEKfQ==", "base64"));
  res.end();

  return __filename;
};
