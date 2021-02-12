var path = require("path");

/**
 * GET /locations?limit=1000&query=cql.allRecords=1 sortby name
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
 * referer: http://localhost:3001/cr/reserves/6299e969-9c44-4a6a-8c3f-501037a68bdf/8c5f03a7-d80f-48e4-a86c-c7897cb66364/0b285e71-198c-4c4c-a93d-2c3a30aec74e/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-inventory-storage-19.5.0-SNAPSHOT.534 http://10.36.1.253:9137/locations.. : 200 4135us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTW8bRwyG7/kVC18bxvM9s7q5ttsaTSzDSdBD0QNnhlMsIGuF3ZVRw/B/D/WZILIcx4APLnxZrDh6OSPyIYe6fVNVB5M24dC00/6gGlV/V7dsY2uTFx8PrE6ltq5AkrmAkSJCiISgfPFSpYQ+iYO3K8kUr2gpOppO6b+NNbV5Zf3z8+Hx8eHJ2eHRZqnpj9LQXC+Xh25OG/O0H5phvjjT2eoURhAJkRDQygAmmhoiCQnC6ZAFGkzWb/fDq9m8XwudSsW76IFPasFkraFW0gPlYlQiicGEjXDSxA67m7XSZh+C0AQJhVlsyZsTEqjkdKyV4YPEjXLWNVes/EjddZPoom2mw9KHRiOCVRlMXfiRiwKUpQZHyhmJjmpZNj76b8RneZ2Lx3mo/rnHx9rDZumKBsw44MK6yvAiVB3hQPmEH8vzKqE4pgqk+iT0SImRkO+8sL8IfttkmWXzWf4J2VJ1x8+7t9+xVVJ2hpMArq45OaEICJxpCHUpqFQI2ssdtj5gM63er1K1H7EPr4i9HMScfxJiX2X7EZPBIFIwnNXI7Ss5hGAjguG+5bVQLmW7g9h4OmmmtAPX6caSqU9dM1vAs1z43FNV2q5ql7qqo76dd4n67febPrXX1N2cNP1sgjfn92/0/KgaL0qROUOtPcdActXFUhMLY+JilNrmcj+qSVlTx2hA1smDKSnxNWAV6JqcVCX6HOlHqMaI2pHNkK1jH7ZwLmTKEJUN3hivSIuHUX2Uh+dFtVZPQnUr24+qt4F/RkxAKUlOTgyAkZNcfHRSBKVKybuoXv519nt1+umP83F1fLK/H45f++EL6ofGPwmyrWw/ZFEZ6fnSBWmcA0MyAwoVQHJhcau0GYPfgeyinc0n2FWXhLmZ/lsdt5MJpWX72wvcxStwLwc4L8OTZryt7IEZT5usfHKAgSIYJyMgj31gM2GQ3kvyu/8fPp4ej89Pqt/ej8eX+xFTr4i9HMSce9rF6X58cQrNY0HmWcCh5J6meCzBaCwIXYeoUfPAsIvYQP2wg5YQ2/TvndkWwmrp5n82tmVObTNZ5vuWg/wwkj5ZHk7qAkVndhysgxj4zXmpDFcLfhPK+5F8lIfnQFKqkXYjLd55J79Hci379YZH+m4dQ++1J8lDpxdx0besANSaz204elw3Sib/KKhXG1vum7XeUws/v/HXslgF5GBoB5xcUmq7Vaj9m7svAAAA//8=", "base64"));
  res.write(new Buffer("AwBzFYwH5hEAAA==", "base64"));
  res.end();

  return __filename;
};
