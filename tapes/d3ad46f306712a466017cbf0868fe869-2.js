var path = require("path");

/**
 * GET /locations?limit=500&query=cql.allRecords=1 sortby name
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
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/locations.. : 202 10099us, GET mod-inventory-storage-19.3.0-SNAPSHOT.449 http://10.36.1.55:9168/locations.. : 200 7532us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyXTW8TMRCG7/0Vq1xhqL/t7a1KClSUpmqLOCAOY3uMVkp3o91NRYX633E+tiDSQBWJQ6XmYCnjvOPZfR+PnR8HRTGaNQH7qqm7UXFUfCl+5FiOVnH5daRlSKU2CQKPCRRnHpwnBGGT5SIEtIGNXq8lNd7QSnRc1/R9iIYmrqMfPh2Ox4eT08PjYarqjkNf3a6m+3ZBQ7ju+qpfLGs6XVehGBFjAQE1d6C8KsET48CMdJGhwqDtw3p4M190G6ERIVnjLeRKNagoJZSCW6CYlAjE0Sk3CGeVb7G92yh1tM4xSRCQqeWSeXFCAhGM9KVQuRA/KOdtdZOVV9TeVoEumqruVzkkKua0iKDKlIeYBCBPJRgSRnE0VPI05Oh+E5/GjRdPy1B8fSTHJsMwdUM9RuxxGV07vHxVLWFPcZKHVb2CCQbMghDXTB4pfiTlG6fkK5Y/mzqzajGPT1etRPd5vH/9B1kpRKOyBWDKMlvjEgOXfQZXpoRCOCct3yLrI1Z1cbY2ajdgH18Ae0aAMb0PYINqN2DcKURyKnvqc+sKBsFpj6Byz7KSCROi3gJsWs+qmrbQOhkikbrQVvMlOquJTx0VqWmLZqUrWuqaRRuoe/h91YXmltq7SdXNZ3h3/vhC/x9UZVlKPEYopc3vgOc951NJWehD3opc6pgeBzUIrUrvFfAyWFAphHwEaAGyJMNF8jZ6+heo3qM0pCNEbXIOnbIXPETwQjurlBUk2d9BfVKG/wsqt/uAOqh2g2q1yw/hA1AIPFvjHaDPFifrDWdOiJTiNqiXn0/fFSfX78+nxXiyuxdOX3rh8+mFttynFz6odiPmheI2H7fAlTGgiEdAJhzwvKlym9QRnd1C7KKZL2bYFpeEsaq/FeNmNqOwan07cbt4we0Z4eb2uds9qP5yt5MqChsMoCMPynAPmK97oCNhboiWk93+13B1Mp6eT4q3Z9Pp5W7AxAtgzwcwJ8U+R+ag+gXYupRR3/Q4u6TQtOuHNAf3PwEAAP//AwC5vJjRww4AAA==", "base64"));
  res.end();

  return __filename;
};
