var path = require("path");

/**
 * GET /coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c
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
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:56:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c : 202 7301us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/reserves/58e857de-0d18-46d0-b607-781e180ce95c : 200 27180us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxVy27cNhTd5yuE2WTR0Ob74Z3toMg0gWO06SIIsuDjMlaikQRJk9Yw8u+90mhGitMCBrorOgthQPLce3jOIfnwrCg2ZdoUF8VGWbDKJCA0MUukTpQETQ0xlgGzNIJTcfNiBMRm3/XwpuyHsv60PaAZlQ604SRFLCGjiSQ4FQik7LKmUceQDuhygN0MSjqbyIInnguDLRUQJyGRLAw4FqKWR1Bs2hLSFqEj8AGHcDD4LjYJplJSCWeNpkoKKyYMLsDlbdP57v5NE/1QNvXcV4mYndKZRJYykYwGYgN4wk02jMfoTaT/WONt+AxxWGisFHx6WQTVfnegflnX8OcyftrS69/Pr6/PX27PL5fJsr+MQ/l1WjB0e1gmanRj2K82KSkApRHFVaOfQToSgDJCtbCJeumjMquuftfu+xmqecxGB0OQsyIyCUEcZ2Y0U/IIzFtpF2hVhlGfo7bJWEsFkOipHNsiAfBAeNQiOC6RTFiwbVfuEPsbdF/LCLdNWU/KboSX1CqeiHQZPylz4ll2RAPXknmN8chLlX4F36Z+rPDhiTWKj1ORb7PbLXQ7X0M9/IvE/FDj/8T8hxODGlYH9a+6Mn2CofilqaF/3hdXPtyj5ndQpNJ3JfTHgMSmHroy7Iemmzs//GDxzyVUCa/XF8UrqKBem30C3+Did/ctzDry4CRKxkiO3hFpHbI3ghKUFhR3OQP3mwP34uMxq/tQlYeUPmIyzfR30B0SV+UOUnF5Vryum3YlZFv5eGB8A38U75vuyzKX/ABv8+33LTacMv2YRvRVdbPfhbnb7a94keuzrVTWFldGumICneRr76dl1/inOF32Y559HY9qmBySSlYSzRMjEpUhLkpF8CFiRjhnw/y2rKCvuvlcjgN0+Z1a3zWTKcfU52CCoZmRYB0eGMwq8c7hgQEZ0AgegsrjVqesrF8SX698AxsEw3QRETgyFWPquHYkJScYjYEnCpu/r/D4ZjneK08uuY7c9fSsFx2MhwPTeiK+g8Gjl37VJ3aA5qaX+JlN5Rg0Q7h9R8WFUBdCnjnhfhrVOzbat+npmLH5s29/AQAA//8DAL1O1KigCAAA", "base64"));
  res.end();

  return __filename;
};
