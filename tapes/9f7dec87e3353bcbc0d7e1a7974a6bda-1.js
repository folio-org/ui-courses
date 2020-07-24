var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:50 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/copyrightstatuses.. : 202 7568us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/copyrightstatuses.. : 200 3501us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUu27bMBQG4D1PQXhtTkCKd2+Ju3QJgqadig6Ht0aoLoZEBzACv3spuelQR0DqWgMBiec/ID9QfLkiZOX77X6ofzzlx4x5N8ZxRdbkG3kpc2W2DtPrigpZMa4pGKMiCBYiYHIRpETjbIraVLi6PkY6bOMcum0aMnceyRDHODzH8FoT4uiHepvrvptLHzAPfUda3JOuz2RaE8FMsGleE23MGDDjVH5c27T2IWKO4WMZ5jYVrShQDZX4Qvla0DXTN0roD7Q8vxuV1G4bllJMrSVfU31juHo7dbf/Wrby6cgSkFsqRQLtRcFQGMEh95AUldQzjFhY5gaHMh6u/1ZFaU3wHiquE4igBRghBFj0xTXZINCcqG425G6/5LiZQOrnSDZ92/bdWBDzULvdVECa2sdujP8vSqv3i56mlj2QGamET2Cc4SBEKBReGnDa8sQCD1qKtz3gfnMWSdd34Mv3OPgam8sJ8X84c6epZSFnXHSCJrDT3yeCLCfGOwU0MEWVFrZCtygEj7eXQBqfcCi/f1P/jJcDq8w5YK+pZbDklEnSOrCCFjChEIzloQxU2cCkM5SfgD3sXNkYCX2LdbdEdt+TP1fnxe4qdhYDO2Eg36cOq9xnbD5H3w9hvtbl1eEXAAAA//8DANyX/mP0BQAA", "base64"));
  res.end();

  return __filename;
};
