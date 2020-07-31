var path = require("path");

/**
 * GET /coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:39:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60 : 202 7421us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60 : 200 18941us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKxWS2/bRhC+51cQujYr74tLrm52UqBCEzdAnFORwz5mbbYUKawoI0Lg/97hQyYt2a5cVYcVwdnv2/lm58Gf75JkVvhZskhmKlitmBbEZDkQ6ZQgVjMgPuVBh9xLo+jsfQuozAo6yKWJ/t7EvxMbAXxR3fZ2DxsXi3VT1FW37eYOEmciJKbySeh3JnVImq3dloWHqjENbPbYtYnNCt8te7dYqlQumSMpc+iWl44YQzWhYDizlGoqzSH0D/sXuKaF/0TDKPFkrqnIX5H0LvnqCqjc4OUzGpeVK7edsFuoy/p29z5ZQxO7x0732pQG6qrp3uxZVtAYbxozuoovXQSMh/+IS0fNKaeEZkSwGyoWIl3IdC60/IXibyBC1HbtX0IxvhB6IeVcUPo86mr3bQNxiLilMrcKDJE8T0mqpSA5TRmxSkpuQiqVprOO4AHXhy72rt7GDXwqNg2GYODJtTZg0AVguceEcopY7jkxngXpLbNe+Nkx+qXLO5kOIRFukSyavaR4ecUo21vhRwOxMuVg/PHEWNbOtLc6GIPzSjpgRGmdEpkHSnJJgeQ6BMN5novsCHqoYNTwBrZpCn42RZV8KiwK2o1mV/ve/Pu3iw8fLj4uLz6PxmJz6ZrivtvQxC2Mhgqj3GwnEtEBoNQZYlKWE2mlJhYoI1SJ3FMjjUuzyalmtd5uBqjiLmTKZsQ5g3q8EERzhlfkg+So0+QyH6Flr2DApj7LcyqAOENleyw6AAYIx85jNZfojB2x61isEPsV4n3h4EtdVF2AZ8JImqccE0IHXHzAhGBBEwVcSWYUaBZGls0EvvSbluHPEzmS733KD3eNGbTap4jOGOdaEk5FRqQMGdaLUoQzZUCn1HHlZhPYK+lxOtM0PW5iURXNLmlLfqK1wcZ10A6QWY07oDpsF3jUvrQHh/vSvNmtYVCrWSrbBkGE0pgtHLCHppg8LjiwgUqgWs6OwC9rfgPfVPOywv4aN9h9H22HLfm6TuqqLCocPvVqXVc4GJ5qa0shbl1Tx969IR8OPbTBYecTmgCOQSIp5ojVWCR4NYJRj386e8bD34qybIfeFZTYGMYN1sTHymVcyHRa0Wd00RcHyusjhaXtcEjlXOvs6XAYcW8fDxOO1wbTa2efN5r64YRr8v0/ztreOannkh9OzbPD8u9Befbc/3daX29XFmL/Ifc4AbFFuraCrh+/8UpY3/Wm4wiekFh0zp5+q5wbvRMS6vjMcyL38O7hHwAAAP//AwDfBQEKKAsAAA==", "base64"));
  res.end();

  return __filename;
};
