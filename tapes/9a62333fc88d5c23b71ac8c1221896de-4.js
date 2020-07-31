var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:39:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/departments.. : 202 6850us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/departments.. : 200 5385us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUP2/bMBDF93wKQmtMg3+OCqnNRYsiQ5Y2nYoOJ/JkC5ApQaIHI/B3Dy0nSFsnQdIC0UCIx3uP4vsRurtgrAg04Ji2FNNUsIr9ZHe5muttOE4L7ax3wRE3hMTBAXKUTeBKS9d4UVvt6mJxkkTc0ixarVbsK/Vdv94/rgWa/NgOqe3j3HK7ITalXdizvmEpT4YOI6XH9i0lDJjw2Hv6oFz0I2Gi8DkPs4cSSnBxxbW8larSroKrpVH2UuTnwehJ9Wn/Y6Lx+nSqWoCtS0IOyhpuHGhuhZG8LgEUNgZK95vDbgj/sO+D6v37zgaHPB4Wf8GQpiwtSM+N9BlGAM8RheOCUMlaCCcAz2B8yXg37LtvKXqaXuJxHX23C21cs/UJ3IINlMb5lWEMbMAOqY/pD6rvxSR0pU0FZqkdPB/XKyHDUgvxASE33kmpgPugskeTr71DAg5ClzZY4awKZyHfYL7DW0ytf0PCdZ+BDLuR5mBxGLqWAsvqzfT/wVr59mDPVU+xsF9HhyL1Cbtv5PsxzP8HfXG4BwAA//8DALSZKwU3BAAA", "base64"));
  res.end();

  return __filename;
};
