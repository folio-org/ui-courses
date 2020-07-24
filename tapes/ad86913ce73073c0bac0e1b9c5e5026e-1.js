var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:56:44 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses.. : 202 21941us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses.. : 200 2389us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUy27bMBBF9/kKwtuGASW+tUvcTTdB0LSroovhqxGqhyHRAYzA/96RXLdAEqGNYy4GIId3QB7e4dMFISvfb3ZD/eMh32fI2zGOK1KRb+QJc5itwzRdMZDWBO9pyXWiImhBjRCCWvASTLJBgFldHiQdtHEWrdfkZndcDXH0Q73Jdd8dkkOEXD9Gsu7btu9GAjkPtdtOG0hT+9iN8ahtY4YAGSbh4VzTuacCMXzEMBcsWcko07QUXxivBKsKfaVY+YHh+F0IVdtN+H/VLNpj3F8+45GcMklaR61gkQqhgBrLAwambCikM4y/4HG3dXgxEvoW6m6Jy21P/rwIMiHQNO/HUJhTMBxVyxiccdEJlqhNDjEEibbwTlEWCsWUFrYE97ot6O2a3l+fZI6u76jH9Tj4GhoyPsAQKTT1z3g+35QnASv/CQwKI5XwiRpnOPomYAt5aajTlqci8KClWAR2DlpnI8T1KYSOqmVCTMiy4JpRYxRaqgj4tpO5JP4zzqaoTQkvCF03DZk7ZiRDHOPwGMMSrDvIA2JpYYdo8txrZ2sz8QYmhaokr5i+Mly9rrrZfcWrfDpgCcAtkyJR7QXCUBCpA+5pUkwyX0AExPKXKvk+VVvlPkPzOfp+CPO3Li/2vwAAAP//AwBHqKlD9AUAAA==", "base64"));
  res.end();

  return __filename;
};
