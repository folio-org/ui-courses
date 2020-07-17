var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100&query=(cql.allRecords=1) sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc4ZmIwODIxLTY3NWUtNTcwYy04NmU3LTUwNDAyMjhjNTAxMSIsImlhdCI6MTU5NTAxMTk5MSwidGVuYW50IjoiZGlrdSJ9.VdxBRdnr4Z96aVZLMLIgD-i7DD_5A2WBjedFRgimRLc
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 17 Jul 2020 18:53:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.179:9178/coursereserves/reserves.. : 202 9004us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.179:9157/coursereserves/reserves.. : 200 42526us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWy27bRhTd5ysG2nRRjzQvzsM7xUkaN3FipG6BoshiHndsNhIpUJQdI8i/91KUJSoPJ04bFEWthSBx5tzn4b3n3QNCRg0sobmE5Ygckj/IO3yED8vU/R0VFmxhElCWuKVKJ0aDZoYay4FbFsEVcXTQQ2K9apbwvFy2ZXV+3OM5Uw60ETRFNKKiiTS4IlBI2WXNoo4h3eDLFuYbWNLZRB489UIadFsAdQoSzdKA4yFqtYPFelFCOkZwB+3Dx8fBN7FOsDanCums0axQ0soNDq8gZFE3vrl+XkfflnW18V7ImF2hM408Zao4C9QG8FSYbLiI0ZvIbrHyMvwJsR0GM6jnXUwjrPLzPoVpVcHb4ck2uWe/To6OJo+OJ9Phcbmcxra8XF9pmxUMjyrsULsaJKwYAGMRy110XQ7K0QCMU6alTcwrHwuz59vPF6vlBqxFzEYHQzH6gqokJXWCm67FSkTg3io7BM/K0FXrptbJWMsk0OiZ6lxjEOCBiqhlcEJhQGGIXjTlHNG/IGPLCKd1Wa0rPZJeMVuIRJXL+JWyoJ5nRzUIrbjXSJs8tLMcGDhOG+5/nRXyemPm/ZYDC2jmvoKq/VtM+sjKPZP+d0zCes76bjxsynQOLfm5rmD5w5I89OEaO3ABJJW+KXFeb0GxrtqmDKu2bvam+H7jn5QwSziaD8hTmEG1T4GtgRd4/ex6AZuqiuAUFpDTHL2jyjrMw0hGsdBQCJczCD+6yYK83nF5FWZlz+KPIlqfLS+g6fk4yw0kMh2TZ1W92CvtYuZjH/sLuCK/182b4WnyLbzMp/uORoJx/amAop/NXqzmYeP19BWuAz0+VoW15KFRjqyBg5IurtcXj/AHGSyNjvO+ijf1MTmkIllFtUicKqwVdVEVFBcbN9I5G7abCsEX9boDN4TPwQTDMqfBOnxbkKTUO4dvC6iANRchFLnPZUOQ4bLx1aBNYIPkSCsqg8AwZEc3oR1NyUnOYhCJwehzNj4eMzdD5g5mh0w7WisBshUWeynMofXYOr/nLzaA3UyP8GvTRYEcM5SbMyYPpTrEXkmpfmT42TlcLdLXo/ogHnSBfCByUJ8Ik5yiRuLIUUkI6qxn1ODEUC5JXbjiNpETmQwxeEm9RpQSBTZUct0NPR6CAJ0F/4TI4QxFFQuZisw0VR6xAXhBWaeQRHLZgbyDyHH7tbkXN/cr6fuKmxyTVlgDqp3D2tjMqMViU4tbwQthrTT8G8XNnUwPmXTiy4o875twO6FO7gn172ucKVkCsqItI7mCQLpwcT/fUddMq7auynp1QH5qyvO6KZefkTaDfamBuaRMoq4AgaFbTy0Oa5qNMcFC1snyW6ycwdu+kN9BRB18MsnffEWe+mbeKbcD8qTx1Zv/dJbfJBVPjs/IKaqKvQbvROKRn4e1aD4gJ365HJMvq8UoGFPDa029oebp1vOXxeTZs4KzYmyt5QUZk2lhSWeXPDkjJ4+njx4PFEtTrhEXbbs4nEyurq7GszqOz+vLCUaVymbS1nECsVwwVB8TtGJQ0yjhxhftfLazA9UK35RdHkMPsz4mH2ZA6ky6huHYXZK6mu1m4oc6tghZGgY4Z3EwIVVcpFaAogU3zAfhmZfuszoWZM6a4ygLznc8UxEHQUSZGLnVJuFk4O4fEoGFld8gAreonQjsuzlq69bPXkGsm36siQfv/wIAAP//AwCW+NGEFRMAAA==", "base64"));
  res.end();

  return __filename;
};
