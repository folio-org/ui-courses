var path = require("path");

/**
 * GET /coursereserves/copyrightstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/copyrightstatuses.. : 202 6233us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/copyrightstatuses.. : 200 4046us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyUTW/cIBCG7/kVyNeECgzYsLdke46ipreqhwHGDao/VpiNtIr2vxd7u1upiaXKXQ4jwfgd4Yd35u2GkMINu0MMP17Sc4K0H3EsyIZ8I285l7PBT9uCgTLaO0dLUTdU+lpSLaWkBpwC3RgvQRd3J0kPHc6i7ZY8HM6nHkcXwy6FoT8lI0IKr0i2Q9cN/UggpRjsfvqAtMFhP+JZ22ECDwkm4ele072nAug/5zAXLFnJKKtpyb5ythHVRshPTJe3LK/fhbJqv/P/rppFxxyPd3/xaGylG2UsNZIhlbICqo3wObDKeK6sZuIdj6e9zT9G/NBB6Je4PA7k8iKZCYG2/X8MRq3BcFYtY7DaopWsoaaxGYNX2RbOVpR5XrGqlqYE+7Et6OOWPt+vMkc/9NTlc4wuQEvGF4hIoQ0/8Wq+4UyuAHZRLQMDrlUlXUO11SL7xucWckpTWxvRcC98reQisGvQuhohLtYQOquWCTGpSi5qRrWusqW4z287mUvlOWNNg7Uu4R2h+7Ylc8eMJOKI8RX9EqwnSDFj6eCQ0aS5167VZrxcM20uqj9MyPepQpGGBO0XdEP081BWN8dfAAAA//8=", "base64"));
  res.write(new Buffer("AwDA9EILsgUAAA==", "base64"));
  res.end();

  return __filename;
};
