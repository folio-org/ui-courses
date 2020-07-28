var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:49:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 7361us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 21464us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTW/cNhC951cIe63Z8EsUmZtrF6jRxAmQFD0UOQzJoZe1VhIorZtF4P8e7rd2s0bXzqHdg4Dl8I1mhm/eUF9fFcUk+knxpphoQYW0FIgNFSNSmpJYJTnhaIwOFWdY+snFEtDADFeQK6jdvJ73BaNsbfLYuxS7IbbNascv0EdX+BgCJmyGCEtLAY0vYjPgXVr930I7SMMs77pZB8SCM4xxSZznQGQAJAZQEkmF0l5To7k/hr63f6MblvCv2bBP7mxf4/TewTDFWQ7R9VvbcX43javnPjZ3hW2HadHNE66yg66rI/oio6c78AwH8DDAPry86BLCgP46P1YeOeWU0Ipw/YmKN6J8I+TPQpifaP5tHGXUvPPno1agx/x8XFXLtfPU49vYDznuTa0dFdZZEAQUUCJ5yYgVTBGqBLOWowp8c8IH6KfKfba7DEl4l50lSJtQ8MuAqYF6t2G7cGTnW3uP6SE67Nq4o44ASXXJPZEm5IcPnAALhijkSjJQaFg4BT/OZ5/RMzwedEhMrrjG/r5ge6tr/drq/GjVx961D5gW17Hvaljcjn3M63XnrFwRUvwGdf0PLPboLrr7efe2dbDl5pDmuDNP29p/nGIdfv3SxbT4gCm2fpznMoB52oHFxX592anpYVf/PxHv+8nG/Lh7Qz9ACB/r2PXLXX8Vn1+N7JN6E9jGRylcMKUKxDEfiGTUEm0RCK+y9nDnoHJbsu+gT5/NM7yNz+ayafDLiVP5/Y/XV1evr29eX+6Nsb90Q3zA7wobm9wIw3yUm6SIlDogUDJNpJWGWKRsyX3tKUhwZTV6K8y6eb+BKu5CpWxFcsxlJpkQxHBWEfRBcocMtNR7aB1t7prFtqS+0poKJA6oXL42B4BZ5rhTwhouczB2RJcUZxn7cc39D0vuv4Dm/Qh+4zcHf56PI35khs22UuQZ2gp9Pr5VIgqIoaIivgoMSlGyoLaJrGBP8+IZng5kP7opYD2DvuCUmcmY4mkYSS4zhFHCxH4HNv7IzrMqTw5SXQvop0WHm4RDmamBqIll2uWJxC2x1GWspcEIr8uK7hLeg59O+xn+xmm/b+rY4EiPjkbdbZtnNukw9VmHXDvr2iYP3MPclt2Q5m5o0zq8DSWOI+SYWxZ4IMZ6k8eD9MQ6DERVoQxcafR2POsyzba6XlZGM4ZEVCZ3uqMmd3rODyhQ7YwMKE52uodZf1FcTVOeNFBcjpv+B2bhysOpoX7mWFeVPhzrZw72HW4rwpsz+J4JijkFJt91uM16UlFHtFSCKGkkBM+oRnWyzrYCryAXthJeZEVFmsUkc10HJ7yVWFboTtT5EyzqNl0U7+I9/k9qXBn5ohrvcP9WY+Oc1hpLEpSvljXOcs+YIILmQaCDRTXW7HGNOaAVHrM4lopI0JnGvMwl51mf0CJTlTzFZbiD5HONwd/hYcf+p4XWXL2o0DvcYaGLzz96aS6FesGleYc6eWm+nc8spvUXBReyXF+J+6x0WSVv998NcfNN833w5wmDqMahnycKW8wy5FeP3wAAAP//AwDShAJr2g0AAA==", "base64"));
  res.end();

  return __filename;
};
