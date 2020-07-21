var path = require("path");

/**
 * GET /coursereserves/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef/edit?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:31:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef : 202 6262us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef : 200 13849us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVTW/bOBC991cIvm6ZkBRFkb6lHwdj22yBuqeihxE5TLS1JYGSghpF/nvHkhw5Trpwtj4QBofvcd5o5vHnqyRZlH6RLJNFKoxBYTOmjNNM5SAYFNYy7rUMhREmx7B4vQdUsMUBcgXR30H8ntz2bQGVj7vxgMfWxbLpyroazq1vMXEQMaEzSUD0ZXWT1CHp+qLflB6rDjpsD9gGYrelvdWYl8i0Nko4lgmHTHnlGACnvBCkKDi3XMEp9J/iX3TdHv6TArPGs7mOVb4n0tvksyuxclOWz2hcVW7TD8JusN7UN7vXSYNdHP4OuhvYANZVN+wcWLbYgYcO5lRp00Wkevh3tAzUkkvOeM4kXwu+TPUyVRci139x+k1EhOobfz5qAN3Tej9UztV9bPFD2XYkYKq7DD63qnCsSDUwVaSGWWcUEwqNNlkwecDFU/TvSn82HUEi3hBZhDil0l69EVwcovijw1jBZgr+eBTc1A7232QKBue1ciiYtkNnB86M4siMDQGkNCbNn0BPFcwaXsB23EAfoaySD2VBgnZz2NV+DP/95fLt28t3q8uPc7Bsr1xX3g0HutjjHKioyl1/JJESQM4dMMiEocIqywrkgnGdGs9Bgcvyo1th2/TtBNXShVwXOXMOSI9PU2alyBn6oCTpBKPMDN2MCiZs5nNjeIrMAVf7aykBBGTS6bSwUlEyxYxtYrkl7GeMd6XDT3VZdaPpgOImk54pG2jxQTIQwTKNUisBGq0IM0t7BF/5ds/w9UyO5NvY8tO3pg7aHlrE5kJKq2hQ0pwpFXJmuNZMCg1oM+6kdosj2H+0x/lMx+2xjmVVdrtkP7BHWjuynZNhJmY9n8DqdNjpqsNoTwmPo7neNTiptSJTXJmCpdpSt0gkB8yoeVxwWASukFu1eAL+veYX8B1rXlXkjrEl73yInRrqdZ3U1aas6Omot01dka0/1rYfhdi7ro5jelM/fPtf1irWnEySLzN9wVN5Yq0T6s3uC3XgYexQeZdLxTJwkmUBcup/RWQZPTJKFs4U6RnmPN4rllySOafPW/rL733W3q/7bYFxfLgfLJNmyu1Lfv3wpm+wuR1DTyt4Vv1y/ehp+tPqnVE7cUFG9ejOP6nc/av7XwAAAP//AwCm/hM5GAkAAA==", "base64"));
  res.end();

  return __filename;
};
