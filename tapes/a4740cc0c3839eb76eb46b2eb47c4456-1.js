var path = require("path");

/**
 * GET /item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:51:00 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 202 27441us, GET mod-inventory-storage-19.3.0-SNAPSHOT.453 http://10.36.1.132:9168/item-storage/items/d6f7c1ba-a237-465e-94ed-f37e91bc64bd : 200 1418us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAHSSTW/bMAyG7/0VRq6bCn3ZknJrs0uBoiuK7jT0QErUZsC2DMUpEBT971Nso8uyzQcBFvk+Il/y7aqqNm3YVNtqE5povEBgIJVhuqmJOU2BRWXICfSNxrD5fBL8zKuknajnH5/gazh1oR1+7J/IpxzultSIBg2PgqF1lmknNQPnBOOksVFCItZxkceUe8p3YX/Sfa9e5kuE7FOgGaVr5axpeK2VVYuGYiQ/ta+0g657OPRIeZf6MQ00TDPnrWSVPP8RnkmPT4XSXN/p2trq1mhXSS6aTcl9n7FHgryDcWrTcF6MT+PxjLIrv9VayDBff42PLXmaX96INZIm+qMl32Z/6OAEf7iM7SeYDueFD9Avzd+8QtsBdvS7yh4myi10z8eRVrcF1Bq1EkySjkzXMjDnoQzUEzWNd2CdXMoaKfdwsuk+wXBGkOi0L4Nh0YNjuuQzMIozrohq6Yrf0iyEsgNjypCPFwSyqISAhimUgmkVC0E2joXglOAeZeB0Mb375Gc/VkKtfHR1E5kXoXQhODKLBEyaaIT0HoxfV466AshpaP2NL77/5WW7n9oy+11ZoYvF6mmCABOcL0mm4mj4Uo7FCi5L34ZJ+8zVVumt4tfGmk+nnZ+fL5rDGP6nEWJb863Q18qpf2luj9/2p31fTFNofWNqht5wViNYZrlChhgRIPCA4ObJX73/AgAA//8DAOA4LIm8AwAA", "base64"));
  res.end();

  return __filename;
};
