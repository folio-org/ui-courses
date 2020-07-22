var path = require("path");

/**
 * GET /item-storage/items/7212ba6a-8dcf-45a1-be9a-ffaa847c4423
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1c8edbab-ab5b-4d56-a396-0bc48cde3a3a/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc/6601c6ca-e252-484f-b39b-90e222225326/7212ba6a-8dcf-45a1-be9a-ffaa847c4423/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:14 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/item-storage/items/7212ba6a-8dcf-45a1-be9a-ffaa847c4423 : 202 12863us, GET mod-inventory-storage-19.3.0-SNAPSHOT.448 http://10.36.1.174:9168/item-storage/items/7212ba6a-8dcf-45a1-be9a-ffaa847c4423 : 200 1593us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxUS4/bNhi851cIvqa0+RIfvm2cFAi6zaFxT0UPH8mPa6GSKEjybo0g/73Uw7tusqe1AcOSZobD4ej79q4oNlXYFPtioznjDhQQE3wksgRGHFogMQIYqb2UXGx+mQinfqVUIzb0+cPk+jjVoWofhj/Qpz58XqAoYlRMCOIscCKD9ASYtyR4ZpQOMkRmF3pMfYP95zBMvL+Kv+ebDnqfAs5SjObvgp0M3OMj1geo6y/nxmE/Q46/lYyWW2MMK4ttcVeaglMqi1+Pxe+f7j5+WtgYI/qxesQX9iE1XWqxHefVv2VUxvk3iGfaeOlw3X3JONMCNHGBWiItReK0FoTpYETkTomIm8z6vvhqzzkBGKvUzuzFrT/1qU11erjc3Lwg9AfortBrXD51lxvHh3xZ8IXRphH/F62ven+u59W+/PhsGGE830bRQrMcwt0jVDW4+sZ2AyP2FdTHl30zKKWTghGOcuoUD8R6wPyDqJS3YOxqq8O+gSn4+wTtjQJ3VnqVFaKHnFzGE9CCEioQS27zCXK9KOQqdKmH/vKjAkqDmk1hR0Gkz//ARkO4MLJ0jjMK8icPfs5jVYg+KOmREWVtmT1ESozMR2jy8sC5MUKznzy8UeG5k29XqLNArkrl77zHYT3P9fzOfTXLncax2+92T09P2zr57UN63OXlQtXvxuR36KuOamZ2udeaciq53Z7Gpr42u67af4747zhL3eeLoYDnPqyYaxuGr12Wi5V/6fNxwhUpFj614/yurZzu7OrKTy18HVektr5cwT0upR1OVbeGJHLXaJkrwnF6zZw0xAL1hCqhglLORifmvt7UuxrG7K0+5OnyPHM2rrTKeIvEh+Bzb7Ui1qIgBhUFDMbRkFdcRBocIcAItwOjx7z78BHWjfCcIaGacHakYi/kvlTbUtv309S8bufchdc5/Ej5Xto941sh+GucD5c/h2lizjxnQERDWfaqPSlz9wk4mueuKB3HECzXas7g3ff/AAAA//8DALsfXjj+BQAA", "base64"));
  res.end();

  return __filename;
};
