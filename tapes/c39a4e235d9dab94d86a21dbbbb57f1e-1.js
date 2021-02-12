var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(copiedItem.title="seman*" or copiedItem.barcode="seman*" or copiedItem.callNumber="seman*") sortby name
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves?query=seman&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:53:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/reserves.. : 200 11669us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/jNhC951cQvja0SYoSydyCZLcbbLIbtG4vxR74MUzYypJBSckuFvvfO7YcW96PoDkVBaqDAJPzZobznp75+YSQWYYO8gN0M3JG/iCfcQkXU9j8nFVKCBWMpKooCiqDENRoy6ji2kkTiqo05ex0hPh2yB1cp65Pzd3ViPescN7ZgtoKUVKUnLqCV5RVBXdOQBUFf8KnHlY7GGcscOYiFZFVVFrEOuAlZc6UTgQTDRSHsusE4QrBG+jYPi47m30bYJvOMHx28biFoes22/zpuvW2T22zq1oWPpqyitTzEKnEBqh2YKlQUXHhvVX+uSzv3Z/g+2kThzm+KDXCGrsaWz9vGvg43dkf6u1vi4uLxeXV4ny6nbpz36eHbUifB5huNchMP0wOLBkAY95SW3JNJTKKY2Z8w44OzErrS3VU267WQ7cDV8JHVTlFsfsSpYH6MIIrCiFK4YFbLfUUXCe3mdbTrIPSmhVAvWVyUxqbAAtU+KpwRkhsyE3R65xWiP4VlZo83Lap2U56VljJdCkClSbiK0RBLY+GViAqyW0Fhsdpnm6S4CrsNP/PspAPuzRf9hpYQ17ZBpr+KyVFHyqJM6CVMTgbHRnVOGyqTYxWCK0LxWc/zvKckl6UeqqkG5sacj2S8Lygbv4X1L8lKJxnvfvwSQeoij558giObNqFfNCMb5s+Jzf0bT4y7q/do2+b1A6n5Oec7tqcumPm9zmWn9bwRAMwE6QK1JQgsHVtqUazplEp5TTEKmj+TJYlfBwH+YOYd9jbpJpwRiJDnEZvDcrZ4KBUwSgyCaVATYOws/2YvnvI321D3ti8ghqaU/I62+av//QpyYeDMwyuTqMnfEPydq+7R1Fsv+6rJbnFf/Ijgte19eOMLuzK5RTu4JTc2K6bk2lYsD28j7fHtWZeMCanYbndSfN2X/k7LXtb1++Gldv1tXxbclbOtda8JHNyXmqyyUteL8nNq/PLVwdFDzltEfd9vz5bLB4fH+d16+d37cMCuwopL/rWL8CnNcPbxwKzKCaYFGZ+36/qQx5oBvxSDueYVqjHnqyrgbSRbAhD2+1I29QHT9z6mm38E3mli4VigD6LxoRSMZ5qAZKWXDHrhGW2MN+C3+SdYW8W2P4R4hB639YBr0pP/gdFjBVH13PGbiQpPXqGNzR4risV0ES4GSe+84vZCnqL5Nmji4/PgHyGS3yN2mMCDVhQLpasOBPsTOi5qPRPjJ1NL0XDOrwANrZxsqd+1re9rX8B3+bRA/nJl78BAAD//wMAWqRclV0KAAA=", "base64"));
  res.end();

  return __filename;
};
