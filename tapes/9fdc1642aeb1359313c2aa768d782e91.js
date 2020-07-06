var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImEwOWE4M2FkLTNkMmYtNWI5Yi04OTk0LWQ4NzRmMTQ1NDY5NSIsImlhdCI6MTU5Mzc0ODc5MywidGVuYW50IjoiZGlrdSJ9.Moy02GDjk7IIJQTOGxN5PoSKLTfDwf9Xt5ae_TWLBpE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 03 Jul 2020 03:59:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.251:9178/coursereserves/processingstatuses.. : 202 23804us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.251:9157/coursereserves/processingstatuses.. : 200 8557us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTwWvDIBTG7/0rJNfVodEY0/MuOxW23cYOL/pSAqkpiSmM0v99L2m7bisdo8yDoJ/f4/nzczdjLNl0rcO+r8PqOUIceuwTtmCvbEciybUfl4ktq9SCMxyc81xnecZtVQFXJrOZKFHaTCbzgyXAGifTEzpoGvQnwWPvunoT6zZ80xkEz4YAW6gbKBs8nV9jBA8RxsOHdmjTdQgR/QNNU5FUpIKLnAv1ItRC2UUq72Vh7gSNYyFyDRv/d9dk2tO8n//AANanOneWo4WKa5CG21JSmcLo3BqFSukLDMvA2s5jdw3DchTRz1k5RBbayN4xsv+DkYr8BhifruswJD09FIXnotSGa1sqXoBKuRaZqKRQBZjLTDwG5ugWTbuixP0SDKy3FIyvRI624Zyn25HI7BYkJ9cZCXsbKySxpdaoaXrm6feo2f4DAAD//wMAj5oNTFwDAAA=", "base64"));
  res.end();

  return __filename;
};
