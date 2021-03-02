var path = require("path");

/**
 * GET /locations?limit=1000&query=cql.allRecords=1 sortby name
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
 * referer: http://localhost:3001/cr/courses/f20ab752-79ff-4a28-8d93-0d1fcc90a401/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:11 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-inventory-storage-19.5.0-SNAPSHOT.541 http://10.36.1.217:9133/locations.. : 200 3165us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTW/bOBCG7/0Vgq/tbPj9kVtgZ9tg2zhIWuyh6GFIDhcCHMmQ5GCDIv99aTsyinXcDwM9BMiFgId+hyO+D4fS11dVNVm0EYe6bfpJdVp9rr6WWInWaf1zomXMXpsMkacMirMALhCCsNlyESPayCZvtpIGb2kjOmsa+neMxjZto399OplOT2YXJ2fjVN2fxaG+20wP3YrGcNMP9bBa13SxrUIxIsYiAmruQAXlIRDjwIx0iaHCqO1uPbxdrvpHoRExWxMslEo1qCQleMEtUMpKROLolBuFizp02N0/KnWyzjFJEJGp9ZJlcUICEY0MXqhSSBiVy66+Lcob6u7qSFdt3QybHBIVc1okUD6XIWUByLMHQ8IojoY8z2OO/hvxRXr04ucyVF+eyPGYYZy6pQETDriObh1eb1VHOFCalWFTr2Ci7KkExj8yfqr8qZB/OO5eM3bKRpeLbLVMvyDbqB7K+PDmf2zlmIwqJoDxvpjjMgNXnAbnc0YhnJOW77H1Aeumer+16jBiH14Qe0aICX8UYjvZYcS4U4jkVHE1lPYVDYLTAUGVvmUlEyYmvYfYvFnUDe3BdT5GEvWxq5dreDYTn3qqcttV7UZXddS3qy5Sv/t/3cf2jrr7Wd0vF3h/+fRCvx9VZVnOPCXw0pY94OXUheypCEMsh5FLnfLTqEahlQ9BAffRgsoxlmtAC5CeDBc52BToR6iGgNKQTpC0KTl0Ll7wmCAI7axSVpBk30f1pzL8XlSNOArVnewwqla78hghAsXIiznBAYZicrbBcOaEyDnto3r998Xb6vzju8t5NZ0d7ofzl374jPqhPK4fyh/3wyAUt+XSBa6MAUU8ATLhgJeDVVqlTujsHmRX7XK1wK66Jkx18081bRcLipv2dxC4qxfgnhFwmh8F3E72nXc8qZKw0QA6CqAMD4DltQ90InTcWk52//vh5nw6v5xVf76fz68PIyZeEHtGiNnjLk67f3Fui5kM7YCLa4ptt31M8+rhPwAAAP//", "base64"));
  res.write(new Buffer("AwBChgvEzw4AAA==", "base64"));
  res.end();

  return __filename;
};
