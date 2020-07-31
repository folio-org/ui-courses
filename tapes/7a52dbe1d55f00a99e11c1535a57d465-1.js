var path = require("path");

/**
 * GET /item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/abd88c4d-8de9-46b8-8291-0ccf916fb89e/09427a84-6777-487d-bdb3-75235f4012de/5b839674-34d7-40b9-aa7b-690a4668c09c/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 202 36936us, GET mod-inventory-storage-19.4.0-SNAPSHOT.455 http://10.36.1.15:9168/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 200 1812us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxVTW/bOBC991cIvra0+SWK9C1NEyDYtBs0LrBAsQd+DGOisihIslOj6H9f6sOOkzqHjQ+GqHnvcTjzhvr1Lstmwc2yZTYjGDuCjUfUY4G41hgZIDnCRuWGOuUVsNmHnrBuJkroYIOPP5JP4Vi6UD20X8HGxt2MUGDeC8IYMkpTxB23SBOrkLNEisJx54ka6T42G2huXNvzvmf/Di+Nbmx0MEipfrMR2ydwCzsoL3VZftluDDQDZPVXTnA+l1KSPJtnF7nMKMY8u15ln68uPl29yr5rwIefg8bd16vrm39eRd5v/QF5/+36iATvwXZhB0/Iy7ipYwVVN5zoV0IlnH1DwolWn80vBdqz6aRAt69h6kFOKCmYLpBxWCGuMCBTFAyRwknmqRHMwyyxfg8n2cVyuxkrnh7ndDpflV42uguxGvua1mPErptYxTI+7IfAuBxDe9DNpa4PpO+D2fBs6q2N9f6kFLaek5FWDS//9ncBLLSjSceIg9Y2YRB8Fq7Hx5EdO3jmIRsauy2H1L+8jLWd7ran/an0dPaLnQ6lNiUcCup0N0YophjhAjGyInjJ1ZLn8wKT94M9j2XcJHgTdLl66gPROTecEUSBe8Rz6pCyGtIfgBBWaammatfQbHRvnduoqxMFahS3Iil4q1MnEx7pgqVsGEBOVfIgLUaFZNw6NrrZv1QALqEgffM9Q9ymJ628RJRJnhtDCdb8jxzsULxJwVsnuAWChFJ5ysFjJHmylEzba0qlZAX5I4c3Khyn6u0KZRJIjgz2wiaLTM2fmr1twiC37rp6uVg8Pj7Oy2jnD3G3SNu50Cy6aBdgQ40LIhdpMovUe07VfN1tyoMxylD9WMHPbpC6TYs20y/Nc3BDe18nOR/s0yStelwWfWZj1Q23xWHmt6YMtrfseVwWq3J/ADcwOrxdh3oqEktew3myCIV+7A2XSGlsERZMOCGM8oYNfj2ZhdB2KbfyMt25x5t4ZnIlpFWArHM2+bYQSKWPApIgsAYnDXbuMNSdfjgdp7S8TZrTyD0NB3Q6zZM+vRgbSDVyn85MGWZLxpdMzQUt3h8/An3/avcah9Alk0tczAUR5zgf99/a/msz8Azm0gjQiFOZo1zxdDacE2QE51T7nAt1MtmlbrvLNdgfN9VJ/r3qKmxevyKSxrNE0va7YOEuhqo7dExzLPtrgSuf/pxP4028QgKo4EQLUMQf6Z32/jP0N+X/PcW73/8BAAD//wMAIZKqDgAIAAA=", "base64"));
  res.end();

  return __filename;
};
