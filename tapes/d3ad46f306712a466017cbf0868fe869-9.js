var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMjAyOSwidGVuYW50IjoiZGlrdSJ9.VS7XJzdnGg75oqovYQtm3F7vNyG2dSPp6vSMIxJTc7g
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:54:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/locations.. : 202 7958us, GET mod-inventory-storage-19.3.0-SNAPSHOT.448 http://10.36.1.179:9168/locations.. : 200 3114us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXS2/bRhDH7/kUhK7NxPt++ObIbms0sQw7QQ9FD/uYbYnKpEBRTo3A3z2jB9PCslxXQIAYkA4LaJb/meHOb2e5n19V1WjaptDXbTMfVcfVb9VnspG1zsu/Iy1T8doUSDwXUJxFcBEDCFssFykFm9jo9VrShBtciU6aBv8erKnNa+svH4/G46PT86OTYaqen6S+vl1N990CB3Mz7+t+sczpfJ2FYoiMpQBBcwcqKg8RGQdmpMssqJC0/Rov3MwW843QiFSsiRYoUw0qSwlecAuYixIJeXDKDcJpHbvQ3W2UOlvnmERIgallSAqOAUEkI6MXihKJg3LW1TekvMbutk542dZNv/Ihg2JOiwzKFxpyERB48WBQGMWDQc/L4GP+L/F53tTieR6q3x/xsfEwTN1gH3Low9K6rvByqToMPeZTGlb5CiYYMAvcfmDyWMpj5d8o535g9NvkSarFLD9ftRLd03j/+gFZJWWjqARgvKfSuMLAUZ3B+VKCEM5Jy7fIeh/qpnq3LtRuwN4fAHtBgGm9D2CDajdgMoucDREVnfSgimQQtfbAOcasg85o0xZgF/ipetu2f1XXf+K0bCHW4KdIs6MDSN8NSFwcC3/M/BuhzAOQNqq3dx8p3ma1rCuROUFtx2oEbVkCZ9CCZopR10macf4sFJ+Iu1H9/7i7YeZOhYBOEVeRzuFkAjgdAyg6gK1kwqSst2CeNNO6wS2IzwZLxnnq6tkS39UEpVuVtqvala7qcN4uuoTzr8/X89TeYnd3Ws9n03B38Xigb991lWWl8JzBS0trwOkAicUjCWOic4VLncvjmyUJrXyMCrhPlppCojJELUB6NFyUaHPE/9osMQZpUGfI2pAPXagWPGWIQjurlBUo2dOb5Vkevm3XNX6frjuodoNqtaOXiAkwJU6liQ5CpBIXGw2nDSBKydugXv16/lN19uHni0k1Pt19sE8OB/t334//gUWpfRAbVLsRi0JxS9+OwJUxoJBnCEw44LSpqE3qHJzdQuyynS2moauuMOS6+aMat9MpplXr24nb5QG3F4Sb5PvgNqieuKhIlYVNBoLDCMrwCIHuLkAfkMFxazna7Svw9dl4cnFa/fhuMrnaDZg4APaCAHNsr5swewjYOpVR3/ZheoWp7dYvaV/dfwEAAP//AwDb7uRPkBEAAA==", "base64"));
  res.end();

  return __filename;
};
