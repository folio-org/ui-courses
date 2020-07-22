var path = require("path");

/**
 * GET /coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/instructors/cf3e8181-67c3-4653-9eec-db2c54ed49f5/b5d06488-418f-4c65-a440-4f2613619e6d/add
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d : 202 7228us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courses/b5d06488-418f-4c65-a440-4f2613619e6d : 200 15172us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKRWTW/bOBC991cIvm6ZkBRJkbkl7QIbbJtdoOlp0cOIHCbqypJBy0GDIv99x5IcKc7HOo0PgqHhezNvOB/6+S7LFlVYZCfZotSBG2UtU8JGprzRDJTiTEVpRG6EQxMW77eABpbYQ04hhRtI/2ZlQgxVczXYA659qlZd1Tb9sctrzDwkzKAJWRxOZm3Muk25qauATQcdrnfYFaRuSe/Oh7CENsYq4ZkWHpkKyjMA7hhHkKLk3HEF+9C/yu/ouy38JxkmiQdzzUX+TqTX2RdfYePHKJ/QeN74etMLu8K2bq9u32cr7FL/t9e9ghqwbbr+zY5liR0E6GAKlV76hJSP8JEePbXkkjNeMCkveX6i5IlSR4Xmv3H6jUSE2qzC4agedEfPuz5zvt2kNX6q1h0JGPPuY45WWMFM4XOmjM6ZQ/QslNJrhUG5qBeP0c+l/mA6giS8IrIEaQwlnZ4JLnZW/NFhaqAejT8eGOvWw/ZORmP0wSiP5NU5zZSNnFnFkVkXI0hpbV48gu4rmDS8gm1eQJ+harJPVUmCbiezb8Ng/vPr8YcPxx/Pjz9Pxmp96rvqpj/QpQ1Ohoay3G1mEikA5NwDAy2od0vlWIlcMG5yGzgo8LqYeYXlarMeoUb6WJiyYN4D6Qk53YkUBcMQlSSdYJWdoPWgYMTqUFjLc2QeuNq6pQAQkElv8tJJRcGUE3aVqiVhv2C6qTz+3VZNn+BFDopbLQOj66dHiJKBiI4ZlEYJMOhEnFjWM/h5WG8Z/jmQI/s2lPx411RBy12JuEJI6RSTPC+YUrFglhvDpDCATnMvjV/MYC+Ux+FM8/K4TFVTdbfZtmFnWjsaO3vNTMxmOoHNfrOTq11rjwEPrXl5u8JRrRNacWVLlhtH1SKpA0FT8fjosYxcIXdq8Qj8vOZX8M01nzc0HdOaZue9bX+gXrRZ29RVQ6ujXa7ahsb6Q23bVkgb37VpCG+sh/0IFddKRxo34GBbqGVO/SFpBUDBaXDkGkzxRIR/VHW9XVlnWNNgmA6UkO47V8hc6XlHv2GKPrsOXl4IIj/J3YmQR0KZhwthwp3dfqXO2RWAjl5pXlKplJJpHgoGefDMUmKUgkiFms85XlgrL/oeca/3PVLcDXedffvFTTkEx82RdXJvU745Lf+flCf9vi0l+9v6YrMsMQ2fYfcbkEak33bQxf0XWo2r68H0OIMH5K84Mu7B5b41ewfk7rHPt2Tu7t3dfwAAAP//AwDtbsYl5goAAA==", "base64"));
  res.end();

  return __filename;
};
