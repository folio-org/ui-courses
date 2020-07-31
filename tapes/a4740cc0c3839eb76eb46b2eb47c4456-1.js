var path = require("path");

/**
 * GET /item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd
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
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 202 7879us, GET mod-inventory-storage-19.4.0-SNAPSHOT.455 http://10.36.1.15:9168/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 200 1900us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAHSTTWvcMBCG7/kVZq+tgr4/9pZsL4GQhpCeSg4jadQabMtovYEl5L9Xa5t0u219MFgz76OZd8ZvV02zaeOm2TabqJMJzAMBLgyRWiFxEiNJwqBjPmjp4+bzSfCzrJJ2wp5+PIyu4dzFdvixf8KQS7xbUpM33tDEiLfOEum4JOAcIxSl14Jx71Va5CmXHstd3J9035uX+dBDCTnijJJKOGs0VVJYsWgwJQxT+4o76LqHQ++x7HI/5gGHaea81ayaFz7CM+nxqVL09Z1U1ja3RrqGU6Y3Nfd9xh4Ryg7Gqc3DeTEhj8czyq5+Nmshw3z8NT22GHC+ecPWSJ7wj5ZCW8KhgxP84TK2n2A6nBc+QL80f/MKbQe+w99V9jBhaaF7Po64us1ASS8FIxxlIlLxSFyAOtCAqHVwYB1fyhqx9HCy6T7DcEbg3slQB0NSAEdkzSdgBCVUICruqt/cLIS6A2MuUI4XBLReMAaaCM8ZkSJVAteOxOgEo8HzSPFievc5zH6sBCVCckonElisXTDqifUIhJtkGA8BTFhXDrsKKHlow02ovv/lZbuf2jr7XV2hi8XqcYIIE5wvScHqaPxSX4sVlNe+DRHsmYqtkFvhrjVjn047P19fNYcx/k/D+FbYLTPXzMp/aW6P3/anfZ91nkrrde1RcquIclIQS1X9a7SUHJKS2tF58lfvvwAAAP//AwCYZ40svAMAAA==", "base64"));
  res.end();

  return __filename;
};
