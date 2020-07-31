var path = require("path");

/**
 * GET /coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de.. : 202 6805us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/09427a84-6777-487d-bdb3-75235f4012de.. : 200 16398us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWS2/bOBC+91cIvrZMSIqkSN+SdoENts0WaHpa9MDHMNGuLBm0HDQo8t939HAkO0nXadYHwtDw+zjfcB788SbLFmVYZMtsQY3ghdWCqKIoiNBFIC64nBSS5zIKyniAxbsOUNsV9JAzm8KtTf9kLgGEsr4e7AE2PpXrtmzqftvVDWTeJshsHbI47MyamLVbt63KAHVrW9jssGub2hV+uxjcYlIpLZgnknkgIghPrKWGULCcOUoNFfYQ+qf7G3zbwX+gYZJ4NNdc5G9IepN98SXUfvTyCY0Xta+2vbBraKrm+u5dtoY29X973WtbWWjqtv+yY1lBa4Nt7eQqfvQJMB7hAy49NaecElqQnF3RfJnLpZAnuRFvKf5GIkRt1+E5FOPLnC6ZOWGMPY06v/u6gTRG3FGhnQJLBNeSSCNyoqlkxCkhuI1SKEMXPcE9rvd97H2zTRv4WG5aDMHIY13Q2otAdABDhHKaaG4Yod5Hw1R02owJtYd+7vKOpkNIgmskS3YnKZ2dM8p2VvjeQqptNRq/7xmrxtvuVkdj9EEJD4woYyRWRaRECwpEmxgt51rnxSPooYJJwwvY5in4yZZ19rF0KOhuMvsmDOY/vp6+f3/64eL002QsN2e+LW/7DW3awmSoMcrtdiYRHQBKvSVWMk2EE4Y4oBhYletArbBeFrNT7Wq93YxQxX0slCuI9xb1hDwnhrOCQIiCo05sJ3qCVoOCEStDoTXNgXhLRXcsOgAWCPcqd4YLdMZN2HUqV4j9Aum29PC5Kes+wIvcCqolD0SYiEuInFgWDVHAlWBWgWFxYtnM4Bdh0zH8dSRH9m1I+fGuMYNWuxQxBePcCMJpjo1TxALrRSnCmbJgJPVc+cUM9pP0OJ5pnh5XqazL9i7rSn6mtcXGddAOkFlNO6A+bBd41K60R4eH0ry6W8Oo1jApugZBcmUwWzhgD5WYPD56cJEKwDmyeAR+XvML+OaaL2rsr2mD3ffBdtiSL5usqauyxuHTrNZNjYNhX1tXCmnr2yYN7o35cOhhYZl0XhVEBYbpwSAS40QkeClK2y5RGX3Cw9/LquqG3jlU2BimDc6mh8plPBdyXtGv6KLPDpSfj5RuOBRLKU8EK/aHw4R7+XiYcfzHYHr27NeNpmE44Zp9+8VZOzpHTzjTB1Pz1WE5IihPnfv/TuvL7cpBGh5yDxMQW6TvKujy4Y1XwfpmMD2O4BHxYydU7706Xhu9I2L3+MzXRO7+zf2/AAAA//8DAE2DW20oCwAA", "base64"));
  res.end();

  return __filename;
};
