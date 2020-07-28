var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzM2MCwidGVuYW50IjoiZGlrdSJ9.kWaTM2kgaEya27jFXtD-Ws8tRNQBjhUUb4jl1ALNYjg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/copyrightstatuses
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:57:12 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/copyrightstatuses.. : 202 7171us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/copyrightstatuses.. : 200 3422us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKzUQW/bIBQH8Hs/BfJ1fRU2YENubXbZparW7TTt8B7g1ZptIptUiqp892Fn2aSm1rYsPiDZvP8T/GR4uWIss2GzG5pvT/ExYtyOfszYin1hL2kuzTZues24VEUuKg5alx5k7jxgTR6UQk2m9pUuMLs+RHrs/By6bVs2dx7Z4Ec/PHt3rHF+tEOziU3o59IHjEPoWYc71ofIpjUxjAzb9pjofESHEafyw9qmtQ8eo3fv0zC3KXjBgVdQ6E9crIRaCXlTGPOOp+dno5TabtxSKs9Xqljl5Q0X6u3U3e5z2sqHA4sXpG1ZKSCbbBShBs0FAVFNiI47QpPNDfZp3F+/VkVltLMWClHVIF0lQUspwaBNrrVxEvWJ6nrN7nZLjusJpHn2bB26LvRjQoxDQ9upgLWN9f3o/19UVX8veppa9sBcq1LaGjRpAVK6RGGVBqqMqHMnXKXk2x5wvz6LpA892PTdD7bB9nJC+h/+udPUshBp8iR5DWY6fdKp9MdYKoG7vORlJU2BtCgEj7eXQBqfcEjHv22++wuC8bPA+J/Aaip1rQyBkTyByRJBG+HSwEvjckXpvJ6APWwpbYy50GHTL5HdB/br6rzYXVXl5zAcU78Z2NepQxZDxPajt2Fw87WurvY/AAAA//8DAMFn8sn0BQAA", "base64"));
  res.end();

  return __filename;
};
