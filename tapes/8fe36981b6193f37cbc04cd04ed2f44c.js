var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImEwOWE4M2FkLTNkMmYtNWI5Yi04OTk0LWQ4NzRmMTQ1NDY5NSIsImlhdCI6MTU5Mzc0ODc5MywidGVuYW50IjoiZGlrdSJ9.Moy02GDjk7IIJQTOGxN5PoSKLTfDwf9Xt5ae_TWLBpE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 03:59:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.251:9178/coursereserves/terms.. : 202 7038us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.251:9157/coursereserves/terms.. : 200 6902us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTPW/DIBCG9/wK5LW5iDswmMwdunSpslUdDoNVS3FSOXSoovz3YqdRK6dRP8KAxL08fDyC/UyIIsW+2xViKR7FPo9zpQ3DsGAuHYemARfJg7YqQJUL4MmX0nhtS6ZifkQ23MURumvX3L8JkiRP2S5xn245HScMCUgEdKc8bsIkVYD6lHYxceDEQ3w8Xy7WfczEFLOZXEm1VNWS5MKp6kbm9rFQpl5fwu+pETrk/jCfeGmcRSKngaSyoHVjoZLGAKHh6EpZk6nPvKz6dtOmn8XkVc1lMXkTeaUYXEhJfxbzhbospg4YvY0ByOZ7aG8Y3KAo2Aa5VCU2xp+JuW/rZ47rjnfZzeejmLpBBygB1fduhpTyia93g/9yg2duxNN8/FzbxOuHWG/7MP4xNTu8AwAA//8=", "base64"));
  res.write(new Buffer("AwDkmtXtdQMAAA==", "base64"));
  res.end();

  return __filename;
};
