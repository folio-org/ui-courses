var path = require("path");

/**
 * GET /item-storage/items/9ea1fd0b-0259-4edb-95a3-eb2f9a063e20
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3/6d973b67-b0ed-44df-a169-67b46365264a/c7946c2c-1180-4727-b97d-6c66f76d064d/9ea1fd0b-0259-4edb-95a3-eb2f9a063e20/edit
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/item-storage/items/9ea1fd0b-0259-4edb-95a3-eb2f9a063e20 : 202 6248us, GET mod-inventory-storage-19.3.0-SNAPSHOT.451 http://10.36.1.43:9168/item-storage/items/9ea1fd0b-0259-4edb-95a3-eb2f9a063e20 : 200 1394us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxTy27bQAy85ysEX9s19v3wzXVSIGnaQ+Gegh64u9xEgKw1ZDmAEeTfu5bk2k3aS3UQJJAzJGfIl6uqmtVxVi2qmUNgKVJPKFeOSIyeOAWCoOfJAdUCOZ19PAKeuglS97ih50dP4dzEun3cfceQu3g7pqJISTMhiHfAiYwyEGDBkRiY1SbKmJgb4Sl3G+xu4+6Ie6hmwlLNtZlVP4ewhy7kiAPpkkkrjBBSnGpjShj6+hlX0DTf9huP3SpvtrnFth8IX0pWyQu/wwPR+otiVM2ttUxV82qpbMUpldXndfX1Znl9M5AXWH/Y4jSQYpwZAYb4SItcjiLxxgjCTLQica9FwllBvY59tfsyFPR1bgf089zQRZvnjEyNh6cut7nJj4chzpyVizto5+Ru3+KYckDoVrA9cTxMgoS8PVyMwsbkNve4+yOt7sK+GTr49ja266HfX8rTwmZS+BnqBnxzMcoGeuxqaNZnLaKDAJEnwgECkV5a4qgzBDV4qxzVnquxrS12GziacZ+hvWDg3smgBSMpQFHTOk7ACEqoQFTcFVe5GRnKym1zB93hLQNKi4YdDUiCyFC+wCVLuLBSec8ZBfmOIQx6TAwpRC0DFkucU6WHRImVxVZbygPntqwae7Nl/8/QFILieB2WIeDunRv1rq/Ljq7Kpp8vwRjlNURJXBCFPnJHfDKW2BIA5yXnXJ/OpIfHS0PL733hnMqcvcQeIvRweRkdFoPjdXmNulJebDCEyzUVC+EWTM2lZB+OB386i/02/gvD9EKZBZdz7fTfMJ8OP3bHax/3CISjSiZigkSiNJSbAhFI0lTRwACBw7CIV6+/AAAA//8DAEGvZ166BAAA", "base64"));
  res.end();

  return __filename;
};
