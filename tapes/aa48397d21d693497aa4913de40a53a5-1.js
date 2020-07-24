var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId="f5063ee8-b18c-402b-b0c9-1b0f93d8570b") sortby name
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:16:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6254us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 22863us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAMxXS2/cNhC++1cIe60Z8yWKys21C9Ro4gRNih6KHIbk0MtaKwmU5GYR+L+X+9auN8baLdD6sMaK/Gbnm8c3o29nWTaxzRA77CbZ2+yP7Ft6kp4Ft/g60YIKaSgQ4wtGpCxzYpTkhGNZal9whrmbnK8gNcxwCbqCyg7V0GWMss2hw87G0PahqZd3foQu2MwF7zFi3QdYnGRQuyzUPd7F5fcduIXYz9K9m5VbzNuSMS6JdRyI9ICkBJREUqG007TU3D0FfzB/ou0XBlYkdzRfYG9M9D30U5wlV223Oz1kelPbanChvstM00+zdoi45AltWwV0WcJPR/AZ9uCgh7GbixxFhB7ddfpYWuWUU0ILwuVnKt5K+pYVb5QWP9D0tzWWcEPrTsetYY/L/4/r+K2q413o+sRhHX9LhbEGBAEFlEieM2IEU4QqwYzhqDzfZn4P//0UvMBkAkW8SwYjxLVD+LXHWEM1urJ5dHCD7250GB+CxbYJ28ISIKnOuSOy9OnDeU6A+ZIo5EoyUFgyf9zAU2Y7bi+yutdJIdrsGrv7jI3PbeNW59btPXehs80Dxvl16NoK5rdjO0O16rGlOUKyn6Gq/oL5GN8Gez+07xoLm+rt44CjC9Omcp+mWPmfvrYhzj9iDI3b57xwY4hbA+J8fLLo7fiwzcnviPfdZHvhcfRLXQ/ef6pCu5alL2cHdybV2s21rVxYX+bKE8ucJ5JRQ7RBILxIysWthcLuGmMLfi5rL7I4ztplXePXo/n65beLq6uL65uLy/Fx6C5tHx7wSMBDndqmH0Y8JUWk1AKBnGkijSyJQcoWfaIdBQk2L/Z+G2bt0K3BiltfKFOQ5H2eClEIUnJWEHRecosMtNRjcBVM6rH5JsSu0JoKJBaoXPx0cgKTVHKrhCm5TA6ZvXKKYZbQn1Zd8nHRJa9qh25k4MatC+I0K0fqJlXgbCNjjqEp0KWULgkpICUVBXGFZ5CLnHm1I7QEPlcvL7K2N0aCnQJWM+gyTlk52W+D2I/Em5WEUcLE+A7W7uAGTwo/eUJ8JcSf5y2u6fs8FQ2iJoZpm2YdN8RQm/CG+lI4nRd0RH8Hfy4IL7I5DsKHugo17qnZwSC9bdJuQFqMXVIx28zapk5D/SnPRc/EwfZNXDm6t9iMfeWYWhy4J6VxZRo50hFj0RNV+NxzpdGZ/VmaCnEzJ/Ki1IwhEUWZtMHSMmlD4goUqLal9Ci+ow0OZt15djWNaX5BdrkvE/9o0i5tHF8fTlog9BsqniwQJ60QI+ROzLd5OVYlilkFZdqyuEk6VFBLtFSCKFlK8I5Rjeo7kTcFOAUp1IVwIqky0iRCqSe0t8IZiXmB9mjkP8O8auJ59j7c4/8q6ix/bdS3yNOiXlqrtcaceOWKRdTT6GBMEEHTUNHeoNpX/3HUOaARDpPE5opI0KnUeZ6SwJO6oUGmCnm83uEOoktRB3eHhx3+34de89eGfoN8Gvrsy7+xzOtCvWqZ3+KeWeZvh5nBuHrz4ULmm1W9S2qZ1PZ2934Ttu9gx6icRKQsD8r7JBpb1NmGxDquk77pofoVbRNXqwA7e/wbAAD//wMAmcw6f8YOAAA=", "base64"));
  res.end();

  return __filename;
};
