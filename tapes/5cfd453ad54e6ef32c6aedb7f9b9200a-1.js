var path = require("path");

/**
 * GET /coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d?unused=1
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d.. : 202 6830us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d.. : 200 14413us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRWTW/bOBC991cIvrZMSIqkyNySdrEIts0ukPS06GFEDhPt2pJBy9kGRf57x5IcKXaSOhsfBEPD92becD70412Wzaowy06yWakDN8papoSNTHmjGSjFmYrSiNwIhybMPmwANSywg5xCCreQ/s3KhBiq+rq3B1z5VC3bqqm7Y1c3mHlImEEdstifzJqYtetyPa8C1i20uNpil5DaBb0778MS2hirhGdaeGQqKM8AuGMcQYqSc8cV7EL/LP9B327gP8gwSjyYayryNyK9yS59hbUfonxC43nt5+tO2DU28+b67kO2xDZ1fzvdS5gDNnXbvdmyLLCFAC2ModJLn5DyET7Ro6OWXHLGCyblFc9PlDxR6qjQ/D2n30BEqPUyHI7qQPf0vO8y55t1WuHnatWSgCHvPuZohRXMFD5nyuicOUTPQim9VhiUi3q2j34u9QfTESThNZElSEMo6fRMcLG14vcWUw3zwfj9kXHeeNjcyWCMPhjlkbw6p5mykTOrODLrYgQprc2LPeiuglHDK9imBfQFqjr7XJUk6G40+yb05j++Hn/8ePzp/PjLaKxWp76tbrsDbVrjaKgpy+16IpECQM49MNCCerdUjpXIBeMmt4GDAq+LiVdYLNerAWqkj4UpC+Y9kJ6Q051IUTAMUUnSCVbZETrvFQxYHQpreY7MA1cbtxQAAjLpTV46qSiYcsQuU7Ug7CWm28rjX01Vdwme5aC41TIwun56hCgZiOiYQWmUAINOxJFlNYGfh9WG4e8DObJvfckPd00VtNiWiCuElE4xyfOCKRULZrkxTAoD6DT30vjZBPZCeRzONC2Pq1TVVXuXbRp2orWlsbPTzMRsxhNY7zY7udq29hBw35pXd0sc1DqhFVe2ZLlxVC2SOhA0FY+PHsvIFXKnZnvg5zW/gm+q+bym6ZhWNDsfbLsD9aLJmnpe1bQ6msWyqWmsP9a2aYW09m2T+vCGetiNUHGtdKRxAw42hVrm1B+SVgAUnAZHrsEUT0T4OzbpGrOzzahJIbu8gf/GUyWkh/YlhsJN2/oNo/TZnfDyVhD5Se5OhDwSyjzeCiPu7O4rtc+2CnT0SvOS6qWUTPNQMMiDZ5ayoxREqtZ8yvHCbhl8F0eusHu+B9zrfQ8U9/2FZ9/+57rsg+PmyDq5sy7fnJZfJ+VJv29Lye7KvlgvSkz9t9jDGqQ56TdtdPHwmTbH5U1v2s/gAfkrjox7VFhvzd4Budv3+ZbM3b+7/wkAAP//AwAXizur6woAAA==", "base64"));
  res.end();

  return __filename;
};
