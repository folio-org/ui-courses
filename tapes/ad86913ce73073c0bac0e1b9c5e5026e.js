var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 03:59:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.251:9178/coursereserves/copyrightstatuses.. : 202 6886us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.251:9157/coursereserves/copyrightstatuses.. : 200 7480us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTW/cIBCG7/kVyNeGCJsPD3tLt+coanqLehg+3KD6Y4XZSKto/3uxN5tKSa1W7nIYCYZ3BA/v8HJFSGGH3SGGH0/pIWHaj34syIY8kpecy9ngpmnBUGpw1tKK1w0VrhYUhBBUo5UIjXYCobg+SXrs/Czabsnnw3nV+dHGsEth6E/J6DGFZ0+2Q9cN/UgwpRjMftpA2mB9P/qztvMJHSachKdzTeeeCnj3JYe5YMUqRllNGf/G+IbDpipvmKo+sTxeC2XVfuf+XTWLjjker9/xaIyCRmpDtWCeCqGQguYuB6a0K6UBxj/wuN+bfDHihg5Dv8TlbiBvL5KZEGzb/8cA5RoMZ9UyBgPGG8EaqhuTMTiZbWGNosyViqla6ArNn21B77b04XaVOfqhpzav+2gDtmR8wugptuGnv5xvAFYBg78BwxKkErahYIBn37jcQlYCNbXmTem4q6VYBHYJWhcjpNUaQmfVMiEmZFXymlEAlS1Vuvy2k7lk/meMbnwNFX4gdNu2ZO6YkUQ/+vjs3RKse0wxY+nwkNGkudcu1WYl4yuYvKl+MyHfpwpFGhK2X70dops/ZXl1/AUAAP//AwCXKAE5sgUAAA==", "base64"));
  res.end();

  return __filename;
};
