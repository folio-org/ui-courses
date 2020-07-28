var path = require("path");

/**
 * GET /coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 202 15193us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 200 12692us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWTW/jNhC9768QfO3S4Zco0rckWxTBfrRAsqdiD0NylKi1JYOW0w0W+e8dyXKsOM7WaVq0PggGh+9x3sxwht/eZNmkipNslk204NIW3jIuwTPtlWCOY86Au9IiL1T0avK2A9SwwB5yCineQvo98wkxVvX1xh5xFVK1bKum7rdd3WAWIGEGdczKzc6sKbN27dfzKmLdQourLXYJqV3Q2sXGLZEbY7UILBcBmY46MCCXGEeQwnPuuIZ96M/+NwxtB/9Ghp3Eo7nGIn8k0pvsMlRYh8HLAxov6jBf98KusZk313dvsyW2qf/b617CHLCp235ly7LAFiK0sHOVFkNCikd8R5+eWnLJGS+YtFdczVQ+U3qqcv4Dp99ARKj1Mj6HEmKWi5k2U27FYdTZ3ecVpiHiqLwNpsiZDwVnuQfLLFeeeV96gMijBzfpCe7pe9/HPjTrtMIP1aqlEAw8xgQMFjVzgIbpQjpmhXBMlUoL5GiKMBTUI/RzyTuajiAJr4kswVZSOj0TXGyt+LU=", "base64"));
  res.write(new Buffer("xVTDfDB+fWScNwG6rA7GMkSjAwpmnMuZtiVnVnNk1pUlSGmtKp5A9xXsNLyAbVyCH6Gqsw+VJ0F3O3No4sb8/vPJ+fnJu4uTjztjtToNbXXbb2jTGneGmqLcrkcSyQHkPACDXFi6+Noxj1wwbpSNHDSEvBidCovlerVNsQxlYXzBQgDSE5ViToqCYSy1JJ1gtd1B5xsFAzaPhaW6QhaA6+5YcgABmQxGeSc1OeN32GWqFoS9xHRbBfylqeo+wBMFmttcRqZdSZ9YSgaidMygNFqAQSfKHctqBL+Iq47h1yM5si+bkh9yTRW02JaIK4SUTjPJVcG0Lgu6L8YwKQygy3mQJkxGsO+Ux/FM4/K4SlVdtXdZd+VHWltqXHvtgJjNbgfW++2CjuKTRzo3V/PqbomDWidyzbX1TBlH1SKRemhOxRPKgL7kGrnTkyfg5zW/gG+s+aKm/ppW1H0fbPst+VOTNfW8qmn4NItlU9NgeKytuwppHdombdwb6mHfQ9AhhCioKCKlRlNx0mDMgaF0npdCBq7KAx7+NM3eT7PzG1xR0tuxox7Sw901hXV8fKdf0UefHSnfHyrdeMhn3E2F3hsqO9zLB8SI4y9G07Nnv244bcZTl+0nGc2l1nmhgEgiRVQX1HqAmIwGQy3AcDD+UEaxSdeYnXXDI8Xs8gb+OJxUofLC/S+S2s18998kVciplvLfSmr25W8+oYbA8Kkye869PixHVPqhc//ZR9in9cJj2rzPHx42NPlC1xg/PTzd57i82ZieRvCI+Imp5PlYx2ujd0Tsnp75msjdv7n/EwAA//8DAFbcLzn/DAAA", "base64"));
  res.end();

  return __filename;
};
