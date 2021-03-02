var path = require("path");

/**
 * GET /item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTMzNywidGVuYW50IjoiZGlrdSJ9.wtxQuiFzCxqkGD2MGI_mTg9ppZ9Ug5jVeWarbc1FX6A
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:45 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 202 55467us, GET mod-inventory-storage-19.5.0-SNAPSHOT.541 http://10.36.1.217:9133/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 200 1568us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAHRTy27bMBC85ysEX1safFPUrXEvAYwkSNNDURQFH8tEgCUZlBzACPLvXT2SuG7KG7mzw92Z3eeLoljVcVVUxSrqZALzjjguDJFaAbESIknCgGU+aOnj6vOY8PsJcl937ZhmppfHvJDUAzT07TA6Jzx2u1i3D/0dhC7HqxmavPGGJkZ8aUsiLZfEWcsIBem1YNx7leb01OUG8lXsx7yfxa/p0bscuggTlVTClkZTJUUp5hxICcJQP8G3R9g94ec3OUKe0Ld3hUSsLq6kKsvi0khbSE6ZLjY3tz8Kds6wcbvd9aHxkDdds+9aaIepkmdEIS68hRf2kXt9wj1SrxD7MtEeweWN2w+Lfq/thG5/PGHZ4LVYCmmn55t0W0OA6ecVWyLdAH+JEuocDjs3kl+fx/rBDYfTwlvXzPJtu/ahaOq+R5kmYgxGN8xBTjl6Ighl99RWkldMrUvOPlFaUfreVoP4XLvd/XEPi8HMKemlYISDTEQqHokNDqcqAGgdrCstn/vYQ27cqOu2c+0JA/dWBpwFkoKzRCKeOCMolgOguEWDuJkZcOz2XXb5eMYApReMOU2ExzakSMjAtSUxWsFo8DxSOLN724VJwIVBiZCs0okEFrELRj0pPTjCTTKMh+BMWKYcdkiQu7YOXwIa9Y/4dT/UOCwbnNqzWR7cw6kxeN0ieEG8SwyDQ1vc6exlQN3j14/MYpW0Fbdro8xi1mLtYR//l8RMpVTF9Jop/WHS5fF7P67ivMHShxg1xb2VkuAOKvRWBCKccWWMRgbcz7H8i5c/AAAA//8DAPc9GI9pBAAA", "base64"));
  res.end();

  return __filename;
};
