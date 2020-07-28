var path = require("path");

/**
 * GET /coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:54:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves.. : 202 13526us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/c03bcba3-a6a0-4251-b316-0631bb2e6f21/reserves.. : 200 20533us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/bOBC951cQvm5okxQlkrkFSbsNmrTBrncvix74MUy4K0sGJSUtiv73ji3HlvsRtKfFAisYBkzOmxnOe3rmxxNCZhk6yA/QzcgZ+Yt8xCVcTGHzc1YpIVQwkqqiKKgMQlCjLaOKaydNKKrSlLPTEeLbIXdwnbo+NXdXI96zwnlnC2orRElRcuoKXlFWFdw5AVUU/AmfeljtYJyxwJmLVERWUWkR64CXlDlTOhFMNFAcyq4ThCsEb6Bj+7jsbPZtgG06w/DZxeMWhq7bbPOH69bbPrXNrmpZ+GjKKlLPQ6QSG6DagaVCRcWF91b557K8dX+D76dNHOb4U6kR1tjV2Pp508D76c7+UK//WFxcLC6vFufT7dSd+z49bEP6PMB0q0Fm+mFyYMkAGPOW2pJrKpFRHDPjG3Z0YFZaX6qj2na1HroduBI+qsopit2XKA3UhxFcUQhRCg/caqmn4Dq5zbSeZh2U1qwA6i2Tm9LYBFigwleFM0JiQ26KXue0QvTvqNTk4bZNzXbSs8JKpksRqDQRv0IU1PJoaAWiktxWYHic5ukmCa7CTvM/loW826X5tNfAGvLKNtD0Xygp+lBJnAGtjMHZ6MioxmFTbWK0QmhdKD77fpbnlPRTqadKurGpIdcjCc8L6uZ/Qf1bgsJ51rsXn3SAquiTJ4/gyKZdyAfN+Lbpc3JD3+Yj4/7SPfq2Se1wSn7N6a7NqTtmfp9j+WENTzQAM0GqQE0JAlvXlmo0axqVUk5DrILmz2RZwvtxkN+JeYO9TaoJZyQyxGn01qCcDQ5KFYwik1AK1DQIO9uP6ZuH/NM25JXNK6ihOSUvs23++U+fkrw7OMPg6jR6wlckb/e6exTF9u2+WpJb/Cc/InhdWz/O6MKuXE7hDk7Jje26OZmGBdvD23h7XGvmBWNyGpbbnTRv95W/0bK3df1mWLldX8vXJWflXGvNSzIn56Umm7zk5ZLcvDi/fHFQ9JDTFnHf9+uzxeLx8XFet35+1z4ssKuQ8qJv/QJ8WjO8fSwwi2KCSWHm9/2qPuSBZsA35XCOaYV67Mm6GkgbyYYwtN2OtE198MStr9nGP5FXulgoBuizaEwoFeOpFiBpyRWzTlhmC/M1+FXeGfZmge0fIQ6h920d8Kr05H9QxFhxdD1n7EaS0qNneEOD57pSAU2Em3HiO7+YraC3SJ49uvj4DMhnuMSvUXs4JcoUFXrJirOixM+cc/HL8Z1oWIcfR41NnOyJn/Vtb+vfwLd5dEB+8ukzAAAA//8DABnoaDdbCgAA", "base64"));
  res.end();

  return __filename;
};
