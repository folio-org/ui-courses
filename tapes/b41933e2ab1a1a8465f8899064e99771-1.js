var path = require("path");

/**
 * GET /coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e
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
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e : 202 12895us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/abd88c4d-8de9-46b8-8291-0ccf916fb89e : 200 16099us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTy27bMBBF9/kKQdt2GpKiKDK7PDZGm7ZAk1WRBR/DgoUtCRQdxAjy76VsSTUMBHC00EKXZ2bu8Or1oijK4Mriqii1cVJa7kA6VMCFkSCZokCs9YoKb6TC8vMIRPwThhR1XB3IeH1DCT1o+JIwtno9SS9H0rqzOoWunSRvneAWKQilauDSE5CcIEjlvWZMyqo5AX+Yv2jTCL/mz/8nP7tSRlq9wT10r0NbfAsm29jNou3cQfz6eHl7e3m3uryfpTBc2xSe93KKW5w/t0MKaXtkKzdGQqwGXVMJ3HAFBkleo6ikI5prWzdLP73pt8MECmZ9I0wD1urswlUVKEYbQOc5y+605HIG14e5J7J2jZSkQrCa8LFlbo4agVlRGcV4HsTMZB/DJpO/MD4Hiz+70O4XWlaaE1kzB1z5/HKegaZegUAmONUCFfVzjeEIXrlh5H+fWaF4yiXe9reac7KZo6AaypjiwEjVAOe+AUmEAEaFRlUTy4QtF+jdGJxb5TgGDzG0Ie0KRhhZ/CUd051OhxOjAnmvTMw6tu5EzU1IuTiz3TYO+LDrcfKnaM0JlwYqoXImGNqcjhwR6y0aTzgSxcsT9D2XZ9c6drlqix7j0LWz4nCwMfRjbvcHvndF165Di4XtNn3XYo7F4mcMedza1MXDUNONP+3FDSbtdNJHk9qIeT2nO2qgog+UXVXNVU2+MCo/kfwsv8KBudk95nRNazOjT4E6u5Q11IpX+UJrCkZwzrSvuVALv+3dh3tOzMd7jpu5ePsHAAD//w==", "base64"));
  res.write(new Buffer("AwB6Yz1cPQUAAA==", "base64"));
  res.end();

  return __filename;
};
