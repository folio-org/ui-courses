var path = require("path");

/**
 * GET /inventory/items?limit=20&query=id=("9ea1fd0b-0259-4edb-95a3-eb2f9a063e20")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:36 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/inventory/items.. : 202 6390us, GET mod-inventory-16.1.0-SNAPSHOT.266 http://10.36.1.43:9173/inventory/items.. : 200 72188us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpdGVtcyIgOiBbIHsKICAgICJpZCIgOiAiOWVhMWZkMGItMDI1OS00ZWRiLTk1YTMtZWIyZjlhMDYzZTIwIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQSBzZW1hbnRpYyB3ZWIgcHJpbWVyIiwKICAgICJjYWxsTnVtYmVyIiA6ICJUSzUxMDUuODg4MTUgLiBBNTggMjAwNCBGVCBNRUFERSIsCiAgICAiaHJpZCIgOiAiaXRlbTAwMDAwMDAwMDAwNiIsCiAgICAiY29udHJpYnV0b3JOYW1lcyIgOiBbIHsKICAgICAgIm5hbWUiIDogIkFudG9uaW91LCBHcmlnb3JpcyIKICAgIH0sIHsKICAgICAgIm5hbWUiIDogIlZhbiBIYXJtZWxlbiwgRnJhbmsiCiAgICB9IF0sCiAgICAiZm9ybWVySWRzIiA6IFsgIjM4MDYyNjciIF0sCiAgICAiZGlzY292ZXJ5U3VwcHJlc3MiIDogbnVsbCwKICAgICJob2xkaW5nc1JlY29yZElkIiA6ICJlM2ZmNjEzMy1iOWEyLTRkNGMtYTFjOS1kYzE4NjdkNGRmMTkiLAogICAgImJhcmNvZGUiIDogIkExNDgzNzMzNDMwNiIsCiAgICAiZW51bWVyYXRpb24iIDogInYuNzA6bm8uMS02IiwKICAgICJjaHJvbm9sb2d5IiA6ICIxOTg0Okphbi4tSnVuZSIsCiAgICAiY29weU51bWJlciIgOiAiMSIsCiAgICAibm90ZXMiIDogWyBdLAogICAgImNpcmN1bGF0aW9uTm90ZXMiIDogWyBdLAogICAgInRhZ3MiIDogewogICAgICAidGFnTGlzdCIgOiBbIF0KICAgIH0sCiAgICAieWVhckNhcHRpb24iIDogWyBdLAogICAgImVsZWN0cm9uaWNBY2Nlc3MiIDogWyBdLAogICAgInN0YXRpc3RpY2FsQ29kZUlkcyIgOiBbICI3NzViNmFkNC05YzM1LTRkMjktYmY3OC04Nzc1YTliNDIyMjYiIF0sCiAgICAicHVyY2hhc2VPcmRlckxpbmVJZGVudGlmaWVyIiA6IG51bGwsCiAgICAibWF0ZXJpYWxUeXBlIiA6IHsKICAgICAgImlkIiA6ICJkOWFjYWQyZi0yYWFjLTRiNDgtOTA5Ny1lNmFiODU5MDZiMjUiLAogICAgICAibmFtZSIgOiAidGV4dCIKICAgIH0sCiAgICAicGVybWFuZW50TG9hblR5cGUiIDogewogICAgICAiaWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyNyIsCiAgICAgICJuYW1lIiA6ICJDYW4gY2lyY3VsYXRlIgogICAgfSwKICAgICJ0ZW1wb3JhcnlMb2FuVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMmU0OGU3MTMtMTdmMy00YzEzLWE5ZjgtMjM4NDViYjIxMGE0IiwKICAgICAgIm5hbWUiIDogIlJlYWRpbmcgcm9vbSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9jYXRpb24iIDogewogICAgICAiaWQiIDogIjc1ODI1OGJjLWVjYzEtNDFiOC1hYmNhLWY3YjYxMDgyMmZmZCIsCiAgICAgICJuYW1lIiA6ICJPUldJRyBFVEhOTyBDRCIKICAgIH0sCiAgICAibWV0YWRhdGEiIDogewogICAgICAiY3JlYXRlZERhdGUiIDogIjIwMjAtMDctMjRUMDM6Mzk6MTUuNDQxKzAwMDAiLAogICAgICAidXBkYXRlZERhdGUiIDogIjIwMjAtMDctMjRUMTY6NTc6MzIuNzg3KzAwMDAiLAogICAgICAidXBkYXRlZEJ5VXNlcklkIiA6ICJkYTM5MDU0Zi03YzRlLTU2YWUtYmEzYy1mNjA1MGMxYWVhMmEiCiAgICB9LAogICAgImxpbmtzIiA6IHsKICAgICAgInNlbGYiIDogImh0dHA6Ly9mb2xpby1zbmFwc2hvdC1va2FwaS5hd3MuaW5kZXhkYXRhLmNvbS9pbnZlbnRvcnkvaXRlbXMvOWVhMWZkMGItMDI1OS00ZWRiLTk1YTMtZWIyZjlhMDYzZTIwIgogICAgfSwKICAgICJlZmZlY3RpdmVDYWxsTnVtYmVyQ29tcG9uZW50cyIgOiB7CiAgICAgICJjYWxsTnVtYmVyIiA6ICJUSzUxMDUuODg4MTUgLiBBNTggMjAwNCBGVCBNRUFERSIsCiAgICAgICJwcmVmaXgiIDogbnVsbCwKICAgICAgInN1ZmZpeCIgOiBudWxsLAogICAgICAidHlwZUlkIiA6ICI1MTIxNzNhNy1iZDA5LTQ5MGUtYjc3My0xN2Q4M2YyYjYzZmUiCiAgICB9LAogICAgImVmZmVjdGl2ZUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICI3NTgyNThiYy1lY2MxLTQxYjgtYWJjYS1mN2I2MTA4MjJmZmQiLAogICAgICAibmFtZSIgOiAiT1JXSUcgRVRITk8gQ0QiCiAgICB9CiAgfSBdLAogICJ0b3RhbFJlY29yZHMiIDogMQp9", "base64"));
  res.end();

  return __filename;
};
