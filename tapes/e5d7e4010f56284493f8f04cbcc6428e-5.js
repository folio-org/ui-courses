var path = require("path");

/**
 * GET /coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves.. : 202 7115us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/9c95cea0-6453-42e1-bd6d-0a0c096d7bb4/reserves.. : 200 35110us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/bRhC9+1cQuuTQjL1f3A/fbAdF1DiOkSaHoMhhP2ZjthIpkFRaIch/70ikJKppjLqXXqqDIC33vZl583aWX86KYtZih+1n7GbFZfFL8YWWaLFK278zbiVTRjEIMpagrFDgNCpAUxohk47e5dnzARKbddvhbdX1Vf1pPuBddGVEz0CrUoISyCEknYB5FpnTyYSg9viqx+UISzqbyIMHL6QBpUsEpzBBlgYdD1GrkI5hVxWmOYG30CF9Wg6+jU3CHR3FdtZoVipp5YijLQRZNa1vN7dN9H3V1GP0HJNWkVLVzm2LzgysYgjW5eyFsFYa/gjLm/Arxn6azFHPJ1ETrPbLoYTXvqqL2ypsA003HGp89f7i5ubixfzi9fRx1V3Fvvq829K3a5w+qqlR/XpSNyWCjEVSveQWVFAOAjIOTEubmFc+luYktl+u1t0I1iJmo4OBGD1VlqQEJ7gBTFkJqthbZafgxVDLiC6TsZZJhOiZ2oamJNAjiKhlcEJRQmGKXrXVktA/k3GriPdNVe8En0mvmC1FAuUyfaUswPPsQKPQintN7slTnm5CME/jEfhnLMXHkebrwQorbJe+xrr/i6FKGbMrdYbIUwbFWQAb0IMw2XBBgpnIZt9necxQT6KeGuqqrvGPx5109b+T/isnkZ6LoRvXbZU+YV/81NTYPeuKax821IEHLFLl24rG9gEUm7pvq7Dum/ZkmJ82/scKF4km9PPiJS6wPrXAgeCOtr/brHBUVQSnSEAOmSY+zS1HdRjJgITGUtDwQuFn+yqKj0cvr8OiGlz8TUa7Z90DtoMfF7nFVFydF6/qZnUi7Wrh45D7Hf5efGja36ZPk+/xTb4/DTQTjOu/Syj6xeJuvQxj1Pu3dCvo87kqrS2ujXLFDjiRdLXZbbyhH8Xk7th63tdxr4/JIZXJKtAicVCkFbioStAxcCOds+FwYU3AL9vxFG8X2PEzSeCh2TVrfzZyMMGwTLeodXSwyM/gnaODhSpQe0QIZR7KHr00vZ58Peko2iA5ORBkEJSx3DpTaAcpOclZDCIxnH2P49uJtJ9HT6CdmvJm9+5QHF5FTkpYYu+py/4kXmyRGp9e0NfYcEF2NCDsO84vS3bJ5LnW4oetnpN+DqjrzXsKtFdCBhu1KSFEw6AM3gINkAAh5OB9Yil4d2RYr9K/iDuinh53EOLsYOJZ3/R+8RZj0w5Dhp99/RMAAP//AwC/yM4WxgkAAA==", "base64"));
  res.end();

  return __filename;
};
