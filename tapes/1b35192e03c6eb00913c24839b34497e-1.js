var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
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
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/processingstatuses.. : 202 12962us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/processingstatuses.. : 200 3306us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTTUvEMBRF9/6K0K3zJGk+26W4cSX4sRIXr8nrUOi0Q5sKMsx/N9NxGHQcELWLQHN7HuHkdnPBWLYeek/j2HTLh4hxGmnMWMme2SaFKW7C7jUT2mksigC8UgaUqyQUKHNQXPNacFmgEdlij3S4ohm67ZjHiG2/TNMPaaDRD806Nn03f3RPnppXCqyaIuv6yN4oHrCJwgFbUcSQdnfM/mhp0w+EkcJNWuZZOc85cAu5euSyVLwU9soafsnT8zEoUdM6nKOEKXVequJKGf09df32NNJwu7cSUBZcqxqsVwTaIEGF0kNtkhYvkDDHbB6wTet28UUqupAr6x2QwxoUCgOuEhZ4YZR1RpKU6kTqXcf6IdBwzufdLqSw+OQTX7FpsWrp7zq1+LnOU+q8DFfVuUNvAL0PoLTV4OoaQZpUPV6RcPq0Yak82LbHlnxTrjln2AU2df+oQdrfaDhQRw3sZTchi30qfDptutr5/5MX23cAAAD//wMACk56DJ4DAAA=", "base64"));
  res.end();

  return __filename;
};
