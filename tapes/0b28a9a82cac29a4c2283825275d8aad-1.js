var path = require("path");

/**
 * POST /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 143
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:44 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves : 202 12839us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves : 201 106290us");
  res.setHeader("location", "2cf27d2f-27df-4b20-a25e-eb7680f6b01a");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJRUy27bMBC85ysIX3poGPD98C1uUSRtkAZFeiiKHvhYJkJlSaBkFEaQfy8lS46TW3QQBHJnZ3Z2V09nCK2quEJrtGIhMR1ZwuWdsPCMYMckYPBaGZKUJ9StzkdAaHe5h5uqH6rm4fqAVsxasMpiG4TAwimHTeAJS0IJ104ZH9MBXQ2wnUFRJR2od4WIayxUYbMCIk5cg6U+KOHjQtlVEK8LdAQ+laNy6F0ObYQplZDcGq2IFNzwCVMCSnjXZpf3N21wQ9U2M28KUYkAFCtrJRYmEWwEAWxsSo4xY7imS44O8tY10AxvckgekpUq4UBHuyjx2Hhwxb2kKQvB6UCOOqqhPsjc5Co+wIC+tg30H3q0cX6/RsMjoFi5XEG/QELbDLnyu6HN/Yj8PRddrhq3PST7UkEdSwvO0RXU0MzQ1+DbEny/72BWzbwVQXGKU3C2VG4ZdpoTTDiAZKV8YG41pXlGfxYHdr6uDrW/UTLd9I+Qp9yXdcoQ0eUF+ta0XXqR09UuHBTfwj/0q81/X+6iG+B7untNsWKEqrcygqvr293Wz2x3P0qz1cW1kMagjRYWTaCjfd1+CvtUPtBxIKqmH1wTFjd08lFGI7BikWJRnBnHV2IVPNXcWuPn+TuBXuV5X8YD8vIcqR/bqSn9Mmtee00Sxd5Yg4VlAjtrKSYgfGkE816msdTnac5PJtY1J30D4zmlTmHuWVHKU+kbK9sWo+WUBM8igcOmbGFwxVR3sichQ3E5fi6v2d2SgzBM2T3Va8nWQlxoKz4SsibHmZ1Bm/3PHvLily6LSWXEmniFZZTlF8HLkieho7c0MRr0gt918f2kM+j9pKOBZ8//AQAA//8DAHzG9gDPBAAA", "base64"));
  res.end();

  return __filename;
};
