var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:15 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/departments.. : 202 7683us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/departments.. : 200 3465us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUTYvbMBCG7/srhK+Nwsj6iOxbSkvZQy/t9lR6GEvjxODIwlYOYcl/r2LvEtqwZbeF+iCs0bwz0vMKPd4xVniKOKYDhTQVrGbf2WOO5njnL9OiVG3ryWiurUSuTAu8UVhxYQhkAyVspClWiyTggWbRdrtln2joh93pec3T5MYupm4Ic8rDntiUjv7EhpalPIk9BkrP6QdK6DHhJXfZUA66kTCR/5CHZW+5PYcNL9VDKWpha6HWVup3kL+nQlfV+9O3icb75VQeZQVatXzjFHFtkHiD0vHWgAYnkLDEa4Vj9H/R90n19r5zgXMez6vfzBDaGKuE41o44sorxxGh4pB1ogGoQOGNGR+zvXv21XUUHE0v+XEfXH/0Xdix3WLcikVK4/zLMHgWsUcaQvrF1bfaBLJWUIvN2lQv4PoDZLHW9n9Abl0lRKm482W+8W2WV0iKK5DGeguVLf0N5M+Y7/ABU+deQbgZsiHxONIMFmPsO/Isq/fTv4O18vVgb1VXLOzHpUKRhoT9F3LD6Of3Qd6dfwIAAP//AwBjGOqINwQAAA==", "base64"));
  res.end();

  return __filename;
};
