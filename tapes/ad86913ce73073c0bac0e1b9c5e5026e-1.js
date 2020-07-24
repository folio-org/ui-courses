var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:16:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses.. : 202 6322us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses.. : 200 2671us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTW8TMRCG7/0VVq7Uldffzq0NFy5VReGEOIy/6Ir9iHadSlGV/87shoBEWQEhPoxkj9+R/fgdv1wRsgr9dj/UX57KY4GyG9O4ImvyibxgDrN1nKYrBsrZGALlwmQqo5HUSimpg6DAZhcl2NX1UdJBm2bRZkPu9qfVmMYw1NtS990xOSQo9XMim75t+24kUMpQ+920gTR1SN2YTto2FYhQYBIezzWdeyqQ4lsMc0HOOKPMUC4/MLGWbF2ZG834G4bjeyFU7bbx71Wz6IDxcP0Lj+y1zcp56iRLVEoN1DoRMTDtYqW8ZeIVj4edx4uR2LdQd0tc7nvy40WQCYGm+X8MlT0Hw0m1jMFbn7xkmbrsEUNUaIvgNWWx0kwb6Tj439uC3m/o4+1Z5uj6jgZcT0OooSHjEwyJQlN/TZfzDT8LGP8jMKis0jJkar0V6JuILRSUpd44kasoolFyEdglaF2MkDDnEDqplgkxqXglDKPWarRUFfFtJ3Mp/Ge8y8lYDq8I3TYNmTtmJEMa0/Cc4hKsBygDYmlhj2jK3GsXazP5D0wqvVZuzfiNXVLd7T/iVd4dsUQQjimZqQkSYWhI1IMINGumWKggAWL5SZV8nqqtSl+geZ9CP8T5W1dXh28AAAD//wMAJ0U3OfQFAAA=", "base64"));
  res.end();

  return __filename;
};
