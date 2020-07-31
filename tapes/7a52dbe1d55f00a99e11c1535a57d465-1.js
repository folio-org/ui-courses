var path = require("path");

/**
 * GET /item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/899aea07-e18d-4cc6-b2d2-ad1f4db1bd3d/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/4dc6f1dd-a3b8-478a-81c1-01cf1461a6a2/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 202 36163us, GET mod-inventory-storage-19.4.0-SNAPSHOT.455 http://10.36.1.15:9168/item-storage/items/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3 : 200 1873us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJxVS2/bOBC+91cIvnYp8yWK9C2bJkCwaTdoXGCBYg98DGOisihIsluj6H9f6mHHaZLDRgdB1HzzcTjzzfDnuyxbBLfIVtmCYOwINh5RjwXiWmNkgBQIG1UY6pRXwBZ/DA6bdnYJPWzx6SHFbI6VC/VD9xlsbN3NBAXmvSCMIaM0RdxxizSxCjlLpCgdd56oyd3HdgvtjesGv6/Zv+NPo1sbHYxUathswg4B3MIeqktdVZ92WwPtCFn/VRBc5FJKUmR5dlHIjGLMs+t19vHq4sPVq953LfjwY+S4+3x1ffPPq8j7nT8i779cn5DgPdg+7OEReRm3Tayh7scT/UyohLNvCDi5NS/Glwzdi+EkQ39oYK5BQSgpmS6RcVghrjAgU5YMkdJJ5qkRzMMief0aT7KP1W47ZTx95nQ+X51+troPsZ7qmtaTxW7aWMcqPhxGw7ScTAfQ7aVujk5fR7HhxVxbG5vDWSpsk5PJrR5//u3vAljoJpFOFgedbcNI+MTcTJ+Td+zhiYZsaO2uGkP/9Lut63W/O69PreezX27AfgOXxV1/TKnT/WSjmGKES8TImrAVL1aY5Eqq96NAT4ncJngbdLV+rATRBTecEUSBe8QL6pCyGtILQAirtFRzvhtot3oQz23U9RkDNYpbkRi81amWCY90yVI0DKCgKqmQlhNDkm4TW90efmcALqEkQ/k9Q9ymL628RJRJXhhDCdb8WQx2TN/M4K0T3AJBQqkixeAxkjyJSqbtNaVSspI8i+GNDKe+ejtDlQiSJoO9sEkkc/nncu/aMNJt+r5ZLZffv3/Pq2jzh7hfpu1caJd9tEuwocElkcvUm2WqPacq3/Tb6iiMKtTf1vCjH6lu06LL9F6HSpsKjpijGrr7JtH5YB97aT3gsugzG+t+nBfHrt+ZKthBtC/jslhXhyO4hUnj3SY0c5JY0houkkQoDI1vuERKY4uwYMIJYZQ3bNTrWTeErk+xVZdp6p5m8cIUSkirAFnnbNJtKZBK1wKSILAGJw127tjWvX44b6i0vE2cc9M9Ngf0OvWTPh+NLaQcuQ8vdBlmK8ZXTOWClu9P18BQv8a95kOKFccrXOakJC/5/Hn40g33zehnMJdGgEacygIViqez4YIgIzin2hdcqLPOrnTXj/Phpj6Lf2Bdh+3zQPCKqzQl8sTxJJC0/T5YuIuh7o8V0xzLYSxw5dPL+dTexCskgApOtABF/Mm9195/hGFW/t9TvPv1HwAAAP//AwALdhWYAggAAA==", "base64"));
  res.end();

  return __filename;
};
