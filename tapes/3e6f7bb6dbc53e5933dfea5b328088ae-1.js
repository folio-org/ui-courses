var path = require("path");

/**
 * POST /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 143
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves : 202 6419us, POST mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/reserves : 201 70610us");
  res.setHeader("location", "2c93ff11-984e-49a7-960f-a1332755d9a9");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJRUTU/bQBC98yusXHoog/b7IzfSqoIWUVTRQ1X1MLs7C1YTO7IdVRHiv3cTOyFwwwfL2p038+a9GT+dVdWsTrNqXs1E9DJnzsE7RaA8WvCGZUAupbBaJ49+dr4DxHbT9XRT90PdPFyPaM1iltklEMgYqCAMhMwS5BADRxedSHJE1wOtJlAy2UYeEFBIC8poAq+ogKQlz0M0KqRDyXVN6bpAd8CnclQOA3axTbRPpbT0zhqmlXRjoRJQwtdth932po041G0z1c0xGRWJg/Feg3KZgVOMwPmcUQjnpOWHHGvqVthQM7zJoWXMXpsMkacMirMALhCCsNlyESPayI486mE50lx0dXqgofraNtR/6KsFhu28Gh6pSjV2NfUHSGyboavDZmi7fof8PTVdrhpcjcm+1LRMxYLz6oqW1EzQ1+DbEny/XdPEWgSvopEcckRfOvcC0EoGTBJpUdongbN9mufqz0GBTVjWY+9vmOxv+kfq9rkvl7mjVF1eVN+adp1f6KyXGEfGt/Sv+tV2f1/uEg70Pd+9LjETjJu3NCIul7ebVZiq3f0oZpuLa6WdqxZW+WoPOsq33u7DPpWP6jgQddMP2MSDGjaHpJNTYETioIoy4KPSYMrMWum9C9P8nUCvumlfdgfs5TmWfmz3pvSHWQs2WJY5BOddWSuhAL3nwEiFYoQIQeddq8/7OT+ZWGxOfCMXJOdoQAZRmMpcfBPGQ0pechaDSIzGTVnRgEVUPNmT2FFROX0ur0ldURy3INQ9N3Nt50JceK4/7to4CjhiFtufPXWHdUXpy4JlsLH8IbRBgoAyQi5OsMiRsAzPhN+s07trTpj319zJd/b8HwAA//8DACrscrDNBAAA", "base64"));
  res.end();

  return __filename;
};
