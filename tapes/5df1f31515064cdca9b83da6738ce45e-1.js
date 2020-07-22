var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="cf3e8181-67c3-4653-9eec-db2c54ed49f5"
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
 * referer: http://localhost:3001/cr/reserves/cf3e8181-67c3-4653-9eec-db2c54ed49f5/b5d06488-418f-4c65-a440-4f2613619e6d/5ad0e9c4-586c-4365-a55b-f2042677d606/7212ba6a-8dcf-45a1-be9a-ffaa847c4423/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:28 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses.. : 202 6738us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses.. : 200 15440us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRWwXLbNhC95ys4ujawARAAAd2cpAdNE7eTOKdODiCwsNlSJAcCPfFk/O9dkZRE26pHGutASdh9D/sWuwv+epdlC9f2cQObRbbM/s5+4QquVX77d1FKT5XQmgimAxFOSWKFoEQErliumAHlF+9HSGPXMICubPT3Nv6blRHAV83tzsPDxsWqS1XbDI43d5A5GyGzjc/C6Ju1IUt92deVhybZhHHt0Z2NaY2rqzE4JpXSgjkimQMivHDEWmoIBctZSamhwr4E/1n+Ay5tCUapB7Fn8M3l/o7Ed9k3V0Hj9tEeUbtqXN0PEm+hrdvbh/dZBykOP4cMdLa20DZpWDnwrCFZb5Odh7w9tQiYHf8JHwM9p5wSWhDOb2i+FHwpxEUh6W8UP3syxPWdPx03wR6H78cpl2O9fK42CcVMZ+FCDpppRlThciKUzIkBcMSX3EkBXpggF8fw/38cZ1AiKMItEkYbp4Di1QdG2cEOPxPExtaT+eczc906uz2pyRycV8IB7m2MJEIHSrSgQLQJwXKudV4cAb/UclBzFuO8vL7Yqsk+VyVKe5g7uNaPDn98v/z48fLT6vLL3Fxtrlyq7geXFHuYmxrMfOpncjEQoNRZYiXDXi+FISVQRqjKtadWWCeLJ3vbdddvJrDiLhSqLIhzFpX5HM+Js4KAD4KjYquFnoPrUcuElr7QmuZAnKViuzUGARYIdyovDRcYUDlHd7FaI/obxPvKwV9t1QwJX+RWUC25J1gW+PCBE8uCIQq4EswqMCzMeTYzgpWfht9pLNmPXVvsKwBra70rHVMwzo0gnOYFESIURFOlCGfKgpHUceUWT4Cvls05bPOyuYlVU6WHbNveT3QnHFfPmh/Z1dwHmufjATc8DIN98GMj3zx0MGk3TAoqdElyZbCOOHarlVhWLjgoAxVAjVgcgb+WgbM45xlYNThf4wan78z6fChft1nb1FWDF1G77toGL4iXOrcNE3uX2jgGOlXLjzeMaJYvc7Ok6kIb/mJET7gPD9+xSneplcEJSUs8iJITSX1BbO4d0WWZC2EDFkN+4ph/de8Jd/7er1wV1/26hDi+G8zGLvag2x7E9f7FoYbubmc8ltMTMlpcKKOeqnp7Pk/I5rF935bLbSYfxyJbpDbZ+iu4No6jir17/A8AAP//", "base64"));
  res.write(new Buffer("AwDnGgjNuwkAAA==", "base64"));
  res.end();

  return __filename;
};
