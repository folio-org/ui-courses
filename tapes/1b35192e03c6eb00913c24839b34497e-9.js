var path = require("path");

/**
 * GET /coursereserves/processingstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 25334us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 3500us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALSUzW7bMBCE73kKQtd6DVIkRUo3B73klKI/p6KHJblyBSiSIdEpgsDvXkqO66aOg9ZtdSAgjWZJfTPQ4xVj2WboPY1j060/RIzbkcaMVewze0xikpsw3WbSGY8oOJSoOSgvJSChA1vIoi6NxVzl2WJv6fCOZtNqtWLvqAtp9kELNPqh2cSm7+ZXrimJzGPEtl9vKbChWX+NrOu/HRx3FDEkfXp9f6b00A+EkcLbtMxjcp5z4AZy+1GISpuK22VZqDc8XU+Djq7rh08jDTf7DyPprC+MBucNB+3QguXSgXO1Qww8OCyPE7abcMG+T64/33cesEvrbvFLHkJbjWUZgDtVgLJOpmRkDoprXgsuSyzESR433YH0K4m8J0/NfUrCbaccInug+FNAl8bCZSV1JdVSCfkynleg6qU2+v9DRRtyZbwFsliDQlGAdcIAT5Ga1HSSUp1Ave1YPwQazvG8nUQKi2c88R6bFl1Lf4+Tn2nb77nOw7Cuzi36AtD7ACoFALauEWSRqscdCatPG5bKg217bMkL5Zp1hl1g2+7fYZCluADDD9cRA/syTchinwqfTpuinf+H6mr3HQAA//8DAM7w8D4uBQAA", "base64"));
  res.end();

  return __filename;
};
