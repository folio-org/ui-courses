var path = require("path");

/**
 * GET /coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves?unused=1&expand=*&limit=500&query=cql.allRecords=1 sortby copiedItem.title
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/8c5f03a7-d80f-48e4-a86c-c7897cb66364?nreserves=2
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:56 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/courselistings/6299e969-9c44-4a6a-8c3f-501037a68bdf/reserves.. : 200 9286us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxXS2/cNhC+51cQC/RUc5ekSJH0zbHzMBo/kGzaQ5HD8CFbjVZaSFq7RuD/3tFqH5JfiE9FgRrGei3O93E0M5z5+OMNIZM6NrG+ic2EHJI/yQ98hA/z0P07YU4YFTWn3BpPpZeegk0CFT6BhEH0WsbJQQ/x1apu4qe8afPy6rTHp8LaaFNLrZeSSkiBGp9kVDHOEg2pcSHb4vM2LjYwzljgzGVUZCxFGDDqIleUOaucCDazMdnClnXlY9Pgnl9aaFfNhsK4TBjwKQXvA5VKK2qyDGiSKqMYshnFn6O4cH9F33Y0fTT28XgFK4JKWMQ17HP0UBQx7JdCbHydL9u8KkcWBMpAViXcQF6AK+IesYgtBGhh6FYX9TpCG8MJfqyJBBOcMkG5mLPkULBDoadayF8ZO2Rsx4bA1TK8ArjB3a//3m/i1rRQt0MCRpmkQm3jGsvwYDWlgu3rZZnHcIpZH0XaQe2r0IMsYwOnJ2i6rGqo7z5VHrrQbXKtlRHKOE+j95xK7gwF54Fm2qWcGSGyLLzA8jjd+4S/inqY8ovPf5x+IO/mH88vyPHJ0GT3dr99nR0fz05OZxfD5bw58m1+szZp61UcLpV4ttrV4M0li5Ex9AcUN1Q6afGgMMxjmpjAQIJXerQ3LJa7I5IKn+nUaeo9KCpDklAruKYxZFL4yMFIMwQXuevCtkGroI1hSaQeMOm4NToRIWJrSBNnhUSH3BC9rPMFor9gr8l9vKzych3ySQKSGSXwNNkMP0ImKPDM0jSKVHJIo+XZkKcZEJyGTdf6ORbybVvGu2JYxnoBZSzbByWV+ZBKjAFNrcXYmIxRg8GmxuJxF8KYRA8O+iOWl0rqVdTDkjqDvCSf+iS8XFBn/xfUv1VQGM+iz8YRaSJWRZt7chsd6dyN9b5mfFW2de5WbVWPRu8450dlW5V5tTogH+r8qqrzZpz5Hcf8bhm3aYjMBqkDtSoKdN3g0E24w56ltTMxS4PhL7DM4999IJ+xOUffBrsJZyVmiNPMg8VythgonWCvT2JUAms6CtiNj4MnX/J3KMlHqBexiOUBeV9D+f0//Zbk274zrFyR9z3hUZLXa801FsX6dJ/OySVqsVGClwX4PkbHsHB1Hq7iATmDppmSoVk3yS+yy/FeEy8Yk0OzutqU5uVu5ydc7oTI+WrhNn7Nf1OcqakxhisyJUfKkI6XvJ+Ts3dHJ+/2Fb2q8zXium2Xh7PZ7e3ttKj89Kq6maFXIa9nbeVn0edLprmZIYtGUSCFnV63i2LPE8sVnpT9ewx3KHqfOmlEqox0CcO225CqLPY9cd3XoPTb5CmXJZpF7LPYmLBUrKdGREkV1wycAAaJfQz+WG8adveA7X6E2JteV0VA1bjtfzHJspRj13MWupLs1DL3lgbPTaoDNhFuJyMFNdAiUA7LLUqDsjuhXGcJ6m78BjYzVCRGKucEx1Y8eY7jefn6CtqxfIXuNUldVYux/6jh7rAvXbfzGvx3tBntCiHkXRah+IIO4ZfmaxPDwzm0JxkJ+MylJlPWUdsNRym7q0N39TCWpTZw5XBWTJ7jeHH+voZ4GIb+fJFQLXAQj47fAzF/XpGdPwTwtyiG5k8r+Z/U8qkSj7T8T6r5PXSHvH88v6oWiku4is1pudXmKtVPrG9zKcVQB3k8jtiKOoNeQP8ykElwt8Dlt9Dk/SK2oFiTqxV2vduq/j6urafC9FKIuD5U4lCqqU3NgxBtYW/v0Ol6e2vQicZLZaCauZSqoBiFBO+mGQ4Vh9NdcK8Href5APcbKzGVqX648Qb2+o3fbNOzac194PGaWNW9RuFv7v8BAAD//wMAWOFrR78PAAA=", "base64"));
  res.end();

  return __filename;
};
