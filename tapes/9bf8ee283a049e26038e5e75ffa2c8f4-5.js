var path = require("path");

/**
 * GET /coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:08:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03 : 202 19775us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03 : 200 16015us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRVTW/cNhC951cIe21o80sUuTcn6WHRxC0Q5xTkwI+RrVYrCZRkZBH4v3f0sZa8dop1swdiweF7nPc0M/zxJkk2Rdgk22TjpZMuD4xQmXsitTPEKs1xEcEFoaWnYvN2AFR2DyPkysZwb+M/yV3fOluFeJgOBGh9LJquqKvx3M0dJN5GSPBMkgOEorpN6jzpeteXRYCqsx20R2xjY7fHvd2UF0uV0pJ5kjIPRAbpibXUEAqWM0epodKeQv90f4PvBvgPDCwaz+Zaq/wdSe+Sz76Ays9ZvqBxV/myH4XdQl3Wt4e3SQNdHP+OuhtbWqirbtw5suyhs8F2dkkVN30E9CN8wGWk5pRTQjPC2Q0VW5FuU3WhqfyN4m8mQlTfhPNRI+gB14fROV/3sYWPRduhgNl3TY0wSglipFZEiqEU0pwSy7VNU00D9WbzHP0z68+mQ0iEWySLNs6ptFfvGGXHKHzvIFa2nIPfnwTL2tvhm8zB3AclPTCijEmxqPFCLSkQbfLccq61yJ5BTxUsGl7Bti6gT7aoko+FQ0GHJezrMIX/+HL5/v3lh93lpyVYtFe+K+7HA13sYQlU6HLXryRiAkCpt2gn0wSb2BAHFNtYCR2oldan2epWu2/6doYq7vNMuYx4b1FPEPh1OMsIhFxy1Gm11Au0nBTM2DRkWlMBxFsqh2sxAbBAuFfCGS4xGbdgm1jsEfsZ4n3h4a+6qEaDN8JKqlMeiDQ5LiHHqmC5IQq4kswqMCxfWNoVfBfageHrmRzJt6nk52+NFbQ/lojJGOdGEk5FRqTMM6KpUtg3yoJJqefKb1aw/yiP85nW5XETi6roDsnQsCutHY6dk2ZGZrWcgOq02fGqY2vPCU+teXNoYFZrWCopDncilMFq4YATMMXi8bkHl1MJ1MjNM/DPNb+Cb615V+F0jC3OzsfY6UC9rpO6KosKn45639QVjvWn2oZWiL3v6jilN9fDt/85Wpna0mybphcqPR2tM+rd4QtW4Gyk01bkGvtMQ4bvidRArKOCOJE6DiEYnqmzhvNwr94yeSGlfnmkv/7eF8f7db93EKeH+3FkYk/5wfLrxze9hOZuCj138Az/1IVQ2VrHr7p3lneMPfHul5x7ePPwLwAAAP//AwCsDQI+GAkAAA==", "base64"));
  res.end();

  return __filename;
};
