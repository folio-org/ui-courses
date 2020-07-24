var path = require("path");

/**
 * GET /item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd
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
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/83d1901e-9727-4ee1-8fb1-35045e9230b2/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 202 6352us, GET mod-inventory-storage-19.3.0-SNAPSHOT.451 http://10.36.1.43:9168/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 200 1570us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAHRTy27bMBC85ysEX1sGfFP0LXEvAYI0CNJTkcNyuWwF6AVaDmAE+ffSkpC6bquDAHF3hrszo7erqto0cVNtq020yaEIwEAqx7Q1xLymyJJy5EVAq0PcfD4BfuYV0kzU8Y9H8LU8tLHpf+yfCIcc75bWFFxwPAkWal8z7aVm4L1gnHSwSsgQTFrgacgd5bu4P+G+Vy/zYYCMQ6SZShvla2e50apWC4ZSIpyaV9pB2z4cukB5N3Tj0FM/zTxvpav04Ud5Znp8Kiz2+k6buq5unfaV5MJuSu/7THskyDsYp2boz4fBYTyesezKZ7UO0s/HX9NjQ0jzzRuxVoaJ/lgJm4yHFk7kD5e1/QTT4XzwHrpl+ZtXaFoILf2esoOJcgPt83GkVW0BRgetBJOkE9NGRuYRiqFIZC16qL1cxhopd3CS6X6A/oxBBq+xGMMSgme69DNwijOuiIz0RW/pFoaSgXHIkI8XDFQHJQRYpoIUTKtUGKT1LEavBMcgI6cL9+4HnPVYGYzC5I1NDEUsWwgeWB0ImHTJCYkIDtfIUVsI8tA3eINF97+0bPZTU7zflQhdBKujCSJMcB6STEXR+KW8Fim4LHs7JvUzV1vlt8Jca6U+nTI/X18whzH+DyPs1ritMtfS6n9hbo/f9qe8Lz8hKF+CnZhDTczY4lkAhSyVoHIUQCBhdv7q/RcAAAD//wMAhTHd7rwDAAA=", "base64"));
  res.end();

  return __filename;
};
