var path = require("path");

/**
 * GET /coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses/c62e7511-dbe4-44e5-8592-9777d409ed42.. : 200 9574us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMRWTW/jNhC9768QfO3SISl+iL4l2aIN9qMFNnsq9jAkR4laWTIoOdhgkf++Y1uOFScOnGbRXgSBwzec92Y4w+9vsmxSxUk2yybBSLRaCBY9KqYUalZoJ5mz1kbFHUYlJ29XgAbmuIacQoo3kP7JfEKMVXO1sUfsQqoWfdU2622X15gFSJhBE7NyszNry6xf+mVdRWx66LHbYheQ+jmtXWzCEtqYQonAtAjIVFSBAXDHOIIUnnPHFexD//B/Y+hX8O9k2FE82teY5K/k9Dr7HCpswhDlExwvmlAv18SusK3bq9u32QL7tP5d815ADdg2/Xpl62WOPUToYRcqLYaEpEd8R5+1a8mlYDxnXFxyMdN8pvWUln7hfMb54Ilgy0U8BBN2poqZsNNCmQOws9svHaZB81L5EKPhDJxSTOdOMxfywHKwUMRoVYg4WTu4o+/dWv3QLlOHH6quJxEGP9ZZLr2WjEdLehcIzFssGSi0Shau5EMkD9GH0ne0O4IkvCJnCbaU0umZ4GJrxW89pgbqwfjtgbFuA6zyuhUjRKMCCmYc6aCKkrNCcWR0XglSFkVuH0H3Gew4vMDbuAg/QtVkHypPhG535tDGjfn9l5Pz85N3Fycfd8aqOw19dbPe0Kcl7gwNqdwvRxQpAOQ8AAMtCqa8cswjp+oxeRE5KAjajk6F+WLZDVAjQ2mNtywEID4xz5mTwjKMpZLEEwpV7KD1hsGA1dEWBc+RBeBqdSwFgIBMBpN7JxUF43fYRarmhP2M6aYK+GdbNWuBJzkoXmgZmXIlfWIpGYjSMYPSKAEGnSh3XroR/CJ2Kw9/Hekj+7op+SHXVEHzbYk4K6R0ikmeW2qdpWUFN4ZJYQCd5kGaMBnBnimP4z2Ny+MyVU3V32Z050dXu+updY37AWekszS7HdjEPTsdxScPeG6u5uXtAge2TmjFVeFZbhxVi0TqopqKJ5QBfckVcqcmj8CHOb/A35jzRUMdNnXUf+9t+035U5u1TV01NH7a+aJtaDQ85La6CmkZ+jZtwhvqYT9CKoJAt7NkQntHNZIDjUYAprgoqTh87tVTEf42zd5Ps/Nr7Cjp/ThQD+n+7hpbOD6+06/ooweHyvNjheaD1jQVplaqvfmwA758Qox8PD+cnjn8deNpM6BW+X6U04ABQFAS0VOnU566F919yURJLbrkhspOPpHT36u6Xj1lzrCmZv90RoXMlf7/M6pmuphas/9Q+G8yevjwn5TR7Ou/fEMN0eVTp/X+Y+jVwhwhy5MH/9xX2Kfl3GPaPNHvXzY0+sKqM366f73XuLjemB5reISCaiqNe0Dktfodod4Th75Gu7s3dz8AAAD//wMAmwyphQQNAAA=", "base64"));
  res.end();

  return __filename;
};
