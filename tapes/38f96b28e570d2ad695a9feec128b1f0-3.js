var path = require("path");

/**
 * GET /coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3?unused=9999
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

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:09 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 202 7219us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/courses/410287b8-02ab-4b31-90e5-a09f8e073db3.. : 200 13632us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxWXW/bNhR9768Q/LrSISmKIv2WpMMWtM0GNH0a+nBJXiXaZMmg5aBBkf++K1mOFMfpnKXA5gfB0NU5vOd+8tubJJmVYZYskpkSXJrcGcYlOKZcKpjlmDHgtjDI8zS4dPa2A9SwxB5yCjHcQvwrcRExlPX11h5w7WO5asum7j+7usHEQ8QE6pAU2y+TpkjajdtUZcC6hRbXO+wKYrukdxdbt0SmtVHCs0x4ZCooz4BcYhxBCse55Qr2ob+5P9G3HfwbGUaJR3NNRf5MpDfJJ19i7QcvD2i8qH216YVdY1M113dvkxW2sf/b615BBdjUbf9mx7LEFgK0MLpKL31Eikd4R4+eWnLJGc+ZNFc8XaTZIlXzNOM/cfoNRITarMJzKCEWmVgoPedGHEad3X1eYxwijqkzXucZcz7nLHNgmOGpY84VDiDw4MDOeoJ7et73sffNJq7xQ7luKQQDj9YevUHFLKBmKpeWGSEsS4tUCeSocz8U1CP0c8k7mo4gEa+JLMJOUjw9E1zsrPi1xVhDNRi/PjJWjYcuq4Ox8EErj4JpazOmTMGZURyZsUUBUhqT5k+g+wpGDS9gm5bgRyjr5EPpSNDdaPZN2Jrffz45Pz95d3HycTSW61Pflrf9B23c4GioKcrtZiKRHEDOPTDIhKHGV5Y55IJxnZrAQYHP8smpsFxt1rsUS1/k2uXMeyA9IU2ZlSJnGAolSScYZUZotVUwYLOQG6orZB646o4lBxCQSa9TZ6UiZ9yIXcVySdhPGG9Lj783Zd0HeJaC4iaTgSlb0CMUkoEoLNMotRKg0YpiZFlP4Bdh3TH8cSRH8mVb8kOuqYKWuxKxuZDSKiZ5mjOlipz6RWsmhQa0GfdS+9kE9p3yOJ5pWh5XsazL9i7pWn6itaXBtTcOiFmPX2C9Py7oKD57pHPbmld3KxzUWpEproxjqbZULRJphmZUPL7w6AqukFs1ewJ+XvML+KaaL2qar3FN0/fBtj+SL5ukqauypuXTLFdNTYvhsbauFeLGt03cujfUw76HmVQqy1OgeRho8KicChVoKGoFmgpGc9DugIe/llXVLb0zrGgwjB84iA+dK2SqsmlHv2KKPrtQvr9SuuWQLXi3HOzj5TDiXr4eJhz/sJiePft1q2m7nLpcP8knKO99ENTkgVpN0bChi04GDKV1vBDS87Q4kM9f5sn7eXJ+g2tq4nZaeNOM6txY/r/IqJ0Lxf+jjB4++wdlNPnyL29Pg3N8nmq5dw96dViOCMqhc3/s/etys3QYt1fzhzsNLT3fzcTLh1t7haubrelpBI+In5hLnk11vDZ6R8Tu6Zmvidz9m/u/AQAA//8DAKF3uXL6DAAA", "base64"));
  res.end();

  return __filename;
};
