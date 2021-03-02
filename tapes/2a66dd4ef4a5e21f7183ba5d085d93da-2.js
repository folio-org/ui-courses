var path = require("path");

/**
 * GET /coursereserves/courses?limit=500&query=courseListingId=="79702b52-0d7e-48ea-b7ef-a4e74289f000"
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
 * referer: http://localhost:3001/cr/courses/c62e7511-dbe4-44e5-8592-9777d409ed42
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 6419us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALRWTW/cNhS851cIuja0SYqfe3OSHhZN3CJxTkUOT+STrVYrCZRkxAj838uVtGvZuza8MHrZD5IzfDN8HOnXuyRJXTOEDrs0WSV/J7/iSBwr/fZv6hRHLRkjPkdBhEBJjLScWK21F9SiFzx9P0Fq2OAIuoDgbyH8m+QB0Zf19W6Fx86Fsu3Lph4XXt1g4iBgArVPimlt0hRJP+RDVXqse+hjXXt0C6HfxNH1VByTShnBHJHMIRFeOAJALaEInOWUWirgEPxn/g+6fkswSX0QewLfUu7vkfgm+eZKrN2+2iNq17WrhlHiNTZVc333PmmxD+PP0YEWKsCm7seRB54N9uChh2XJ21MLGN3xn+LHSM8pZ4RmhLIrylaSrqQ8i0O/UbqidM8WgUPrnwMyvRJmxfSZEepZ4Ie77x2G+QwKkTvvFSVghSAys5JYlzmSgQbjvRbOYzpT3I/f9/OJTF33uez6aMnMpq2mPJecUK/jCRgEkmssCAjUghtb0H1Fj/HPH+oJlBEU8DoSBtjJCxcfGGUP8/izx1BDNU//fDJdNQ62570zx3klHDKibPRFmIISIyiSuGsBnBuT6SPgQy0Pak5iXDbpFyjr5HOZR2l3ywWu8dOCP76ff/x4/ml9/mU5XXYXri9vxyV9GHA5VUfn+2EhNxaClDogIJkhIheW5Ehjb6nMeAoCnNSP9oZNO3QzWHFXaJVr4hxEZT7LiOVME/SF4FExGGGW4GrSMqOl18bQDIkDKrZbxyIQkHCnstxyEQvKl+g2lJuI/obhtnT4V1PWo+FpBoIayT0RtogfvuAEWGGJQq4EA4WWFUuebkGw9nOEvo4l+bG7FvsOiL212bWO1YxzKwinmY7BW2hiqFKEMwVoJXVcufQR8MW2OYVt2TZXoazL/i6JGfEoCro+ht4yQSiJvnO1XIO1f7IibkjTA9XTRb66a3HWbpkUVJicZMrGPuIYc1jGtnKFw7ygAqkV6RH4Sw6cxLl0YF3HlA5dzPDF7NNov2ySpq7KOj7Omk3b1PExc6hze2HC4PomTIXO3fLjDUEf81qKlczOrJSHeT0DT8/rVz8sXtj8/3hYXA6bHMP0jrEI3ngL3fYoLvcvIBW2N7vJY66+wlNxxpV9Iuvtjr7Cz6Mbv83NrZf3U6OlfdND9RVdE6a4Yu/u/wMAAP//AwB8IS/MBQoAAA==", "base64"));
  res.end();

  return __filename;
};
