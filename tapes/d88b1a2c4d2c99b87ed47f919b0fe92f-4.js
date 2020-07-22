var path = require("path");

/**
 * GET /coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc?unused=9999
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM4NjA4NCwidGVuYW50IjoiZGlrdSJ9.OK4gSnaVO_1dN9PDNRdzk2LuT9yDVvXAuob5krFEYOo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 22 Jul 2020 02:49:05 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 202 9758us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.174:9157/coursereserves/courses/2a8125a3-2ab4-4e5a-a5c3-bc8d1da0f7dc.. : 200 17072us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMRWS2/bRhC+51cQujYr75u7vtlOURh5tICdU5HD7O7QZiuRwopyYwT+7x1KlEXLdiLXKKIDIXD4zc73zWu/vSmKSZ0mxXExkeCENKCYhKCZRgMMTFQsRJdEAl6VKU7e9oAG5riGnEBON5D/LkJGTHVztbEnXMZcL7q6bdafXV5jESFjAU0qqs2XRVsV3SqsZnXCpoMOl1vsAnI3p3fnm7CEsdZpEZkREZlOOjIA7hlHkCJw7rmGfejv4S+MXQ//RoYdxYN9jUn+Sk6vi4tYYxOHKJ/geN7E2WpN7ArbWXt1+7ZYYJfXf9e8FzADbJtu/WbrZY4dJOhgFyq9jBlJj/SOHpvEcMkZL5kUl1wdK3Ns7NRx/Qun3+CIUKtFOhy1Bt3R826tXGxXeYkf6mVHBLa6R4cpQGAQTCCtjGWgvGU8RO1iQgVq0P0B+lnpD3VHkIxX5CxDHkLJJ6eCi60Vv3aYG5gNxq8PjLM2Qp+TwVjFZHVEwaz3hmlXceY0R+Z8VYGUzqnyEXSfwY7DC7yNC+gj1E3xoQ5E6HZnjm3amN9/Pjo7O3p3fvRxZ6yXJ7Grb9YfdHmFO0NDKnerEUUKADmPfbMKx3TQngXkgnGrXOKgIZpydCrMF6vlALUyVqUNJYsRiE9SinkpSoap0pJ4gtNuB51tGAxYk0rnuEIWgev+WAoAAZmMVgUvNQUTdthFrueEvcB8U0f8o62btcATBZo7IxPTvqJHqiQDUXlmUVotwKIX1c7LcgQ/T8vew58H+ii+bEp+yDVV0HxbIr4UUnrNJFcl07oqmePWUt9YQG94lDZORrDvlMfhnsblcZnrpu5ui75hR1w7Gjt7zUye7e4LbPabnY7atvYQ8KY1L28XOLD1wmiuXWDKeqoWibEf8sBiFTFUXCP3evII/DznF/gbcz5vaDrmJc3Oe9v+QP3UFm0zqxtaHe180TY01h9y61shr2LX5k14Qz3sRyirUMZYCeZQUZEbRCrUSjEDKIVznuYRfyLC36bF+2lxdo1LSno3DjRAvu9dWzrPxz39ijn67EL43kqQl1wea3/MxdRZ83Al7HCnt5+pd4aAggNVOd4LUtIm1I4ECZz2vDJBYkpelnbs49nF8oOzB9zLzx5c3A3Zflxz1O2CmpsJrSx1vU+MJk7FYpmEdAqd5f6pjGKbr7A47ZdHTsXFNfzzdFKFMqX/+Ul1x8ZNnfhZSTVTze3/ldTiy3+6AN0Lo6bW7AX3ell+JMoz575Okv1L2KfVPGDe3K7vLza0+WI/GD/dX7xnuLjemB4reIB+eqrUgwvka9U7QLvHZ75Gubs3d/8CAAD//w==", "base64"));
  res.write(new Buffer("AwCDsKI5vQwAAA==", "base64"));
  res.end();

  return __filename;
};
