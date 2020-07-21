var path = require("path");

/**
 * GET /coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d?unused=9999
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
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:30:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 202 10616us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/courses/83034b0a-bf71-4495-b642-2e998f721e5d.. : 200 79618us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXTY/bNhC951cIvnbZ8EsUldt2t0AXTTYBkqKHIochOVyzK0sCJW1jBPvfS9uyLTve1rs5tD4IMIdvNDN884b6+irLZsHNsjfZTAsqpKFAjC8YkbLMiVGSE45lqX3BGeZudrEC1LDANeQKKjtUQ5cxyjYmh52Noe1DU693/ARdsJkL3mPEug+wsmRQuyzUPd7F9f8ttIXYL9Kum01AzNuSMS6JdRyI9ICkBJREUqG007TU3B1D35s/0fYr+Ndk2Cd3tq9peu+gn+MihWi7re04v5vaVoML9V1mmn6etUPEdXbQtlVAlyX0fAdeYA8OetiHlxZtROjRXafH2iOnnBJaEE4/MfpGqDdC/sgU/4Gm3+gooYbWnY9agx7T83FdLdsMscO3oetT3GOtLRXGGhAEFFAiec6IEUwRqgQzhqPyfDzhA/RT5T7bXYJEvEvOIsQxFPzSY6yh2m3YLhzZ+dbeYXwIFtsm7KgjQFKdc0dk6dPDeU6A+ZIo5EoyUFgyfwp+nM8+o2d4POiQEG12jd19xvZW27iN1brJqgudbR4wLq9D11awvJ36GKpN56xdEZL9AlX1Fyz36DbY+6F921jYcrOPA+7M86ZyH+dY+Z+/tCEuP2AMjZvmuQpgiDuwuNivrzo1Puzq/zvifTcbzY+7N3Q9eP+xCm232vVH9vnVxD6rxsBGH7mwvsyVJ5Y5TySjhmiDQHiRtIdbC4Xdkn0HffpsnuFtejaXdY1fTpzKr7+9vrp6fX3z+nJvDN2l7cMDflPYUKdG6IdJbpIiUmqBQM40kUaWxCBlK+5rR0GCzYvJW2HRDt0IVdz6QpmCpJjzRDIhSMlZQdB5yS0y0FLvoVUwqWuW25K6QmsqkFigcvXaFAAmmeNWCVNymYIxE7rEsEjYjxvuf1hx/wU07ybwGzce/Hk+jviRGLbYSpFjaAp06fjWiSggJRUFcYVnkIucebVNZA17mhfP8HQg+8HOAasFdBmnrJxNKR77ieSykjBKmNjvwNod2XlS5dlBqhsB/bRscUzY54kaiJoYpm2aSNwQQ23CGupL4XRe0F3Ce/DTaT/D3zTt93UVapzo0dGou23SzCYtxi7pkG0WbVOngXuY26ob4mD7Jm7CGylxHCHH1LLAPSmNK9N4kI4Yi56owueeK43OTGddotlW1/Oi1IwhEUWZOt3SMnV6yg8oUG1L6VGc7HQHi+4iu5rHNGkgu5w2/XfMwrWHU0P9zLGeM3k41s8c7DvcVoTHM/iWCYpZBWW663CT9KSglmipBFGylOAdoxrVyTqbApyCVNhCOJEUFWkSk8R17a1wRmJeoD1R50+wrJp4kb0L9/g/qbESxYtqvMP9W41La7XWmBOvXLGqcZJ7xgQRNA0C7Q2qqWZPa8wBjXCYxDFXRIJONOZ5KjlP+oQGmSrkKS7DHUSXagzuDg879r8tdCFeVugt7rDQ2efvvTSLF12axT9emm+HhcG4+aLgQuabK3GXlC6p5O3+uyGM3zTfBn9W6LJQ09DPCnyHWYX86vFvAAAA//8DAI3302HaDQAA", "base64"));
  res.end();

  return __filename;
};
