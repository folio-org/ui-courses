var path = require("path");

/**
 * GET /coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves/de1875ec-0821-452f-9e5e-2425e21c8de2
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
 * referer: http://localhost:3001/cr/reserves/79702b52-0d7e-48ea-b7ef-a4e74289f000/c62e7511-dbe4-44e5-8592-9777d409ed42/de1875ec-0821-452f-9e5e-2425e21c8de2/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:55:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves/de1875ec-0821-452f-9e5e-2425e21c8de2 : 202 20477us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/79702b52-0d7e-48ea-b7ef-a4e74289f000/reserves/de1875ec-0821-452f-9e5e-2425e21c8de2 : 200 47960us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxWTW/cNhC951cQe625S1KkSPrm2kljxE6M1umlyIEfQ1utVlpQ2riGkf/e0a5kbR0HiNFTi/qwMES+N29mHod8eEXIoooLckwWEbjRCgJlRnAqlUjUggIqpFAgeDARxOJoAIR2mzu4qLq+am7O92htNRNeCcqiBioNOOo1JOokaCmMTYyxPbrqYT2COGORM5+oSKyk0jlGPXBFmbfKi2iThWIKuakgniN0AD7gJ/zoXQ5thB2VZVMAXMBtmza7fH/RBtdXbTPGSyGWMgCnpbUKRSZGjWRAUV5yQhhTaP5Njg/+dwj9HH6u3AtoEdS49V7ypasaclH5Ici8/JjRu4+r09PV2fnqcl6supPQV593G/q8hXmhwWb024NcUQAwFhx1ihsqvbRYW8YpKwsTmZMuKH0Q1a03226EliIkXXpNQ3CYTywKagXXFGKSAvN0RpoZWu8zGLEqamNYATQ4JoewKAAcuiiUhbdCohg/Yze5WiP2F8ifqwBXbdXsCrwonGRGiUilTfgTk6COJ0tLEKXkrgTL08zSHcDPYzcw/PadHOTTjuTL2PQN5LVroOn/gXG+4vjfOP9942AN6331T0gH2P++CuQOPBmEQp68Edqmz5Xf9m0eoz181d2Tpm+bqt0ekZ9yddPmqjvs8SP++n4DU9mB2Sh1pBYHNQo2jpqCe5q01t5AKqPh3+S4hj/3pXt2x3tUdRBJeCuxH5ym4Cwa1mJpdMEo9g2UQNeCcIuxMM+k9qtryFuX11BDc0TeZNf88a/MjXyazvrW19X+lD9p526lu8XW707s+TW5ytAdtHJTu7Cvyqlb+1zFGzgil67rlmTeFF0PH9LV36MsgmBMzptyO1rv6jHmE5nB1fX77dqPaq7fKc7U0hjDFVmSE2XIwEjeXJPL1ydnrye3bnO123/b95vj1eru7m5Zt2F5035eoZpY5VXfhhWEasM0NyvkwDcAk8Iub/t1PbFAs8UTMKuf2eu9GudrIG0iQ2twbHakbeppru3mk2vC1CTlU6EZ4JzEEYN2sIEaAZIqrpnzwjFX2KfQt3kct8MH9vgnxLTxtq0jvmSmKQZFSiXH2eWtGywnA57/YGkM3JQ64kDgdqjw7uwfvhNcc2gnwEeQ5gXlOhVUBvzP2WSoKIxU3guOo3TxPMPTC2O6Lr6b8vDM/QxuSI7ktl3PqtfQOzSXOwgSMqDb4hn+7KMxfAaygjJ+zfWxUsesXColf2DseH5pjaAf7z/iLJ0uS+lDjCVDcRI7U+DVZkMRaOG0MzFqGfCimkywiS8POoJeHnRI/9WXvwAAAP//AwD5XEQW9QoAAA==", "base64"));
  res.end();

  return __filename;
};
