var path = require("path");

/**
 * GET /coursereserves/courses?query=courseListingId=="bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e"
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
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 8191us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXS2/cNhC+51cIe60ZkxQlkr45doEaTZygSdBDkQMfQ5u1VhIoyc0i8H/v7Ftrr11vnSK92FhxvuE8vvlIfnuVZRPXDKmDbpKdZH9k3/ALfot+/nMSODVWFpxIHQIRhiuivM4J9Sw4p6kRlE2OlpDaTGEBOjOVG6qhyxhlGcnOh7aKzvSwNvTQuRTbPjb1wv6N6aLLfAwBEtR9NPOVzNQ+i3UPV2nxewtuTeqnaHexDBED0YxxQZznhohggGgDggial8orqhX3D8Hv7Z/g+rmDZcLblA/wN076nemvYYqhum67ej/Ti9pVg4/1VWab/jprhwSLPE2LJQKfIf56BJ9Cb7zpzTjMeb8SYDX9+bykc6+cckYoNoV9ouykoCdF8Zrm9CdKTyjdeEPg0PoDgCvc3eL/3aqCS668jV2PWaw6YL0MRgpBqM1zrFgwRLlSEgrWG1u60tBN73fwjzfhAJcISnCFDpNJq4Dgaw+pNhXbmqw/3bPgW4sO0m100DZxQ60c6a0K7onQAf/4wIlhQZMSeCmYKUGzsN/Bw8y2uR3kdWeuYnLZOXQ3GRuvu8Yv153f+e5j55pbSLPz2LWVmV2O/QzVcsoW7gjJfjFV9ZeZjfFtdDdD+7ZxZs3fPg0wMrhuKv/xGqrw89c2ptkHSLHxuznPwxjSxkF+NF6ZT3e63fTkd4CbbrIxuBvt1PUmhI9VbFci9eXVPZtJtQpz5avIXdBFGYhjHnWLUUuUBUO4DJJx54x028nYgJ/q2kEex107rWv4urdfv34+Pjs7Pr84Ph0vx+7U9fEW9hQ81jg2/TDKU1AASp0hpmCKCCs0sUBxqMtceVRn4wq5s7eZtkO3ApfcBVlaSTD6AomIk6Y5kwR8ENwBM0qoMbiKFmdsti6xl0rRHIgzVMy3xiAAxZK7MreaCwzI7tApxSmiPy6n5MN8Sv7VOHQjBxd+RYjnednDG2TgdJVQ0NhIrgXhNJdEiCCJomVJOCsN6II6XrrJDvApvhzkbcyXTynWsZ9lKM47hMIZSP1YuinBuvNybAO1v2eBG26VfBP8UoU/zVpY514gYwAUsUw5POq4JZY6TZilQedeFZJumzmCP1mBQ3yOK/C+rmINO1J27xy9bPBqQFpIHUqYa6ZtU+OZ/jDP+cCkwfVNWga6c8cZx6q1g+A4EMg1I0JZSvCUQQ4JJVF6clXqnTkakIXrQ6KQWjEGJMc7EhGOahQGzNVQQ5XTIkD+iDB4M+2OsrPrhIeXyU53NeJFx+zCx/7bw9P3ByZPCnlC5Wuq9IP7wxb6ZvZ5W4AgrPO+pMRoDK7IdUG0yx3JjTTKeymch10vT9xD/imAFfTwALbnyoYle3igtGeccY3lZRw5awNBVaFEFviZaQXMmkd4YKXxpcHGy9xjexhgPMAoUcHl3gooJDwy8GZWNekoexdv4H/FASzEj+XAIwH8xxygFsfWFoqYHF8BwuNoG81Rw4PmwVJUbwePcYAbsLlHACtKfC4plAFeICU49g0ssFKK/VpgrkzyyAHjr+C++v1gIpSvVZ7/SCI8GsB3JEL25QWvrk2chS4fvrq+Q5meVaS9m7+0RPtef5fD1EJaPpZ5Lor1267DExZP6Mvtkzhunu37ivosEZL8flYvL+izxGfPxi8r5ryUK55N+qY31W/gmrS8wbJXd38DAAD//w==", "base64"));
  res.write(new Buffer("AwB6jz4HixEAAA==", "base64"));
  res.end();

  return __filename;
};
