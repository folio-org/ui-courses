var path = require("path");

/**
 * GET /inventory/items?limit=20&query=id=("7212ba6a-8dcf-45a1-be9a-ffaa847c4423" or "d6f7c1ba-a237-465e-94ed-f37e91bc64bd")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:26 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/inventory/items.. : 202 6785us, GET mod-inventory-16.1.0-SNAPSHOT.265 http://10.36.1.55:9173/inventory/items.. : 200 72984us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpdGVtcyIgOiBbIHsKICAgICJpZCIgOiAiZDZmN2MxYmEtYTIzNy00NjVlLTk0ZWQtZjM3ZTkxYmM2NGJkIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQnJpZGdldCBKb25lcydzIEJhYnk6IHRoZSBkaWFyaWVzIiwKICAgICJjYWxsTnVtYmVyIiA6ICJQUjYwNTYuSTQ1ODggQjc0OSAyMDE2IiwKICAgICJocmlkIiA6ICJpdGVtMDAwMDAwMDAwMDEwIiwKICAgICJjb250cmlidXRvck5hbWVzIiA6IFsgewogICAgICAibmFtZSIgOiAiRmllbGRpbmcsIEhlbGVuIgogICAgfSBdLAogICAgImZvcm1lcklkcyIgOiBbIF0sCiAgICAiZGlzY292ZXJ5U3VwcHJlc3MiIDogbnVsbCwKICAgICJob2xkaW5nc1JlY29yZElkIiA6ICJmYjdiNzBmMS1iODk4LTQ5MjQtYTk5MS0wZTRiNjMxMmJiNWYiLAogICAgImJhcmNvZGUiIDogIjQ1Mzk4NzYwNTQzODMiLAogICAgImNvcHlOdW1iZXIiIDogIkNvcHkgMyIsCiAgICAibm90ZXMiIDogWyBdLAogICAgImNpcmN1bGF0aW9uTm90ZXMiIDogWyBdLAogICAgIm51bWJlck9mUGllY2VzIiA6ICIxIiwKICAgICJ0YWdzIiA6IHsKICAgICAgInRhZ0xpc3QiIDogWyBdCiAgICB9LAogICAgInllYXJDYXB0aW9uIiA6IFsgXSwKICAgICJlbGVjdHJvbmljQWNjZXNzIiA6IFsgXSwKICAgICJzdGF0aXN0aWNhbENvZGVJZHMiIDogWyBdLAogICAgInB1cmNoYXNlT3JkZXJMaW5lSWRlbnRpZmllciIgOiBudWxsLAogICAgIm1hdGVyaWFsVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMWE1NGI0MzEtMmU0Zi00NTJkLTljYWUtOWNlZTY2YzlhODkyIiwKICAgICAgIm5hbWUiIDogImJvb2siCiAgICB9LAogICAgInBlcm1hbmVudExvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMjciLAogICAgICAibmFtZSIgOiAiQ2FuIGNpcmN1bGF0ZSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9hblR5cGUiIDogewogICAgICAiaWQiIDogImU4YjMxMWE2LTNiMjEtNDNmMi1hMjY5LWRkOTMxMGNiMmQwZSIsCiAgICAgICJuYW1lIiA6ICJDb3Vyc2UgcmVzZXJ2ZXMiCiAgICB9LAogICAgInRlbXBvcmFyeUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAyMC0wNy0yMlQwMzo0MTo0MC44MTArMDAwMCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAyMC0wNy0yMlQxMzozOToyMi44NTMrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogIjk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIKICAgIH0sCiAgICAibGlua3MiIDogewogICAgICAic2VsZiIgOiAiaHR0cDovL2ZvbGlvLXNuYXBzaG90LW9rYXBpLmF3cy5pbmRleGRhdGEuY29tL2ludmVudG9yeS9pdGVtcy9kNmY3YzFiYS1hMjM3LTQ2NWUtOTRlZC1mMzdlOTFiYzY0YmQiCiAgICB9LAogICAgImVmZmVjdGl2ZUNhbGxOdW1iZXJDb21wb25lbnRzIiA6IHsKICAgICAgImNhbGxOdW1iZXIiIDogIlBSNjA1Ni5JNDU4OCBCNzQ5IDIwMTYiLAogICAgICAicHJlZml4IiA6IG51bGwsCiAgICAgICJzdWZmaXgiIDogbnVsbCwKICAgICAgInR5cGVJZCIgOiBudWxsCiAgICB9LAogICAgImVmZmVjdGl2ZUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfQogIH0sIHsKICAgICJpZCIgOiAiNzIxMmJhNmEtOGRjZi00NWExLWJlOWEtZmZhYTg0N2M0NDIzIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQSBzZW1hbnRpYyB3ZWIgcHJpbWVyIiwKICAgICJjYWxsTnVtYmVyIiA6ICJUSzUxMDUuODg4MTUgLiBBNTggMjAwNCBGVCBNRUFERSIsCiAgICAiaHJpZCIgOiAiaXRlbTAwMDAwMDAwMDAxNCIsCiAgICAiY29udHJpYnV0b3JOYW1lcyIgOiBbIHsKICAgICAgIm5hbWUiIDogIkFudG9uaW91LCBHcmlnb3JpcyIKICAgIH0sIHsKICAgICAgIm5hbWUiIDogIlZhbiBIYXJtZWxlbiwgRnJhbmsiCiAgICB9IF0sCiAgICAiZm9ybWVySWRzIiA6IFsgXSwKICAgICJkaXNjb3ZlcnlTdXBwcmVzcyIgOiBudWxsLAogICAgImhvbGRpbmdzUmVjb3JkSWQiIDogImUzZmY2MTMzLWI5YTItNGQ0Yy1hMWM5LWRjMTg2N2Q0ZGYxOSIsCiAgICAiYmFyY29kZSIgOiAiMTAxMDEiLAogICAgIml0ZW1MZXZlbENhbGxOdW1iZXIiIDogIlRLNTEwNS44ODgxNSAuIEE1OCAyMDA0IEZUIE1FQURFIiwKICAgICJlbnVtZXJhdGlvbiIgOiAiIiwKICAgICJjaHJvbm9sb2d5IiA6ICIiLAogICAgImNvcHlOdW1iZXIiIDogIkNvcHkgMiIsCiAgICAibm90ZXMiIDogWyBdLAogICAgImNpcmN1bGF0aW9uTm90ZXMiIDogWyBdLAogICAgInRhZ3MiIDogewogICAgICAidGFnTGlzdCIgOiBbIF0KICAgIH0sCiAgICAieWVhckNhcHRpb24iIDogWyBdLAogICAgImVsZWN0cm9uaWNBY2Nlc3MiIDogWyB7CiAgICAgICJ1cmkiIDogImh0dHA6Ly93d3cubG9jLmdvdi9jYXRkaXIvdG9jL2VjaXAwNzE4LzIwMDcwMjA0MjkuaHRtbCIsCiAgICAgICJsaW5rVGV4dCIgOiAiTGlua3MgYXZhaWxhYmxlIiwKICAgICAgIm1hdGVyaWFsc1NwZWNpZmljYXRpb24iIDogIlRhYmxlIG9mIGNvbnRlbnRzIiwKICAgICAgInB1YmxpY05vdGUiIDogIlRhYmxlIG9mIGNvbnRlbnRzIG9ubHkiLAogICAgICAicmVsYXRpb25zaGlwSWQiIDogIjNiNDMwNTkyLTJlMDktNGI0OC05YTBjLTA2MzZkNjZiOWZiMyIKICAgIH0gXSwKICAgICJzdGF0aXN0aWNhbENvZGVJZHMiIDogWyAiYjU5NjhjOWUtY2RkYy00NTc2LTk5ZTMtOGU2MGFlZDhiMGRkIiBdLAogICAgInB1cmNoYXNlT3JkZXJMaW5lSWRlbnRpZmllciIgOiBudWxsLAogICAgIm1hdGVyaWFsVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMWE1NGI0MzEtMmU0Zi00NTJkLTljYWUtOWNlZTY2YzlhODkyIiwKICAgICAgIm5hbWUiIDogImJvb2siCiAgICB9LAogICAgInBlcm1hbmVudExvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMjciLAogICAgICAibmFtZSIgOiAiQ2FuIGNpcmN1bGF0ZSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9hblR5cGUiIDogewogICAgICAiaWQiIDogIjJlNDhlNzEzLTE3ZjMtNGMxMy1hOWY4LTIzODQ1YmIyMTBhNCIsCiAgICAgICJuYW1lIiA6ICJSZWFkaW5nIHJvb20iCiAgICB9LAogICAgInBlcm1hbmVudExvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfSwKICAgICJ0ZW1wb3JhcnlMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0sCiAgICAibWV0YWRhdGEiIDogewogICAgICAiY3JlYXRlZERhdGUiIDogIjIwMjAtMDctMjJUMDM6NDE6NDAuODY0KzAwMDAiLAogICAgICAidXBkYXRlZERhdGUiIDogIjIwMjAtMDctMjJUMTM6Mzk6MjQuMzc1KzAwMDAiLAogICAgICAidXBkYXRlZEJ5VXNlcklkIiA6ICI5NWZjNDUwYi0yMGIyLTUwZDctYTNkYy04YmIzNDRhZmU5NTMiCiAgICB9LAogICAgImxpbmtzIiA6IHsKICAgICAgInNlbGYiIDogImh0dHA6Ly9mb2xpby1zbmFwc2hvdC1va2FwaS5hd3MuaW5kZXhkYXRhLmNvbS9pbnZlbnRvcnkvaXRlbXMvNzIxMmJhNmEtOGRjZi00NWExLWJlOWEtZmZhYTg0N2M0NDIzIgogICAgfSwKICAgICJlZmZlY3RpdmVDYWxsTnVtYmVyQ29tcG9uZW50cyIgOiB7CiAgICAgICJjYWxsTnVtYmVyIiA6ICJUSzUxMDUuODg4MTUgLiBBNTggMjAwNCBGVCBNRUFERSIsCiAgICAgICJwcmVmaXgiIDogbnVsbCwKICAgICAgInN1ZmZpeCIgOiBudWxsLAogICAgICAidHlwZUlkIiA6ICI1MTIxNzNhNy1iZDA5LTQ5MGUtYjc3My0xN2Q4M2YyYjYzZmUiCiAgICB9LAogICAgImVmZmVjdGl2ZUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfQogIH0gXSwKICAidG90YWxSZWNvcmRzIiA6IDIKfQ==", "base64"));
  res.end();

  return __filename;
};