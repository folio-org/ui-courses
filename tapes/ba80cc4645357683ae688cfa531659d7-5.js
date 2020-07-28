var path = require("path");

/**
 * GET /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:18 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves.. : 202 7264us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves.. : 200 29637us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/bRhC9+1cQuuTQjL1f3A/fbAdF1DiOkSaHoMhhP2ZjthRJUFRaI8h/70ikZKppjLqXXqqDIC33vZl583aWX06KYtHjGvvPuF4U58UvxRdaosUqbf8ucsyC58gg55xAlVGA9zGD0jZLNMobzxfPR0hsN/0ar6v1UDWfliNe64jRogLnUYMywoHl3IHMUnFkqE2Ue3w14GqCJZ1N5MGDF9JQsBLBKUyQpUHHQ9QqpIewXYVpSeAtdEyfloPvY5twR6dK6azRrFTS7sPRFoJ0be/7++s2+qFqm+W+6KRVRA7auRKUzQysYgjW5eyFsFYa/gjLm/ArxmGezFzPJ1ATrPGrsYTXvmqK6ypsA803HGp89f7s6ursxfLs9fxxtb6IQ/V5t2XoNzh/1FCjhs2sbkoEGYukesktqKAcBGQcmJY2Ma98LM1RbL/qNut9p0XMRgcDMXqqLEkJTnADmLISVLG3ys7B9VjLhC6TsZZJhOiZ2oamJNAjiKhlcEJRQmGO7vpqReifybhVxNu2anaCL6RXzJaCrOq2fk2Z/MqzA41CK+41uSfPedYzgmWajsA/Yyk+TjRfD1bosF/5BpvhL4YqZcyu1BkiT3R2OAtgA3oQJhsuSDAT2eL7LI8Z6knUc0NdNA3+8biTLv530n/lJNKzHrtx2VfpEw7FT22D62fr4tKHe+rAHRap8n1FY/sAim0z9FXYDG1/NMyPG/9jhXWiCf28eIk1NscWOBDc0PZ39x1OqorgFAnIIUfvaG45qsNIBiQ0loKGFwq/2FdRfHzw8ibU1ejibzLaPVvfYT/6sc49puLitHjVtN2RtF3t45j7Df5efGj73+ZPkx/wTb49DrQQjOu/Syj6ur7ZrMIU9fYt3Qr6dKlKa4tLo1yxA84k7e53G6/oRzG7O7ae903c62NySGWyCrRIHBRpBS6qEnQM3EjnbDhcWDPwy346xdsF9vCZJXDX7pq1Pxs5mGBY5hCso4NFfgbvHB0sVIHaI0Io81j25KX59eSbWUfRBsnJgSCDoIzl1plCO0jJSc5iEInh4nsc306k/Tx6Au3clFe7d4fi8CpyVMIKB09d9kfxYo/U+PSCvqaGC7KjAWHfcX5elufcnGrJftjqOevniLq8f0+B9krIYKM2JYRoGJTBW6ABEiCEHLxPLAXvHhg2XfoXcSfU0+OOQpwcTLwY2sHXbzG2/Thk+MnXPwEAAP//AwDrv/tOxgkAAA==", "base64"));
  res.end();

  return __filename;
};
