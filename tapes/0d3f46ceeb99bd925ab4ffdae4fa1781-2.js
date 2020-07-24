var path = require("path");

/**
 * GET /coursereserves/coursetypes?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:17:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes.. : 202 6455us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes.. : 200 3480us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTS0skMRCA7/6K0Fctrbz6MTdlL152YXFP4qGSVLBhJmm624PI/HfTPSviY3DZ3RwCqdRXVD4qTydCVD4/jBPfPA48VWIjbsVTiZZ4H5Zj1Ulr0LQOdN21YBR7IOsJfPTsIhrGzlRnByTRjlfoOomBxymnl5vAkx/7Ye5LaEm43G5Fn+Bt0o5nCjTTknFoYmlvZJo5fCvbSipUCNiAMjeoNwY3sjlvZXeKZf0uVKiHIRyjlCzIxtpzbfBz6urx18Tj9eH9gXSH1kRovGGwNTE40h5ijRa9JCZF1VpgX/b92Tt90WKtmVtwsvVgUDlw6DuQDmOnQ2sbdB/0/UjbPvExd9/zqzrh827IidP87xJR/rnEj9RxBagtsmokhODKBAWOQDW1UCxGE1E6F8MRBRdfDtJVnu9FXpMFpfCZmek/zJf6GzUv1KsacbdUqOY80/Yn+zyG9c/pk/0zAAAA//8DACogeEyLAwAA", "base64"));
  res.end();

  return __filename;
};
