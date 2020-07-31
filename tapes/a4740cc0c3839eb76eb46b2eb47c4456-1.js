var path = require("path");

/**
 * GET /item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
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

  res.setHeader("date", "Fri, 31 Jul 2020 15:41:02 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 202 10223us, GET mod-inventory-storage-19.4.0-SNAPSHOT.455 http://10.36.1.15:9168/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 200 1712us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAHSTTW/bMAyG7/0VRq6bCn1QkpVbm10KFF1RdKehB0qiNgP+guIUCIr+9ym20WXZ5oMBi3wfkS/pt6uq2jRxU22rTTTJBuGRoVSWgdHEHFBkSVlywgcDPm4+nwQ/8yppJur4xyP4Gh7a2PQ/9k8UhhzvltTkrbc8CeZrVzNwEhg6Jxgn8EYJ6b1OizwNuaN8F/cn3ffqZT70mMMQaUaBVq62hmtQtVo0lBKFqXmlHbbtw6HzlHdDNw499dPMeStZJS98hGfS41OhmOs70HVd3VpwleTCbEru+4w9EuYdjlMz9OfFhGE8nlF25bNaC+nn46/psaFA880bsUaGif5oKTQ5HFo8wR8uY/sJp8N54T12S/M3r9i06Fv6XWWHE+UG2+fjSKvbAjV4UIJJgsRAy8hcwDLQQGRMcFg7uZQ1Uu7wZNP9gP0ZQXoHoQyGpYCOQclnaBVnXBFp6Yrf0i6EsgPjkDEfLwhUeyUEGqa8FAxUKgRpHIvRKcGDl5HTxfTuhzD7sRK0Cslpk1gQsXQhuGe1J2TSJitkCGjDunLUFkAe+ibchOL7X142+6kps9+VFbpYrI4mjDjh+ZJkKo7GL+W1WMFl6dsyJZ652irYKndthPh02vn5+qI5jPF/GqG3wLfCXStw/9LcHr/tT/s+6zyH2pvSI8haM+1AsZrr8tcYAIlJg3F8nvzV+y8AAAD//wMA5oWxpbwDAAA=", "base64"));
  res.end();

  return __filename;
};
