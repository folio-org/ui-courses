var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTI1NCwidGVuYW50IjoiZGlrdSJ9.14oYjZwJhilgZfYHoGrj7gWH89hTshas_MJINp6Fbi0
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/copyrightstatuses.. : 202 27553us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/copyrightstatuses.. : 200 1963us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTW/bMAyG7/0VQq6rAtmSLMm3NrvsUhTrdhp2oER5NeaPwFYKBEX++2inLYp1xpAgFwIS9RLig5d8vmJsFfrtfqh/PaaHBGk3xnHFSvaDPVOOsjVOx5UA7SyGwHNpKq7QKG6VUtxB0GArhwrs6voo6aCNs2izYbf711uMYxjqbar77pgcIqT6KbJN37Z9NzJIaaj9bnrAmjrEboyv2jYmQEgwCY//mv49FYj4mcJcMBd5xoXkIvsmslKLUqu1s/KTEKUQL5VIttviCbJZdaB4uP6LiLc+eiUq7iofiYgmIsEXXGBWiMIol4P/NxF+t+EPN2dx6fqOB7qPQ6ihYeMjDJFDU/+Ol0PmsrOQvcmWkVW+sJV2njslCJkqgFsnkYIoHGbaWyE/ILvfeWqNYd9C3S1Bu+vZm40JGIOmuQAIcx4I818QkFldqFBx660kEEiDFLTl3jhZZSjRaLXonUsY5zJm0Wsh8tMZvZctMxJK55k0gltbkFkyJKNPk6Zp33hXRWNz+MDopmnYbIKRDXGMw1PEJVz3kAYC08Ke4KTZPpdxztTeKc7JTKlsKYu1kUswb/ffqZkvL1OkfEAsBAdHC1hLp8k8MnAJBizSZg4Y33FlP6dqq9QnaL7G0A84L3h9dfgDAAD//wMAT2ll4v4FAAA=", "base64"));
  res.end();

  return __filename;
};
