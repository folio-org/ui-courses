var path = require("path");

/**
 * GET /coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/instructors/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/b9a4975c-61fd-445b-a304-5c699c2e8cf9/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:40 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364 : 200 6539us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWy27jNhTdz1cI3nbokBSf3iWZog3m0QKTWRWzuCSvErWyZFByMMEg/z60rESKHQdOM0C7EQxfnsN77pPf32TZrAyzbJHNjJcFzUGTYGhBhEFBwChPvDZWe6dUrsTs7QZQwxJ7yCnEcAPxn8xFxFDWV1t7wNbHctWVTd0fu7zGzEPEDOqQFduTWVNk3dqtqzJg3UGH7T12BbFbpv8utm4xqZQRzBPJPBIRhCcA1BKKwJmj1FIBu9A/3N/ouw38ezKMEo/mmor8NZFeZ599ibUfvHxC40Xtq3Uv7Aqbqrm6fZutsIv9z173CirApu76f+5ZlthBgA5GV9OfPmKKR3iXPj01p5wRygnjlzRfcLrgeq6M/IXSBaUDU4KtV+EQjOkFVwvJ5jRXB2Bnt19ajEPMtc41MhmIpk4RGSQlkOcFKYQOzrKCM69nPcFd+t710ffNOrb4oWy7FISBR3Fr0SpLrBeCCFBAjE88kjKaa1DGhWK2jz6UvqPpEiTiVSKLcC8pnp4xyu6t+K3DWEM1GL89MlaNh01eB2PhgxIeGVHWytQXBSVGUCTGFgVwbkyu96C7CkYNL2CbFuFHKOvsQ+mSoNvR7JuwNb//cnJ+fvLu4uTjaCzbU9+VN/2BLq5xNNQpyt16IjE5gJR6ICCZIcIJSxzSVD0qN4GCAC/15FZYrtbtQ4p9oZXTxHtIekKeE8uZJhgKwZNOMMKM0GqrYMDKoI2hORIPVGyuTQ4gIOFe5c5ykZxxI3YVy2XCfsZ4U3r8synrPsCzHAQ1kgcibJE+oeAEWGGJQq4EA4WpYEeWdgK/CO2G4a8jObKv25Ifcp0qaHlfIlYzzq0gPNUhEaLQxFClCGcK0ErqufKzCeyZ8jieaVoel7Gsy+42Sz0/ae22S6NrOg8oSXHmajyBddixp6vo7JHObWte3q5wUGuZFFQYR3JlU7VwTFNUpuLxhUdXUIHUitke+LDmF/BNNV/UacLGNs3fB9vuUP7UZE1dlXVaP81y1dRpNTzWtmmFuPZdE7fuDfWw66GzIKyWnii2KQ8hXZqHKZTSpy72HI0v7BMe/l5W1WbtnWGVBsN4wEF86FzGcyGnHf2KKXpwpTy/VNJ2kHyR67mlu0tlBL58P0w4nl9Nz1z+uuW0XU+bbO9llFmeW1d4wnn/2GFAHLWacA2gnfRoMX8io7/Ns/fz7Pwa29TG3bT0pjlV6cVE/xc5tXPJ6X+V0wOX/6ScZl//5Rtq8I7NpTK7j6FXB+aIsDx58c99hX1aLx3G7RP94WWTVp/fTMZPD6/3ClfXW9N+DI+KoMntIyGvjd9R0du79DWxu3tz9wMAAP//", "base64"));
  res.write(new Buffer("AwA99yA2BA0AAA==", "base64"));
  res.end();

  return __filename;
};
