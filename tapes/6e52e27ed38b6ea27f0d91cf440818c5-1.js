var path = require("path");

/**
 * GET /coursereserves/courses?limit=100&query=(departmentId="1fc91124-cd2a-4fae-9ae4-40368d80982d" and courseListing.courseTypeId=("f5063ee8-b18c-402b-b0c9-1b0f93d8570b" or "9154048b-3698-42ec-a5ca-cfcebf04e094")) sortby name
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
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses.. : 202 6282us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses.. : 200 39616us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAOxYS2/cNhC++1cIe63Z8CWJzM21C8RoXqhT9FDkMCSHthqtJEhaN0bg/97RPrX22tl1ArRF7cPaK/IbcYbz+D5/OUqSia9nbYfdJHmZ/JF8oSf0rAjD14lRXGnHgbmYC6a1TZnLtGQSrTUxlwLTMDleQCqY4hx0CqWflbMuEVysFgN2vi2avqir+Z6foCt8EooYscWqL2BYSaAKSVH1eNnOv2/ADbT9lPadL44lordCSM18kMB0BGQWUDPNVWaC4dbIcB/8zv2Jvh8MLJzcuHmAvbGjb6C/wikd1Xeb1buenle+nIWiukxc3V8lzazFuZ/QNGWBISH81Qg+xR4C9DA+5nBHLUKP4Yw+5lYll5zxnEn9gauXmr8U+Y+ZUT9w+lkbI9ysCfvjlrDb+e/bZfwW2fG66HryYRl/z5XzDhSDDDjTMhXMKZExninhnMQsyvXNb+EfvoIDTBKoxUsy2EK7PBB+7rGtoBxtWT26s0NudnTYXhcem7pYJ5YCzU0qA9M20keIkoGIlmUoMy0gQyvibgP3Pdv4dpDVrUoqWp+cYfcpEeN1X4fFug9bz0PR+foa25uzomtKuHk7tjMrFzU2N8dY8grK8i+4GeObwn+aNa9rD6vs7dsZjjZc1WW4uMIy/vy5Kdqb99gWddj2eTjGrF0bUMfjlaG22+v1nfyO+KmbrDfcjt7U9RDjRVk0y7b08ejOnkm5PObSVqp8tGkWmRchMi24Y8YhMJlT55LeQ+43hbEGP3ZrB1kc39pJVeHnnff1y28vTk9fnJ2/OBkvF92J74tr3BHwoqKy6WcjPzVH5NwDg1QYpp22zCEXQ52YwEGDT/Otd8O0mXVLcCZ9zDOXMzp9SomoFLNS5AxD1NKjAKPNGFwWjmrsZhXikBvDFTIPXA+vpkMgtUrpM+Ws1HQgt5VObTEl9MWiSt4PVfKkcuhGBs7DMiH2s7IjbygDp6s2FgS6HANd6dyhDJjlKmchjwJSlYqYbRyaAx/Ll4OsbY2Rwl8BllPoEsmFnWyXQduPmrewTHAm1HgPVuHODkkdfnLP8UUj/nDT4NL9mFLSIBrmhPE066RjjnvCOx6tCibN+cj9DfyxIBxkcxyEd1VZVLjVze4M0rc1cQPWYNtRF/P1tKkrGur3/Rxqpp35vm4XB90iNuOzSqQSBxmZdcHSyNGBOY+RZXlMo8wMBrc9SykRV3Miza0RApnKLfUGzy31BvIVOHDjrY6oHugNAabdcXJ61dL8guRku01806Sd29hNH/YiEOZHru4RiL0oxAi5aebre9mVJZnwGVhiWdJRH8q5Z0ZnimXaaohBcIPZA5F3OYQMKNS5Coq6MnJqQlQTJnoVnMY0R78z8h/gpqzb4+RN8Qn/VVEX6VOjvkbuF3XrvTEGUxazkA9Rp9EhhGKK01Ax0WG23f3HUZeATgWkFptmTIOhVJcpXYKk7oYORZbr3fkOl9AGijqES7xb4f986I18auhXyPuhTz5+DzJv8uxJZH6Ne4TMv51NHbYL5SOVTldUvaNuSd327UbfFGsNtsuVvRyx9k567+XGGnW0cmKd0qt05hqBSt4w1INoQ6JDzppA3EbrHFW0sGZCO7SpfFibnoRrqDxJs2d5+h+VpxhTiZGohxqooU45szYj3pTTn5IGjw0Hy9P9TT4mT0d86iF9OtryLFCfBeqzQP0fC1SA1EKIpFCQGK8myssMPWAkNUhnOZ2nMPp/1tcE6kHWxvnyqigpTMnQnB8Tp0PrFmxbwG6L02GHYkLvIU6tSDXXxDNVZimNJHpKKMoqHz26SLOf2w3j3FOcHmRzHIDzKlnozq/o03ouYp8gTr8PZbT6aZRxhduPMma5sat33KOMF3W5ovjfQBlz/hTKuEJtKOMirpO+7qH8FX3dLopTHt3+DQAA//8DAHvPNp/5GAAA", "base64"));
  res.end();

  return __filename;
};
