var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:38:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/reserves.. : 202 6655us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/reserves.. : 200 43893us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWy27bRhTd5ysG2nRRjzQznKd3ipM0buLESN0CRZHFPO7YbCRSoCg7RpB/76UoS1QeTpw2KIpaC0HizLnPw3vPuweEjBpYQnMJyxE5JH+Qd/gIH5ap+ztSFqwyCShL3FKpE6NBM0ON5cAti+BUHB30kFivmiU8L5dtWZ0f93jOpANtBE0RjchoIg1OBQopu6xZ1DGkG3zZwnwDSzqbyIOnXhQG3SqgTkKiuTDgeIha7mCxXpSQjhHcQfvw8XHwTawTrM1JVThrNFOysMUGh1cQsqgb31w/r6Nvy7raeFdFzE7pTCNPmUrOArUBPBUmGy5i9CayW6y8DH9CbIfBDOp5F9MIq/y8T2FaVfB2eLJN7tmvk6OjyaPjyXR4XC6nsS0v11faZgXDowo71K4GCUsGwFjEcquuy0E6GoBxynRhE/PSR2X2fPv5YrXcgLWI2ehgKEavqExFQZ3gpmuxFBG4t9IOwbMydNW6qXUy1rICaPRMdq4xCPBARdRFcEJiQGGIXjTlHNG/IGPLCKd1Wa0rPSq8ZFaJRKXL+JWyoJ5nRzUILbnXSJs8tLMcGDhOG+5/nRXyemPm/ZYDC2jmvoKq/VtM+sjKPZP+d0zCes76bjxsynQOLfm5rmD5w5I89OEaO3ABJJW+KXFeb0GxrtqmDKu2bvam+H7jn5QwSziaD8hTmEG1T4GtgRd4/ex6AZuqiuAkFpDTHL2j0jrMwxSMYqFBCZczCD+6yYK83nF5FWZlz+KPIlqfLS+g6fk4yw0kMh2TZ1W92CvtYuZjH/sLuCK/182b4WnyLbzMp/uORoJx/amAop/NXqzmYeP19BWuAz0+lspa8tBIR9bAQUkX1+uLR/iDDJZGx3lfxZv6mBySSlZSLRKnEmtFXZSK4mLjpnDOhu2mQvBFve7ADeFzMMGwzGmwDt8WJCn1zuHbAjJgzUUIKve5bAgyXDa+GrQJbCg40ooWQWAYRUc3oR1NyRWcxSASg9HnbHw8Zm6GzB3MDpl2tFYCZCss9lKYQ+uxdX7PX2wAu5ke4demiwI5ZqgQZ6w4lOJQqnFh2I8MPzuHq0X6elQfxIMukA9EDuoTYZKT1BQ4cmQSgjrrGTU4MaRLhVZO3SZyIitCDL6gXiNKCoUNLbjuhh4PQYDOgn9C5HCGooqFTEVmmkqP2ABcUdYpJJFcdlDcQeS4/drci5v7lfR9xU2OSUusAdXOYW1sZtRisanFreCFsLYw/BvFzZ1MD5l04suKPO+bcDuhTu4J9e9rnClZArKiLSO5gkC6cHE/31HXTKu2rsp6dUB+asrzuimXn5E2g32pgbkkTaJOgcDQracWhzXNxphgIetk+S1WzuBtX8jvIKIOPpnkb74iT30z75TbAXnS+OrNfzrLb5KKJ8dn5BRVxV6DdyLxyM/DWjQfkBO/XI7Jl9ViFIzJ4bWm3lDzdOv5y2Ly7JniTI2ttVyRMZkqSzq75MkZOXk8ffR4oFiaco24aNvF4WRydXU1ntVxfF5fTjCqVDaTto4TiOWCofqYoBWDmkYKN75o57OdHahW+Kbs8hh6mPUx+TADUmfSNQzH7pLU1Ww3Ez/UsSpkVEqAcxYHE1LFRWoFSKq4YT4Iz3zhPqtjochZcxxlwfmOZzLiIIgoEyO32iScDNz9QyJQmeIbROAWtROBfTdHbd362SuIddOPNfHg/V8AAAD//w==", "base64"));
  res.write(new Buffer("AwBOK+0nFRMAAA==", "base64"));
  res.end();

  return __filename;
};
