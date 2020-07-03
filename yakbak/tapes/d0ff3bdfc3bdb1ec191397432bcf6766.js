var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjJlNjMxOWI5LTFmZWEtNTQxZC05MWYwLWQxN2MwODdlZGJkNSIsImlhdCI6MTU5Mzc0Mzk4MCwidGVuYW50IjoiZGlrdSJ9.5_DoxBQWjfNC8vC1SXXnZ5ezBn1Ko65ahXmdG7XdneE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 03 Jul 2020 02:39:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/locations.. : 202 159891us, GET mod-inventory-storage-19.3.0-SNAPSHOT.442 http://10.36.1.169:9168/locations.. : 200 48578us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXS2/bOBDH7/0Ugq/tNHyTyi21s22wbRwkLXoo9sDHcFdYRzIkOd2gyHfv+NmijpusgQINYB8EeKj/zJDzI0f88qwoBpMm+r5q6m5QHBefii9kI2uV5n8HWsZcapMh8pRBcRbABfQgbLZcxOhtZIMXS0ntr3EhOqlr/G9tjU1aWv/8cDQcHo3Ojk7WQ1V3EvvqZjHctzNcm+uur/rZPKezZRaKITIWPXjNHaigSgjIODAjXWJe+ajtJp6/ns66ldCImK0JFihTDSpJCaXgFjBlJSJy75RbCydVaH17u1LqZJ1jEiF6puYhKTh6BBGNDKVQlEhYK6dtdU3KK2xvqogXTVX3Cx/SK+a0SKDKTI+UBXieSzAojOLeYMnz2kf3nfgsrWrxOA/FX/f4WHlYD11j75Pv/dy6rPB8qVr0PaYRPRb5CiYYMAtMvGfyWNpj5V5qYZ4z+q3yJNVsmh6vWoju6Hn34geyckxGUQnAlCWVxmUGjuoMrszZC+GctHyLrHe+qou3y0LtBuzdAbAnBBhj+wC2Vu0GTCuUxigEm+fzizS1kHMGrXRQXAbpotkC7Bw/F6+a5t/i6h+c5C3EavwcaHRwAOm3AUmIY6JC85fGqR9AWqle3X6geKvVEmgkL0MJPFMb04onoMwYJE6dzFlMIelHofiTuCvV/4+7G2bulPfoFHEVqA9H48Hp4EFRA7aSCRM3aX+DeVxPqhq3ID5dWxJ2sa2mc3wXA5RukZu2aBa6osWumbURu837VRebG2xvR1U3nfjb8/sD/fpTV1mWM0+0hNLSGnBqICGXSMIQqa9wqVO+f7NEoVUZggJeRgsqx0jfM1qALNFwkYNNAR/aLCF4aVAnSNqQD52pFjwmCEI7q5QVKNnPN8ujPPzaU5fv1db5g23dakeTCBEwRk6lCQ58oBJnGwxnToic0zaolx/PXhen79+cj4vhaHdjHx8a+29/Hm9gUXYfxDaq3YgFobilb0fgyhhQSEepZ8IBp01Fx6RO3tktxC6a6Wzi2+ISfarqv4thM5lgXBx9O3G7OOD2dHDTcq8TTT58UZEqCRsNeIcBlOEBPN1dQCf0jlvL0W5fga9Oh+PzUfHH2/H4cjdg4gDY0wFMlftcVDaqb4AtUxn0Te8nlxibdjlJ++zuKwAAAP//", "base64"));
  res.write(new Buffer("AwBuMTtSkBEAAA==", "base64"));
  res.end();

  return __filename;
};
