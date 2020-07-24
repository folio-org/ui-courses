var path = require("path");

/**
 * GET /coursereserves/courses?
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
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:56:53 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 11311us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 68157us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOybS3PbRhLH7/4UKF6jseeNGd9kOVVRre24Vk7lsLWHefRIWIMECwS1ZlL+7tsQSQh8ySTjOHEtdNADmG5M9/T8+zdg6fdnWTYK1byewWyUvcz+lf2OV/BaEds/R875lCepiXXCEBlyTrzwjEjllKJ5LoV2o4ulycSN4cHoetLUVdZU2XtXOqgmTVVWt4v1sAizUBfTpqgmD6NvmnlcZFXK3CQUMGmyskjwOHjq6maMl6+XE2JKayNZIIoFIDLKQJyjllBwnHlKLZVu1/hn/x8ITetgGd5jgCf464f4Izq+y27aCQfMXDdgO7jrSSjnsZjcZrfwkIWLbAqYnfZXDDhm0z0pQj9jaFx0jetPuV2pGlwD8TV+e3DPKaeE5oTLD1S8lPQly59rq36g+NU5Q7v5NB6yY/ql4i8Ffy6EPWT3avHLDOrVCkQnLFUykTxIIEo7IN6JQJKmigbmMHFutHLx+eHn59V6LOvsTTFrMCHr9aTSgsayiiFCW2CBeKs8gZgsegw6+DjaZ//Ekh7vEo1quEWHtVuHB58aqCeuZOFxzPra1hDeG4L5uS8CTKuiK1XhJDWKRyJtwm8xceJYskQD15I5DZal/Q52Y3uM7iSv/ZK9KuqQvYbZx4z174cqLu+HuHE9FrNQ3UO9eF3MpqVbvOv7mZeuLfGlO0Kyn1xZ/tct+vbTInycT99Uwa03Q1PPoTfgrirjzR2U6cdP06JevIe6qOJmzO005nXnQFz072CeMGXdovwK8HE26gZ87j1p1riUbspiupK4fz/bGjMqV9Nc+VIiJKt0IoHFRCSjnhgPjvA85YyH4PLwuE0646dW7SSP/VW7nEzg0971+scvL66uXry+fnHZv13MLkNT3MOehBcT3DjNvBenpACUBkecYqjuXlrigTJCtTCROumCyjee7cbT+WxlrHlIufY5wdkrLEQhiOUsb7eZ5AGYM9L0jcvC4y5brFMcc2OoABIcle2jcRKAUsKDFt5yiRPyG+VUF2O0vlnukvftLjlrO8x6Dq7jqiCO87KnbrACx6uAksWF5FYSTkVOpEw5MVRrwhkqpEVl5LonF63hU/Vykrd+vXyoi0nRLLJW4Uebe6ButvQfvev+GJhsdwh8IB3tRL3U4Q+LKaxip0JR4DkjMXqsowiJOO0MwbaQZKLM+9RT3EfzpzJwks9+Bn6elMUEXlxPsNPWM1SOvqhttedXFXbx6sHgoRsXE7I0ykI1nlYTRIfZbvztRqrnoanqZQBrWfka3dtSfUo=", "base64"));
  res.write(new Buffer("9961e6LzvpuPPdRLF1Kb9TNwT4Q2I53C31RlB2D7QjkuEGk2AzkujLXVs3UQny+2kFREJFJq0M4wT6QOKFo6CGJQP1yS0uHe+RKS+uJJJH2DBIq1kE1ruEM4qOoiZE0x7kBvD5amYBnjkoTIHZEJlcw6QGGjQptoqDU87ho/wTDH++uH+dY1dzDGbhSOYlLflv90Xi+L302nZQExQ/u7nvkfQVEjzirmzm7AyAEjB4wcMHLAyAEjB4xcB/63wki6lvsdjOxunM+Qmp/DkGurwwxJJTjRFgTIFq8AZctbE1GDpMxBJOvULkNeuRI71nyGm6ILbbsSLuO9mwSEqFikBDUufLFsccuyaOB21YcGkDylnL8dSAZIikPyxItWwqWixFpNCcvxV66dtR3fHAuSJ7h8CiQf+9hBkOwNGUByAMkBJP+PQdI5ZV1MiVjgnshcRGLwAvHcK6q9zJXjx4PkSd769fJTUWKajuJIRph9miMFYfIIjrRMSSqNJ0JbLCMOAQsKqyqkAD5h76dWnsqRJ/ncfPN0BEC+q9b42AHjt+VFY+VZDbazO44XdW7sn/zaMafnIOPa6jAy5lwK5VXA845FeaES5cULR1SOAsGTsuDX1bsHGcVhZPy1+M3VkZRwD+WAjd8pNg7vH/c4GLDxcRoDNg7Y+D1g4/D+cXj/+BU67zd6/8iEyjvq+nN40qhzeHJtdZgnjaBCeuqIR+nErYFQ6bXkhIO1JuWcgeqIYZcn2WGefOVmRRhA8jsFyUCFD96JViUonjMVI14w3fYy1AoOOvGT3z8e7/IpkPwyRw4YOWDkgJEDRi63D/gcIi7pQ0DaEdsiYMwTc0oolnTvw4ovYeRJ3jbaSBHuHJRj9/Ch3cbbxW2SZJYwSpg4TJLtCI4KfwRJJoVFA2CIZyZgr+OeeBrQ3tNkRTQqp73wjyPJk3zukuQXXj/uQcajiXF3rhxwizueiPXRYsuRkfiA6KvzpBLXBqLf7KWP/17QEp1hDIjILWpDoBa1AWN11FETrEwgDmhDdOPZRXZ1V2P/ctnlpkz8oU774GM/PhwFEOY5FTsAcRRC9Cwfxbxbl31VolnQziJlcY86lNNAjNSCaGmlS5FRA/pA5n3uonaY6lxEgaoMFEUI94RJQUQvQeVw4LDmFmVVX2Rvi4/wt8o6U+dmvbM8Lus2BGMMKJJ0zNusY+tgTBBBsamY5EFvqn8/69yBFxFQYpUm0hksda5wETiqG3hgOt//wcKlu3V1xKy7eAvbO/yvT73h56be8EOp/0qfdeTnnU07uyPPplxIdehs+tYV3Rns/LOpFeecTa3YPpsu8zpqqsaV/4RQ1UsUUM8+/w8AAP//AwCHkjygIDgAAA==", "base64"));
  res.end();

  return __filename;
};
