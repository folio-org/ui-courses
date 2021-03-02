var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId=="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId==("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094")) sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 9639us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYS2/bRhC++1cQujbb7Ivkrm+OUyBGEydoEvRQ5DC7O2uzoUiBpNwIgf97R29Slh3JCdAW9UW2uDPDnff36etJkox8PW1abEfJafJH8pWe0LMizL+OjOJKOw7MxVwwrW3KXKYlk2itibkUmIbRs6VKBWNcKJ1D6afltE0EF+vDgK1viklX1NVC5gW0hU9CESM2WHUFzE8SqEJSVB1eNYvvW+UJNN2Y5C6W1xLRWyGkZj5IYDoCMguomeYqM8Fwa2S4q/zW/Ym+mxtYOrl18wh7fUffQHeNY7qqb7enu55eVL6chqK6SlzdXSeTaYMLP2EyKQsMCelf99TH2EGADvrXnOeoQegwvKSPhVXJpWBcMS4+cHGa8tM0/Zkr/hPnp5xvrJHidBKOUFzp3S7+3q4iuKyP10XbkRerDHiunHegGGTAmZapYE6JjPFMCeckZlFucj/Qvz8JR5gkpQavyGADzepC+KXDpoKyJ7J+tCMhtxItNjeFx0ldbEpLgeYmlYFpG+kjRMlARMsylJkWkKEVcb+Bu55tfTvK6qCXisYnL7H9nIj+ua/D8tyHwfNQtL6+wWb2smgnJcwu+3am5bLLFuYYS15BWf4Fs77+pPCfp5PXtYd1/XbNFHsC13UZ3l9jGX/5Mima2TtsijoMfZ5fY9psDKhn/ZN5dzc3m5z8jvi5HW0EbntvajuI8X1ZTFaD6dPJjsyoXF1zZStVPto0i8yLEJkW3DHjEJjMaXZJ7yH3287YKD+UtaMs9rN2VlX4ZW++fv34/Pz8+cuL52f946I9811xg3sCXlTUNt2056fmiJx7YJAKw7TTljnkYt4nJnDQ4NN88G4YT6btSjmTPuaZyxndPqVCVIpZKXKGIWrpUYDRpq9cFo56bLYOcciN4QqZB67nr6ZLIA1L6TPlrNR0ITcop6YYk/b7ZZe8m3fJo9qh7Rm4CKuCOMzKnrqhChyvx1gQ6HIMlNKFQxkwy1XOQh4FpCoVMds6tFB8qF6OsjZYJIW/BizH0CaSCzsatkHT9aa3sExwJlRfBquwIyEZz0d3HF8O4g+zCa7cjykVDaJhThhP20465rgnfcejVcGkOe+5v1V/KAhH2ewH4W1VFhUOptnOKr2sCR2wCTYtTTFfjyd1RWv9rp/znmmmvqub5UUH0GZw10z4DCxte+moG3LumdGZYpm2GmIQ3GA2WKZUiKvQuRxCBuRcroKi2YCcWoEyY6JXwWlMc/R73fwAs7JuniVvis84HBHftWUXNvaDhwPhgzDiDnw4EEBsVbejfJOVPXG33htjMGUxC/k87jTChFBMcRpuJjrMhlOoH3cJ6FRAavU0YxqMYyBTSoOkLkOHIsv1/pkMV9AEijuEK9yttH88+HIPdjsw+HIXvX0j+BJpr4GMzLpgyS8dmPMYWZbHNMrMYHD8nuCrNLdGCGQqt7QQPeXNOOoB4MCNtzqiumchBhi3z5Lz64ZCDMnZvyv2On907Deqd2OffPoRoF5IeRSoF/pU5qdCUk+qexVfzD5ukxq18yFkNL+s1ixVxPGsV54pyMGEkGtP2OUBYnA5HTtsljxKKp2uYX9Lk5cm9+WWLRUbRrcvIIeFI812vDpsQG3UTtZubHpj3RdcI9DoNgz1nAQigStnTSCkpHWOKlrY4Ko9XFfez3XPwg1UnqjeE939z9JdjKnESFBGzaGmTjmzllpG5PSvJAhhw9F093CTD9HdHj67j+/2RJ4I7xPhfSK8/2PCC5BaCJHAHxJu00RemKEHjFAc8Tan8xR6v499i/AeZa1fL6+KksJES1MO6mmX7EpOg5sNCfGQ7M4lFBP6ALJrRaq5Jr6gMktlJNFTQVFV+ejRRdr+3G6Zw4Fk9yib/QBcVMmSx36D79YLUvwIsvuDwKd53IrdKh4GHLPc2PVL7gDH93W5JmvfARy1fhRw3KhtgeMytqOu7qD8DX3dLBtUntz+DQAA//8=", "base64"));
  res.write(new Buffer("AwAJlzCKTxkAAA==", "base64"));
  res.end();

  return __filename;
};
