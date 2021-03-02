var path = require("path");

/**
 * GET /coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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
 * referer: http://localhost:3001/cr/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/reserves.. : 200 9680us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWwXLbNhC95yswutaQABAkAN9cJ2k8iRNP6vTSyWEBLGy2FKkhqTieTP69K5GSqDjx1L10OlMeOBKBffuw+/CAL88Ym7XYYfsJuxk7Zb+zL/SJPpZx83cWMyelywpuIQmuncu4FQZ4rn3SThdZkdvZyRASmnXb4Zuy68v65mKI99EkMFpz4bOM65SA21AYLtBH8EUoQOAuvuxxOYZJIaIUPnGVRME1gOAeZU4oLvcquuQwO6RdlRgvKHgTOtCnzx7a0ETcwjlBzzifhmjqqmmhvX/TBOjLph6z5llILi8SDzImrokAtx6BK5OMVCGACY+hvPN/YOinJA51fBI0hdWwHKif1TV+no7sF/X6w+L8fPH8YnE2HS67s9CXn7ZT+naN06GaOtOvJwvWAlGIABxyabn22lGZheSiyGwUoCHk5ig3LFfrbgwuVEim8IYT+5zrSP11ShqOMWkVUILVdhpclX5TrV2to7FWZMgDCL1JTSQQkKtQZN4pTYT8NHrVlkuK/pWUWga8asp6W+lZBlrYXEXSZqJXTIqDTI4XqAotoUAn0xSnmwBcxFHzfw+FfRxhvu41sMJ2CTXW/TdKSiEWmmrAC+eoNpb2jqVic+toByhlbWbk7McojynpSdBTJV1CWbM3QxMeF9Tl/4L6twRF9azGjc86JFX0ZWB36NmGLrYHzYSm7tvSr/umPTLub92jb+qyWZ+wX9rypmnL7rjze4zr+xXu2oDCRW0idzkqom7JsjPpeTLGeIupiFY+gnKNn4dC/mDOW+I2yaa809QhyVMAR3J2VCiTCU6dxFyRplHBbF+m7y7yN6jZK2iXWGF9wl62UP/5n14l+3hwhrWvysETHjR5O9bdkii2u/viml3RSX7U4FUFYajROSx9W8YbPGGX0HVzNp0Wocd36eo41ywoIfR0WtuM0rzaZ/4O5QBV9Xa99COv69e5FPncWitzNmdnuWUbXPbyml2+OHv+4qDodVtuI277fnW6WNzd3c2rJsxvmk8LYhXLdtE3YYGhXAkj7YJQjFBCKze/7ZfVAQfrNe2UwzqmGaqBE/gKWZPYpmFkux1r6urgiVtfgzrsmpf7lBmB5LNkTCQVF7hVqHkujQCvQEDmHga/akfD3nwQ+0epw9Tbpop0Vdr5H2YpFZJczzvYSFIH8ozgeAzSFiaSiUg3VHz0i+kVBOqp3FBbNDLj0iS6dQX6BS5ZrjKrc++VJCue/Qjj4eGzO3qeADvdn+8RNstkbdMsj/kvsQcSHxwlCy2SHuNzeg1ZhaIDJONCXktzmptTYebU9Z+EOJ1e6sawn+8/kCPvjmHtQ4yFIJp0Bc0zOjBdyALPwICN0egQcSKPVfwnicewpyceSvFsv31mfdND9R5D0w7niHz29S8AAAD//wMAMhDV1KELAAA=", "base64"));
  res.end();

  return __filename;
};
