var path = require("path");

/**
 * GET /coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves?unused=9999&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves.. : 202 7191us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courselistings/66cec8e4-9ae6-4729-8119-3f341e0e67c3/reserves.. : 200 48756us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYS2/bRhC+51csdOmhXmmf3F3fbCdp3MSJkToFiiKHfczabCVSIKk4RpD/3pEoS1TtpHYaNC1qHQiK3HnszLfffNKHR4SMGmiheQftiOyTX8kHfIQPy7T8OoIiRZMKTT3IgqpC4p32joYiRmW0ilqE0V5vEutF08KLsu3K6vy4ty+KCNGCos4D2hvhqOXcUZml4sCgMFFe25cdzNZmnLHEWchUZIZm3jMagGvKgtNBJJcdyG3YeQnpGI2Xpn36+Dj4JtYJVu4cw896Pb7CpfO68c3Vizr6rqyrddQcU6EicFo4p6mymVGrGFDrcvZCWCsN/4yXV+E3iN0wiW0d7+UazSo/61M/8WVFXpRhGWi4YLO3528mR0eTx8eTk+Hrsj2IXflutaRrFjB8VWGDusVg35gIMBY9tpZbqoLC/gLjlBXSJuaVj9rsxPaz+aK97rCI2RTB0Bg97ixJSZ3ghkLKSuCOvVV2aDzt97K21slYyyTQ6JlahsYkwAMVsZDBCYUJhaH1vClnaP0TAraMcFqX1argI+kVs1okqlzGS8qCep4dLUAUivsCHM9DP+3AwXFaQ/9uXsjbtZuPGyjMoZn5CqrubwHqhpcHQP1fAYX1nPbdOCAtICq6MpJLCGSZLjRbzMS66poyLLq62eHv3Z4fVF1dlfVij/zQlOd1U7a7nd/4OLuaw3UbgLmkTKJOg8DUradW8kCzMSZYyEWy/DNezuB9X8hPrHmJuQ2iieAUdojTHHG6KOuwUEYyip0ELRDTIPxoU6ZbN/mzr8gz38xgCtUeedr46vf/9C7J2y0zLMK07DnhRpNX79oLBMXqdB+fkVMc6DsNnk997Gt05GehKdM57JET37ZjMlyWfAev8ulurFEUjKnhsqZeQ/N0E/mWlKOfTl8uZmGd19lzzZkeW2u5JmNyoC1Z+iVPz8jJk4PHT7aIXjTlyuKi6+b7k8nl5eV4Wsfxef1uglmlspl0dZxALOfMcDtBL4YJpoQbX3Sz6dYPVAs8Kdt9DCNM+5x8mAKpM1k2DGm3JXU13XLiitd8Fa+bp0OWhgHyLBITQsVFagUqG80N80F45qW7afysWRP28gHbfITYLr2opwkV0zX/gcy54Mh6wfklJFVEzoiOpshtYRKSCHd9xdd8MVQivhrCDZQFwyXlJkuqIt55ly0V0iodguBIxaNP+bg5fK5Hzz3cDs/na/DLbZKmrme7+c+g8wg+vxMsNoB4TI/x0kfFLlNmqLBnnO9rvc/d2Cjx/a60W1sdXr1BQt4UNNhYGE1DNIzq4C3FCRFoCDl4n1gKftC4xTx9Qdy11f3j9oV4NGC17YTPgufIaM7L2aEjkoWPGUW4zRKM8sZfU9PXlN6pyCbygGNTSIPBNFCnIFEEP06rEAsV0j2kt9LSWVMwraSV23o9SPAHxfSPSHAtY3a6yDTyhGcHf1RSG8BTYbLhAgtm4uAY30uC38v1rhyr4P3nkXTwgKRvr70PV1KpIz/WFbTfteTQhyvswAWQVPqmhHYwd+6kw5+WsBr1e+TZUqX+W0TjwTQ3kMjBmDyv6vlOabfS8SVckl/qZkdT364YBePFHSTh6WucCsX4WGlryaFRjqwMByWdX/WiFW+IvCmt1vUxOSSdrKKFSJwqrBV1UWlaxMCNdM6GzcD6a13GBgn8SZflYIJhmdNgHR4sxDPKHocHC1TA9ogQdL6bLgMbJEcEUoliiSq5RKYoUOElJzmLQSQGX6DL7uF2CMqjlXYgm38Bv4Y0M+NCsm8gzW6L+xWkWQ/iUVd3fvoaYt30JCMeffwDAAD//wMA/vDN/UEVAAA=", "base64"));
  res.end();

  return __filename;
};
