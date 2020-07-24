var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:56:44 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6889us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 78832us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS3PbRhLH7/4UKF6jseeNGd9kOVVRre24Vk7lsLWHefRIWIMECwS1ZlL+7tsQSQh8ySTjOHEtdNADmG5M9/T8+zdg6fdnWTYK1byewWyUvcz+lf2OV/BaEds/R875lCepiXXCEBlyTrzwjEjllKJ5LoV2o4ulycSN4cHoetLUVdZU2XtXOqgmTVVWt4v1sAizUBfTpqgmD6NvmnlcZFXK3CQUMGmyskjwOHjq6maMl6+XE2JKayNZIIoFIDLKQJyjllBwnHlKLZVu1/hn/x8ITetgGd5jgCf464f4Izq+y27aCQfMXDdgO7jrSSjnsZjcZrfwkIWLbAqYnfZXDDhm0z0pQj9jaFx0jetPuV2pGlwD8TV+e3DPKaeE5oTLD1S8lPQly59rq36g+NU5Q7v5NB6yY/ql4i8Ffy6EPWT3avHLDOrVCkQnLFUykTxIIEo7IN6JQJKmigbmMHFutHLx+eHn59V6LOvsTTFrMCHr9aTSgsayiiFCW2CBeKs8gZgsegw6+DjaZ//Ekh7vEo1quEWHtVuHB58aqCeuZOFxzPra1hDeG4L5uS8CTKuiK1XhJDWKRyJtwm8xceJYskQD15I5DZal/Q52Y3uM7iSv/ZK9KuqQvYbZx4z174cqLu+HuHE9FrNQ3UO9eF3MpqVbvOv7mZeuLfGlO0Kyn1xZ/tct+vbTInycT99Uwa03Q1PPoTfgrirjzR2U6cdP06JevIe6qOJmzO005nXnQFz072CeMGXdovwK8HE26gZ87j1p1riUbspiupK4fz/bGjMqV9Nc+VIiJKt0IoHFRCSjnhgPjvA85YyH4PLwuE0646dW7SSP/VW7nEzg0971+scvL66uXry+fnHZv13MLkNT3MOehBcT3DjNvBenpACUBkecYqjuXlrigTJCtTCROumCyjee7cbT+WxlrHlIufY5wdkrLEQhiOUsb7eZ5AGYM9L0jcvC4y5brFMcc2OoABIcle2jcRKAUsKDFt5yiRPyG+VUF2O0vlnukvftLjlrO8x6Dq7jqiCO87KnbrACx6uAksWF5FYSTkVOpEw5MVRrwhkqpEVl5LonF63hU/Vykrd+vXyoi0nRLLJW4Uebe6ButvQfvev+GJhsdwh8IB3tRL3U4Q+LKaxip0JR4DkjMXqsowiJOO0MwbaQZKLM+9RT3EfzpzJwks9+Bn6elMUEXlxPsNPWM1SOvqhttedXFXbx6sHgoRsXE7I0ykI1nlYTRIfZbvztRqrnoanqZQBrWfka3dtSfUr33rV7ovO+m4891EsXUpv1M3BPhDYjncLfVGUHYPtCOS4QaTYDOS6MtdWzdRCfL7aQVEQkUmrQzjBPpA4oWjoIYlA/XJLS4d75EpL64kkkfYMEirWQTWu4Qzio6iJkTTHuQG8PlqZgGeOShMgdkQmVzDpAYaNCm2ioNTzuGj/BMMf764f51jV3MMZuFI5iUt+W/3ReL4vfTadlATFD+7ue+R9BUSPOKubObsDIASMHjBwwcsDIASMHjFwH/rfCSLqW+x2M7G6cz5Can8OQa6vDDEklONEWBMgWrwBly1sTUYOkzEEk69QuQ165EjvWfIabogttuxIu472bBISoWKQENS58sWxxy7Jo4HbVhwaQPKWcvx1IBkiKQ/LEi1bCpaLEWk0Jy/FXrp21Hd8cC5InuHwKJB/72EGQ7A0ZQHIAyQEk/49B0jllXUyJWOCeyFxEYvAC8dwrqr3MlePHg+RJ3vr18lNRYpqO4khGmH2aIwVh8giOtExJKo0nQlssIw4BCwqrKqQAPmHvp1aeypEn+dx883QEQL6r1vjYAeO35UVj5VkNtrM7jhd1buyf/Noxp+cg49rqMDLmXArlVcDzjkV5oRLlxQtHVI4CwZOy4NfVuwcZxWFk/LX4zdWRlHAP5YCN3yk2Du8f9zgYsPFxGgM2Dtj4PWDj8P5xeP/4FTrvN3r/yITKO+r6c3jSqHN4cm11mCeNoEJ66ohH6cStgVDpteSEg7Um5ZyB6ohhlyfZYZ585WZFGEDyOwXJQIUP3olWJSieMxUjXjDd9jLUCg468ZPfPx7v8imQ/DJHDhg5YOSAkQNGLrcP+BwiLulDQNoR2yJgzBNzSiiWdO/Dii9h5EneNtpIEe4clGP38KHdxtvFbZJkljBKmDhMku0Ijgp/BEkmhUUDYIhnJmCv4554GtDe02RFNCqnvfCPI8mTfO6S5BdeP+5BxqOJcXeuHHCLO56I9dFiy5GR+IDoq/OkEtcGot/spY//XtASnWEMiMgtakOgFrUBY3XUUROsTCAOaEN049lFdnVXY/9y2eWmTPyhTvvgYz8+HAUQ5jkVOwBxFEL0LB/FvFuXfVWiWdDOImVxjzqU00CM1IJoaaVLkVED+kDmfe6idpjqXESBqgwURQj3hElBRC9B5XDgsOYWZVVfZG+Lj/C3yjpT52a9szwu6zYEYwwoknTM26xj62BMEEGxqZjkQW+qfz/r3IEXEVBilSbSGSx1rnAROKobeGA63//BwqW7dXXErLt4C9s7/K9PveHnpt7wQ6n/Sp915OedTTu7I8+mXEh16Gz61hXdGez8s6kV55xNrdg+my7zOmqqxpX/hFDVSxRQzz7/DwAA//8DAIeSPKAgOAAA", "base64"));
  res.end();

  return __filename;
};
