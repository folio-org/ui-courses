var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby copiedItem.barcode copiedItem.title
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
 * referer: http://localhost:3001/cr/reserves?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/reserves.. : 202 6497us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/reserves.. : 200 39972us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWXW8TRxR951eM/NKHZuz52vnImxOgpBCIaKhUVTzMxx2yrb1rrdeECPHfe9fr2GsIgYBQVTV+sOzdOffeOffMnfP+ASGjBpbQvIXliBySP8l7fIQPy9T9HVmZuGMcqDPCUAXAqc2BU1kwVYATkgUxOughsV41S3hWLtuyenPS4zlTDrQRNMUEVEUTaXBFoJCyy5pFHUO6xpctzDewpLOJPHjqhcS0usACFCSapQHHQ9RqB4v1ooR0guAO2pePj4NvYp1gHU4V0lmjWaGklRscLkHIom58c/Wsjr4t62qTvZAxu0JnGnnKVHEWqA3gqTDZcBGjN5HdEuVF+AtiOyxmx+edQiOs8vN+C9OqgnfDN9vNPX01OT6ePDyZTIevy+U0tuXb9ZK2WcHwVYUdaleDDSsGwFhEugtuqQrK0QCMU6alTcwrHwuzl9vPF6vlBqxFzEYHQ7H6gqokJXWCm67FSkTg3io7BM/K0LF1zXUy1jIJNHqmutRYBHigImoZnFBYUBiiF005R/RvqNgywlldVmumR9IrZguRqHIZv1IW1PPsqAahFfcaZZOHcZaDACdpo/2vi0Jeb8J82GpgAc3cV1C136WkT6LcK+l/pyTkc9Z346gp0xtoya91BcufluTIhyvswAWQVPqmxHm9BcW6apsyrNq62Zvi+41/XMIs4Wg+IE9gBtW+BLYBnuPy86sFbFgVwSkkkNMcvaPKOtyHkYwi0VAIlzMIP7reBXm90/IqzMpexZ9UtH63vICm1+MsN5DIdEyeVvVij9rFzMe+9udwSf6om7+Hb5Nv4UU+2080EozrmwqKfjZ7vpqHTdazl3gd6PGJKqwlR0Y5sgYOKF1crRce4w8yuDQ6zfsqXvNjckhFsopqkThVyBV1URUULzZupHM2bG+qAfhJsznF3QO2+wwKuKjXzbo+GzmYYFjmNFiHBwv1TL1zeLBABWyPCKHI/bY3WhreS74adBRskBwVSGUQWLHslCm0oyk5yVkMIjEYfS7GpxPpeh7dIexQlMdr00C2HmRvC3NoPXbZ7+WLDWDj00P82jRcoBwNFeqc60PFD6UdS6F/7vgc9LNHHV29wkTXLsNLh54gUxMV0ELjsAheRorGpGCR4/RAbW8jrBbpG/JuUHfP2xPxoCPjI0+GdkqY5BQ1EiekSkJQZz2jBgeccknqwhW3ebLIZIiYkHqNKCUKFJXkupvRPAQBOgt+gyfjjCW8ZTIVmWmqPGID8IKyztCJ5LIDuUv7RU/m9nm692L3N+iP9WI5Jq2QA6qdQ25sZtQi2dTiJeaFsFYaPvp8lNuUdKfQQyWd+rIiz/om3C6o03tB/fuWbEqWgKpoy0guIZCuXLQTd7Rh06qtq7JeHZBfmvJN3ZTL/c5vYwzubA3MJWUSdQUILN16anFY02yMCRayTpbfEuUc3vVE/gDPd3DjJn/3FXnim3lnNA/I48ZXf/+nd/lNzvb05JycobPZa/DO0x77eVh7/ANy6pfLMfmyuY2CMTVc1tQbaZ5tM3/Z+54/LTgrxtZaXpAxmRaWdHHJ43Ny+mj68NHAvTTlGnHRtovDyeTy8nI8q+P4Tf12glWlspm0dZxALBcM3ccEoxh0RUq48UU7n+3iQLXCk7LbxzDDrK/JhxmQOpOuYTh2l6SuZruZ+LHtLkKWhgHOWRxMKBUXqRWgaMEN80F4hhbrq223ELulH9lukDlrjlMvON9JUkWcGRFdbeRWm4RDhLvv86xMHip2yO1YGXGzd/w61M4v9o0ftXXrZy8h1k0/AcWDD/8AAAD//wMAu3APPO8TAAA=", "base64"));
  res.end();

  return __filename;
};
