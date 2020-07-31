var path = require("path");

/**
 * GET /coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2 : 202 9354us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courselistings/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/reserves/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2 : 200 28109us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWS2/bOBC+91cQBva0oU1SpETmlubRGm0eaNzdBRY9DF+JtrJkSHKyQZH/viO/ZDsPpJc9LNYwBNnk981w5pvh/HhHyCD3A3JIBtK7NHLvKSRWU5lpoJo7Thl3kcuUQwpicNABXDWvm/A5b9q8vBkv0doYCMAyGrj2VDqXUiu8oOB5lN5y6xO/ROdtmK5AnDHPmY1URJZSCcCoDVxRZo1CtIkmJEvQrK5caBq0d91CO2/WVm0UGtAWOIdWVaaojhFokiqtGHJpxZ8nuLR/Bdd2JD9wuY/CmxkRUsI0LEBfgoOiCH694EPj6nzW5lW5s06g9GRewh3kBdgirPdPQwseWujd6aJcB2iDP8HHgkQwwSgGOOETlhwm6lCqoUzkrww/KyJEzWf+7agF6BGfj4sYNS3U7R5SUqGWEQzlPmtKBVsrYpYHP8bMbkXUQu0qvwSYLS8HuG1W1VA/fK4cdEFaZTNTWihtHQ0OdSc5yhCsAxozm3KmhYjRv8ixn9A+pT9Bu53Uyy+/jz+Q08nHi0tyfNJv2Jzp09fR8fHoZDy67Bfz5si1+d1iQ1vPQ79QYrW0863TShYCY+gHKI71ZqVB8TOstzTRnoEEp7ItqzCdbWSfChez1GbUOVBU+iShRnCsPR+lcIGDlrqHFrntArXCKp9pzZJAHWBy0Sw6ECBQ4dLEGiHRGdtjZ3U+Rex1qO9yF66qvFyEeJCAZFoJrBAT8eEjVjqPhqZBpBJbRTA89izNFnzsm47hzzdykG9Lka7SPgv1FMpQtnvSic6nEk9OU2MwIjoyqjHAVBssXiG0TrJN2T7heFk6P0G7LZ1zyEvyeRn214Rz/r9w/i3hYAyLZfSPSBMw/23uyH2wpHM01GttuKps69zO26peWfvxJLtHZVuVeTU/IB/q/Kaq82Y7xxv85GEW1mEPzHiZeWpUEOhwd7Um3GIHyjKrQ0y95i9yTMLfy9A9u+MCvdqyJKyRmA9OowODgjUYmizBXp2EoASqNgh4kqS15lYBe+bIv0FJPkI9DUUoD8hZDeX3/8CZIxTN6tDk27o5zG2RL9vCXv4XK80tamVR4uMJuapxothiLsAtw3UMU1vn/iYckHNomiHpN3W382W82rUycIIx2W+qq5VWrzY299zs5omL+dSuvLn6cno2/mPySXGmhlprrsiQHClNOl5yNiHnp0cnp9dfz3DXWurzOg==", "base64"));
  res.write(new Buffer("X2Bv23Z2OBrd398Pi8oNb6q7EXrm83rUVm4UXD5jGdcjZMrw1pfCDG/babFmuauK+Uok+DoUfSHNHpZHmw03nTeUuLfuj9397t0pFv9NusGIVJF0Cccm3ZCqLNZddNENoXTr1Csbk4wF7MrY0FBkxlEtgqSKZwysAAaJ2Yd+rFfNvfuDbT5i4/ptVXicE9c9MyQxphw7pTXQCVk67DbOUO+4TjOP7YebwWaG2ppLoNwWaZA6ZDyhPIsJzsf4BiZqKhItlbWCY+MePM/w0qj6ZsrdURW6w5G6qqa91122sJfdtpMa3Hdc37IG3uddxqC4RjfwpfnaBL97T/UEO+N5tKmOylhquktTyhR7gEk8PlhqPFcW75PB8wyv3MlvJ90++LLkiK+meDlv1ePeqH5RkY0nBPBbFP3m5+b0N07qCWO7k/obZ/UNbgV73L3VqhaKK7gJzbhcT98qzZ6srjMmRT8DOSwu7ETd8nJM/mUzIMHDFBffQ5Mvl7ADhZrczLHd3Vf19143TwPyWjA4nogdsmzIWbIdjDXm/QP6Wa+0Y5nUNg1Y1UIrqoxMqGaKU5tKKSAqmZoN/pVALm1yNRTS7NhcYX7eZnf4d4//AAAA//8DACvtk7E6DwAA", "base64"));
  res.end();

  return __filename;
};
