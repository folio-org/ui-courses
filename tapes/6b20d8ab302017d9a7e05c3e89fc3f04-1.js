var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId=="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId==("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094") and courseListing.termId=="cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b") sortby name
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
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courses.. : 200 9287us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXS2/cNhC++1cIe61Z8yWK8s2xC9Ro4gRNgh6KHIbk0GatlQRKcrMI/N/LfWvXa9ebFmgvWqw432i+efPbSZZNbDPEDrtJdp79nn1Lb9K74OZ/J1pQIQ0FYnzBiJRlToySnHAsS+0LzjB3k9MlpIYpLkCXUNmhGrqMUbY+dNjZGNo+NPVC5g10wWYueI8R6z7A/CSD2mWh7vE2Lv5vwS3EfprkrpdmMW9Lxrgk1nEg0gOSElASSYXSTtNSc/cU/N78gbafK1iS3NI8Qt+Y6Dvo73CaTLXd9nSf6XVtq8GF+jYzTX+XtUPEBU9o2yqgyxL+bgSfYg8OehibOY9RROjRXaXHQiunnBEqCGWfKDvP6Xme/0gF/YHSc0o32hJwaN0RwBXucfH7uPLgMj/ehq5PLFYRsFQYa0AQUECJ5DkjRjBFqBLMGI7K803sd/DPB+EIlQkU8TYpjBBXBuHXHmMN1Uhk/WpPgm8lOowPwWLbhE1qCZBU59wRWfr0cJ4TYL4kCrmSDBSWzB9W8JTZlttRWndqKUSbXWF3n7HxuW3c8ty6nfcudLZ5wDi7Cl1bwexmrGeollW2UEdI9jNU1Z8wG+PbYO+H9m1jYZ2/fRxwJHDXVO7jHVb+p69tiLMPGEPjdjnPzRjiRoE4HZ/Mqzs+bGLyG+J9N9kIPI6+1PXg/ccqtKvG9OVkT2ZSrcxc6cqF9WWuPLHMeSIZNUQbBMKL1Lu4tVDYbWVswC9F7SiN46hd1DV+PRivXz6fXV6eXV2fXYyPQ3dh+/CABxwe6lQ2/TDiKSkipRYI5EwTaWRJDFI2rxPtKEiwebHzbZi2Q7cCK259oUxBkvV5SkQhSMlZQdB5yS0y0FKPwVUwqcZmaxe7QmsqkFigcv7pZASmZsmtEqbkMhlkdtIphmlCf1xWyYd5lXxXOXQjBddulRCv03Igb1IGTtdtzDE0BboU0gUhBaSkoiCu8AxykTOvtoQWwJfy5ShtO4Mk2DvAagpdxikrJ7tlEPtR92YlYZQwMZbB2u1JcEKLyRPiy0b8adbiir7PU9IgamKYtmnacUMMtQlvqC+F03lBR/S38JeccJTOsRPe11Wocaeb7Y3SmyZtB6TF2KUuZptp29RprD/lOa+ZONi+iUtDd1abHVsVswrKNO25SdVQUEu0VIIoWUrwjlGNameYpkRcuc4U4BQkcoVwIvUGpKkUUmS0t8IZiXmB9iDNTzCrmniavQv3uNsi/tGUXeg4vDy8cn1gmj1ZH165QGyh21a+icoBv5fWaq0xJ165Yu731MIYE0TQ1Ny0N6h2u9DY7xzQCIep1HNFJGhDgOcpDDxVGRpkqpCHezLcQnTJ7+BucT/T/nPn8wO72yudz/e3t79xPsc014B7UhpXJl7SEWPRE1X43HOl0Rn6jPNFXpSaMSSiKNNAtClu2qQaAApU21J6FM8MRAfT7jS7vIvJxZBd/L98L4vv9v0G+tT32Zd/Y6lnnB+11DN5zotzxlNNimeBb2aft0H10ljnVOpfpZQkF+mOV1phiYACtHOFtGl3eeFicDNMDcblPYoLma/X/i513tS5b7a3pbC50R1yyOvckas9Vq9rUBvYyZrGKj6Tvumh+hVtE5eLBTt5/AsAAP//", "base64"));
  res.write(new Buffer("AwBa767oFg8AAA==", "base64"));
  res.end();

  return __filename;
};
