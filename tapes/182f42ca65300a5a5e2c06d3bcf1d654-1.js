var path = require("path");

/**
 * GET /coursereserves/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401 : 200 7518us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXW2/bNhR+768Q8rqwJSlKJPOWJgMWrE0LtMUehj7wcphwkSWBkrIaRf77jm3ZVhwncJoN3YsB8/A7t+9cxO+vsuwo+qPsJDsKnBorC06kDoEIwxVRXueEehac09QIyo6OF4DazGAJOTOVG6qhyxhlGcnOh7aKzvSwuuahcym2fWzq5e23posu8zEESFD30Swkmal9FusertLy/xramtTP8NbFyjl0QTPGBXGeGyKCAaINCCJoXiqvqFbc70I/2L/A9Qv4dxRsAz1Y1zTU96a/hhm66Lq1bDe+i9pVg4/1VWab/jprhwTL6EyLaQGfIfp6A55Bb7zpzdY9PHQJMHv+fJHChUZOOSMUKWCfKTsp6ElRvKY5/YXSE0pHTQgbWv8M2BJ1h793y3y5ZkgdvItdj56P2bZeBiOFINTmOWYoGKJcKQkF640tXWnoyPE99GMJP1gdQhJcobJk0ugKfOsh1aZi6wvrgx05X8s7SLfRQdvETfHkWLqq4J4IHfDHB04MC5qUwEvBTAk=", "base64"));
  res.write(new Buffer("moV98N14thE9Q+O9fonJZefQ3WRsK3WNX0mdn5z62LnmFtL8PHZtZeaXUx1DteqdpSpCst9MVf1t5lt0G93N0L5rnFlXZ58G2Iivm8p/uoYq/PqtjWn+EVJs/DTOhQND2oDz4+35olfT7Sb/fwDcdEej+G5joetNCJ+q2HaLW39mX19N5EfV6Nioo8hd0EUZiGMeJw+jligLhnAZJOPOGenW1b6BPs7NM7RNuTmta/i2h5Xfv7w5O3tzfvHmdCuM3anr4y08SGyssRH6YRKboACUOkNMwRQRVmhigWJ7lrnyOFONK+TEqpm1QzdCS+6CLK0k6HOBRYa9ozmTBHwQ3AEzSqgttIoWu2a+TqmXStEciDNULMyiA4CDjrsyt5oLdMZOyiXFGWI/rWr/46L2f6DMuwn8wo/EH6Zjpz6wwmZjIEEjaVwLwmkuiRBBEkXLknBWGtAFdbx0RxPY43XxDE3TuvicYh37eYZDdVI2WN+pnw5cSjDPvNzegNrvyNHUevqODq+m5+d5C+toC6wLAEUsUw4XErfEUqcJszTo3KtC0jVtE/ATMR+ubxrzh7qKNUyG0c6mu2xwZZMWUodDyDWztqlx396PbdEKaXB9k1bujfWw66HWDoLjQCDXjAhlKcGNgDUilMQRkqtST/pjwBpbD/VCasUYkBy/V4hwVGObY3yGGqqcFgHyvW3uzaw7zs6uE64Zk51OO/4Fi3CpYd9Of3qrM3lSyBMqX1Old7b6Fvh2/mUbdhDWeV9SYjS6VeS6INrljuRGGuW9FM7DVMcT3wZPGx+Bzze+3gVjNTxgXGnPOOMa08k41qQNBOcDJbLAY6YVMGv2Mm6l8aVBimXukQwG6AcwSlRwubcCCgl7G9jMqyYdZ+/jDfxP2Mbwfx7be43/Z2xTi81oC0VMjl/cwmPDGs1x/gbNg6U4eR3sZ5sbsLnH66wo8TmisLV5geRzZAkssFKKff1trkzyyLbxV3B/iv1EysvXKs9/FuWPGP+XKM++/uCLZuNdocvdF82LE3NQWvYYfllSdl9Vl8PMQlo9OnkuitWbqcNtiJv0cvu0jOOz92EKDxonkt+P46XpO2iMPDD6ktTdvbr7BwAA//8DALTwLJKLEAAA", "base64"));
  res.end();

  return __filename;
};
