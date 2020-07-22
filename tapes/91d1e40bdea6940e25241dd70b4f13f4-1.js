var path = require("path");

/**
 * GET /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:35 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves.. : 202 6620us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves.. : 200 30621us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/jNhC+768gDPTU0CYpUqJyy2ZfQTcP7HrbQ7GHITlK1JUlQ5KTBov8944sP6S8kJyKAk0C2TH5fRzOfPPwzzeMTWpssL7GZsIO2Z/sJ31EH+ah+3diIAhMvebGxp7rKDYcjHE8U0KrOElCLOLJQQ/x1apu8HPetHl5edLjfRahlVbyOPER17GJeIroeXDKG41Bp5nZ4vMWFxtYoqRyEAO3wWdcG5DcYQo8ywCsTrzWKtrClnXlsWnozK8ttKtmQ2Fdpiz4mIP3gSgSwy3BOV3BGuFQWiOfojh3f6FvO5reG3t/vIKVQCUscA37gh6KAsN+KWDj63zZ5lU52sGgDGxVwjXkBbgC94gFthCghaFZnddrhBbDO3qsiZRQgouEKzUX0aFWh1pPk9T+KuhnR0a41TK8HLeB3a1f7zZea1qo23t4zdUunljeZ4+5Enu1LHMMJxTzkZ8d1L4KPUgK+t07gLYuqxrq28+Vh85xW7EYq4x1nqP3kmvpLAfnSSyJi6WwSmVZeIblYbD34X4V9TDg51/+OPnI3s8/nZ2z43fDLbvb/fZtdnw8e3cyOx8u582Rb/Pr9Za2XuFwqaTMaleDm2uBKATZA0Zarp1OKU2EJEdHNgjQ4E0yOhsWy12CxMpnSewS7j0YrkNEqalkwjFkWnmUlGh2CC5y17ltgzYhsVZEyD1Q0OloMgIBufJx5FKlySA3RC/rfEHor1Rpco8XVV6uXT6JQAtrFOVSmtEjZIqDzFIeo4q1hBhTmQ15mgHBSdjUrJexsO9bGe/EsMR6ASWW7T1JZT7EmnzA4zQl39hMcEvO5jalZFfK2igZCPMBy3OSehX1UFKnkJfscx+E5wV1+r+g/i1BkT+LPhpHrEFSRZt7doOOdeZivdeMr8q2zt2qrepR4x3H/KhsqzKvVgfsY51fVnXejCO/45jfLnEbBhRp0EngqUFFplvqopGklp0kibOYxcHKZ1jm+HfvyCf2nJFtg9OUSzVFSPLMQ0pyTslRSUS1PkI0ijSNCnbt4+DRS/4OJfsE9QILLA/YhxrKH//pW7Lv+8qwckXe14QHQV6vNVckinV2n8zZBU1iowAvC/C9j45h4eo8XOIBO4WmmbLhtq6Rn2cX47MmXgmhh9vqaiPNi93Jj5jcjSFnq4Xb2DX/zUhhptZaadiUHRnLOl72Yc5O3x+9e79X9KrO14irtl0ezmY3NzfTovLTy+p6RlaFvJ61lZ+hz5cikXZGLInopsh0etUuimFmLG/7O9MbpvYLWK4ohfYXHB5d9MZ2ExOrMtZFkupxw6qy2BfLdcGD0m+jalwWJQKpAFPFIg2lnluFNOvKRIBTICBK9+Crqgg0IW6rHUZZFkuqcS6FToDaU4XwKQ9e2jgJVDJkOhnNS4PJA8qhuFBbTGTEZZLRjOzpHaSZ5Sqy2jinJBXeyVMcT4+qr6Adj6rQXZPVVbUY298FhqrQVTuvwf+gPaNTIYS8Cw0UX8kgetN8azDc7zp7ktGwnrnYZiZ1PO1aodbd5J9GgR4iToM0jjrD5CmOZ7vta4iHbuiziYVqQW13lGz3Bveziu3sYUB/RTHc/vjU/sK5PU70/bn9hZP7DrkD3j3sVVULxQVcYnNSbudwEyePrG8jqdVw5vGUYVR2ug39sPzLYCSC2wUtv4Um7xep3GDNLldU4W6q+sdYWY856TkHyegwSg+VnkZSjR20Rb29JZvrjbpSk3lN387o24dT3IiQcIgCJbtzkdaQYWoG6nrGvf25kZoKYe6du0G9/tw32+BsinDvdvo6WNX9NCLf3P0DAAD//wMAqdE9KacPAAA=", "base64"));
  res.end();

  return __filename;
};
