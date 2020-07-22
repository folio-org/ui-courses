var path = require("path");

/**
 * GET /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves.. : 202 14871us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves.. : 200 35350us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWS2/bRhC++1cQvPTQjL1P7q5vtoOibhzHSJNDUOSwj9mYrUQKJJVGCPLfOxIpmUoao+6ll+pAiLvzzeObb2f5+aQoyg577D5iXxbnxW/FZ1qixTptX0sus1QYHVSMO1AsObBRaMiGSQzOpCBD+WyExHbd9XhT90PdfLge8TFLtNxyqEyUoCotwSFGSEFErTApl/UeXw+4nGCpyiby4MELabYwBEfWkKVBx0OsVEgPYVc1pmsCb6Fj+rQcfBfbhDt3SktnTcW0klZOODIhyKrtfLe5aaMf6raZoueYKhWRknZOg7KZgVUMwbqcvRDWSsMf8fIq/I5xmCfzwOeTXBOs8cuxhJe+boqbOmwDzQ0ONb54e3Z1dfb8+uzlfLvuL+JQf9yZDN0a51sNNWpYz+qmRJCxSKxrbkEF5SAg48AqaRPzykdtjmL75WrdT+BKxGyqYCBGT5UlSZ0W3ACmrARV7K2yc/BirGVC62SsJUlB9ExtQ1MS6BFErGRwQlFCYY5edfWS0L+ScOuId23d7AgvpVfMapGAhEWPlAV4nkm+KCrFfUXqyXM//czBdZqOwD/zUryf3Hw5SGGF3dI32AxfCUrLmJ2uMkSeMijOAtiAHoTJhgsizERWft/LY4J6kuu5oC6aBj89rqSL/5X0XymJ+FyM3bjs6vQBh+KXtsH+h7649GFDHbjHItW+q2lsH0CxbYauDuuh7Y6G+XHjf6pxkWhCPyt+xgU2xxI4OLgl8zebFU6siuAUEcghR0/3gHVUh5EMiGjUgoYXCl/uqyjeP2h5HRb1qOJvMtrt9ffYjXpc5A5TcXFavGja1RG1q4WPY+63+Gfxru3+mO8mP+CrfHccqBSMV3+XUPSLxe16Gaaod6/pVqhOr5W2trg0yhU74IzS1WZneEV/itndsdW8b+KeH5ND0skqqETioIgrcFFpqGLgRjpnw+HCIvB9u+vAXvA5mGBY5hCso9NCIgXvHJ0WVIE4FyHoPNYyCWR+5/hm1ia0QXKSFcggKA25lZuoHKTkJGcxiMSw/J6Pb8fMfsg8we1caVe7D4Li8H1xVMISB0+t80fxYofUzfScHlMXBWnMgBBvuDyX7lyIU+PUj4x+syaNqMvNWwo0MeF0Jv5pGgoWBGiWDHiZIg3HIJXyGZ2edXO9Sv8i7oR6etyRiJODMsuhHfziNca2GycHP/nyFwAAAP//AwCSZtp6mwkAAA==", "base64"));
  res.end();

  return __filename;
};
