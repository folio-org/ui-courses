var path = require("path");

/**
 * GET /coursereserves/reserves?expand=*&limit=100
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
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 01 Mar 2021 17:54:21 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.217:9176/coursereserves/reserves.. : 202 13886us, GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.217:9159/coursereserves/reserves.. : 200 9932us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXy27bRhTd5ysG2nRRjzRPzox3spM0buLESJ0CRZHFPO7YbCVSoKg4RpB/76UoW1QeTpSgLYraC0Hi8NznmXuP3z0gZNTAEpo3sByRQ/I7eYeP8GGZup8jbcFqk4CyxC1VRWI0FMxQYzlwyyI4HUcHPSTWq2YJz8plW1YXJz2eM+WgMIKmiEZUNJEGpwOFlF0uWCxiSDf4soX5BpaKbCIPnnohDbrVQJ2CRLM04HiIhdrCYr0oIZ0guIP24ePj4JtYJ1ibU1o6awqmlbRyg8NXELKoG99cP6ujb8u62njXMmani0wjT5kqzgK1ATwVJhsuYvQmsjusvAh/QGyHwQzquY9phFV+3qcwrSp4Ozy5Te7pq8nx8eThyWQ6PC6X09iWb9avtM0KhkcVdqhdDRJWDICxiOXWXZeDcjQA45QV0ibmlY/a7Pj288VquQEXImZTBEMxek1VkpI6wU3XYiUicG+VHYJnZeiqdVPrZKxlEmj0THWuMQjwQEUsZHBCYUBhiF405RzRvyBjywhndVmtKz2SXjGrRaLKZfxIWVDPs6MFiEJxXyBt8tDOcmDgJG24/3VWyOuNmfe3HFhAM/cVVO13MekjK/dM+t8xCes567tx1JTpAlryc13B8oclOfLhGjtwCSSVvilxXt+CYl21TRlWbd3sTPHdxj8uYZZwNB+QJzCDapcCtwae4+vn1wvYVFUEp7CAnOboHVXWYR5GMoqFBi1cziD86CYL8nrL5VWYlT2LP4pofba8hKbn4yw3kMh0TJ5W9WKntIuZj33sz+GK/FY3fw5Pk2/hRT7bdTQSjBefCij62ez5ah42Xs9e4jooxidKW0uOjHJkDRyUdHG9fvEYv5DB0ug476t4Ux+TQ9LJKlqIxKnCWlEXlaa42LiRztlwu6kG4CfN5hZ3D9j2bxDAZb1u1s3dyMEEwzKnwTq8WMhn6p3DiwUqYHtECDr3aW+4NNxLvhp0FGyQHBlIZRAYseyYKQpHU3KSsxhEYjD6nI2PJ9LNPNrD7JCUx2vRQG41yE4Kc2g9dtnv+IsNYOPTQ/zYNBz9MUkZP2f8ULNDrcfC2R8ZO2SD4bpapD1gfRgPulA+UESc4+BFIYSDVmIjtAioaLLBMecTShObktR3KaLIZIjBS+oLz6gSGlsqedFNSB6CgCIL/glFxBkqMBYyFZkVVHnEBuCask5OieSyA7mHInId2+6V0P3++qeUUI6pUFgDWjiHtbGZUYvFphZXiBfCWmn4NyqhvUwPmXTqy4o865twN6FO7wn17wuiKVkCsqItI7mCQLpwcZnvKYKmVVtXZb06ID815UXdlMvP6KDBxiyAuaRMok6DwNCtpxaHNc3GmGAhF8nyO6ycw9u+kH+D4jr4ZJK/+oo88c28k3kH5HHjqz//01l+k648PTknZ6grdhq8VZTHfh7WCvuAnPrlcky+LC2jYEwNX2vqDTXPbj1/WXmeP9Wc6bG1lmsyJlNtSWeXPD4np4+mDx8NJEtTrhGXbbs4nEyurq7GszqOL+o3E4wqlc2kreMEYrlghtsJWjFMMCXc+LKdz7Z2oFrhTdnmMfQw62PyYQakzqRrGI7dJamr2XYmfih6dcjSMMA5i4MJqeIitQIU1dwwH4RnXrqvFr1CfFb0gsy54Dj1gvMdJVXEmRFRU0ZuC5NwiHD3daIXo7NguKTcZElVxG/eZUuFtEqj7OI4ir9B9O5hdng/X6JWxDRJU9fz71O83BxqcYj/yGAZP1S8G9jR9SucyDdrWIWYUsEwTIX9krgwXZSRSm88SlejYhqo9Ds0812ON7D9HW9Vd399Rm3d+tlLiHXT7xHx4P1fAAAA//8DANIvKzCzFAAA", "base64"));
  res.end();

  return __filename;
};
