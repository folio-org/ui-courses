var path = require("path");

/**
 * GET /coursereserves/courses?query=courseListingId=="6299e969-9c44-4a6a-8c3f-501037a68bdf"
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses.. : 200 6867us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/bOBC991cIum6ZkBRFkb6l7R6MbbOLNj0tehiRo0RdWTIoKahR5L/vWJIdxXaKGOnFH5p5j/OGw0f9fBNFsWv60GIbR4vo3+gnPaFnpd/+jY1LC55AxrzhBVMGFQOjHXOZsZnLtU60it+OkBpWOICuIPh7CP9Fd32bQ+3DZpfisXWhXHdlUw+ZN3cYOQgYUVZUIPqyvo2aIur6vK9Kj3UHHRW2R68hdCt6uhyrE6nWRgnHUuGQKa8cA+CWcQQpcs4tV3AM/jv/jq7bEoxaH9WewTfX+ycR30VfXIm121d7Qu2ydlU/SLzFpmpuN2+jNXZh+Dl0YA0VYFN3w5NHnhV24KGDecnbbQtI3fEf6GOgl1wKxiUT8oYnC8kXMrvQJv2D8wXnezYC9mv/HFBkC6kXqbjgiX4W+G7ztcUw7UGWJRmK1LOM55qlPuUMkqRghcp8bkUhhcviieJh+H6YdmQcu49l21FLJjYtrUWrLbNOKaZAAzOO2FIueJKBNrkv4lP45zf1DEoCBbwlwgA7ee3VO8HFYxx/dBhqqKbwj4Nw1TjY7vcULpzXyqFg2tqUjk/BmVEcmbFFAVIak2QnwMdaHtWcxTgf0k9Q1tHHMidpm3mCa/yY8NfXy/fvLz8sLz/Nw2V75bryfkjpQo/zUE2d7/qZXCoEOXfAIBWGqVxZliOn2dKJ8RwUuDR7sjas1n2733pXZDrPmHNAynySMCtFxtAXSpJiMMrMwdWoZUKnPjOGJ8gccLVdmopAQCadTnIrFRWUz9HrUK4I/QXDfenwn6ash4bHCShuUumZsgV9+EIyEIVlGqVWAjTSSM952hnB0k8e+jKW6NvuWOwngGZrtRsdmwkprWKSppQpVWTMcK2ZFBrQptxJ7eInwF+OzTls87G5CWVddpuIPOKJFbQdmd7cQTijvks9z8HaH2TQgjw+Uj0e5JvNGiftVqSKK5OzRFuaI4nkwymNlSsc5gVXyK2KT8B/1YGzOOcdWNbk0qElD59FD639uomauiprus6a1bqp6Zo51rk9MKF3XRPGQqdp+fYKoye/TuUiERepNsd+PQHP9+sXXxZpsuDyQtrnb5nfellc96scw/iSMTNeOoVuuxXX+zeQCtd3u+Cprr6opyaxB7Je39EX9ZNO5uHCr+vmtpcP46DFXdNB9RldE0a7Em8e/gcAAP//AwBE7tWMBgoAAA==", "base64"));
  res.end();

  return __filename;
};
