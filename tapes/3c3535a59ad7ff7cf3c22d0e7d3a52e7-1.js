var path = require("path");

/**
 * POST /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 135
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
  res.statusCode = 201;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves : 202 6608us, POST mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves : 201 72000us");
  res.setHeader("location", "5ad0e9c4-586c-4365-a55b-f2042677d606");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANRUTY/bNhC951cQvta0+SmSe9s2SbtoNt2D20vRw5Ac7gqVJYGSuzWC/e+lLHntBOkh6KkSIAjkvPeGb4bz6Q0hqzquyA1ZaYgMXVBU2ypQJStNQWtPk2BKVMbEilWr9QQI3SEP+KEexrp9vJvRIUm03HJamSCpqrSkDjHQ6EXQCqNySc/oesT9AjKCCw8VUBtDokoDpx4d0JQArDJBKSHPkn2N8a5AJ+CnslQWPeTQRTxRcVbeU2zZKGF9lyEfP3QBxrprF70UYqUCliSd01TZxKhVDKl1RVEIa6V55egx76HFdvwPHGM9NnN6t2TAQjfWgTyjJ32u95jPYaFrx1z7w9jlYYr+fTlg2WphvxC0Y9fW3WFNfsz1Y5frYUF/jt8de1wSrZC5qEykTqOgKtpis+SlnsYYbzFV0fJ/5djh3+OJ5asRH0tWV0rCOxUqyWkK4IolTlAwklEmEbUovqCA1YnmZf2Vo/0GLfkJ8h4bbNfkfYb2z//l2cgf59Y5+Kaem+aLcp52hqdS+on7/m5HHjIOV6XsGwizKz/A3uc6PuKa3MMwbMglKMKIv6SHz1VWQTCmLkG5W1rv4VXzizQDNM3Hw94v2ex+1pzpjbWWa7Iht9qSiZG835H7d7dv35279ZDrU/zTOPY32+3z8/Om6cLmsftrW7KJdd6OXdhiqHtmuN0WDsOmEeI2T+O+ufR8f5zPWX6IOC9jeygX43Koi2gzJwm+QdIlMlWsXM6BdG1zPEfV7TBCG8610z5Jw7Bc0BCgdIkL1AosA44bBl4AA+nO0KeuiWWaDQsUZUoVl5J6B1ODqUCBB0dj4LYyUcXE3eTny2k6Xc0baK+bB5VFwyXlJpWhGMofuGSpkFZp7wVnMFdstccRSlnharqFjKXO8W35zGTFRcoMFWLH5Y10N0JtJBffsfK8ujpjvj/+OmBeknA6BaWZp4J5QTWLhoKMxQrvpVKQ0Gn5anMfv1lzwXy75mTfm5d/AAAA//8DAIHv6oKDBgAA", "base64"));
  res.end();

  return __filename;
};
