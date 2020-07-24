var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:59:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses.. : 202 6477us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses.. : 200 3679us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUT2/bIBgG8Hs/Bcp1pcLmjyG3NrvsUk3rdpp2eIGXBNUxkU0qRVW++3Cy7LDUUpfGByQbnkfmJ5vXG0JmLm12fVyu8lOGvB1wmJE5+Uley1yZjX68nTEh64o3jGqtkIrKI4VgkUoJ2pqAja5hdnuMdLDGQ+i+bcmheSA9Dti/oD+t8Ti4Pm5yTN1xqcvxBdsdsW1yz7FbkrxCsunTsiQHkgIZ3Cq10A+ruDmVrDGDhwxjw/F1x+30CBn95zIcmmtWM8oaWovvjM8Fm1fNnRLNJ1auP0Ultd34qVSl5lLPpbkTSr6detj9KLv7cpTywA2TItDGieKjAKkF7mhQTDJXAUKROhTsy7i//RcapNHeOVrzJlDhG0G1EIIacIU6GC9An0EvFuRhN0W7GEEKLlmk9Tp1A4Gc+2i34wLSRofdgB8XZfX7Rc9T0x5QaamEC1RbzakQvlA4qaltDA+V576R4m0P+ri4iKRLHXXlOfYuQns9If4f39x5alrIaotWsEDN+EMKL8sX46yizFeKqUaYGuykEH26vwbSsIK+nAhtfMbrgdX6ErBTahosWKWDNJYawQqYUEC14b4MTBlfSasZPwP7urVlY8SnNcRuiuwxkb+naeEi0LYfZ6guYqjOGMivsWGWU4b2G7rU+8NJL2/2vwEAAP//AwALvNKbBwYAAA==", "base64"));
  res.end();

  return __filename;
};
