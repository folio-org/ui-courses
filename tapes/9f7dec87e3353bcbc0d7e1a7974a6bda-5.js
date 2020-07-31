var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
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

  res.setHeader("date", "Fri, 31 Jul 2020 15:42:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/copyrightstatuses.. : 202 6793us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/copyrightstatuses.. : 200 3907us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUz2/bIBQH8Hv/CuTr+iowDwy5tdlll6pat9O0w8Pg1Zp/RDapFFX534edpZOaWpuy+IBk875P8JHh5YqxrOw3u6H+8RQfI8XtGMaMrdg39pLm0mztp9eMo8qFLDgYowOg8AGocgGUIuNsFQqTU3Z9iHTUhjl02zRs7jyyIYxheA7+WOPDWA71JtZ9N5c+UBz6jrW0Y10f2bQmRpFR0xwTbYjkKdJUfljbtPYhUAz+YxrmNjnPOfACpPjC5UqqFaobKfMPPD2/G6XUduOXUiJF8pVQN1rp91N3u69pK58OLI6jcToQYG4UKIsSDFcCnEbMqVKoLc/mBvs07q/fqpKyxpcl5LKoAH2BYBARLJXJtbIeyZyortfsbrfkuJ5A6ufA1n3b9t2YEONQu+1UwJq6DN0Y/ls07fXfRU9Tyx4kjNJYVmCckYDoE0WpDLjCykp46QuF73vA/foskq7voEzfw1DW1FxMSObiDKHX1LKQMy445BXY6fShV+mPKZ0G7oXmukCbk1sUgsfbSyCNTzSk49/UP8PlwMRZYOKvYJXTplLWgUWewFATGCt9Gri2XihnuDwBe9i6tDHm+5bqbonsvmevV+fF7irOz2E4pv4wsO9Thyz2kZrPoewHP1/r6mr/CwAA//8DAFkLuw30BQAA", "base64"));
  res.end();

  return __filename;
};
