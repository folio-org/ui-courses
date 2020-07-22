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

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:25 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves.. : 202 7387us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves.. : 200 48509us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxY224bNxB9z1cQeulDTYnXJek32UkaN3FipE6BosgDL0N7W2lX2F3ZMYL8e0da2VohdmCnQdOitgFBWnIunDk8c6SPTwgZNdBCcwHtiOyT38lHfIQPy7T6ONI+MXBRUW2LSJUsNPVaB5oFU6IwJhWsGO31JrFeNi28KtuurM6OevuYJVhuOS1MlFQVWlIHEGkKImoFSbmsr+3LDuYbMyO4CL7w1KaYqdKe0wDO05y9t8pEpYTchl2UkI7QeGXap4+Pg29inWDtjjP83+zHJdy6qBvfXL2qo+/KutpEzTEVKgIm65ymymZGrWJArcO4QlgrzZe8vAl/QOyGSWzr+CDXaFb5eZ/6sS8r8qoMq0DDDTdne/lucng4eXo0OR4ul+00duXFekvXLGG4VGGDuuXg3JgIMBY9tpZbqoJyWG3GKSukTcwrH7XZie3ni2W7MS5EzKYIhsbo8WRJYocFNxRSVgJPjP2yQ+NZf5aNtU7GWiaBRs/UKjQmAR6oiIUMTihMKAytF005R+tfELBlhJO6rNYFH0mvmNUiUQQUvqQsqOfZ0QJEobgvwPE89NMOHBylDfTv54W837j5dAOFBTRzX0HV/S1AfeblEVD/V0BhPWd9N6akBURFV0ZyCYGs0oVmi5lYV11ThmVXNzv8vdvzadXVVVkv98hPTXlWN2W72/kbH6dXC7huAzCXlEnUaRCYukUylhyZ3xgTLOQiWf4FL6fwoS/kHXteY26DaCI4hR3iNEfvEM4OC2Uko9hJ0AIxDcKPbsp06yF/9RV54Zs5zKDaI88bX/35nz4leb9lhmWYlT0nfNbk9Vp7jqBY3+6jU3KCA32nwYuZj32NDv08NGU6gz1y7Nt2TIbbku/gTT7ZjTWKgjE13NbUG2ie3ES+JeXoZ7PXy3nY5HX6UnOmx9ZarsmYTLUlK7/k+Sk5fjZ9+myL6GVTri3Ou26xP5lcXl6OZ3Ucn9UXE8wqlc2kq+MEYrlghtsJejFsJUbc+Lybz4Y3Y3HVnxnfELFdgGqJV2h7wGHoWZ+sDzMgdSarTiIft6SuZluyXBOer+J1V3XI0jBAAkbGQgy5SK0AlEzcMB+EZ166rfF5PUuoj67ZDmTOBUeOC86vAKgiMkR0NEVuC5OQMrjr67thh6Hu8NUQXKAsGC4pNxmlVsR33mVLhbRKhyA4Eu/oLh+fj5rrQfMAt8Pb+Bb86pikqev5bv5z6DxCze8Eiw0g+tJTfOmjYk8pM1SIUy73pdsXaiy5+JHh36DHvdXB1Tuk300ZnM5RaRaoYEFQzZKhXiZsSQhSKZ/BaTlo+SJ9RdyN1cPj9oV4MuCw6zJzmaUCbHzBOFIDSw7hJDQSEZJDcCYFeT23vqXQTkU2kQcckkKalRlQh7spIhpnU4iFCukBQltp6awpmFbSDqr8KLgf9dE/Iri1jNnpItPIE35v5HgdbQBPhcmGCyyYiYNr/CDB/SDXu+Krgg9fRtL0EUnfX2kfrIVRR36uK2h/aMmBD1fYgXMgqfRNCe1QW9xHdT8vYT3q98iLlSb9t0jE6Sw3kMh0TF5W9WKntFuh+BouyW91s6Ogb9eHgvHiHgLw5C1OhWJ8pLS15MAoR9aGd8g1eafYMjkknayihUicKqwVdTh3aREDN9I5HLfpTrGVgwmGZU6DdXhbEKSoZRzeFlABay5C0Pl+YgtskBxhRSUqIKrkCm6iQNmWnOQsBpEYfIXYeoDbIdIO14KA3PyQ9y30lhgbp76D3rot7jfQWz0yR13d+dlbiHXTM4d48ukvAAAA//8DAA2weZwEFQAA", "base64"));
  res.end();

  return __filename;
};
