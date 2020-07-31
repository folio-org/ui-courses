var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 40185us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 40511us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTW/bRhC951cQutbb7BeXy9xcu0CNJk6ApOihyGF2d9bamiKJJelGCPzfs5IoiVJkVHYOrQ8CzOEbzrx984b8+irLZsHNsjfZTAsqpKFAjC8YkbLMiVGSE45lqX3BGeZudrEC1LDANeQKKjtUQ5cxyjYhh52Noe1DU6/v+AW6YDMXvMeIdR9gFcmgdlmoe7yL6/+30BZiv0h33WwKYt6WjHFJrONApAckJaAkkgqlnaal5u4Y+t78jbZfwb+mwL65s3NN23sH/RwXqUTbbWPH/d3UthpcqO8y0/TzrB0irruDtq0Cuiyh5zvwAntw0MO+vHTRRoQe3XX6WWfklFNCCyLYJyreiPyNzH8Wmv1E09+YKKGG1p2PWoMe0+/jmi3bDLHDt6HrU90j15YKYw0IAgookTxnxAimCFWCGcNReT6e8AH6KbrPTpcgEe9SsghxLAW/9BhrqHY3bC8cxfk23mF8CBbbJuykI0BSnXNHZOnTj/OcAPMlUciVZKCwZP4U/LiffUfPyHgwISHa7Bq7+4zto7Zxm6h1k6sudLZ5wLi8Dl1bwfJ2mmOoNpOzTkVI9htU1T+w3KPbYO+H9m1jYavNPg64C8+byn2cY+V//dKGuPyAMTRu2ueqgCHuwOJif301qfFhx/+fiPfdbAw/7p7Q9eD9xyq03equv7LPrybxWTUWNubIhfVlrjyxzHkiGTVEGwTCi+Q93Foo7FbsO+jTZ/OMbNOzuaxr/HLiVH7/4/XV1evrm9eX+2DoLm0fHvA7YkOdBqEfJr1JikipBQI500QaWRKDlK20rx0FCTYvJk+FRTt0I1Rx6wtlCpJqzpPIhCAlZwVB5yW3yEBLvYdWwaSpWW4pdYXWVCCxQOXqsakATDbHrRKm5DIVYyZyiWGRsB832v+w0v4LZN5N4DduPPjzchzpIylssbUix9AU6NLxrRtRQEoqCuIKzyAXOfNq28ga9rQunpHpwPaDnQNWC+gyTlk5m0o89hPLZSVhlDCxvwNrdxTnyZVnB61uDPTTssWxYZ8naSBqYpi2aSNxQwy1CWuoL4XTeUF3De/BT7f9jHzTtt/XVahx4kdHq+62STubtBi75EO2WbRNnRbuYW+raYiD7Zu4KW+UxHGFHNPIAvekNK5M60E6Yix6ogqfe640OjPddUlm", "base64"));
  res.write(new Buffer("W1/Pi1IzhkQUZZp0S8s06ak/oEC1LaVHcXLSHSy6i+xqHtOmgexyOvQ/sAvXGU4t9TPXeqHyw7V+5mLf4bYmPJ7B90pQzCoo07sON8lPCmqJlkoQJUsJ3jGqUZ3k2RTgFCRiC+FEclSkyUyS1rW3whmJeYH2BM+fYFk18SJ7F+7xf8JxSYsXcbzD/RvHpbVaa8yJV65YcZzsnjFBBE2LQHuDaurZU445oBEOkznmikjQScY8T5Tz5E9okKlCntIy3EF0iWNwd3g4sf8t0eKFRIuTRGeff/SlOdf5C16ad6iTL823w8Jg3HxRcCHzzStxl5wuueTt/rshjN803xd/njGwAy7PMwW25/Hx1eM3AAAA//8=", "base64"));
  res.write(new Buffer("AwA+aQfd2g0AAA==", "base64"));
  res.end();

  return __filename;
};
