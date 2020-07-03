var path = require("path");

/**
 * GET /coursereserves/courses?limit=100
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjJlNjMxOWI5LTFmZWEtNTQxZC05MWYwLWQxN2MwODdlZGJkNSIsImlhdCI6MTU5Mzc0Mzk4MCwidGVuYW50IjoiZGlrdSJ9.5_DoxBQWjfNC8vC1SXXnZ5ezBn1Ko65ahXmdG7XdneE
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.9.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
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

  res.setHeader("date", "Fri, 03 Jul 2020 02:39:47 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.169:9178/coursereserves/courses.. : 202 607878us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.169:9157/coursereserves/courses.. : 200 1147436us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOyabW/bOBLH3/dTCHl74ZbPIvMubfewwbXd4tLFAne4F3wYJrrKliHLvWYX/e43im1Ffogju93eFqegSBObM+IMh//5kc7vz7LsLFSLeg7zs+wi+2f2O76CrxWx/fXMOZ/yJDWxThgiQ86JF54RqZxSNM+l0O7sfGkydRO4N7qaNnWVNVX2zpUOqmlTldXN3XpYhHmoi1lTVNP70dfNIt5lVcrcNBQwbbKySPAweObqZoIvXy0nxJTWRrJAFAtAZJSBOEctoeA485RaKt2u8c/+3xCa1sEyvIcAj/DXD/FHdHybXbcTDpi5bsB2cFfTUC5iMb3JbuA+C+fZDDA77Y8YcMxme1KEfibQuOga159yu1I1uAbiK/x2755TTgnNCeXvqbgQ9oKqHzhjf6H41TlDu8UsDrdbmX2+///zKpfLGnldzBsMZr0WVFrQWBIxRGiLIxBvlScQk02aBh18PNtnf2A5hrtEoxpu0GHt6tWE4FMD9dSVLDyMWb+2NYT3hsyh/lgEmFVFV2bCSWoUj0TahN9i4sSxZIkGriVzGixL+x3sxvYQ3VFe++X2sqhD9grmHzLWfz9Ucfl+iBuvx2Ieqo9Q370q5rPS3b3t+1mUri3PpTtCsp9cWf7H3fXtZ0X4sJi9roJbF3JTL6A34LYq4/UtlOnHT7OivnsHdVHFzZjbaSzqzoE477+DecKUdYvyK8CH+Vk34HPvSfPGpXRdFrOVPP3r2daYs3I1zZUvJUKySicSWExEMuqJ8eAIz1POeAguDw9bozM+tGpHeeyv2uV0Cp/2rtfffnn+8uXzV1fPL/tvF/PL0BQfYU/CiylunGbRi1NSAEqDI04xVGYvLfFAGaFamEiddEHlG892k9livjLWPKRc+5zg7BUWohDEcpa320zyAMwZafrGZeFxl92tUxxzY6gAEhyV7aNxEuCA8KCFt1zihPxGOdXFBK2vl7vkXbtLTtoO856Dq7gqiGFe9tQNVuBkFVCyuJDcSsKpyImUKSeGak040w6sooHrnly0hofq5Shv/Xp5XxfTornLWnU+29wDdbOl3ehd98fAdFvd8YEPWt5NfqnD7+9msIqdCkWB54zE6LGOIiTitDPEYdXLRJn3qae4D+aHMnCUz34Gfp6WxRSeX02xS9ZzVI6+qG211hcVduDq3uC+kxZTsjTKQjWZVVNs+/Pd+NuNVC9CU9XLAA==", "base64"));
  res.write(new Buffer("1rLyNTqvlKd13s7uQOd9u5h4qJcupDbrZ+CeCG1GOoW/rsoOnvaFMiwQazcDGRbG2urZOojP51s4KSLSJDU54YZ5InVA0dJBEIP64ZKUDvfOUzjpi4M4+RrpEWshm9Vwi3BQ1UXImmLSQdoepEzBMsYlCZE7IhMqmXWAwkaFNtFQa3jcNT7AMMP99cN845pbmGA3CoN40rflP1vUy+J3s1lZQMzQ/rZn/iUYSelpGLm2GzFyxMgRI0eMHDFyxMgRI9eB/6kwkq7lfgcjuzdOZkjF5AkM2Vk9zpBUghNtQYBs8QpQtrw1ETVIyhxEsk7tMuRLV2LHWsxxU3ShbVfCZfzopgEhKhYpQY0LXyxb3LIsGrhZ9aERJI8p528HkgGS4pA88aKVcKkosVZTwnL8kWtnbcc3Q0HyCJeHQPKhjz0Kkr0hI0iOIDmC5P8xSDqnrIspEQvcE5mLSAy+QDz3imovc+X4cJA8ylu/Xn4qSkzTII5khNnDHCkIkwM40jIlqTSeCG2xjDgELCisqpAC+IS9n1p5LEce5XPz5mkAQL6t1vjYAeM35kXBT+PFtd0wXtS5sX/staPi6hRkXFs9jow5l0J5FfC8Y1FeqER58cIRlaNA8KQs+HX17kFG8Tgy/lr85upISvgI5YiN3yk2jvePexyM2PgwjREbR2z8HrBxvH8c7x+/Bk9+m/tHJlTeUdcfw5PipCtI8eQVpBFUSE8d8SiduDUQKr2WnHCw1qScM1AdMezyJHucJ1+4eRFGkPxOQTJQ4YN3olUJiudMxYgXTLe9DLWCg0786PvH4S4PgeTTHDli5IiRI0aOGLncPuBziLik9wFpR2yLgDFPzCmhWNK9DyuewsijvG20kSLcOign7v5Du43bxW2SZJYwSph4nCTbERwVfgBJJoVFA2CIZyZgr+OeeBrQ3tNkRTQqp73wh5HkUT53SfKJ68c9yDiYGHfnygG3uOOJWB8tthwZiQ+IvjpPKnFtIPrNXoqFuO4TSHSGMSAit6gNgVrUBozVUUdNsDKBeEQbopvMz7OXtzX2L5ddbsrEF3Xaex/78WEoRhqzDRBDUXJt+SDm3brsqxLNgnYWKYt71KGcBmKkFkRLK12KjBrQj2Te5y5qh6nORRSoykBRhHBPmBRE9BJUDo8c1txdWdXn2ZviA/ypsq6NODHrneWwrNsQjDGgSNIxb7OOrYMxQQTFpmKSB72p/v2scwdeRECJVZpIZ7DUucJF4Khu4IHpfP8HC5fuxtURs+7iDWzv8P956jEFJ6a+s9xN/Vc6m27/VcnQs+nG35U8fTblQqrHzqZvXNGdwU4/m0p+ytlU8ifPptwmYVgkuXQo38Jx4lGHWiHmOUowS2z3s45UVeOp8qhC/HanSpOrQLkwBBi0dGpQn/LckOiDUMFQx9yxH08c4XITDRVyMfMIc1ohUUlvFbECe40VGnLLDKqn2TQ8eJQ4xlu/Fv7aletyg+65WLSEsvdUXlCK/37AhP/j4DUjY4TjeNUfPxShvkTYmL6g5kJpfOKusK3sXtz98tByUOoFsx7RMeGhS0nc6Ej0lESG5y6DnO2jGliTB5+9sjv+2Xvr+liZ7KYmzPYV3hcnZVBKdp/7ZQm5l+plpZw1VePKv0Oo6uWpTT/7/F8AAAD//wMAGzodOoc9AAA=", "base64"));
  res.end();

  return __filename;
};
