var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId=("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094")) sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:54:39 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses.. : 202 7122us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses.. : 200 39015us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYTW/cNhC9+1cIe63Z8EsSmZtrF4jRxAnqFD0UOQzJoa1aKy0krRsj8H/vaD+167Wz6wRoi9qHtVfkjDjDmTfv+ctRkox8PW1abEfJ6+SP5As9oWdF6L+OjOJKOw7MxVwwrW3KXKYlk2itibkUmIbR8dykgjHOjE6h9NNy2iaCi+ViwNY3xaQr6mq25ydoC5+EIkZssOoK6FcSqEJSVB1eNbPva+MJNN2Y9p3PjyWit0JIzXyQwHQEZBZQM81VZoLh1sjw0Pi9+xN91zuYB7kO8wB/w0DfQXeNYzqqb9er25GeV76chqK6SlzdXSeTaYOzOGEyKQsMCdlfD8zH2EGADobH7O+oQegwnNHHzKvkkjOeM2k+cvVapa+V/lEp+wOnn5UzsptOwv52C7P72e/7Rf7m1fG2aDuKYZF/z5XzDhSDDDjTMhXMKZExninhnMQsytXNb9g/fgUHuCSjBq/IYQPN4kD4ucOmgnKwZfloa4dc72ixuS08TupiVVgKNDepDEzbSB8hSgYiWpahzLSADK2Iux08jGwd20FeNzqpaHxyhu1NIobrvg7zdR82noei9fUtNndnRTsp4e5i6Gdaznts5o6x5A2U5V9wN7SfFP5mOnlbe1hWb9dMcbDhui7D5TWW8efPk6K5+4BNUYfNmPtjTJuVA3U8XOl7u7ld3cnviDftaLXhfvCmtoMYL8tisoClT0dbe0bl4pgLX6ny0aZZZF6EyLTgjhmHwGROyCW9h9yvG2Nl/NStHeRxeGsnVYWfd97XL7+9Oj19dXb+6mS4XLQnvitucUfCi4rappsO4tQckXMPDFJhmHbaModc9H1iAgcNPs033g3jybRdGGfSxzxzOaPTp1SISjErRc4wRC09CjDaDI3LwlGP3S1THHJjuELmgev+1XQIJKiUPlPOSk0Hchvl1BRjsr6cd8mHvkue1Q7twMF5WBTEfl521A1V4HgJY0GgyzHQlc4CyoBZrnIW8iggVamI2TqgmeFT9XKQt40xUvhrwHIMbSK5sKPNNmi6AXgLywRnQg33YBW2dkhC+NGDwOdA/PFugovwY0pFg2iYE8bTrJOOOe7J3vFoVTBpzgfhr82fSsJBPodJeF+VRYUbaLY1SC9q4gZsgk1LKObr8aSuaKg/jLPvmWbqu7qZH3SD2AzPKpFaHGRk1gVLI0cH5jxGluUxjTIzGNzmLKVCXM6JNLdGCGQqt4QNnlvCBooVOHDjrY6oHsGGAOP2ODm9bmh+QXKyCRPfNGlnPnbThz0JRJabbQKxJ4VYWa7BfHUvu6okEz4DSyxLOsKhnHtmdKZYpq2GGAQ3mD2SeZdDyIBSnaugCJWREwhRT5joVXAa0xz9zsx/hLuybo6Td8UN/quynlv9zKyvLPfLuvXeGIMpi1nI+6zT6BBCMcVpqJjoMNtE/2HWJaBTAQli04xpMFTqMqVLkIRu6FBkud5d73AFTaCsQ7jC7Q7/x1NvZPbM1K8sH6Y++fQ9yHyqHhxtr4Ot7J4g8xfTscNmrnyk0umSqreEloS2F2t9U6w02K5Q9gMVlW8Gsh+gLK2OlkGsSnpZzlwjUMsbhroXbUh0yFkTiNtonaOKFlZMaIc2lY9r05NwC5UnafYiT/+j8hRjKjES9VA9NdQpZ9ZmxJty+lPS4LHhYHm6v8un5OmATz2mTwdbXgTqi0B9Eaj/Y4EKkFoIkRQKEuPVRHmZoQeMpAbpLKfzFAb/z/qaQD3I27Be3hQlpSnpwfkpcdpDt2CbAnZTnPY7FBN6D3FqRaq5Jp6pMktlJNFTQVFV+ejRRZr93K4Z557i9CCfwwScV8lcd35Fn9YzEfsMcfp9KGMqn0cZl3b7UUbSenb5jgeU8bIulxT/Gyij1M+hjFJvU8Z5Xkdd3UH5K/q6mTenPLr/GwAA//8DAMjgAP35GAAA", "base64"));
  res.end();

  return __filename;
};
