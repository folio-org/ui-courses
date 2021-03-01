var path = require("path");

/**
 * GET /coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:59 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42.. : 200 7256us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWTW/bOBC991cIvm6ZkBQ/RN+SdoENts0u0PS06GFEjhJ1Zcmg5KBBkf++Y0mOZOcDzqYXwdDwPc57mg//fJckizIskmWy8Eai1UKwkKNiSqFmmXaSOWttUNxhUHLxfguoYYU95AxiuIX4b5JHxFDW10M8YOtjue7Kpu6PXd1g4iFiAnVIiuFk0hRJt8k3VRmw7qDDdoddQ+xW9O5iSEtoYzIlPNPCI1NBeQbAHeMIUuScO67gEPpX/h19t4X/pMAk8WiuucjfifQm+eJLrP2Y5RMaL2pfbXph19hUzfXd+2SNXex/9rrXUAE2dde/2bGssIMAHUyp0ksfkfwIH+nRU0suBeMp4+KKi6XmS61P6NVvnC85H5kItlmH52DCLlW2FPYkU+YZ2Pnd1xbj6Hmhch+C4QycUkynTjPnU89SsJCFYJUPuOgJ7ul537vvm01s8VPZdmTCyGOd5TLXkvFgye8MgeUWCwYKrZKZK/iYyT76uc93NB1BIl4TWYSdpHh2LrjYRfFHh7GGagz+2AtWjYftd92Z4YNRHgUzjnxQWcFZpjgyuq8AKbMstY+ghwomDa9gmxfhZyjr5FOZk6C7KeybMIT//Hr64cPpx4vTz1OwbM98V972B7q4wSlQk8vdZiaREkDOPTDQImMqV47lyKl6TJoFDgq8trNbYbXetCPUSF9Yk1vmPZCekKbMSWEZhkJJ0gmZyiZoNSgYsTrYLOMpMg9cba+lBBCQSW/S3ElFyeQTdh3LFWG/YLwtPf7dlHVv8CIFxTMtA1OuoEcoJANROGZQGiXAoBPFxNLO4Beh3TL8cyRH8m0o+fFbUwWtdiXirJDSKSZ5aml0FpZl3BgmhQF0mntp/GIGe6E8jmeal8dVLOuyu0uo52et3XY0uubzgDPyWZrpBNbhIE5X8cWezqE1r+7WOKp1QiuuspylxlG1SKQpqql4fOExL7hC7tTiEfh5za/gm2u+qGnCxpbm70PscChfNklTV2VN66dZrZuaVsO+tm0rxI3vmjikN9bDYYYePYAAYJhTV6icKp3qRDJRUDsX3FCK8okM/yirarv2zrGiwTAdyCE+dK6QqdLzjn7DFH12pby8VGg7aLXU2Yk1h0tlAr5+P8w4Xl5NL1z+tuU0rCd6Jt/+574ds0tPnNaHi/PNxhxhy5MX/9qNfblZ5RiHv3MPW5DGpN920eXDP70K1zdD6LGHRzioTqRxe0Le6t8R7j1x6Vu8u393/x8AAAD//w==", "base64"));
  res.write(new Buffer("AwCDaT2wMAsAAA==", "base64"));
  res.end();

  return __filename;
};
