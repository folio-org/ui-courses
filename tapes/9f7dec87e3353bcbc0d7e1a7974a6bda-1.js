var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/copyrightstatuses.. : 200 3105us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUO2/bMBAH8D2fgvDaXMCnSHpL3KVLEDTtVHQ4vhqhehgSHcAI/N1LyU2GOhrieiEg6f4H8gfqXq4IWfl+ux/qX0/5MWPejXFckTX5QV7Kt/K1DtPjikrFmdAUjKkiSBYiYHIRlELjbIracFxdHyMdtnEO3TYNmTuPZIhjHJ5jeK0JcfRDvc11382lD5iHviMt7knXZzLtiWAm2DSviTZmDJhxKj/ubdr7EDHH8LkscxtOOQPKgfFvVKw5XXN9U1XVJ0rXlP7tVGK7bViKMV0ya85uhFyK3e2/l8N8OcJoLXRkKoCmrgIVFAUUIkGSOjjLEmder+YGh7Ierv91RWVN8B640Alk0BKMlBIs+iKbbJBoTlw3G3K3X5LcTCT1cySbvm37biyMeajdbiogTe1jN8b/NxXyA6bvxJZFkBlVSZ/AOCNAylAwvDLgtBWJBRG0ku+LwP3mLJSu78CX93HwNTaXM1L2LKO32LKRMy46SRPY6R+UQZVb48v1o4FVtNLScnSLRvB4ewmm8QmHMgSa+ne8HJlUZ5G9xZbJkqtMUtaBlbSQyQrBWBHKQisbmHKGihOyh50rRyOhb7HultDue/I2Qi82sxQ/7+7wEwjyc2qxyn3G5mv0/RDmAa+uDn8AAAD//wMApLHgVP4FAAA=", "base64"));
  res.end();

  return __filename;
};
