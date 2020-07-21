var path = require("path");

/**
 * GET /coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03?unused=1
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:08:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03.. : 202 7168us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/c4b4bfd1-04fc-48b9-a682-a63dbd384c03.. : 200 12691us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRWS2/bRhC+51cQujZrL/fFXd3spCiMJm4BO6cih+HuUGYrkcKKcmME/u8ZPmTSUuzKlQ4LgbPfN/MN58Hv75JkVoZZMk9mXuUqL0LKuCo8UzZ3DIwVdMiQB2mV53L2vgVUsMIOcgEx3EP8J8kjYiirRW8PuPGxXDdlXXXXbu8w8RAxgSokRX8zqYuk2ebbZRmwaqDBzQ67htis6NlVH1aqjbEq9UynHpkKyjMA7hhHEGnOueMK9qF/5H+jb1r4dzKMEo/mmor8lUjvkhtfYuWHKH+i8aryy20nbIH1sl48vE/W2MTub6d7DUvAumq6JzuWFTYQoIExVHroI1I+wkc6OmrBBWc8YyK95XIu9VybM8vVL5x+AxGhtutwPKoDPdL52GXO19u4wU/lpiEBQ94td9IZI5lT1jAl20rQBWcgLGhteeDezQ7RL6X+aDqCRFwQWYQ4hBIvLlOe7qz4rcFYwXIwfntmXNYe2ncyGAsfjPKYMuOcppomh1ZxZNYVBQhhrcwOoPsKRg0=", "base64"));
  res.write(new Buffer("b2CbFtBnKKvkU5mToIfR7OvQm3//cv7hw/nHq/PPo7HcXPimvO8uNHGLo6GiLDfbiUQKADn3QOlMLaMedixHTl1spA0cFHidTbzCar3dDFAjfJGZPGPeA+kJkt6OSDOGoVCCdIJVdoQuewUDVofMWi6ReeCqdUsBICAT3sjcCUXB5CN2HcsVYW8w3pce/6zLqkvwTILiVovAlCvoCAVVRVo4ZlAYlYJBlxYjy2YCvwqbluGvIzmSr33JD++aKmi1KxGXpUI4xQSXGVOqyJjlxlDfGECnuRfGzyawV8rjeKZpedzGsiqbh6Rt2InWhsbOXjMTsxlvYLXf7ORq19pDwH1r3j6scVDrUq04zXYmjaNqEUgTUFPx+MJjXnCF3KnZAfhlzW/gm2q+qmg6xg3Nzifb/kC9rpO6WpYVrY56ta4rGuvPtbWtELe+qWMf3lAP+xEKpYwJNG680G2Ra5o5kFK1Bpl5DegLbX4S4W9YxwUml+2oiSG5uYN/x1s5xKf2TaXO3LStTxilL+6E17dCaubcznl6pjP5fCuMuMuHL9Q+Q0C5BVlYGhIWM1qGyiKDnEuWS50LDMGJzEw5Xtktg+/sTDt94HvAvd33QPHYv/Dk6/9cl21w2VzrM6P31+XJafmvpLzg97SU7K/s6+0qx9h/iz2tQZqTvm2j66fPtCWu73rTYQaPyJ85kyab6jg1e0fk7tDnKZl7fPf4AwAA//8DANv351HrCgAA", "base64"));
  res.end();

  return __filename;
};
