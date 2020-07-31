var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:40:04 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 6917us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 5795us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUTWvcMBAG4Ht+hfA1mSBZI1vaW7K99BJC055KD6MPNyb+WGxtYAn73yt7mxS6MQ3b9UFga95BerD0csFY5vrNbqh/PsaHSHE7hjFjK/advaS5NFv76TXjqHIhSw5aFwFQ+ABU2QBKkbamCqXOKbs6RDpqwxy6aRo2dx7ZEMYwPAf/WuPD6IZ6E+u+m0vvKQ59x1rasa6PbFoTo8ioaV4TbYjkKdJUfljbtPYhUAz+UxrmNjnPOfASpPjK5UqqFaprKfNLnp7fjVJqu/FLKZGvJF+hvE6B91O3u29pK58PLJajtkUgwFwrUAYlaK4E2AIxp0phYXg2N9incX/1tyopo71zkMuyAvQlgkZEMOSSa2U8kj5SXa/Z7W7JcT2B1M+Brfu27bsxIcahttupgDW1C90Y/ls07fXjosepZQ8SWhXoKtBWS0D0icIpDbY0shJe+lLh+x5wtz6JpOs7cOl7GFxNzdmEZC5OEHpLLQtZbYNFXoGZTh96lf4YZwvgXhS8KNHkZBeF4OHmHEjjIw3p+Df1UzgfmDgJTPwTrLKFrpSxYJAnMCwItJE+DbwwXiiruTwCu9/atDHm+5bqbonsrmdvV+fZ7qqlW+djqT8M7MfUIYt9pOZLcP3g52tdXex/AQAA//8DAGs/lnv0BQAA", "base64"));
  res.end();

  return __filename;
};
