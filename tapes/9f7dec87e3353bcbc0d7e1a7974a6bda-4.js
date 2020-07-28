var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:52:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/copyrightstatuses.. : 202 7090us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/copyrightstatuses.. : 200 3837us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyVsW7bMBCG9zwF4bW5gJJIifTmuB26BEHTTkWHI3myhciiQdEGjCDvXspOaiCO0MYwquEAifx/it/dkU9XjE2sX+9Cs1jGh4hx01M/YVP2kz2lsTTauOF1UnOJ3BoLRAZBkLOAea7BOcRKcSyN1JPrg6TDFe1Fs9mMfWl72jYUWNtY6np6neSot6FZx8Z3h7k2Nltqd8y03j423YLFJbF18ItAfc98zXq79C2GftmsX01WFNFhxMHh8L/DfgJhJPc5hb1zznMOvIJcfc+yqcynOb9RufjE0/NidFTd7n70FL4eNk2FUbasJBhbcZAGFSheGDCmNoiOO4P66LBZuzPWfVF9fN29wXOKz9dvcsWFzLMiKZUqCUTmCLA2BFKiMrqmSuV4mqu2Zfsq6FkCTmFLbixV9xiD79gKd6zzkQ31wzAybNtz88KLaSGnhbjJtX6fzzjVrLzhhfwPVFFq5ayFvKhqEK4SoIQQoNEmrrV2AtUJ1fmc3e7GOM4HIKno2dyvVr7rE8QYGrMZJrxtl/OJyurfiZ6qxnlgpmQpbA3KqAKEcAmFlQpMpYs6c4WrpHifB9zNz0LS+Q5s+k7BNthejpD6QM2dqsYJGWXICF6DHrpPOJkqxpoSuMtKXlZC52hGCcHD7BKQ+iWG1P5t80gXBMbPAsb/Bqw2paqlNqAFT8BEiaB04VLgpXaZNKlfT4Ddb0zaGHN+hU03huzOsz/X3MXOqio7B8Or6oiB/RocJtFHbL+R9cHtr+Dy6vk3AAAA//8DAF+neQigBwAA", "base64"));
  res.end();

  return __filename;
};
