var path = require("path");

/**
 * GET /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves?unused=0&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
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

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:06 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves.. : 200 9473us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYy24bNxTd5ysIbbqoKfE5JL2TnaZxEydG6hQoiiz4uIynlWaE0SiOEeTfe6XRY1Q7qdUGTYvaC8Ge4X0fnnusD48IGTQwh+YdzAfkmPxCPuAjfFim5Z+DBNwaDZEyKzhVWmTqQAMVSmgQPNoEYnDUmcR60czheTlvy+rtWWdvnGEiaEFZMkCVBU+DgUy9AqOEdZkxtrEvW5iuzThjibOQqcisoMp7RgNwTVlwOojksgO5CzsrIZ2h8dK0Sx8fB9/EOsHKnWO7MPgKj87qxjc3z+vo27Ku1lFzTIWKwGnhnMZkM6NWMaCYZvZCWCsN/4yXl+FXiG0/iV0fD3KNZpWfdqmf+7Iiz8uwDNQ/sK3t2evR6eno8dnovP+6nI9jW75bHWmbBfRfVTigdtGrGxMBxqKnXnNLVVAOu804ZYW0iXnlozZ7sf10tpivjQsRsymCoTF6rCxJSZ3ghkLKSmDF3irbN550taytdTLWMgk0eqaWoTEJ8IivWMjghMKEQt961pRTtP4RAVtGuKjLatXwgfSKWS0SVS7jR8qCep4dLUAUivsCHM99P/Oeg7O0hv79vJA3azcft1CYQTP1FVTt3wLULS8PgPq/Agr7OemmMSZzQFS0ZSTXEMgyXWh2mIl11TZlWLR1s8ff+zMfV21dlfXiiHzflG/rppzvT37r4/JmBpsxAHNJmUQdEj2mbj21kgeajTHBQi6S5Z/xcgnvu0Z+4swLzK0XTQSncEKc5ugdwtlho4xkFCcJWiCmQfjBtk13FvmTr8hT30xhAtURedL46rf/dJXkzY4ZFmFSdpxwa8ird/MrBMXqdp9dkgtc6HsDnk187Hp06qehKdNbOCLnfj4fkv6x5Ft4mS/2Yw2iYEz1jzX1GpoX28h3pBz9ZPJiMQ3rvC6fac700FrLNRmSsbZk6Zc8uSTn340ff7dD9KIpVxZXbTs7Ho2ur6+HkzoO39bvRphVKptRW8cRxHLGDLcj9IIKgynhhlftdLLzA9UCb8qujn6ESZeTDxMgdSbLgSHtzkldTXacuOI1X8XN8HTI0jBAnkViQqi4SK0ARTU3zAfhmZfutvHTZk3Yywds+yPE7uhVPUmomDb8BzLngiPrBeeXkFQROSM6miK3hUlIItx1HV/zRV+J+KoPN0DBZbik3GRJVcTfvMuWCmmVDkFwpOLBp3zcXj6b1XOA2/79fAV+WSZp6nq6n/8UWo/g83vBYgOIx/QYP7qoDAUok5TxS26OtT5mxVBr9S1jx31ttzY7uXmNjLxZwyrElAqGaSqcl8SF6aKMVHrjbUpGRVx9O3jM0l8JvDY7PHDXikc9Xts0muvCJV4AzRo3mIqGU19oT4VL0UspdZLb+X1B8Z2KbCIPuDiFNFQVKPedgkQR/rivQixUSAeIb4V1W1MwraSVu349iPAHzfSPiHAtY3a6yDTylKnCfyupDXgVhMmGC2yYib1rfJAIP8j1viCr4P3nkTR+QNLXV98nK7HUkh/qCubfzMmJDzc4gSsgqfRNCfPe4rmXEn9SwmrZH5GnS536b5GN40luIJHxkDyr6tlea3fi8QVck5/rZk9V360ZBePFPUThxSvcCsXwTGlryYlRjqwMey2d3XSyFX8h8ra42uy5HJJOVtFCJE4V9grXrNK0iIEb6ZwN24X158qM9RL4gzLLwQTDMqfBOrxYiGdc7A4vFqiA4xEh6Hw/ZQY2SI4IpDIsv1aTS2SKAjVecpKzGERiG0VyiDI7wG0flKcr7UC23wN+CXGmh4rpryHO7gz8BcRZB+NBW7d+8gpi3XQ0Ix59/B0AAP//", "base64"));
  res.write(new Buffer("AwCaCBofRRUAAA==", "base64"));
  res.end();

  return __filename;
};
