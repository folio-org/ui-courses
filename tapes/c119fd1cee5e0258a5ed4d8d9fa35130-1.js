var path = require("path");

/**
 * POST /coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/reserves
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * content-length: 106
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImY0YmNkZDYwLWE5NDQtNTM5NS05YzNjLTNhN2E4ZGQ3NGNkZSIsImlhdCI6MTYxNDYyMTQxMywidGVuYW50IjoiZGlrdSJ9.UBW_IJNGL12j8ReijFVbI_7M7PZBsYMx-b8vN9UZqdA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.5.0 Chrome/87.0.4280.141 Electron/11.2.3 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?query=calcu&sort=courseNumber%2Cname
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  res.setHeader("date", "Mon, 01 Mar 2021 17:57:07 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "POST mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/reserves : 202 13850us, POST mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/courselistings/bd7fa744-0b33-4ffa-8c67-0ebdab6c6a0e/reserves : 201 97984us");
  res.setHeader("location", "d3911936-8af0-4993-807a-54bf49463658");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAANRUTW8bNxC951cQulaU+LVLUje3SRqjceqD2kvQw5Ac2kT3Q+Cu6hqB/3u50uojRnLIsTwsFuS894Yzw/flDSGLFBZkQxZBWs6trKmByKiyVlLDNNBKuaisqmVdmcVyAvh+nwf8mIYxdQ+3R7QLOoJWijInJVUxAjW+1pShC+BqXwPDIzqN2M4gzljgzEUqIqupAmDUIa8Kh62cCDZalCfJXcJwW6AT8EvZKpsOsu8DHqgsK+sQWw5K2K7PkJ8/9h7G1HezXiV9tFUdqechUlWkqXEIVOioufAetD9z7DC30GE3vuKIPtTKI6e1tRVVptTKKIbU2HJnIYyRmp/zSGNzTO+GDFjoxuTJEzqyy6nFfArzfTfm5PZjn4cp+vN8wXLUQTsTdGPfpX6/JL/m9NDnNMzor/Hb5x3OidbIbFA6UFuhoCqY0hHJHY1aa2cw1sHw73Js8d/xwPLNiE8lqysl4azyteQ0erClJFZQ0JJRJhErUeqCAhYHmpflN672J3TkA+QWG+yW5H2G7u//5d3IX6fR2bsmHYfmVTsPJ8Njaf3EfXe7JfcZh6tW7hrwx6r8Aq3LKTzgktzBMKzIJSjAiL/H+69VFl4wpi5BuZ9H7/6s+SpND03zad+6OZvtbxVn1coYwyuyIjeVIRMjeb8ld+9u3r47Tes+p0P84zjuNuv109PTqun96qH/Z12yCSmvx96v0acd09ysC4dmgilhV49j25xYsNuXF3DJ/sLeHLMB1yDpI5laU17hQPqueT5FpW4YofOnJlUuSs2wvMTyhss4WE+NQEUrrhk4AQykfQ39kGffmzbYeQlxCnzsm1D8bZg1UMZY8+JtzsI0cspT4N7S4LmpdVAhcjtV+OXgV1cOBN31OKEyqLmkXMdik778gY2GCmlU5ZzgDI49XLQ4Qmk0XPmdz1g6H96Wz5GMCV4GkTK+5XpT6Q3Tq1LnnxjbXLxwBv38/MeA+eRhyvkQala0i2NXshiZ9dJTCRpMCFr5gOeG7MKPi86gHxedCvjm5T8AAAD//w==", "base64"));
  res.write(new Buffer("AwC5COGKlwYAAA==", "base64"));
  res.end();

  return __filename;
};
